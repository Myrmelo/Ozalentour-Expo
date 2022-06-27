import { createContext, useState } from "react";

export const DataContext = createContext();

export default function ContextProvider(props) {
  const [user, setUser] = useState({});
  const [login, setLogin] = useState(0);
  const [token, setToken] = useState(false);
  const [menu, setMenu] = useState(true);
  const [menuPage, setMenuPage] = useState("home");
  const [userData, setUserData] = useState();
  const [amount, setAmount] = useState("");
  const [OZP, setOZP] = useState("");
  const [openTransfer, setOpenTransfer] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [openAskCash, setOpenAskCash] = useState(false);
  const [openCollect, setOpenCollect] = useState(false);
  const [openQrCode, setOpenQrCode] = useState(false);
  const [openConvert, setOpenConvert] = useState(false);
  const [openRecharge, setOpenRecharge] = useState(false);
  const [screenName, setScreenName] = useState("Home");

  return (
    <DataContext.Provider
      value={{
        user,
        setUser,
        login,
        setLogin,
        token,
        setToken,
        menu,
        setMenu,
        menuPage,
        setMenuPage,
        userData,
        setUserData,
        amount,
        setAmount,
        OZP,
        setOZP,
        openTransfer,
        setOpenTransfer,
        openAskCash,
        setOpenAskCash,
        openCollect,
        setOpenCollect,
        openQrCode,
        setOpenQrCode,
        openConvert,
        setOpenConvert,
        openRecharge,
        setOpenRecharge,
        screenName,
        setScreenName,
        openMenu,
        setOpenMenu,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}
