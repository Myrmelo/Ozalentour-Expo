import Index from "./Index";
import { useContext } from "react";
import { DataContext } from "../Context";

export default function Menu() {
  const { menu, setMenu, menuPage, setMenuPage, login } =
    useContext(DataContext);

  if (menu) {
    switch (menuPage) {
      case "home":
        return <Index />;
    }
  } else {
    return null;
  }
}
