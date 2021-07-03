import { useState } from "react";
import { IAlertPropsLAyout } from "../../../pages/_app";

export const useAlertProvider = () => {
  const [alert, setAlert] = useState<IAlertPropsLAyout>({
    status: false,
    message: "",
    severity: undefined,
  });

  return {
    alert,
    setAlert,
  };
};
