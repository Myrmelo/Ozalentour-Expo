import { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  TextInput,
} from "react-native";
import { DataContext } from "../Context";
import { RFPercentage } from "react-native-responsive-fontsize";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Convert() {
  const { setOpenConvert } = useContext(DataContext);

  const [OZPAmount, setOZPAmount] = useState("");
  const [publicKey, setPublicKey] = useState("");
  const [selectCurrency, setSelectCurrency] = useState("OZG");
  const [OZP, setOZP] = useState("OZG");

  useEffect(async () => {
    let getOZP = await AsyncStorage.getItem("OZP");
    setOZP(getOZP);
  }, []);

  const onSubmit = () => {
    console.log(OZPAmount, OZGAmount, publicKey);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.convertHeader}>
          <View>
            <Pressable
              style={styles.arrowHeader}
              onPress={() => setOpenConvert(false)}
            />
          </View>
          <Text style={styles.titleHeader}>Convertir</Text>
        </View>
        <View style={styles.convertAmountContainer}>
          <Text style={styles.convertText}> Solde disponible</Text>

          <Text style={styles.convertAmount}> {OZP} OZP</Text>
        </View>
        <Text style={styles.convertTitle}> Vous souhaitez convertir ...</Text>
        <TextInput
          style={styles.OZPAmountInput}
          keyboardType="numeric"
          onChangeText={(e) => {
            setOZPAmount(e);
          }}
          value={OZPAmount}
        />
        <Image
          style={styles.OZPIcon}
          source={require("../../assets/OZP.png")}
          resizeMode="contain"
        />
        <View style={styles.convertCurrencies}>
          <Pressable
            onPress={() => {
              setSelectCurrency("OZG");
            }}
            style={styles.currencyContainer}
          >
            <Text
              style={
                selectCurrency == "OZG"
                  ? styles.currencyTextActive
                  : styles.currencyText
              }
            >
              en
            </Text>
            <Image
              style={styles.OZGCurrency}
              source={require("../../assets/OZG.png")}
            />
            <Text
              style={
                selectCurrency == "OZG"
                  ? styles.currencyTextActive
                  : styles.currencyText
              }
            >
              OZAGOLD (OZG)
            </Text>
          </Pressable>
          <Pressable
            style={styles.currencyContainer}
            onPress={() => {
              setSelectCurrency("EUR");
            }}
          >
            <Text
              style={
                selectCurrency == "EUR"
                  ? styles.currencyTextActive
                  : styles.currencyText
              }
            >
              en
            </Text>
            <Image
              style={styles.OZGCurrency}
              source={require("../../assets/euro.png")}
            />
            <Text
              style={
                selectCurrency == "EUR"
                  ? styles.currencyTextActive
                  : styles.currencyText
              }
            >
              EURO (EUR)
            </Text>
          </Pressable>
        </View>

        <Text style={styles.withdrawText}> Soit un retrait de </Text>

        <Text style={styles.OZGInput}>
          (- 2,5 % de frais){" "}
          <Text style={styles.OZGConvert}>{OZPAmount / 0.012}</Text>
        </Text>
        <Image
          style={styles.OZGIcon}
          source={require("../../assets/OZG.png")}
        />

        <Text style={styles.walletText}>
          Vers le portefeuille (réseau BEP20)
        </Text>

        <TextInput
          style={styles.publicKeyInput}
          onChangeText={(e) => {
            setPublicKey(e);
          }}
          value={publicKey}
          placeholder={"Ox45chd897jdkjkjeiuiuy7GJHJjjHJH88UJJgghgh65jhjjhf"}
        />

        <Pressable style={styles.submit} onPress={onSubmit}>
          <Text style={styles.submitText}>Retirer maintenant !</Text>
        </Pressable>

        <Text style={styles.openWalletText}>
          Comment ouvrir un portefeuuille OZAGOLD (OZG) ?
        </Text>
        <Text style={styles.feesText}>Frais facturés (2.5%)</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#FFFFFF",
    zIndex: 3000,
  },

  convertHeader: {
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
    marginRight: "41%",
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

  convertAmountContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
    height: 100,
    width: "90%",
    marginTop: 30,
    marginBottom: 20,
    padding: 10,
  },

  convertText: {
    fontSize: RFPercentage(1.5),
    fontFamily: "Jost",
    color: "#089baa",
    alignSelf: "flex-start",
  },

  convertAmount: {
    fontSize: RFPercentage(5),
    fontFamily: "Jost",
    fontWeight: "600",
    color: "#089baa",
  },

  convertTitle: {
    fontSize: RFPercentage(2),
    fontFamily: "Jost",
    fontWeight: "700",
    color: "#1F1F1F",
    marginBottom: 20,
    alignSelf: "flex-start",
    marginLeft: 15,
  },

  OZPAmountInput: {
    fontSize: RFPercentage(1.5),
    fontFamily: "Jost",
    fontWeight: "700",
    width: "90%",
    height: 40,
    color: "#1F1F1F",

    borderWidth: 1,
    borderColor: "#a6a6a6",
    borderRadius: 10,
    padding: 10,
    paddingRight: 55,
  },

  OZPIcon: {
    position: "absolute",
    width: 30,
    height: 30,
    top: 276,
    right: 35,
  },

  OZGIcon: {
    position: "absolute",
    width: 30,
    height: 30,
    top: 426,
    right: 35,
  },

  currencyContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  OZGCurrency: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },

  convertCurrencies: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    marginTop: 20,
    marginBottom: 20,
  },

  currencyText: {
    fontSize: RFPercentage(2),
    fontFamily: "Jost",
    fontWeight: "700",
    color: "#a6a6a6",
    marginLeft: 10,
  },

  currencyTextActive: {
    fontSize: RFPercentage(2),
    fontFamily: "Jost",
    fontWeight: "700",
    color: "#1F1F1F",
    marginLeft: 10,
  },

  withdrawText: {
    fontSize: RFPercentage(2),
    fontFamily: "Jost",
    fontWeight: "700",
    color: "#1F1F1F",
    marginBottom: 20,
    alignSelf: "flex-start",
    marginLeft: 15,
  },
  OZGConvert: {
    fontSize: RFPercentage(1.5),
    fontFamily: "Jost",
    fontWeight: "700",
  },

  OZGInput: {
    fontSize: RFPercentage(1.5),
    fontFamily: "Jost",
    fontWeight: "400",
    justifyContent: "center",
    width: "90%",
    height: 40,
    color: "#1F1F1F",

    borderWidth: 1,
    borderColor: "#a6a6a6",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },

  walletText: {
    fontSize: RFPercentage(2),
    fontFamily: "Jost",
    fontWeight: "700",
    color: "#1F1F1F",
    marginBottom: 20,
    marginLeft: 15,
    alignSelf: "flex-start",
  },

  publicKeyInput: {
    fontSize: RFPercentage(1.5),
    fontFamily: "Jost",
    fontWeight: "400",
    justifyContent: "center",
    width: "90%",
    height: 40,
    color: "#1F1F1F",

    borderWidth: 1,
    borderColor: "#a6a6a6",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },

  submit: {
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    height: 50,
    backgroundColor: "#089baa",
    borderRadius: 20,
    marginBottom: 20,
  },

  submitText: {
    fontSize: RFPercentage(2),
    fontFamily: "Jost",
    fontWeight: "400",
    color: "#FFFFFF",
  },

  openWalletText: {
    fontSize: RFPercentage(1.5),
    fontFamily: "Jost",
    fontWeight: "400",
    color: "#a6a6a6",
  },

  feesText: {
    fontSize: RFPercentage(1.5),
    fontFamily: "Jost",
    fontWeight: "400",
    alignSelf: "flex-start",
    marginTop: 30,
    marginLeft: 15,
    color: "#a6a6a6",
  },
});
