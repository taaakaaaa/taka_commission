import {
  CircularProgress,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { v4 as uuidv4 } from "uuid";
import DrawerCard from "../src/drawer";
import { ITakaSubTag } from "../src/models";
import "../styles/globals.css";
import { useAlertProvider } from "../src/shared/alert/useAlertProvider";
import AlertTaka from "../src/shared/alert";

export const AppBar = dynamic(() => import("../src/appbar"), {
  ssr: false,
});

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#A3B5FF",
    },
    secondary: {
      main: "#DD5175",
    },
  },
});

export interface ITakaOrder {
  description: string;
  data: ITakaSubTag;
  id?: string;
}

interface ITakaOrderConsumer {
  orders: ITakaOrder[] | null;
  addOrder: (data: ITakaOrder) => void;
  closeOrder: (id: string) => void;
  editOrder: (id: string, newDescription: string) => void;
}
const OrderContext = createContext<ITakaOrderConsumer>(null);
export const useOrder = () => {
  return useContext<ITakaOrderConsumer>(OrderContext);
};

export interface IAlertPropsLAyout {
  status: boolean;
  message: string;
  severity: "success" | "info" | "warning" | "error" | undefined;
}
const AlertContext = createContext<{
  alert: IAlertPropsLAyout;
  setAlert: Dispatch<SetStateAction<IAlertPropsLAyout>>;
}>(null);
export const useAlert = () => {
  return useContext(AlertContext);
};

function MyApp({ Component, pageProps }) {
  const [open, setOpen] = useState(false);

  const order = useProviderOrder();
  const alert = useAlertProvider();

  const loading = useLoadingApp();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  if (loading)
    return (
      <div
        style={{
          height: "90vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress />
      </div>
    );

  return (
    <div>
      <ThemeProvider theme={theme}>
        <AlertContext.Provider value={alert}>
          <OrderContext.Provider value={order}>
            <AlertTaka />
            <AppBar onCardClick={() => setOpen(true)} />
            <Component {...pageProps} />
            <DrawerCard onCardClose={() => setOpen(false)} open={open} />
          </OrderContext.Provider>
        </AlertContext.Provider>
      </ThemeProvider>
    </div>
  );
}

function useLoadingApp() {
  const [loading, setLoading] = React.useState(false);

  const history = useRouter();
  const handleStart = (url: any) => url !== history.asPath && setLoading(true);
  const handleComplete = (url: any) => {
    setLoading(false);
  };

  React.useEffect(() => {
    history.events.on("routeChangeStart", handleStart);
    history.events.on("routeChangeComplete", handleComplete);
    history.events.on("routeChangeError", handleComplete);

    return () => {
      history.events.off("routeChangeStart", handleStart);
      history.events.off("routeChangeComplete", handleComplete);
      history.events.off("routeChangeError", handleComplete);
    };
  }, []);

  return loading;
}

function useProviderOrder() {
  const [orders, setOrders] = useState<ITakaOrder[] | null>([]);

  const addOrder = (newOrder: ITakaOrder) => {
    setOrders([...orders, { ...newOrder, id: uuidv4() }]);
  };

  const closeOrder = (id: string) => {
    setOrders((o) => o.filter((oItem) => oItem.id !== id));
  };

  const editOrder = (id: string, newDescription: string) => {
    setOrders((o) =>
      o.map((oItem) =>
        oItem.id !== id ? { ...oItem, description: newDescription } : oItem
      )
    );
  };

  return {
    orders,
    addOrder,
    closeOrder,
    editOrder,
  };
}

export default MyApp;
