import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TextInput,
  Pressable,
  Image,
} from "react-native";
import { useState, useContext } from "react";
import { RFPercentage } from "react-native-responsive-fontsize";
import { DataContext } from "../../components/Context";

export default function AskCash() {
  const { setOpenAskCash } = useContext(DataContext);
  const [amount, setAmount] = useState("");
  const [sender, setSender] = useState("");

  const onSubmit = () => {
    console.log(amount);
  };

  return (
    <>
      <View style={styles.askCashHeader}>
        <View>
          <Pressable
            style={styles.arrowHeader}
            onPress={() => {
              setOpenAskCash(false);
            }}
          />
        </View>

        <Text style={styles.titleHeader}>{"Demander"}</Text>
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
          style={styles.senderInput}
          onChangeText={(e) => {
            setSender(e);
          }}
          value={sender}
          placeholder={"Destinataire, Nom, Prénom, ID Portefeuille ..."}
        />

        <Text style={styles.selectSenderText}>
          ou séléctionnez un contact récent ...
        </Text>

        <View style={styles.scrollViewContainer}>
          <ScrollView style={styles.sendersContainer}>
            <View style={styles.senderInfos}>
              <Image
                source={require("../../assets/guillaume.jpg")}
                style={styles.senderPicture}
              />
              <Text style={styles.senderName}>Guillaume Hauspie</Text>
            </View>
            <View style={styles.senderInfos}>
              <Image
                source={require("../../assets/guillaume.jpg")}
                style={styles.senderPicture}
              />
              <Text style={styles.senderName}>Guillaume Hauspie</Text>
            </View>
            <View style={styles.senderInfos}>
              <Image
                source={require("../../assets/guillaume.jpg")}
                style={styles.senderPicture}
              />
              <Text style={styles.senderName}>Guillaume Hauspie</Text>
            </View>
            <View style={styles.senderInfos}>
              <Image
                source={require("../../assets/guillaume.jpg")}
                style={styles.senderPicture}
              />
              <Text style={styles.senderName}>Guillaume Hauspie</Text>
            </View>
            <View style={styles.senderInfos}>
              <Image
                source={require("../../assets/guillaume.jpg")}
                style={styles.senderPicture}
              />
              <Text style={styles.senderName}>Guillaume Hauspie</Text>
            </View>
            <View style={styles.senderInfos}>
              <Image
                source={require("../../assets/guillaume.jpg")}
                style={styles.senderPicture}
              />
              <Text style={styles.senderName}>Guillaume Hauspie</Text>
            </View>
            <View style={styles.senderInfos}>
              <Image
                source={require("../../assets/guillaume.jpg")}
                style={styles.senderPicture}
              />
              <Text style={styles.senderName}>Guillaume Hauspie</Text>
            </View>
            <View style={styles.senderInfos}>
              <Image
                source={require("../../assets/guillaume.jpg")}
                style={styles.senderPicture}
              />
              <Text style={styles.senderName}>Guillaume Hauspie</Text>
            </View>
          </ScrollView>
        </View>

        <Text style={styles.contacts}>Gérer mes contacts</Text>
        <Pressable style={styles.submit}>
          <Text style={styles.submitText} onPress={onSubmit}>
            Demander maintenant
          </Text>
        </Pressable>
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

  askCashHeader: {
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

  senderInput: {
    fontSize: RFPercentage(1.5),
    fontFamily: "Jost",
    fontWeight: "400",
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    height: 50,
    color: "#1F1F1F",
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#1F1F1F",
    borderRadius: 10,
    marginTop: 20,
    padding: 10,
  },

  selectSenderText: {
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

  sendersContainer: {
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

  senderInfos: {
    flexDirection: "row",
    paddingTop: 10,
  },

  senderPicture: {
    width: 25,
    height: 25,
    borderRadius: 30,
    marginRight: 10,
  },

  senderName: {
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
});
