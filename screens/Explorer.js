import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";
import { useState, useEffect, useContext } from "react";
import { RFPercentage } from "react-native-responsive-fontsize";
import { DataContext } from "../components/Context";

export default function Explorer() {
  const { setScreenName } = useContext(DataContext);
  const [view, setView] = useState("Hébergements");

  useEffect(() => {
    setScreenName("Explorer");
  }, []);

  return (
    <>
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View style={styles.logoContainer}>
            <Image
              source={require("../assets/burger.png")}
              style={styles.burger}
            />
            <Image
              source={require("../assets/ozaLogo.png")}
              style={styles.logo}
            />
          </View>
          <View style={styles.iconsContainer}>
            <Image
              source={require("../assets/messenger.png")}
              style={styles.headerIcon}
              resizeMode="contain"
            />

            <Image
              source={require("../assets/cart.png")}
              style={styles.headerIcon}
              resizeMode="contain"
            />

            <Image
              source={require("../assets/notif.png")}
              style={styles.headerNotif}
              resizeMode="contain"
            />
          </View>
        </View>
        <View style={styles.headerBottom}>
          <ScrollView
            style={styles.navigationContainer}
            horizontal="true"
            contentContainerStyle={{
              flexDirection: "row",
            }}
          >
            <View
              style={[
                view == "Hébergements"
                  ? styles.navigationActive
                  : styles.navigation,
              ]}
            >
              <Text
                style={styles.navText}
                onPress={() => setView("Hébergements")}
              >
                Hébergements
              </Text>
            </View>
            <View
              style={[
                view == "activities sportives"
                  ? styles.navigationActive
                  : styles.navigation,
              ]}
            >
              <Text
                style={styles.navText}
                onPress={() => setView("activities sportives")}
              >
                Activités Sportives
              </Text>
            </View>
            <View
              style={[
                view == "Bars et Restos"
                  ? styles.navigationActive
                  : styles.navigation,
              ]}
            >
              <Text
                style={styles.navText}
                onPress={() => setView("Bars et Restos")}
              >
                Bars et Restos
              </Text>
            </View>
            <View
              style={[
                view == "Commerces"
                  ? styles.navigationActive
                  : styles.navigation,
              ]}
            >
              <Text style={styles.navText} onPress={() => setView("Commerces")}>
                Commerces
              </Text>
            </View>
          </ScrollView>
        </View>
      </View>

      <ScrollView>
        <Text style={styles.rankTitle}>
          {" "}
          Classement par ordre de pertinence
        </Text>

        <View style={styles.activityContainer}>
          <Image
            source={require("../assets/house.png")}
            style={styles.carousel}
            resizeMode="cover"
          />
          <Image
            source={require("../assets/heartBlack.png")}
            style={styles.heart}
            resizeMode="contain"
          />
          <View style={styles.activityInfos}>
            <View style={styles.activityDescription}>
              <Text style={styles.activityBold}>Lille quartier Vauban</Text>
              <Text>Maison de 184 m2</Text>
              <Text> 5-12 juin</Text>
              <Text>
                <Text style={styles.activityBold}>299 €</Text>/ nuit
              </Text>
            </View>
            <View style={styles.activityNew}>
              <Text>Nouveau</Text>
              <Image
                source={require("../assets/starBlack.png")}
                style={styles.star}
                resizeMode="cover"
              />
            </View>
          </View>
        </View>

        <Pressable style={styles.button}>
          <Image
            source={require("../assets/map.png")}
            style={styles.map}
            resizeMode="contain"
          />
          <Text style={styles.buttonText}>Carte</Text>
        </Pressable>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    width: "100%",
    paddingTop: 60,
    backgroundColor: "#373945",
  },

  headerTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 1.8,
  },

  headerBottom: {
    flexDirection: "row",
    marginTop: 20,
  },

  iconsContainer: {
    flexDirection: "row",
    marginRight: 15,
  },

  logoContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 15,
  },

  burger: {
    height: 25,
    width: 25,
    marginRight: 10,
    marginLeft: 5,
  },

  logo: {
    height: 18,
    width: 113,
  },

  headerIcon: {
    height: 20,
    width: 20,
    marginRight: 10,
  },

  headerNotif: {
    height: 22,
    width: 22,
  },

  /*   search: {
      height: 80,
      width: "100%",
      padding: 15,
      position: "relative",
      backgroundColor: "#089baa",
    },
  
    input: {
      position: "relative",
      height: "100%",
      width: "100%",
      paddingTop: 15,
      paddingLeft: 45,
      borderRadius: 30,
      borderWidth: 1,
      borderColor: "#FFFFFF",
    },
  
    label: {
      position: "absolute",
      top: 20,
      left: 60,
      fontSize: RFPercentage(1.8),
      fontWeight: "600",
      fontFamily: "Jost",
      color: "#1F1F1F",
    }, */

  /*   glass: {
      position: "absolute",
      top: 25,
      left: 27,
      width: 25,
      height: 25,
    },
  
    gps: {
      position: "absolute",
      top: 25,
      right: 27,
      width: 25,
      height: 25,
    },
   */

  navigationContainer: {
    flexGrow: 1,
  },

  navigation: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-around",
    width: 150,
    backgroundColor: "#373945",
  },

  navigationActive: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomColor: "#FFFFFF",
    borderBottomWidth: 3,
    width: 150,
    backgroundColor: "#373945",
  },

  navText: {
    fontSize: RFPercentage(1.4),
    fontWeight: "500",
    fontFamily: "Jost",
    color: "#FFFFFF",
    marginBottom: 3,
  },

  activityContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  rankTitle: {
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 15,
    color: "#1F1F1F",
    fontSize: RFPercentage(2),
    fontWeight: "500",
    fontFamily: "Jost",
  },

  carousel: {
    width: "90%",
    height: 350,
    borderRadius: 10,
  },

  heart: {
    position: "absolute",
    top: 6,
    right: 25,
    width: 25,
    height: 25,
  },

  activityInfos: {
    marginTop: 10,
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  activityBold: {
    color: "#1F1F1F",
    fontSize: RFPercentage(2),
    fontWeight: "600",
    fontFamily: "Jost",
  },

  activityNew: {
    flexDirection: "row",
    alignItems: "flex-start",
  },

  star: {
    marginTop: 4,
    marginLeft: 4,
    width: 12,
    height: 12,
  },

  map: {
    width: 16,
    height: 16,
    marginRight: 5,
  },

  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: 85,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#089baa",
    marginTop: 15,
    fontFamily: "Jost",
  },

  buttonText: {
    color: "#ffffff",
  },

  content: {
    paddingBottom: "9%",
  },

  scrollView: {
    alignSelf: "center",
    padding: 20,
  },

  scrollContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginTop: 10,
    marginBottom: 10,
    padding: 5,
  },

  categoryContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 18,
    backgroundColor: "#ffffff",
    margin: 5,
    padding: 6,
    borderWidth: 1,
    borderColor: "#C7C7C7",
  },

  categoryContainerAll: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    borderRadius: 18,
    backgroundColor: "#0EA1B1",
    margin: 5,
    padding: 6,
    borderWidth: 1,
    borderColor: "#0EA1B1",
  },

  scrollViewText: {
    fontSize: RFPercentage(1.5),
    fontWeight: "500",
    fontFamily: "Jost",
    color: "#5c5b5b",
  },

  scrollViewTextAll: {
    fontSize: RFPercentage(1.5),
    fontWeight: "500",
    fontFamily: "Jost",
    color: "#ffffff",
  },

  dividerText: {
    marginLeft: "5%",
    color: "#000000",
  },

  companyContainer: {
    height: "auto",
    borderColor: "#C7C7C7",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: "5%",
    marginRight: "3%",
    marginLeft: "3%",
    position: "relative",
  },

  companyLogo: {
    borderRadius: 100,
    position: "absolute",
    left: "40%",
    top: "22%",
    zIndex: 3000,
    width: 70,
    height: 70,
  },

  company: {
    borderRadius: 100,
    borderWidth: 5,
    borderColor: "#ffffff",
    width: 70,
    height: 70,
  },

  pictureContainer: {
    height: 100,
  },

  companyInfos: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    minHeight: 80,
  },

  companyInfosLeft: {
    justifyContent: "flex-start",
    padding: "2%",
    backgroundColor: "#ffffff",
    paddingTop: "5%",
    paddingLeft: "2%",
    width: "55%",
    height: "100%",
    borderBottomLeftRadius: 8,
  },

  companyInfosRight: {
    justifyContent: "flex-start",
    alignItems: "flex-end",
    paddingTop: "4%",
    paddingRight: "2%",
    backgroundColor: "#ffffff",
    width: "45%",
    height: "100%",
    borderBottomRightRadius: 8,
  },

  companyTextH1: {
    fontSize: RFPercentage(2.2),
    fontFamily: "JostBold",
    color: "#1F1F1F",
  },

  companyTextH2: {
    fontSize: RFPercentage(1.8),
    fontWeight: "600",
    fontFamily: "Jost",
    color: "#1F1F1F",
  },

  companyText: {
    fontSize: RFPercentage(1.6),
    marginTop: "5%",
    marginBottom: "5%",
    fontFamily: "Jost",
    color: "#1F1F1F",
  },

  companyPrice: {
    fontSize: RFPercentage(1.8),
    marginTop: "5%",
    color: "#ED496A",
    fontFamily: "JostBold",
  },

  companyPer: {
    fontSize: RFPercentage(1.8),
    marginTop: "2%",
    color: "#000000",
    fontFamily: "JostBold",
  },

  companyRateContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "2%",
  },

  companyRate: {
    fontSize: RFPercentage(1.8),
    marginTop: "5%",
    color: "#FFB200",
    fontFamily: "Jost",
  },

  /*   star: {
      resizeMode: "cover",
      width: 15,
      height: 15,
      marginRight: "4%",
      marginTop: "3%",
    },
   */
  image: {
    height: "100%",
  },

  bubble: {
    position: "absolute",
    bottom: -200,
    right: 20,
    width: 60,
  },
});
