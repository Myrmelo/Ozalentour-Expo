import { useState, useContext } from "react";
import { DataContext } from "./Context";
import {
  View,
  Image,
  StyleSheet,
  Text,
  Pressable,
  TextInput,
  ScrollView,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
/* import { Slider } from "react-native-range-slider-expo"; */

export default function Recharge() {
  const { setOpenRecharge } = useContext(DataContext);
  const [amount, setAmount] = useState(0);

  return (
    <>
      <View style={styles.rechargeContainer}>
        <View style={styles.rechargeHeader}>
          <View>
            <Pressable onPress={() => setOpenRecharge(false)}>
              <Image
                source={require("../assets/arrowHeader.png")}
                style={styles.arrow}
              />
            </Pressable>
          </View>
          <Text style={styles.titleHeader}>Recharger</Text>
        </View>
        <View style={styles.rechargeMain}>
          <View style={styles.ozaphyreContainer}>
            <Text style={styles.ozaphyreTitle}>
              Entrez un montant à recharger
            </Text>
            <Text style={styles.ozaphyreTitle}>
              et profitez en communauté !
            </Text>
            <ScrollView
              style={styles.optionsContainer}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View style={styles.option1Container}>
                <Image
                  source={require("../assets/rocket.png")}
                  style={styles.optionIcon}
                />
                <View style={styles.option1}>
                  <Text style={styles.option1Title}>Dès 0, 00 €OZP </Text>
                  <Text style={styles.option1Text}>
                    Dès Accepter, encaisser
                  </Text>
                  <Text style={styles.option1Text}>
                    et recevoir des €OZP'setFirstName
                  </Text>
                </View>
              </View>
              <View style={amount > 24 ? styles.option2Active : styles.option2}>
                {amount > 24 ? (
                  <>
                    <Text style={styles.option1Title}>
                      Transférer de l'argent
                    </Text>
                    <Text style={styles.option1Text}>et Payer via QR-Code</Text>
                  </>
                ) : null}
              </View>
              <View style={styles.option3}></View>
              <View style={styles.option4}></View>
              <View style={styles.option5}></View>
            </ScrollView>
            <View style={styles.ozaphyreContainer}>
              <View style={styles.ozaphyre}>
                <TextInput
                  style={styles.input}
                  onChangeText={(e) => {
                    setAmount(e);
                  }}
                  value={amount}
                  placeholder={"0, 00"}
                  placeholderTextColor="#ffffff"
                  keyboardType="numeric"
                />
                <View style={styles.rechargeFormCurencies}>
                  <Text style={styles.currency}>{"€OZP"}</Text>
                </View>
              </View>
            </View>

            <Text style={styles.optionsDescriptionTitle}>
              Parfait pour commencer !
            </Text>
            <Text style={styles.optionsDescriptionText}>
              Accepter, Encaisser et Recevoir des €OZP en moins de 3 secondes
              seulement !{" "}
            </Text>
            <View style={styles.sliderContainer}>
              <Slider
                min={0}
                max={10000}
                step={1}
                valueOnChange={(value) => setAmount(value)}
                initialValue={0}
                valueLabelsBackgroundColor="rgb(8, 156, 170)"
                inRangeBarColor="rgb(143, 150, 179)"
                outOfRangeBarColor="rgb(8, 156, 170)"
                knobSize={24}
                knobColor={"#089caa"}
                containerStyle={{ width: "100%" }}
              />
            </View>
          </View>

          <Pressable style={styles.submitButton}>
            <Text style={styles.submitButtonText}>{"CONTINUER"}</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  rechargeContainer: {
    position: "absolute",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#373945",
    zIndex: 3000,
  },

  rechargeMain: {
    width: "100%",
    height: "80%",
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
  },

  rechargeHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "10%",
    backgroundColor: "#373945",
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

  arrow: {
    width: 40,
    height: 40,
  },

  ozaphyreContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "flex-start",
    width: "100%",
    padding: 10,
    marginBottom: 10,
  },

  ozaphyreTitle: {
    fontSize: RFPercentage(2.4),
    fontWeight: "500",
    fontFamily: "Jost",
    color: "#FFFFFF",
    width: "100%",
  },

  optionsContainer: {
    marginTop: 30,
    marginBottom: 20,
  },

  optionIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },

  option1Container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 20,
    backgroundColor: "#089caa",
    marginRight: 20,
    width: 230,
  },

  option1Title: {
    fontSize: RFPercentage(1.6),
    fontWeight: "700",
    fontFamily: "Jost",
    color: "#FFFFFF",
  },

  option1Text: {
    fontSize: RFPercentage(1.4),
    fontWeight: "500",
    fontFamily: "Jost",
    color: "#FFFFFF",
  },

  option2: {
    width: 70,
    height: 80,
    borderRadius: 20,
    backgroundColor: "#f6b900",
    marginRight: 20,
  },

  option2Active: {
    padding: 10,
    width: 200,
    height: 80,
    borderRadius: 20,
    backgroundColor: "#f6b900",
    marginRight: 20,
  },

  option3: {
    width: 70,
    height: 80,
    borderRadius: 20,
    backgroundColor: "#e30189",
    marginRight: 20,
  },

  sliderContainer: {
    width: "100%",
    marginTop: 20,
  },

  input: {
    fontSize: RFPercentage(5),
    fontFamily: "Jost",
    fontWeight: "600",
    textAlign: "left",
    width: "50%",
    height: 50,
    marginTop: 30,
    marginBottom: 30,
    marginRight: 10,
    color: "#ffffff",
  },

  ozaphyreContainer: {
    width: "100%",
    justifyContent: "flex-start",
  },

  ozaphyre: {
    alignSelf: "flex-start",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "60%",
  },

  rechargeForm: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "60%",
  },

  rechargeFormAmount: {
    fontSize: RFPercentage(2),
    fontWeight: "600",
    width: "100%",
    color: "#FFFFFF",
  },

  ozaphyreCurrency: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "80%",
  },

  currency: {
    fontSize: RFPercentage(1.5),
    fontWeight: "500",
    fontFamily: "Jost",
    color: "#ffffff",
  },

  rechargeFormCurencies: {
    justifyContent: "center",
    alignItems: "center",
  },

  optionsDescriptionTitle: {
    fontSize: RFPercentage(2),
    fontWeight: "500",
    fontFamily: "Jost",
    color: "#ffffff",
    width: "100%",
  },

  optionsDescriptionText: {
    fontSize: RFPercentage(1.5),
    fontWeight: "500",
    fontFamily: "Jost",
    color: "#9296b3",
  },

  ozaphyreHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "8%",
  },

  optionsTitle: {
    fontSize: RFPercentage(2),
    fontWeight: "600",
    marginTop: 10,
    color: "#1F1F1F",
  },

  submitButton: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    width: "40%",
    height: 40,
    backgroundColor: "#01b9c7",
    borderRadius: 30,

    marginTop: 20,
    fontFamily: "Jost",
    fontSize: RFPercentage(2),
  },

  submitButtonText: {
    color: "#ffffff",
  },
});
