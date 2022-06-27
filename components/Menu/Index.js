import { useContext } from "react";
import { DataContext } from "../Context";
import {
  View,
  Image,
  StyleSheet,
  Text,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

export default function MenuHome() {
  const { openMenu, setOpenMenu, menuPage, setMenuPage, login, setLogin } =
    useContext(DataContext);

  return (
    <View style={styles.menu}>
      <View style={styles.menuHeader}>
        <View style={styles.headerTop}>
          <Text style={styles.title}>Menu</Text>
          <TouchableOpacity
            onPress={() => {
              setOpenMenu(false);
            }}
          >
            <Image
              style={styles.arrow}
              source={require("../../assets/menuArrow.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.headerBottom}>
          <Image
            style={styles.avatar}
            source={require("../../assets/avatar.jpg")}
          />

          <View>
            <Text style={styles.userName}> Johan Decottigniges</Text>
            <Text style={styles.tag}> @jdecottignies</Text>
          </View>

          <Image
            style={styles.logoutIcon}
            source={require("../../assets/logout.png")}
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.menuNavigation}
        onPress={() => setMenuPage("transaction")}
      >
        <View style={styles.navigationLink}>
          <View style={styles.navigationLinkLeft}>
            <Image
              style={styles.menuNavigationIcon}
              source={require("../../assets/annonces.png")}
              resizeMode="contain"
            />

            <Text style={styles.navigationText}>{"Annonces"}</Text>
          </View>
          <Image
            style={styles.menuNavigationArrow}
            source={require("../../assets/rightArrow.png")}
            resizeMode="contain"
          />
        </View>
        <View style={styles.navigationLink}>
          <View style={styles.navigationLinkLeft}>
            <Image
              style={styles.menuNavigationIcon}
              source={require("../../assets/bags.png")}
              resizeMode="contain"
            />

            <Text style={styles.navigationText}>{"Commandes"}</Text>
          </View>
          <Image
            style={styles.menuNavigationArrow}
            source={require("../../assets/rightArrow.png")}
            resizeMode="contain"
          />
        </View>

        <View style={styles.navigationLink}>
          <View style={styles.navigationLinkLeft}>
            <Image
              style={styles.menuNavigationIcon}
              source={require("../../assets/notifMenu.png")}
              resizeMode="contain"
            />

            <Text style={styles.navigationText}>{"Notifications"}</Text>
          </View>
          <Image
            style={styles.menuNavigationArrow}
            source={require("../../assets/rightArrow.png")}
            resizeMode="contain"
          />
        </View>

        <View style={styles.navigationLink}>
          <View style={styles.navigationLinkLeft}>
            <Image
              style={styles.menuNavigationIcon}
              source={require("../../assets/messengerPen.png")}
              resizeMode="contain"
            />

            <Text style={styles.navigationText}>{"Messagerie"}</Text>
          </View>
          <Image
            style={styles.menuNavigationArrow}
            source={require("../../assets/rightArrow.png")}
            resizeMode="contain"
          />
        </View>

        <View style={styles.navigationLink}>
          <View style={styles.navigationLinkLeft}>
            <Image
              style={styles.menuNavigationIcon}
              source={require("../../assets/friends.png")}
              resizeMode="contain"
            />

            <Text style={styles.navigationText}>{"Inviter des Amis"}</Text>
          </View>
          <Image
            style={styles.menuNavigationArrow}
            source={require("../../assets/rightArrow.png")}
            resizeMode="contain"
          />
        </View>

        <View style={styles.navigationLink}>
          <View style={styles.navigationLinkLeft}>
            <Image
              style={styles.menuNavigationIcon}
              source={require("../../assets/assistance.png")}
              resizeMode="contain"
            />

            <Text style={styles.navigationText}>{"Centre d'Assistance"}</Text>
          </View>
          <Image
            style={styles.menuNavigationArrow}
            source={require("../../assets/rightArrow.png")}
            resizeMode="contain"
          />
        </View>

        <View style={styles.navigationLink}>
          <View style={styles.navigationLinkLeft}>
            <Image
              style={styles.menuNavigationIcon}
              source={require("../../assets/reglages.png")}
              resizeMode="contain"
            />

            <Text style={styles.navigationText}>{"Paramètres"}</Text>
          </View>
          <Image
            style={styles.menuNavigationArrow}
            source={require("../../assets/rightArrow.png")}
            resizeMode="contain"
          />
        </View>
      </TouchableOpacity>

      <View style={styles.menuFooterVerifyContainer}>
        <Image
          style={styles.menuFooterShield}
          source={require("../../assets/shield.png")}
          resizeMode="contain"
        />
        <Text style={styles.menuText}>{"Vérifier mon compte"}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  menu: {
    position: "absolute",
    backgroundColor: "#FFFFFF",
    color: "#1F1F1F",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    alignSelf: "flex-end",
    paddingTop: 20,
    zIndex: 6000,
  },

  menuText: {
    justifyContent: "center",
    alignItems: "center",
    color: "#1F1F1F",
    marginBottom: 30,
  },

  menuHeader: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#1F1F1F",
    padding: 10,
  },

  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 30,
  },

  headerBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },

  logoutIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },

  title: {
    color: "#373945",
    fontSize: RFPercentage(2.5),
    fontFamily: "Jost",
    marginTop: 10,
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },

  arrow: {
    width: 40,
    height: 40,
  },

  menuNavigation: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-around",
    width: "100%",
    flexGrow: 1,

    padding: 10,
  },

  navigationLink: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingLeft: 10,
  },

  navigationLinkLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  menuNavigationIcon: {
    width: 30,
    height: 30,
    marginRight: 20,
  },

  menuNavigationArrow: {
    width: 10,
    height: 10,
    marginRight: 20,
  },

  menuFooter: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    width: " 100%",
    height: "10%",
    padding: 10,
  },

  menuFooterVerifyContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    borderTopWidth: 1,
    borderTopColor: "#1F1F1F",
    padding: 15,
    marginBottom: "15%",
  },

  menuFooterShield: {
    width: 20,
    height: 20,
    marginBottom: 30,
  },
});
