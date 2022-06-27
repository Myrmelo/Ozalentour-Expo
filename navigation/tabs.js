import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View, Image } from "react-native";
import News from "../screens/News";
import Explorer from "../screens/Explorer";
import Home from "../screens/Home";
import Scanner from "../screens/Scanner";
import Search from "../screens/Search";
import Publish from "../screens/Publish";
import Messenger from "../screens/Messenger";
import Profile from "../screens/Profile.js";
import { RFPercentage } from "react-native-responsive-fontsize";
import { DataContext } from "../components/Context";
import { useContext } from "react";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  const { login, screenName, openRecharge } = useContext(DataContext);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarHideOnKeyboard: true,
        tabBarItemStyle: { display: !login || openRecharge ? "none" : "flex" },

        tabBarStyle: {
          backgroundColor: !login || openRecharge ? "transparent" : "#FFFFFF",
          height: "8%",
          position: "absolute",
          borderTopColor: "transparent",
          elevation: !login ? 0 : 20,
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          unmountOnBlur: true,
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? "#373945" : "#75787d",
                fontFamily: "Jost",
                fontWeight: "700",
                fontSize: RFPercentage(1.2),
                marginTop: -10,
                marginBottom: 10,
              }}
            >
              ACCUEIL
            </Text>
          ),
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image
                source={require("../assets/home-active.png")}
                style={{ width: 20, height: 20 }}
              />
            ) : (
              <Image
                source={require("../assets/home.png")}
                style={{ width: 20, height: 20 }}
              />
            ),
        }}
      />
      <Tab.Screen
        name="Explorer"
        component={Explorer}
        options={{
          unmountOnBlur: true,
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? "#373945" : "#75787d",
                fontFamily: "Jost",
                fontWeight: "700",
                fontSize: RFPercentage(1.2),
                marginTop: -10,
                marginBottom: 10,
              }}
            >
              MARCHÉS
            </Text>
          ),
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image
                source={require("../assets/explorer-active.png")}
                style={{ width: 20, height: 20 }}
              />
            ) : (
              <Image
                source={require("../assets/explorer.png")}
                style={{ width: 20, height: 20 }}
              />
            ),
        }}
      />

      {(() => {
        switch (screenName) {
          case "Home":
            return (
              <Tab.Screen
                name="Scanner"
                component={Scanner}
                options={{
                  unmountOnBlur: true,
                  tabBarLabel: ({ focused }) => (
                    <Text
                      style={{
                        color: "#ffffff",
                      }}
                    >
                      SCANNER
                    </Text>
                  ),
                  tabBarIcon: ({ focused }) => (
                    <View
                      style={{
                        width: 55,
                        height: 55,
                        backgroundColor: "#089baa",
                        borderRadius: 50,
                        marginBottom: 30,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        source={require("../assets/scanner-blanc.png")}
                        style={{ width: 28, height: 28 }}
                      />
                    </View>
                  ),
                }}
              />
            );
          case "Explorer":
            return (
              <Tab.Screen
                name="Search"
                component={Search}
                options={{
                  unmountOnBlur: true,
                  tabBarLabel: ({ focused }) => (
                    <Text
                      style={{
                        color: "#ffffff",
                      }}
                    >
                      SEARCH
                    </Text>
                  ),
                  tabBarIcon: ({ focused }) => (
                    <View
                      style={{
                        width: 55,
                        height: 55,
                        backgroundColor: "#089baa",
                        borderRadius: 50,
                        marginBottom: 30,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        source={require("../assets/glass-white.png")}
                        style={{ width: 28, height: 28 }}
                      />
                    </View>
                  ),
                }}
              />
            );
          case "News":
            return (
              <Tab.Screen
                name="Publish"
                component={Publish}
                options={{
                  unmountOnBlur: true,
                  tabBarLabel: ({ focused }) => (
                    <Text
                      style={{
                        color: "#ffffff",
                      }}
                    >
                      PUBLISH
                    </Text>
                  ),
                  tabBarIcon: ({ focused }) => (
                    <View
                      style={{
                        width: 55,
                        height: 55,
                        backgroundColor: "#089baa",
                        borderRadius: 50,
                        marginBottom: 30,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        source={require("../assets/publier-blanc.png")}
                        style={{ width: 28, height: 28 }}
                      />
                    </View>
                  ),
                }}
              />
            );
          case "Messagerie":
            return (
              <Tab.Screen
                name="Messenger"
                component={Messenger}
                options={{
                  unmountOnBlur: true,
                  tabBarLabel: ({ focused }) => (
                    <Text
                      style={{
                        color: "#ffffff",
                      }}
                    >
                      MESSENGER
                    </Text>
                  ),
                  tabBarIcon: ({ focused }) => (
                    <View
                      style={{
                        width: 55,
                        height: 55,
                        backgroundColor: "#089baa",
                        borderRadius: 50,
                        marginBottom: 30,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        source={require("../assets/messenger.png")}
                        style={{ width: 28, height: 28 }}
                      />
                    </View>
                  ),
                }}
              />
            );
          default:
            return null;
        }
      })()}

      <Tab.Screen
        name="News"
        component={News}
        options={{
          unmountOnBlur: true,
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? "#373945" : "#75787d",
                fontFamily: "Jost",
                fontWeight: "700",
                fontSize: RFPercentage(1.2),
                marginTop: -10,
                marginBottom: 10,
              }}
            >
              FIL D'ACTUS
            </Text>
          ),

          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image
                source={require("../assets/news-active.png")}
                style={{ width: 20, height: 20 }}
              />
            ) : (
              <Image
                source={require("../assets/news.png")}
                style={{ width: 20, height: 20 }}
              />
            ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          unmountOnBlur: true,
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? "#373945" : "#75787d",
                fontFamily: "Jost",
                fontWeight: "700",
                fontSize: RFPercentage(1.2),
                marginTop: -10,
                marginBottom: 10,
              }}
            >
              MESSAGERIE
            </Text>
          ),
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image
                source={require("../assets/messagerie-active.png")}
                style={{ width: 20, height: 20 }}
              />
            ) : (
              <Image
                source={require("../assets/messagerie.png")}
                style={{ width: 20, height: 20 }}
              />
            ),
        }}
      />
    </Tab.Navigator>
  );
}
