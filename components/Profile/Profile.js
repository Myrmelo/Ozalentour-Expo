import { useEffect, useContext } from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { DataContext } from "../components/Context";

export default function Profile() {
  const { setScreenName } = useContext(DataContext);

  useEffect(() => {
    setScreenName("Profile");
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TextInput
          style={styles.input}
          placeholder={"Rechercher"}
          placeholderTextColor="#089baa"
        />
        <Image
          style={styles.headerIcon}
          source={require("../assets/messengerMenu.png")}
          resizeMode="contain"
        />
      </View>
      <Image
        style={styles.background}
        source={require("../assets/profileBackground.jpg")}
      />

      <Image
        style={styles.avatar}
        source={require("../assets/avatar.jpg")}
        resizeMode="contain"
      />
      <View style={styles.userInfos}>
        <Text style={styles.userName}>Johan Decottignies</Text>
        <Text style={styles.userTag}>@jdecottignies</Text>
        <Text style={styles.userDescription}>Fondateur de Ozalentour</Text>
      </View>
      <View style={styles.userStatsContainer}>
        <View style={styles.userStats}>
          <Text style={styles.statTitle}>Posts</Text>
          <Text style={styles.statNumber}>528</Text>
        </View>
        <View style={styles.userStats}>
          <Text style={styles.statTitle}>Coups de Coeur</Text>
          <Text style={styles.statNumber}>2, 564</Text>
        </View>
        <View style={styles.userStats}>
          <Text style={styles.statTitle}>Relations</Text>
          <Text style={styles.statNumber}>3, 154</Text>
        </View>
      </View>
      <View style={styles.completeProfile}>
        <Text style={styles.completeText}>Complétez votre profil !</Text>
        <Image
          style={styles.progressBar}
          source={require("../assets/progressBar.png")}
          resizeMode="contain"
        />
      </View>
      <View style={styles.presentationContainer}>
        <View style={styles.presentationHeader}>
          <Text style={styles.presentationTitle}>Présentation</Text>
          <Image
            style={styles.dots}
            source={require("../assets/dotsProfile.png")}
            resizeMode="contain"
          />
        </View>

        <View style={styles.presentationContent}>
          <View style={styles.presentationItem}>
            <Image
              style={styles.dots}
              source={require("../assets/locationProfile.png")}
              resizeMode="contain"
            />
            <Text style={styles.presentationText}>Lille</Text>
          </View>
          <View style={styles.presentationItem}>
            <Image
              style={styles.dots}
              source={require("../assets/calendar.png")}
              resizeMode="contain"
            />
            <Text style={styles.presentationText}>Membre depuis juin 2022</Text>
          </View>
          <View style={styles.presentationItem}>
            <Image
              style={styles.dots}
              source={require("../assets/work.png")}
              resizeMode="contain"
            />
            <Text style={styles.presentationText}>
              Travaille chez Ozalentour
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.photosContainer}>
        <View style={styles.photosHeader}>
          <Text style={styles.photosTitle}>Photos et vidéos</Text>

          <Image
            style={styles.dots}
            source={require("../assets/dotsProfile.png")}
            resizeMode="contain"
          />
        </View>
        <View style={styles.picturesContainer}>
          <Image
            style={styles.picture}
            source={require("../assets/listing.jpg")}
            resizeMode="cover"
          />
          <Image
            style={styles.picture}
            source={require("../assets/update.jpg")}
            resizeMode="cover"
          />
          <Image
            style={styles.picture}
            source={require("../assets/telegramGroup.jpg")}
            resizeMode="cover"
          />
          <Image
            style={styles.picture}
            source={require("../assets/listing2.jpg")}
            resizeMode="cover"
          />
          <Image
            style={styles.picture}
            source={require("../assets/cryptoPayment.jpg")}
            resizeMode="cover"
          />
          <Image
            style={styles.picture}
            source={require("../assets/ozagold.jpg")}
            resizeMode="cover"
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    width: "100%",
  },

  headerIcon: {
    height: 30,
    width: 30,
  },

  input: {
    backgroundColor: "#ededed",
    borderRadius: 10,
    height: 35,
    width: 170,
    padding: 5,
  },

  background: {
    height: 160,
    width: "100%",
  },

  avatar: {
    position: "absolute",
    top: 180,
    left: 140,
    width: 110,
    height: 110,
    borderRadius: 100,
  },

  userInfos: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 55,
  },

  userName: {
    color: "#373945",
    fontSize: RFPercentage(2),
    fontFamily: "Jost",
    fontWeight: "600",
  },

  userTag: {
    color: "#373945",
    fontSize: RFPercentage(1.8),
    fontFamily: "Jost",
  },

  userDescription: {
    color: "#373945",
    fontSize: RFPercentage(1.8),
    fontFamily: "Jost",
  },

  userStatsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 20,
  },

  userStats: {
    justifyContent: "center",
    alignItems: "center",
  },

  statTitle: {
    color: "#373945",
    fontSize: RFPercentage(1.8),
    fontFamily: "Jost",
  },

  statNumber: {
    color: "#373945",
    fontSize: RFPercentage(2),
    fontFamily: "Jost",
    fontWeight: "700",
  },

  completeProfile: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },

  progressBar: {
    height: 20,
    width: 300,
    marginTop: 10,
  },

  completeText: {
    color: "#373945",
    fontSize: RFPercentage(1.8),
    fontFamily: "Jost",
  },

  presentationContainer: {
    margin: 15,
  },

  presentationHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 0.5,
    borderColor: "#dfdfe6",
    padding: 5,
  },

  presentationTitle: {
    color: "#373945",
    fontSize: RFPercentage(2),
    fontFamily: "Jost",
  },

  presentationDots: {
    color: "#373945",
    fontSize: RFPercentage(3),
    fontFamily: "Jost",
  },

  dots: {
    height: 20,
    width: 20,
  },

  presentationContent: {
    marginLeft: 15,
    marginTop: 15,
  },

  presentationItem: {
    flexDirection: "row",
    marginTop: 10,
  },

  presentationText: {
    color: "#373945",
    fontSize: RFPercentage(1.8),
    fontFamily: "Jost",
    marginLeft: 10,
  },

  photosContainer: {
    margin: 15,
  },

  picturesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
  },

  photosHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 0.5,
    borderColor: "#dfdfe6",
    padding: 5,
  },

  picture: {
    width: 100,
    height: 100,
    borderRadius: 20,
    margin: 10,
  },
});
