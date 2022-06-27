import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TextInput,
  Pressable,
  Image,
  TouchableOpacity,
} from "react-native";
import { useState, useContext, useEffect } from "react";
import { RFPercentage } from "react-native-responsive-fontsize";
import { DataContext } from "../Context";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Transfer() {
  const { setOpenTransfer } = useContext(DataContext);

  const [amount, setAmount] = useState("");
  const [receiver, setReceiver] = useState("");
  const [receiversList, setReceiversList] = useState([]);
  const [receiverKey, setReceiverKey] = useState("");
  const [receiverName, setReceiverName] = useState("");
  const [receiverChoice, setReceiverChoice] = useState(false);
  const [senderKey, setSenderKey] = useState(false);
  const [transactionSuccess, setTransactionSuccess] = useState(false);

  useEffect(async () => {
    let getSenderKey = await AsyncStorage.getItem("publicKey");
    setSenderKey(getSenderKey);
  }, []);

  useEffect(() => {
    receiver
      ? axios
          .post(
            `http://localhost:8000/userData/find`,
            /* `https://de8a-86-192-164-214.eu.ngrok.io/login`, */
            {
              user: receiver,
            },
            {
              withCredentials: true,
              headers: {
                "Content-Type": "application/json; charset=UTF-8",
              },
            }
          )
          .then((res) => {
            let list = res.data.user;
            setReceiversList(list);

            console.log(receiversList);
            console.log(res.data.user);
          })
      : "";
  }, [receiver]);

  console.log(receiversList);

  const onSubmit = () => {
    console.log(amount);
  };

  const selectReceiver = (index) => {
    let receiver = receiversList[index].publicKey;

    let receiverName =
      receiversList[index].firstName + " " + receiversList[index].lastName;

    setReceiverKey(receiver);
    setReceiverName(receiverName);
    console.log(
      receiversList[index].firstName + " " + receiversList[index].lastName
    );

    setReceiverChoice(true);
  };

  const sendOZP = () => {
    let userSender = senderKey;
    let userRecipient = receiverKey;

    axios
      .post(
        `http://localhost:8000/transaction/qrCodeTransaction`,
        {
          userSender: userSender,
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
      .then(async function () {
        setTransactionSuccess(true);

        let token = await AsyncStorage.getItem("token");

        const data = await axios.post(
          `http://localhost:8000/userData`,

          {
            token: token,
          },
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json; charset=UTF-8",
            },
          }
        );

        AsyncStorage.setItem("OZP", data.data.OZP.toString());
      });
  };

  return !receiverChoice ? (
    <>
      <View style={styles.transferCashHeader}>
        <Pressable
          style={styles.arrowHeader}
          onPress={() => {
            setOpenTransfer(false);
          }}
        />

        <Text style={styles.titleHeader}>{"Transférer"}</Text>
      </View>
      <View style={styles.container}>
        <TextInput
          keyboardType="numeric"
          style={styles.amountInput}
          onChangeText={(e) => {
            setAmount(e);
          }}
          value={amount}
          placeholder={"0, 00 €OZP"}
        />

        <TextInput
          style={styles.receiverInput}
          onChangeText={(e) => {
            setReceiver(e);
          }}
          value={receiver}
          placeholder={"Destinataire, Nom, Prénom, ID Portefeuille ..."}
        />

        {!receiver ? (
          <>
            <Text style={styles.selectReceiverText}>
              ou séléctionnez un bénéficiaire récent ...
            </Text>
            <View style={styles.scrollViewContainer}>
              <ScrollView style={styles.receiversContainer}>
                <View style={styles.receiverInfos}>
                  <Image
                    source={require("../../assets/guillaume.jpg")}
                    style={styles.receiverPicture}
                  />
                  <Text style={styles.receiverName}>Guillaume Hauspie</Text>
                </View>
                <View style={styles.receiverInfos}>
                  <Image
                    source={require("../../assets/guillaume.jpg")}
                    style={styles.receiverPicture}
                  />
                  <Text style={styles.receiverName}>Guillaume Hauspie</Text>
                </View>
                <View style={styles.receiverInfos}>
                  <Image
                    source={require("../../assets/guillaume.jpg")}
                    style={styles.receiverPicture}
                  />
                  <Text style={styles.receiverName}>Guillaume Hauspie</Text>
                </View>
                <View style={styles.receiverInfos}>
                  <Image
                    source={require("../../assets/guillaume.jpg")}
                    style={styles.receiverPicture}
                  />
                  <Text style={styles.receiverName}>Guillaume Hauspie</Text>
                </View>
                <View style={styles.receiverInfos}>
                  <Image
                    source={require("../../assets/guillaume.jpg")}
                    style={styles.receiverPicture}
                  />
                  <Text style={styles.receiverName}>Guillaume Hauspie</Text>
                </View>
                <View style={styles.receiverInfos}>
                  <Image
                    source={require("../../assets/guillaume.jpg")}
                    style={styles.receiverPicture}
                  />
                  <Text style={styles.receiverName}>Guillaume Hauspie</Text>
                </View>
                <View style={styles.receiverInfos}>
                  <Image
                    source={require("../../assets/guillaume.jpg")}
                    style={styles.receiverPicture}
                  />
                  <Text style={styles.receiverName}>Guillaume Hauspie</Text>
                </View>
                <View style={styles.receiverInfos}>
                  <Image
                    source={require("../../assets/guillaume.jpg")}
                    style={styles.receiverPicture}
                  />
                  <Text style={styles.receiverName}>Guillaume Hauspie</Text>
                </View>
              </ScrollView>
            </View>
            <Text style={styles.contacts}>Gérer mes contacts</Text>
          </>
        ) : (
          receiversList.map((user, index) => {
            console.log(index);
            return (
              <Text
                style={styles.receiver}
                key={index}
                onPress={() => {
                  selectReceiver(index);
                }}
              >
                {user.firstName + " " + user.lastName}
              </Text>
            );
          })
        )}
        <TouchableOpacity style={styles.touchable}>
          <Pressable style={styles.submit}>
            <Text style={styles.submitText} onPress={onSubmit}>
              Envoyer maintenant
            </Text>
          </Pressable>
        </TouchableOpacity>
      </View>
    </>
  ) : !transactionSuccess ? (
    <>
      <View style={styles.transferCashHeader}>
        <Pressable
          style={styles.arrowHeader}
          onPress={() => {
            setReceiverChoice(false);
          }}
        />

        <Text style={styles.titleHeader}>{"Transférer"}</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.confirmationTitle}>
          Vous allez transférer {amount} OZP à {receiverName}
        </Text>
        <TouchableOpacity style={styles.touchable}>
          <Pressable style={styles.submit}>
            <Text style={styles.submitText} onPress={sendOZP}>
              Confirmer
            </Text>
          </Pressable>
        </TouchableOpacity>
      </View>
    </>
  ) : (
    <>
      <View style={styles.container}>
        <Text style={styles.successTitle}>Félicitations !</Text>
        <Image
          source={require("../../assets/checked.png")}
          style={styles.successPicture}
        />

        <Text style={styles.successText}>Vous venez de transférer ...</Text>
        <Text style={styles.successTextAmount}>{amount} OZP</Text>
        <Text style={styles.successTextReceiver}>à {receiverName}</Text>

        <TouchableOpacity style={styles.touchable}>
          <Pressable
            style={styles.submit}
            onPress={() => {
              setOpenTransfer(false);
            }}
          >
            <Text style={styles.submitText}>Retour</Text>
          </Pressable>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
    height: "100%",
    paddingTop: 40,
    padding: 20,
  },

  transferCashHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "10%",
    backgroundColor: "#089baa",
    paddingTop: 30,
    padding: 10,
  },

  titleHeader: {
    fontSize: RFPercentage(2),
    fontFamily: "Jost",
    fontWeight: "500",
    color: "#FFFFFF",
    marginRight: "40%",
  },

  arrowHeader: {
    width: 20,
    height: 20,
    borderRightWidth: 2,
    borderRightColor: "#FFFFFF",
    borderTopWidth: 2,
    borderTopColor: "#FFFFFF",
    transform: [{ rotate: "-135deg" }],
  },

  amountInput: {
    fontSize: RFPercentage(5),
    fontFamily: "Jost",
    fontWeight: "600",
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    height: 50,
    color: "#1F1F1F",
    textAlign: "center",
    marginTop: 20,
  },

  receiverInput: {
    fontSize: RFPercentage(1.5),
    fontFamily: "Jost",
    fontWeight: "400",
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    height: 50,
    color: "#1F1F1F",

    borderWidth: 1,
    borderColor: "#1F1F1F",
    borderRadius: 10,
    marginTop: 20,
    padding: 10,
  },

  selectReceiverText: {
    fontSize: RFPercentage(1.5),
    fontFamily: "Jost",
    fontWeight: "700",
    color: "#04b8c8",
    marginTop: 20,
  },

  scrollViewContainer: {
    height: "40%",
    width: "80%",
  },

  receiversContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    borderWidth: 1,
    borderColor: "#1F1F1F",
    borderRadius: 10,
    marginTop: 20,
  },

  contacts: {
    fontSize: RFPercentage(1.5),
    fontFamily: "Jost",
    fontWeight: "700",
    color: "#04b8c8",
    marginTop: 20,
  },

  receiver: {
    fontSize: RFPercentage(1.5),
    fontFamily: "Jost",
    fontWeight: "700",
    color: "#04b8c8",
    marginTop: 20,
  },

  receiverName: {
    fontSize: RFPercentage(1.5),
    fontFamily: "Jost",
    fontWeight: "700",
    color: "#04b8c8",
    marginTop: 20,
  },

  receiverInfos: {
    flexDirection: "row",
    paddingTop: 10,
  },

  receiverPicture: {
    width: 25,
    height: 25,
    borderRadius: 30,
    marginRight: 10,
  },

  receiverName: {
    fontSize: RFPercentage(1.8),
    fontFamily: "Jost",
    color: "#1F1F1F",
    fontWeight: "700",
    marginBottom: 10,
  },

  submit: {
    width: "100%",
    height: 45,
    padding: 10,
    backgroundColor: "#04b8c8",
    marginTop: 20,
    alignItems: "center",
    borderRadius: 20,
  },

  submitText: {
    fontSize: RFPercentage(2),
    fontFamily: "Jost",
    fontWeight: "700",
    color: "#FFFFFF",
  },

  confirmationTitle: {
    fontSize: RFPercentage(1.8),
    fontFamily: "Jost",
    fontWeight: "700",
    color: "#373945",
    marginBottom: 20,
  },

  successTitle: {
    fontSize: RFPercentage(3),
    fontFamily: "Jost",
    fontWeight: "700",
    color: "#373945",
  },

  successText: {
    fontSize: RFPercentage(1.8),
    fontFamily: "Jost",
    color: "#373945",
    marginBottom: 5,
    fontWeight: "600",
  },

  successTextAmount: {
    fontSize: RFPercentage(2.4),
    fontFamily: "Jost",
    color: "#373945",
    fontWeight: "700",
    marginBottom: 5,
  },

  successTextReceiver: {
    fontSize: RFPercentage(1.8),
    fontFamily: "Jost",
    color: "#373945",
    fontWeight: "600",
  },

  successPicture: {
    width: 200,
    height: 200,
    margin: 20,
  },

  touchable: {
    width: "100%",
  },
});
