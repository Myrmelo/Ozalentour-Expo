import { useContext } from "react";
import { DataContext } from "../Context";
import QRCode from "react-native-qrcode-svg";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

export default function QrCode() {
  const { amount, setOpenQrCode, setOpenCollect } = useContext(DataContext);

  //let publicKey = getCookie("publicKey");

  let qrCodeValue = JSON.stringify({
    //recipientAddress: publicKey,
    amount: amount,
  });

  return (
    <View style={styles.qrCodeContainer}>
      <View style={styles.qrCode}>
        <View style={styles.qrCodeHeader}>
          <View>
            <Pressable
              style={styles.arrowHeader}
              onPress={() => {
                setOpenQrCode(false), setOpenCollect(true);
              }}
            />
          </View>

          <Text style={styles.titleHeader}>{"Encaisser"}</Text>
        </View>
        <View style={styles.qrCodeMain}>
          <Text style={styles.transactionAmount}>{amount} OZP</Text>

          <View style={styles.qrCodeInfos}>
            <QRCode value={qrCodeValue} size={200} />

            <Text style={styles.transactionMessage}>
              {`FAITES SCANNER CE QR CODE ET RECEVEZ ${amount} OZP POUR CETTE FACTURE !`}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  qrCodeContainer: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
  },

  qrCode: {
    backgroundColor: "#FFFFFF",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },

  qrCodeHeader: {
    display: "flex",
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

  qrCodeMain: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },

  transactionAmount: {
    fontSize: RFPercentage(4),
    fontWeight: "600",
    margin: 20,
    color: "#1F1F1F",
    fontFamily: "Jost",
  },

  qrCodeInfos: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: " 100%",
  },

  transactionMessage: {
    fontSize: RFPercentage(1.5),
    fontFamily: "Jost",
    margin: 20,
    color: "#555454",
    width: "80%",
  },
});
