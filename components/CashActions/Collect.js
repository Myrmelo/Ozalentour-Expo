import { useContext } from "react";
import { DataContext } from "../Context";
import { RFPercentage } from "react-native-responsive-fontsize";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
} from "react-native";

let digit = ["1", "2", "3", "4", "5", "6", "7", "8", "9", ",", "0"];

export default function Collect() {
  const { amount, setAmount, setOpenCollect, setOpenQrCode } =
    useContext(DataContext);

  return (
    <View style={styles.collectContainer}>
      <View style={styles.collect}>
        <View style={styles.collectHeader}>
          <View>
            <Pressable
              style={styles.arrowHeader}
              onPress={() => setOpenCollect(false)}
            />
          </View>
          <Text style={styles.titleHeader}>Encaisser</Text>
        </View>
        <View style={styles.collectMain}>
          <View style={styles.collectFormContainer}>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              onChangeText={(e) => {
                setAmount(e);
              }}
              value={amount}
              placeholder={"0, 00 €OZP"}
              showSoftInputOnFocus={false}
            />

            <View style={styles.calculatorContainer}>
              {digit.map((digit, index) => {
                return (
                  <Pressable
                    style={styles.digitContainer}
                    key={index}
                    onPress={() => {
                      setAmount(amount + digit);
                    }}
                  >
                    <Text style={styles.digit}>{digit}</Text>
                  </Pressable>
                );
              })}

              <Pressable
                onPress={() => {
                  setAmount(amount.slice(0, -1));
                }}
              >
                <Image
                  style={styles.erase}
                  source={require("../../assets/effacer.png")}
                  resizeMode="contain"
                />
              </Pressable>
            </View>
            <Pressable
              style={styles.submit}
              onPress={() => {
                setOpenCollect(false), setOpenQrCode(true);
              }}
            >
              <Text style={styles.submitText}>Facturer</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  collectContainer: {
    position: "absolute",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
    zIndex: 3000,
  },

  collect: {
    backgroundColor: "#FFFFFF",
    color: "#FFFFFF",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },

  collectHeader: {
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

  collectMain: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "93%",
    padding: 10,
  },

  collectFormContainer: {
    width: "100%",
    alignItems: "center",
  },

  collectForm: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },

  collectFormAmount: {
    fontSize: 2,
    fontWeight: "600",
    marginBottom: 5,
    width: "100%",
  },

  collectFormDesription: {
    fontSize: 1,
    width: "50%",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: "rgb(211, 209, 209)",
  },

  input: {
    fontSize: RFPercentage(4),
    fontFamily: "Jost",
    fontWeight: "600",
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    height: 50,
    marginTop: 30,
    margin: "auto",
    color: "#1F1F1F",
    textAlign: "center",
  },

  calculatorContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    width: "85%",
    margin: "auto",
    marginTop: 15,
  },

  digitContainer: {
    alignItems: "center",
    justifyContent: "center",
    fontSize: RFPercentage(2),
    fontFamily: "Jost",
    fontWeight: "600",

    borderWidth: 1,
    borderColor: "rgb(148, 147, 147)",
    borderRadius: 5,
    color: "rgb(104, 103, 103)",
    margin: 8,
    width: "20%",
    height: "18%",
  },

  digit: {
    fontSize: RFPercentage(2.5),
    fontFamily: "Jost",
    fontWeight: "700",
  },

  erase: {
    alignItems: "center",
    padding: 10,
    width: 40,
    height: 40,
    marginLeft: 18,
    marginRight: 18,
  },

  submit: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    width: "40%",
    height: 40,
    backgroundColor: "#01b9c7",
    borderRadius: 30,
    color: "#ffffff",
    marginTop: 20,
  },

  submitText: {
    color: "#FFFFFF",
  },
});
