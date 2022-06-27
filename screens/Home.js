import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Pressable,
  Image,
  TouchableOpacity,
} from "react-native";
import { useState, useContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RFPercentage } from "react-native-responsive-fontsize";
import { DataContext } from "../components/Context";
import Login from "../components/Login";
import Recharge from "../components/Recharge";
import Transfer from "../components/CashActions/Transfer";
import AskCash from "../components/CashActions/AskCash";
import Collect from "../components/CashActions/Collect";
import QrCode from "../components/CashActions/QrCode";
import Convert from "../components/CashActions/Convert";
import Menu from "../components/Menu/Menu";

export default function Home() {
  const {
    login,
    openTransfer,
    setOpenTransfer,
    openAskCash,
    setOpenAskCash,
    openCollect,
    setOpenCollect,
    openQrCode,
    openConvert,
    setOpenConvert,
    openRecharge,
    setOpenRecharge,
    setScreenName,
    openMenu,
    setOpenMenu,
  } = useContext(DataContext);

  const [OZP, setOZP] = useState(0);

  useEffect(() => {
    setScreenName("Home");
  }, []);

  useEffect(async () => {
    let getOZP = await AsyncStorage.getItem("OZP");
    setOZP(getOZP);
  }, []);

  if (login === 0) {
    return <Login />;
  } else if (login === 1) {
    return (
      <>
        {openTransfer ? <Transfer /> : null}
        {openAskCash ? <AskCash /> : null}
        {openCollect ? <Collect /> : null}
        {openQrCode ? <QrCode /> : null}
        {openConvert ? <Convert /> : null}
        {openRecharge ? <Recharge /> : null}
        {openMenu ? <Menu /> : null}

        <View
          style={styles.container}
          contentContainerStyle={{ display: "flex", alignItems: "center" }}
        >
          <View style={styles.header}>
            <View style={styles.userContainer}>
              <TouchableOpacity
                onPress={() => {
                  setOpenMenu(true);
                }}
              >
                <Image
                  source={require("../assets/avatar.jpg")}
                  style={styles.avatar}
                />
              </TouchableOpacity>

              <View>
                <Image
                  source={require("../assets/ozaLogo.png")}
                  style={styles.logo}
                />
              </View>
            </View>

            <View style={styles.headerRightIcons}>
              <Image
                source={require("../assets/glass-white.png")}
                style={styles.notif}
              />
              <Pressable
                style={styles.rechargeButton}
                onPress={() => {
                  setOpenRecharge(true);
                }}
              >
                <Text style={styles.rechargeButtonText}>RECHARGER</Text>
              </Pressable>
            </View>
          </View>

          <View style={styles.walletOverview}>
            <Text style={styles.ozaphyreText}>SOLDE</Text>

            <View style={styles.ozaphyreAmountContainer}>
              <Text style={styles.ozaphyreAmount}> {OZP} €OZP</Text>
              <Text style={styles.ozaphyreAmountEUR}> soit {OZP} EUR</Text>
            </View>

            <View style={styles.ozaphyreContainer}>
              <View>
                <Text style={styles.ozaphyreTitle}>
                  Placement OZAPHYRE (OZP)
                </Text>
                <Text style={styles.ozaphyreStackAmount}> 11.629,00 €OZP</Text>
              </View>
              <View style={styles.evolution}>
                <Text style={styles.ozaphyreEvolutionText}>+ 3 %</Text>
                <Text style={styles.ozaphyreEvolutionTime}>sur 24 h</Text>
              </View>
            </View>

            <View style={styles.ozagoldContainer}>
              <View>
                <Text style={styles.ozagoldTitle}>
                  {" "}
                  Placement OZAGOLD (OZG)
                </Text>
                <Text style={styles.ozagoldAmount}> 248.114,00 OZG</Text>
              </View>

              <View style={styles.evolution}>
                <Text style={styles.evolutionText}>+ 110 %</Text>
                <Text style={styles.evolutionTime}>sur 24 h</Text>
              </View>
            </View>
          </View>

          <ScrollView style={styles.transactionsContainer}>
            <View style={styles.actionsContainer}>
              <View>
                <TouchableOpacity
                  style={styles.receiveCash}
                  onPress={() => {
                    setOpenCollect(true);
                  }}
                >
                  <Image
                    source={require("../assets/receiveCash.png")}
                    style={styles.actionIcon}
                  />
                </TouchableOpacity>
                <Text style={styles.actionTitle}>Encaisser</Text>
              </View>

              <View>
                <TouchableOpacity
                  style={styles.transferCash}
                  onPress={() => {
                    setOpenTransfer(true);
                  }}
                >
                  <Image
                    source={require("../assets/transferCash.png")}
                    style={styles.actionIcon}
                  />
                </TouchableOpacity>
                <Text style={styles.actionTitle}>Envoyer</Text>
              </View>

              <View>
                <TouchableOpacity
                  style={styles.askCash}
                  onPress={() => {
                    setOpenAskCash(true);
                  }}
                >
                  <Image
                    source={require("../assets/askCash.png")}
                    style={styles.actionIcon}
                  />
                </TouchableOpacity>
                <Text style={styles.actionTitle}>Demander</Text>
              </View>
              <View>
                <TouchableOpacity
                  style={styles.convertCash}
                  onPress={() => {
                    setOpenConvert(true);
                  }}
                >
                  <Image
                    source={require("../assets/convertCash.png")}
                    style={styles.actionIcon}
                  />
                </TouchableOpacity>
                <Text style={styles.actionTitle}>Convertir</Text>
              </View>
            </View>
            <Text style={styles.transactionsTitle}>Transactions</Text>
            <View style={styles.transactions}>
              <View style={styles.transactionInfos}>
                <Image
                  source={require("../assets/rechargement.png")}
                  style={styles.transactionIcon}
                />
                <View>
                  <Text style={styles.transactionsText}>
                    Rechargement (OZP)
                  </Text>
                  <Text style={styles.transactionsDate}>Le 29 Avril 2022</Text>
                </View>
              </View>

              <Text style={styles.transactionsAmount}>+ 1.500 OZP</Text>
            </View>
            <View style={styles.transactions}>
              <View style={styles.transactionInfos}>
                <Image
                  source={require("../assets/envoi.png")}
                  style={styles.transactionIcon}
                />
                <View>
                  <Text style={styles.transactionsText}>
                    Envoi - T.BOLLAERT
                  </Text>
                  <Text style={styles.transactionsDate}>Le 25 Avril 2022</Text>
                </View>
              </View>

              <Text style={styles.transactionsAmountMinus}>- 1.500 OZP</Text>
            </View>
            <View style={styles.transactions}>
              <View style={styles.transactionInfos}>
                <Image
                  source={require("../assets/location.png")}
                  style={styles.transactionIcon}
                />
                <View>
                  <Text style={styles.transactionsText}>
                    Paiement - Restaurant FBI
                  </Text>
                  <Text style={styles.transactionsDate}>Le 23 Avril 2022</Text>
                </View>
              </View>

              <Text style={styles.transactionsAmountMinus}>- 150 OZP</Text>
            </View>
            <View style={styles.transactions}>
              <View style={styles.transactionInfos}>
                <Image
                  source={require("../assets/encaissement.png")}
                  style={styles.transactionIcon}
                />
                <View>
                  <Text style={styles.transactionsText}>
                    Encaissement - FACTURE 1954268
                  </Text>
                  <Text style={styles.transactionsDate}>Le 15 Avril 2022</Text>
                </View>
              </View>

              <Text style={styles.transactionsAmount}>+ 500 OZP</Text>
            </View>
            <View style={styles.transactions}>
              <View style={styles.transactionInfos}>
                <Image
                  source={require("../assets/reçu.png")}
                  style={styles.transactionIcon}
                />
                <View>
                  <Text style={styles.transactionsText}>
                    Réception - J. DECOTTIGNIES
                  </Text>
                  <Text style={styles.transactionsDate}>Le 10 Avril 2022</Text>
                </View>
              </View>

              <Text style={styles.transactionsAmount}>+ 1.500 OZP</Text>
            </View>
            <View style={styles.transactions}>
              <View style={styles.transactionInfos}>
                <Image
                  source={require("../assets/transfert.png")}
                  style={styles.transactionIcon}
                />
                <View>
                  <Text style={styles.transactionsText}>
                    Echange - OZP/ EUR
                  </Text>
                  <Text style={styles.transactionsDate}>Le 2 Avril 2022</Text>
                </View>
              </View>

              <Text style={styles.transactionsAmountMinus}>- 2.500 OZP</Text>
            </View>
          </ScrollView>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: "10%",
    alignItems: "center",
    backgroundColor: "#373945",
  },

  walletOverview: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#089baa",
    width: "90%",
    padding: 15,
    borderRadius: 20,
  },

  ozaphyreContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 8,
    width: "100%",
    backgroundColor: "#ffffff40",
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
  },

  ozagoldContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 8,
    width: "100%",
    backgroundColor: "#fbbb2aeb",
    padding: 10,
    marginBottom: 10,
  },

  ozaphyreTitle: {
    color: "#ffffff",
    fontSize: RFPercentage(1.6),
    fontFamily: "Jost",
  },

  ozaphyreText: {
    color: "#ffffff",
    fontSize: RFPercentage(1.6),
    fontFamily: "Jost",
    marginTop: 10,
  },

  ozaphyreStackAmount: {
    color: "#FFFFFF",
    fontSize: RFPercentage(1.8),
    fontFamily: "Jost",
    fontWeight: "700",
  },

  ozagoldTitle: {
    color: "#373945",
    fontSize: RFPercentage(1.6),
    fontFamily: "Jost",
  },

  ozagoldAmount: {
    color: "#373945",
    fontSize: RFPercentage(1.8),
    fontFamily: "Jost",
    fontWeight: "700",
  },

  evolution: {
    alignItems: "flex-end",
    width: "30%",
  },

  evolutionText: {
    color: "#373945",
    fontSize: RFPercentage(2),
    fontFamily: "Jost",
    fontWeight: "700",
  },

  ozaphyreEvolutionText: {
    color: "#FFFFFF",
    fontSize: RFPercentage(2),
    fontFamily: "Jost",
    fontWeight: "700",
  },

  evolutionTime: {
    color: "#373945",
    fontSize: RFPercentage(1.8),
    fontFamily: "Jost",
  },

  ozaphyreEvolutionTime: {
    color: "#FFFFFF",
    fontSize: RFPercentage(1.8),
    fontFamily: "Jost",
  },

  rechargeButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#089baa",
    borderRadius: 20,
    height: 30,
    width: 79,
    padding: 8,
  },

  rechargeButtonText: {
    fontSize: RFPercentage(1.2),
    fontFamily: "Jost",
    color: "#FFFFFF",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
    marginBottom: 30,
  },

  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  avatar: {
    height: 28,
    width: 28,
    borderRadius: 50,
    marginRight: 10,
  },

  logo: {
    height: 18,
    width: 113,
  },

  headerRightIcons: {
    width: "30%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  notif: {
    height: 22,
    width: 22,
    marginRight: 10,
  },

  welcomeText: {
    fontSize: RFPercentage(2),
    fontFamily: "Jost",
    color: "#ffffff",
    fontWeight: "700",
  },

  headerText: {
    fontSize: RFPercentage(1.8),
    fontFamily: "Jost",
    color: "#ffffff",
  },

  userPicture: {
    width: 40,
    height: 40,
    marginRight: 10,
  },

  ozaphyreAmountContainer: {
    display: "flex",
    width: "100%",
    borderBottomColor: "#ffffff",
    alignItems: "center",
  },

  ozaphyreAmount: {
    flexDirection: "row",
    color: "#ffffff",
    fontSize: RFPercentage(4.5),
    fontFamily: "Jost",
    fontWeight: "700",
  },

  ozaphyreAmountEUR: {
    flexDirection: "row",
    color: "#ffffff",
    fontSize: RFPercentage(1.8),
    fontFamily: "Jost",
    marginBottom: 10,
  },

  scrollContainer: {
    width: "100%",
  },

  transactionsContainer: {
    padding: "5%",
    width: "100%",
    marginTop: 30,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
  },

  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 30,
    marginTop: 10,
  },

  actionIcon: {
    width: 40,
    height: 40,
  },

  actionTitle: {
    fontSize: RFPercentage(1.6),
    fontFamily: "Jost",
    color: "#373945",
    marginTop: 5,
    textAlign: "center",
  },

  receiveCash: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#e25a84",
    width: 60,
    height: 60,
  },

  transferCash: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#f7be07",
    width: 60,
    height: 60,
  },

  askCash: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#089baa",
    width: 60,
    height: 60,
  },

  convertCash: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#373945",
    width: 60,
    height: 60,
  },

  transactionsTitle: {
    alignSelf: "flex-start",
    fontWeight: "700",
    color: "#373945",
    fontSize: RFPercentage(2.1),
    fontFamily: "Jost",
    color: "#373945",
  },

  transactions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "5%",
    width: "100%",
    marginTop: "5%",
    fontSize: RFPercentage(2.5),
    fontFamily: "Jost",
    borderWidth: 1,
    borderColor: "#b5b5b5",
    borderRadius: 8,
    color: "#1F1F1F",
  },

  transactionInfos: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "60%",
  },

  transactionIcon: {
    width: 28,
    height: 28,
    marginRight: 8,
  },

  transactionsText: {
    fontSize: RFPercentage(1.9),
    marginLeft: 2,
    fontWeight: "bold",
    fontFamily: "Jost",
    color: "#373945",
  },

  transactionsDate: {
    fontSize: RFPercentage(1.9),
    marginLeft: 2,
    fontWeight: "bold",
    fontFamily: "Jost",
    color: "#8e9991",
  },

  transactionsAmount: {
    fontSize: RFPercentage(1.9),
    marginLeft: 2,
    color: "#0EA1B1",
    fontFamily: "JostBold",
  },

  transactionsAmountMinus: {
    fontSize: RFPercentage(1.9),
    marginLeft: 2,
    color: "#8e9991",
    fontFamily: "JostBold",
  },
});
