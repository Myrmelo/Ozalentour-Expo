import React, { useState, useEffect, useContext } from "react";
import { Text, View, StyleSheet, Pressable, Image } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Camera } from "expo-camera";
import { DataContext } from "../components/Context";
import { RFPercentage } from "react-native-responsive-fontsize";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Scanner() {
  const { user, setUser } = useContext(DataContext);

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [beginScan, setBeginScan] = useState(false);
  const [qrCodeData, setQrCodeData] = useState(null);
  const [transactionStatus, setTransactionStatus] = useState(0);
  const [publicKey, setPublicKey] = useState("");

  // When the component is mounted, we request permission to the user to get access to the camera
  useEffect(async () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();

    let getPublicKey = await AsyncStorage.getItem("publicKey");
    setPublicKey(getPublicKey);
  }, []);

  // We handle permission request or error and display a text if needed
  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  // When the user scans the QR code, we set the data into the qrCodeData state
  const handleBarCodeScanned = ({ type, data }) => {
    // setScanned(true);

    let infos = JSON.parse(data);
    setQrCodeData(infos);
    // console.log(qrCodeData);
  };

  console.log(qrCodeData);

  async function sendTransaction() {
    console.log("C'est parti Michel");

    // let SenderAddress = user.publicKey;
    let senderAddress = publicKey;

    let receiverName;

    let receiver = await axios.post(
      `http://localhost:8000/userData/userRecipient`,
      {
        publicKey: qrCodeData.recipientAddress,
      },
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }
    );

    console.log(receiver.data.publicKey);

    if (qrCodeData.companyName) {
      receiverName = qrCodeData.companyName;
    } else {
      receiverName = qrCodeData.firstName + " " + qrCodeData.lastName;
    }

    let userRecipient = qrCodeData.recipientAddress;
    let amount = qrCodeData.amount;
    axios
      .post(
        `http://localhost:8000/transaction/qrCodeTransaction`,
        {
          userSender: senderAddress,
          userRecipient: userRecipient,

          amount: amount,

          currency: "OZP",

          name: receiverName,

          type: "2",

          method: "4",
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        }
      )

      .then(async (response) => {
        console.log(response.status);

        if (response.status == 200) {
          setTransactionStatus(1);
          let userEmail = user.email;

          const data = await axios.post(
            `http://localhost:8000//userData`,
            {
              email: userEmail,
            },
            {
              withCredentials: true,
              headers: {
                "Content-Type": "application/json; charset=UTF-8",
              },
            }
          );

          setUser(data.data);
        } else if (response.status == 202) {
          setTransactionStatus(2);
          console.log(response.status);
        }
      });
  }

  function handleReturn() {
    setTransactionStatus(0);
    setQrCodeData(null);
  }

  if (!qrCodeData) {
    return (
      <>
        <View style={styles.container}>
          <Camera
            style={StyleSheet.absoluteFillObject}
            onBarCodeScanned={qrCodeData === null ? handleBarCodeScanned : null}
            barCodeScannerSettings={{
              barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
            }}
          />
          <Image
            source={require("../assets/scanner.png")}
            style={styles.scanner}
          />

          {scanned && (
            <View>
              <Text>{grCodeData.ammount}</Text>
              <Pressable onPress={sendTransaction}>
                <Text>Valider</Text>
              </Pressable>
            </View>
          )}
        </View>
      </>
    );
  } else if (transactionStatus == 1) {
    return (
      <>
        <View style={styles.container}>
          <View style={styles.transactionMessageContainer}>
            <Image
              source={require("../assets/checked.png")}
              style={styles.statusIcon}
            />
            <Text style={styles.transactionMessage}>
              La transaction est enregistrée
            </Text>
            <Pressable
              style={styles.transactionReturnButton}
              onPress={handleReturn}
            >
              <Text style={styles.transactionButtonText}>retour</Text>
            </Pressable>
          </View>
        </View>
      </>
    );
  } else if (transactionStatus == 2) {
    return (
      <>
        <View style={styles.container}>
          <View style={styles.transactionMessageContainer}>
            <Image
              source={require("../assets/failed.png")}
              style={styles.statusIcon}
            />
            <Text style={styles.transactionMessage}>
              Votre solde est insuffisant
            </Text>
            <Pressable
              style={styles.transactionReturnButton}
              onPress={handleReturn}
            >
              <Text style={styles.transactionButtonText}>retour</Text>
            </Pressable>
          </View>
        </View>
      </>
    );
  } else {
    return (
      <>
        <View style={styles.container}>
          <View style={styles.transactionContainer}>
            <Text style={styles.transaction}>Transaction</Text>

            <Text style={styles.transactionTitle}>Destinataire :</Text>
            <Text style={styles.transactionText}>
              {qrCodeData.recipientAddress}
            </Text>
            <Text style={styles.transactionTitle}> Montant : </Text>
            <Text style={styles.transactionText}> {qrCodeData.amount} OZP</Text>

            <View style={styles.buttonsContainer}>
              <Pressable
                style={styles.transactionButton}
                onPress={sendTransaction}
              >
                <Text style={styles.transactionButtonText}>Payer</Text>
              </Pressable>
              <Pressable
                style={styles.transactionButtonCancel}
                onPress={() => {
                  setQrCodeData(null);
                }}
              >
                <Text style={styles.transactionButtonText}>Annuler</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  transactionContainer: {
    display: "flex",
    alignItems: "center",
    width: "80%",
    height: "40%",
    backgroundColor: "#0C97A9",
    borderRadius: 8,
    padding: "5%",
  },

  transactionMessageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    height: "40%",
    backgroundColor: "#ffffff",
    borderRadius: 8,
    padding: "5%",
  },

  statusIcon: {
    width: "40%",
    height: "40%",
    resizeMode: "contain",
  },

  transactionMessage: {
    fontSize: RFPercentage(3),
    fontFamily: "Jost",
    color: "#0C97A9",
    marginTop: "5%",
  },

  transaction: {
    fontSize: RFPercentage(2.5),
    fontFamily: "JostBold",
    color: "#ffffff",
    marginBottom: "10%",
  },

  transactionTitle: {
    fontSize: RFPercentage(2),
    fontFamily: "JostBold",
    color: "#ffffff",
    marginBottom: "5%",
  },

  transactionText: {
    fontSize: RFPercentage(1.5),
    fontFamily: "Jost",
    color: "#ffffff",
    marginBottom: "5%",
  },

  transactionButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E2A824",
    borderRadius: 8,
    width: "35%",
    padding: "1.5%",
    color: "#ffffff",
    marginLeft: "4%",
  },

  transactionButtonCancel: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E2557F",
    borderRadius: 8,
    width: "35%",
    padding: "1.5%",
    color: "#ffffff",
    marginLeft: "4%",
  },

  transactionReturnButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E2A824",
    borderRadius: 8,
    width: "35%",
    padding: "1.5%",
    marginTop: "5%",
  },

  buttonsContainer: {
    flexDirection: "row",
  },

  transactionButtonText: {
    fontSize: RFPercentage(2.5),
    fontFamily: "Jost",
    color: "#ffffff",
  },

  scanner: {
    width: 200,
    height: 200,
  },
});
