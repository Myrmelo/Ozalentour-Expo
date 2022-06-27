import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  Image,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { RFPercentage } from "react-native-responsive-fontsize";
import { useState, useContext } from "react";
import { DataContext } from "./Context";
import Register from "./Register";

let loginToken = null;

export default function Login() {
  const { setLogin } = useContext(DataContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStep, setLoginStep] = useState(0);

  const submitHandler = () => {
    console.log(email, password);

    axios
      .post(
        `https://apin92.ozalentour.com/login`,

        {
          email: email,
          password: password,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        }
      )
      .then(async function (res) {
        console.log(res.data.token);
        loginToken = res.data.token;
        await AsyncStorage.setItem("token", loginToken);

        const data = await axios.post(
          `https://apin92.ozalentour.com/userData`,

          {
            token: loginToken,
          },
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json; charset=UTF-8",
            },
          }
        );
        console.log(data.data.OZP);
        AsyncStorage.setItem("OZP", data.data.OZP.toString());
        AsyncStorage.setItem("firstName", data.data.firstName);
        AsyncStorage.setItem("lastName", data.data.lastName);
        AsyncStorage.setItem("publicKey", data.data.publicKey);

        setLogin(1);
      });
  };

  switch (loginStep) {
    case 0:
      return (
        <>
          <View style={styles.container}>
            <View style={styles.phonePictureContainer}>
              <Image
                style={styles.phonePicture}
                source={require("../assets/phoneRegister.jpg")}
                resizeMode="contain"
              />
            </View>

            <Text style={styles.loginTitle}>
              Ouvrez votre compte Ozalentour et Profitez en communauté !
            </Text>
            <Text style={styles.loginText}>
              L' app de paiement 3.0 qui facilite les transactions locales en
              cryptomonnaie ...
            </Text>

            <Pressable style={styles.mailButton}>
              <Text
                style={styles.buttonText}
                onPress={() => {
                  setLoginStep(1);
                }}
              >
                Connexion par Mail
              </Text>
            </Pressable>
            <Pressable style={styles.googleButton}>
              <Image
                source={require("../assets/google.png")}
                style={styles.googleIcon}
                resizeMode="contain"
              />
              <Text style={styles.googleButtonText}>Connexion via Google</Text>
            </Pressable>

            <Text style={styles.phoneLoginLink}>
              Continuer avec mon numéro de téléphone
            </Text>
            <Text style={styles.registerText}>
              Pas encore inscrit ?{" "}
              <Text
                onPress={() => {
                  setLoginStep(2);
                }}
                style={styles.registerLink}
              >
                {" "}
                Ouvrir un Compte{" "}
              </Text>
            </Text>
          </View>
        </>
      );

    case 1:
      return (
        <View style={styles.container}>
          <View style={styles.loginHeader}>
            <Pressable
              style={styles.returnContainer}
              onPress={() => {
                setLoginStep(0);
              }}
            >
              <Image
                source={require("../assets/registerArrow.png")}
                style={styles.arrow}
                resizeMode="contain"
              />

              <Text style={styles.return}>Retour</Text>
            </Pressable>
            <Image
              source={require("../assets/help.png")}
              style={styles.arrow}
              resizeMode="contain"
            />
          </View>
          <View style={styles.formContainer}>
            <Text style={styles.loginLabel}> Adresse email</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
            ></TextInput>
            <Text style={styles.loginLabel}> Mot de passe</Text>
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
            ></TextInput>
            <Pressable style={styles.loginButton}>
              <Text style={styles.loginButtonText} onPress={submitHandler}>
                Connexion
              </Text>
            </Pressable>
          </View>
        </View>
      );

    case 2:
      return <Register />;
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    padding: "10%",
    backgroundColor: "#ffffff",
  },

  phonePictureContainer: {
    width: "100%",
    alignItems: "center",
  },

  phonePicture: {
    width: 230,
    height: 230,
    marginTop: 20,
    marginBottom: 10,
  },

  loginTitle: {
    fontSize: RFPercentage(2.5),
    fontFamily: "Jost",
    fontWeight: "bold",
    width: "80%",
    marginBottom: 20,
    alignSelf: "center",
    textAlign: "center",
    lineHeight: 26,
  },

  loginText: {
    fontSize: RFPercentage(2.2),
    fontFamily: "Jost",
    color: "#1F1F1F",
    marginBottom: 30,
    alignSelf: "center",
    textAlign: "justify",
  },

  loginLabel: {
    fontSize: RFPercentage(2.2),
    fontFamily: "Jost",
    color: "#1F1F1F",
    marginBottom: 10,
  },

  mailButton: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 52,
    padding: 15,
    backgroundColor: "#14b9c5",
    borderRadius: 30,
    marginBottom: 15,
  },

  googleButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 15,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#14b9c5",
    borderRadius: 30,
    marginBottom: 20,
  },

  googleIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },

  buttonText: {
    fontSize: RFPercentage(1.8),
    fontFamily: "Jost",
    color: "#FFFFFF",
  },

  googleButtonText: {
    fontSize: RFPercentage(1.8),
    fontFamily: "Jost",
    color: "#14b9c5",
  },

  phoneLoginLink: {
    fontSize: RFPercentage(2),
    fontFamily: "Jost",
    color: "#14b9c5",
    alignSelf: "center",
    marginBottom: 30,
  },

  registerText: {
    fontSize: RFPercentage(2),
    fontFamily: "Jost",
    color: "#1F1F1F",
    margin: "auto",
    alignSelf: "center",
  },

  registerLink: {
    fontSize: RFPercentage(2),
    fontFamily: "Jost",
    color: "#14b9c5",
    margin: "auto",
  },

  input: {
    width: "100%",
    height: 30,
    marginTop: 5,
    marginBottom: 25,
    borderBottomWidth: 1,
    borderColor: "#1F1F1F",
  },

  ozaphyreContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    width: "95%",
  },

  ozaphyreGradient: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    width: "95%",
    padding: "5%",
  },

  ozaphyreLogo: {
    width: 20,
    height: 20,
    marginTop: 1,
    marginLeft: 4,
  },

  ozaphyre: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },

  ozaphyreTitle: {
    flexDirection: "row",
  },

  ozaphyreText: {
    color: "#ffffff",
    fontSize: RFPercentage(2.5),

    fontFamily: "Jost",
  },

  rechargeButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    borderRadius: 8,
    width: "35%",
    padding: "1.5%",
    marginLeft: "4%",
  },

  rechargeButtonText: {
    fontWeight: "600",
    color: "#089baa",
  },

  loginHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 50,
  },

  returnContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "30%",
  },

  arrow: {
    width: 20,
    height: 40,
    marginRight: 10,
  },
  loginButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#14b9c5",
    borderRadius: 20,
    width: "100%",
    height: 40,
    padding: "1.5%",
    marginTop: "5%",
  },

  loginButtonText: {
    color: "#ffffff",
    fontSize: RFPercentage(2),

    fontFamily: "Jost",
  },
});
