import React from "react";

import { Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { useAlert } from "../../../pages/_app";

export default function AlertTaka() {
  const { alert, setAlert } = useAlert();

  return (
    <Snackbar
      open={alert.status}
      style={{ zIndex: 9999999999 }}
      data-cy={`alert-${alert.status}-${alert.severity}`}
      autoHideDuration={4000}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      onClose={() =>
        setAlert((a) => ({
          ...a,
          status: false,
        }))
      }
    >
      <Alert
        onClose={() =>
          setAlert((a) => ({
            ...a,
            status: false,
          }))
        }
        severity={alert.severity}
      >
        {alert.message}
      </Alert>
    </Snackbar>
  );
}
