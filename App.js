import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import Tabs from "./navigation/tabs";
import ContextProvider from "./components/Context";

export default function App() {
  const [loaded] = useFonts({
    Jost: require("./assets/fonts/Jost.ttf"),
    JostBold: require("./assets/fonts/Jost-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <ContextProvider>
      <StatusBar style="light" />
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </ContextProvider>
  );
}
