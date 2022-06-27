import { View, ScrollView, Text, StyleSheet, Image } from "react-native";
import { useState, useEffect, useContext } from "react";
import { RFPercentage } from "react-native-responsive-fontsize";
import { DataContext } from "../components/Context";

export default function News() {
  const { setScreenName } = useContext(DataContext);
  const [view, setView] = useState("Tout");

  useEffect(() => {
    setScreenName("News");
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
          <View style={styles.navigationContainer}>
            <View
              style={[
                view == "Tout" ? styles.navigationActive : styles.navigation,
              ]}
            >
              <Text style={styles.navText} onPress={() => setView("Tout")}>
                Tout
              </Text>
            </View>
            <View
              style={[
                view == "Photos" ? styles.navigationActive : styles.navigation,
              ]}
            >
              <Text style={styles.navText} onPress={() => setView("Photos")}>
                Photos
              </Text>
            </View>
            <View
              style={[
                view == "Vidéos" ? styles.navigationActive : styles.navigation,
              ]}
            >
              <Text style={styles.navText} onPress={() => setView("Vidéos")}>
                Vidéos
              </Text>
            </View>
            <View
              style={[
                view == "Temps forts"
                  ? styles.navigationActive
                  : styles.navigation,
              ]}
            >
              <Text
                style={styles.navText}
                onPress={() => setView("Temps forts")}
              >
                Temps forts
              </Text>
            </View>
          </View>
        </View>
      </View>
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Image
            source={require("../assets/avatar1.jpeg")}
            style={styles.userImage}
          />
          <View style={styles.post}>
            <View style={styles.postContainer}>
              <View style={styles.postInfosContainer}>
                <Text style={styles.postUser}> Jordan Michael</Text>
                <Text style={styles.postInfos}> @jordanmichael</Text>
                <Text style={styles.postInfos}> il y a 2 jours</Text>
              </View>
              <View style={styles.postContent}>
                <Text style={styles.postText}> Trop fort Ozalentour !</Text>
                <Image
                  source={require("../assets/shopping.jpg")}
                  style={styles.postImage}
                />
              </View>
            </View>
            <View style={styles.social}>
              <Image
                source={require("../assets/commenter.png")}
                style={styles.commentBubble}
              />
              <Text style={styles.comment}> Commenter</Text>
              <Text style={styles.commentNumber}> 150 Recommendations</Text>
              <Image
                source={require("../assets/heart.png")}
                style={styles.like}
              />
            </View>
            <View style={styles.post}>
              <View style={styles.postContainer}>
                <View style={styles.postInfosContainer}>
                  <Text style={styles.postUser}> Jordan Michael</Text>
                  <Text style={styles.postInfos}> @jordanmichael</Text>
                  <Text style={styles.postInfos}> il y a 2 jours</Text>
                </View>
                <View style={styles.postContent}>
                  <Text style={styles.postText}>
                    {" "}
                    <Text style={styles.postTextSpan}>
                      Jordan Michael
                    </Text> et{" "}
                    <Text style={styles.postTextSpan}>Thomas Dupont</Text> sont
                    en relation !
                  </Text>
                </View>
              </View>
              <View style={styles.social}>
                <Image
                  source={require("../assets/commenter.png")}
                  style={styles.commentBubble}
                />
                <Text style={styles.comment}>Commenter</Text>
                <Text style={styles.commentNumber}> Recommander</Text>
                <Image
                  source={require("../assets/heart.png")}
                  style={styles.like}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingTop: 30,
  },

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
    width: "100%",
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

  navigationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },

  navigation: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-around",
    width: "25%",
    backgroundColor: "#373945",
  },

  navigationActive: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomColor: "#FFFFFF",
    borderBottomWidth: 3,
    width: "25%",
    backgroundColor: "#373945",
  },

  navText: {
    fontSize: RFPercentage(1.4),
    fontWeight: "500",
    fontFamily: "Jost",
    color: "#FFFFFF",
    marginBottom: 3,
  },

  content: {
    display: "flex",
    flexDirection: "row",
    marginTop: "5%",
    marginRight: "3%",
    marginLeft: "3%",
  },

  post: {
    flex: 1,
  },

  postContainer: {
    backgroundColor: "#F4F4F4",
    padding: "5%",
    borderRadius: 8,
    marginBottom: "6%",
  },

  postUser: {
    fontSize: RFPercentage(1.6),
    fontFamily: "JostBold",
    color: "#1F1F1F",
  },

  postInfosContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    marginBottom: "5%",
  },

  postInfos: {
    fontSize: RFPercentage(1.6),
    fontFamily: "Jost",
    color: "#1F1F1F",
  },

  postText: {
    marginBottom: "5%",
    fontSize: RFPercentage(2),
    fontFamily: "Jost",
    color: "#1F1F1F",
  },

  postTextSpan: {
    fontSize: RFPercentage(2),
    fontFamily: "JostBold",
    color: "#1F1F1F",
  },

  postImage: {
    width: "100%",
  },

  userImage: {
    height: 40,
    width: 40,
    marginRight: "2%",
    borderRadius: 100,
  },

  social: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    marginBottom: "5%",
  },

  comment: {
    fontSize: RFPercentage(1.8),
    fontFamily: "Jost",
    color: "#1F1F1F",
  },

  commentNumber: {
    fontSize: RFPercentage(1.8),
    color: "#F9595F",
    fontFamily: "Jost",
  },

  like: {
    height: 20,
    width: 20,
  },

  commentBubble: {
    height: 20,
    width: 20,
  },

  bubble: {
    position: "absolute",
    bottom: -200,
    right: 20,
    width: 60,
  },
});
