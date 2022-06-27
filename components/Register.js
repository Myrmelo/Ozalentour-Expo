import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Image,
} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useEffect, useState, useContext } from "react";
import { RFPercentage } from "react-native-responsive-fontsize";
import PhoneInput from "react-native-phone-input";
import { DataContext } from "./Context";
import axios from "axios";
import Login from "./Login";

export default function Register() {
  const { login, setLogin } = useContext(DataContext);
  const [boxSelected, setBoxSelected] = useState(false);
  const [userData, setUserData] = useState({
    lastName: "",
    firstName: "",
    password: "",
    verifyPassword: "",
    city: "",
    phone: "",
    email: "",
    emailCode: "",
    phoneCode: "",
  });
  const [checkBox, setCheckBox] = useState(0);
  const [formStep, setFormStep] = useState(1);
  const [emptyInputError, setEmptyInputError] = useState(false);
  const [passwordTypeError, setPasswordTypeError] = useState(false);
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [checkBoxError, setCheckBoxError] = useState(false);
  const [emailTypeError, setEmailTypeError] = useState(false);
  const [phoneTypeError, setPhoneTypeError] = useState(false);

  let passwordType = false;
  let passwordMatch = false;
  let emailType = false;
  let phoneType = false;

  const onSubmitFirstStep = () => {
    setEmptyInputError(false);
    setPasswordTypeError(false);
    setPasswordTypeError(false);

    console.log(userData, checkBox);
    let password = userData.password;

    if (userData.lastName.trim().length !== 0) {
      console.log("input value is NOT empty");
    } else {
      console.log("lastName value is empty");
      setEmptyInputError(true);
    }

    if (userData.firstName.trim().length !== 0) {
      console.log("input value is NOT empty");
    } else {
      console.log("firstName value is empty");
      setEmptyInputError(true);
    }

    /*   if (
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^:;,?µ£¨<>+=&-*]).{12,}$/.test(
          password
        )
      ) { */
    passwordType = true;
    console.log("passwordType ok");
    /*  } else {
        setPasswordTypeError(true);
        console.log("passwordType error");
      } */

    if (userData.password == userData.verifyPassword) {
      passwordMatch = true;
      console.log("passwordMatch ok");
    } else {
      setPasswordMatchError(true);
      console.log("passwordMatch error");
    }

    if (!checkBox) {
      setCheckBoxError(true);
    }

    passwordType && passwordMatch && checkBox && !emptyInputError
      ? setFormStep(2)
      : console.log(passwordType, passwordMatch);
  };

  const onSubmitSecondStep = () => {
    setEmptyInputError(false);
    setEmailTypeError(false);
    setPhoneTypeError(false);

    console.log(userData);
    let email = userData.email;
    let phone = userData.phone;
    console.log(phone);

    if (userData.city.trim().length !== 0) {
      console.log("city value is NOT empty");
    } else {
      console.log("city value is empty");
      setEmptyInputError(true);
    }

    if (
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      emailType = true;
      console.log("emailType ok");
    } else {
      setEmailTypeError(true);
      console.log("emailType error");
    }

    if (/^\+(?:[0-9]?){6,14}[0-9]$/.test(phone)) {
      phoneType = true;
      console.log("phoneType ok");
    } else {
      setPhoneTypeError(true);
      console.log("phoneType error");
    }

    axios
      .post(
        `https://apin92.ozalentour.com/mailCode`,
        {
          email: email,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        }
      )
      .then(function () {
        emailType && phoneType && !emptyInputError
          ? setFormStep(3)
          : console.log(passwordType, passwordMatch);
      });
  };

  const onSubmitThirdStep = () => {
    console.log(userData);

    let visitorData = userData.email;
    let visitorCode = userData.emailCode;
    axios
      .post(
        `https://apin92.ozalentour.com/verifyCode`,
        {
          visitorData,
          visitorCode,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        }
      )
      .then(function (response) {
        console.log(response.data);

        let phoneNumber = userData.phone;

        axios
          .post(
            `https://apin92.ozalentour.com/phoneCode`,
            {
              phone: phoneNumber,
            },
            {
              withCredentials: true,
              headers: {
                "Content-Type": "application/json; charset=UTF-8",
              },
            }
          )
          .then(function (response) {
            console.log(response.data);
            setFormStep(4);
          });
      });
    /* setFormStep(4); */
  };

  const onSubmitFourthStep = () => {
    console.log(userData);
    let visitorData = userData.phone;
    let visitorCode = userData.phoneCode;
    axios
      .post(
        `https://apin92.ozalentour.com/verifyCode`,
        {
          visitorData,
          visitorCode,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        }
      )
      .then(function () {
        console.log("final register", userData.password);
        let firstName = userData.firstName;
        let lastName = userData.lastName;
        let password = userData.password;
        let city = userData.city;
        let company = userData.company || null;
        let siret = userData.siret || null;
        let phoneNumber = userData.phone;
        let email = userData.email;

        let data = {
          firstName,
          lastName,
          password,
          city,
          company,
          siret,
          phoneNumber,
          email,
        };

        axios
          .post(
            `https://apin92.ozalentour.com/register`,
            {
              data: data,
            },
            {
              headers: {
                "Content-Type": "application/json; charset=UTF-8",
              },
            }
          )
          .then(function (response) {
            setFormStep(5);
          })
          .catch(function (error) {
            console.log(error);
          });
      });
  };

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  switch (formStep) {
    /* **********************************************************************
     ---------------------------------- FIRST STEP ----------------------------
     ********************************************************************** */
    case 1:
      return (
        <View style={styles.container}>
          <View style={styles.registerHeader}>
            <View style={styles.returnContainer}>
              <Image
                source={require("../assets/registerArrow.png")}
                style={styles.arrow}
                resizeMode="contain"
              />

              <Text
                style={styles.return}
                onPress={() => {
                  setLogin(0), setFormStep(6);
                }}
              >
                Retour
              </Text>
            </View>
            <Image
              source={require("../assets/help.png")}
              style={styles.arrow}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.title}>Inscription</Text>
          <Text style={styles.description}>
            Ouvrez votre compte Ozalentour et Profitez d'un portefeuille au sein
            d'une communauté de proximité !
          </Text>

          <View style={styles.registerForm}>
            <Text style={styles.registerFormLabel}>Nom</Text>
            <TextInput
              style={styles.input}
              placeholder={"Inscrivez votre nom"}
              name="lastName"
              onChangeText={(lastName) => {
                setUserData(() => ({ ...userData, lastName }));
              }}
              value={userData.lastName}
            />
            {emptyInputError ? (
              <Text style={styles.registerFormError}>Ce champs est requis</Text>
            ) : null}

            <Text style={styles.registerFormLabel}>Prénom</Text>
            <TextInput
              style={styles.input}
              placeholder={"Inscrivez votre prénom"}
              name="firstName"
              onChangeText={(firstName) => {
                setUserData(() => ({ ...userData, firstName }));
              }}
              value={userData.firstName}
            />
            {emptyInputError ? (
              <Text style={styles.registerFormError}>Ce champs est requis</Text>
            ) : null}

            <Text style={styles.registerFormLabel}>Mot de passe</Text>
            <TextInput
              style={styles.input}
              placeholder={"Inscrivez votre mot de passe"}
              name="password"
              onChangeText={(password) => {
                setUserData(() => ({ ...userData, password }));
              }}
              value={userData.password}
            />
            {passwordTypeError ? (
              <Text style={styles.registerFormError}>
                Votre mot de passe doit contenir au moins 12 caractères, une
                majuscule, une minuscule, un chiffre et un caractère spécial
              </Text>
            ) : null}
            <Text style={styles.registerFormLabel}>
              Confirmation du mot de passe
            </Text>
            <TextInput
              style={styles.input}
              placeholder={"Confirmez votre mot de passe"}
              name="verifyPassword"
              onChangeText={(verifyPassword) => {
                setUserData(() => ({ ...userData, verifyPassword }));
              }}
              value={userData.verifyPassword}
            />
            {passwordMatchError ? (
              <Text style={styles.registerFormError}>
                Les mots de passe doivent être identiques
              </Text>
            ) : null}

            <View style={styles.checkBoxContainer}>
              <BouncyCheckbox
                style={styles.checkBox}
                size={30}
                unfillColor={"#1F1F1F"}
                onPress={() => setCheckBox(1)}
              />

              <Text style={styles.checkBoxText}>
                J'accepte les Conditions Générales de Vente ainsi que les
                Conditions Générales d'Utilisation.
              </Text>
            </View>

            {checkBoxError ? (
              <Text style={styles.registerFormError}>
                Merci d'accepter les conditions générales
              </Text>
            ) : null}

            <Pressable style={styles.submit} onPress={onSubmitFirstStep}>
              <Text style={styles.submitText}>Etape suivante</Text>
            </Pressable>
            <Text style={styles.loginQuestion}>
              Vous avez déjà un compte ?{" "}
              <Text style={styles.loginText}>Se connecter</Text>
            </Text>
          </View>
        </View>
      );

    /* **********************************************************************
     ---------------------------------- SECOND STEP --------------------------
     ********************************************************************** */

    case 2:
      return (
        <View style={styles.container}>
          <View style={styles.registerHeader}>
            <View style={styles.returnContainer}>
              <Image
                source={require("../assets/registerArrow.png")}
                style={styles.arrow}
                resizeMode="contain"
              />

              <Text
                style={styles.return}
                onPress={() => {
                  setFormStep(1);
                }}
              >
                Retour
              </Text>
            </View>
            <Image
              source={require("../assets/help.png")}
              style={styles.arrow}
              resizeMode="contain"
            />
          </View>

          <Text style={styles.title}>Informations complémentaires</Text>
          <Text style={styles.description}>
            Entrez les informations utiles à la vérification de votre compte
            Ozalentour
          </Text>

          <View style={styles.registerForm}>
            <Text style={styles.registerFormLabel}>Ville</Text>
            <TextInput
              style={styles.input}
              placeholder={"Inscrivez votre ville"}
              name="ville"
              onChangeText={(city) => {
                setUserData(() => ({ ...userData, city }));
              }}
              value={userData.city}
            />
            {emptyInputError ? (
              <Text style={styles.registerFormError}>Ce champs est requis</Text>
            ) : null}
            <Text style={styles.registerFormLabel}>Téléphone</Text>
            <PhoneInput
              style={styles.input}
              onChangePhoneNumber={(phone) => {
                setUserData(() => ({ ...userData, phone }));
              }}
              initialCountry={"fr"}
              flagStyle={{
                width: 40,
                height: 25,
                borderWidth: 0,
              }}
            />
            {phoneTypeError ? (
              <Text style={styles.registerFormError}>
                Ce numéro de téléphone n'est pas valide
              </Text>
            ) : null}
            <Text style={styles.registerFormLabel}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder={"Inscrivez votre email"}
              name="email"
              onChangeText={(email) => {
                setUserData(() => ({ ...userData, email }));
              }}
              value={userData.email}
            />
            {emailTypeError ? (
              <Text style={styles.registerFormError}>
                Cette adresse e-mail n'est pas valide
              </Text>
            ) : null}
            <Pressable style={styles.submit} onPress={onSubmitSecondStep}>
              <Text style={styles.submitText}>Etape suivante</Text>
            </Pressable>
          </View>
        </View>
      );

    /* **********************************************************************
     ---------------------------------- THIRD STEP ---------------------------
     ********************************************************************** */

    case 3:
      return (
        <View style={styles.container}>
          <View style={styles.registerHeader}>
            <View style={styles.returnContainer}>
              <Image
                source={require("../assets/registerArrow.png")}
                style={styles.arrow}
                resizeMode="contain"
              />

              <Text
                style={styles.return}
                onPress={() => {
                  setFormStep(2);
                }}
              >
                Retour
              </Text>
            </View>
            <Image
              source={require("../assets/help.png")}
              style={styles.arrow}
              resizeMode="contain"
            />
          </View>

          <Text style={styles.title}>Vérification de votre email</Text>
          <Text style={styles.description}>
            Un code vous a été transmis automatiquement par mail. Veuillez
            entrer votre code de vérification.
          </Text>

          <View style={styles.registerForm}>
            <TextInput
              style={styles.input}
              name="emailCode"
              onChangeText={(emailCode) => {
                setUserData(() => ({ ...userData, emailCode }));
              }}
              value={userData.emailCode}
            />

            <Pressable style={styles.submit} onPress={onSubmitThirdStep}>
              <Text style={styles.submitText}>Etape suivante</Text>
            </Pressable>
          </View>
        </View>
      );

    /* **********************************************************************
     ---------------------------------- FOURTH STEP ---------------------------
     ********************************************************************** */
    case 4:
      return (
        <View style={styles.container}>
          <View style={styles.registerHeader}>
            <View style={styles.returnContainer}>
              <Image
                source={require("../assets/registerArrow.png")}
                style={styles.arrow}
                resizeMode="contain"
              />

              <Text
                style={styles.return}
                onPress={() => {
                  setFormStep(3);
                }}
              >
                Retour
              </Text>
            </View>
            <Image
              source={require("../assets/help.png")}
              style={styles.arrow}
              resizeMode="contain"
            />
          </View>

          <Text style={styles.title}>Vérification de votre téléphone</Text>
          <Text style={styles.description}>
            Un code vous a été transmis automatiquement par SMS. Veuillez entrer
            votre code de vérification.
          </Text>

          <View style={styles.registerForm}>
            <TextInput
              style={styles.input}
              name="phoneCode"
              onChangeText={(phoneCode) => {
                setUserData(() => ({ ...userData, phoneCode }));
              }}
              value={userData.phoneCode}
            />

            <Pressable style={styles.submit} onPress={onSubmitFourthStep}>
              <Text style={styles.submitText}>Etape suivante</Text>
            </Pressable>
          </View>
        </View>
      );

    /* **********************************************************************
     ---------------------------------- FINAL STEP --------------------------
     ********************************************************************** */
    case 5:
      return (
        <View style={styles.container}>
          <Text style={styles.finalTitle}>Votre compte a été créé !</Text>
          <Text style={styles.description}>Merci pour votre inscription.</Text>
          <Text style={styles.description}>
            Connectz-vous dès maintenant pour profiter en communauté
          </Text>
          <Pressable
            style={styles.submit}
            onPress={() => {
              setFormStep(6);
            }}
          >
            <Text style={styles.submitText}>Connexion</Text>
          </Pressable>
        </View>
      );

    case 6:
      return <Login />;
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    padding: "6%",
    backgroundColor: "#ffffff",
  },

  registerHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },

  returnContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "30%",
  },

  registerFormLabel: {
    fontSize: RFPercentage(1.8),
    fontFamily: "Jost",
    fontWeight: "700",
  },

  registerFormError: {
    fontSize: RFPercentage(1.8),
    fontFamily: "Jost",
    marginBottom: 10,
    width: "100%",
    textAlign: "justify",
  },

  arrow: {
    width: 20,
    height: 40,
    marginRight: 10,
  },

  title: {
    fontSize: RFPercentage(2.5),
    fontFamily: "Jost",
    fontWeight: "bold",
    marginBottom: 10,
  },

  finalTitle: {
    fontSize: RFPercentage(2.5),
    fontFamily: "Jost",
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 10,
  },

  description: {
    fontSize: RFPercentage(1.8),
    fontFamily: "Jost",
    marginBottom: 30,
    width: "100%",
    textAlign: "justify",
  },

  input: {
    width: "100%",
    height: 30,
    marginTop: 5,
    marginBottom: 25,
    borderBottomWidth: 1,
    borderColor: "#1F1F1F",
  },

  checkBoxContainer: {
    flexDirection: "row",
    marginBottom: 20,
    paddingRight: 10,
  },

  checkBox: {
    marginTop: 12,
    marginLeft: 5,
  },

  checkBoxText: {
    fontSize: RFPercentage(1.5),
    marginTop: 14,
  },

  submit: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 15,
    backgroundColor: "#14b9c5",
    borderRadius: 30,
    marginBottom: 10,
  },

  submitText: {
    color: "#FFFFFF",
  },

  loginQuestion: {
    alignSelf: "center",
    fontSize: RFPercentage(1.5),
    fontFamily: "Jost",
    marginTop: 20,
  },

  loginText: {
    fontSize: RFPercentage(1.5),
    fontFamily: "Jost",
    color: "#14b9c5",
  },
});
