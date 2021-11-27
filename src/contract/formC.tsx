import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import {
  CircularProgress,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Alert } from "@mui/material";
import { Button } from "../commissions/styles";
// import {
//   KeyboardDatePicker,
//   MuiPickersUtilsProvider,
// } from "@material-ui/pickers";
// import "date-fns";

import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

// import DateFnsUtils from "@date-io/date-fns";
import { instanceSelf } from "../shared/api";
import DoneIcon from "@mui/icons-material/Done";
import { useOrder } from "../../pages/_app";
import CartCard from "../drawer/item";
import axios from "axios";
import Confetti from "react-confetti";
import { FormContractContainer, FormContainer } from "./styles";
import useTranslation from "next-translate/useTranslation";

export default function FormC() {
  const { clearOrders } = useOrder();
  const { orders: cardItems, closeOrder, editOrder } = useOrder();
  const { t } = useTranslation();

  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [otherDate, setOtherData] = useState<Date | null>(new Date());
  const [name, setName] = useState("");
  const [nick, setNick] = useState("");
  const [nameOther, setNameOther] = useState("");
  const [tipo, setTipo] = useState<"Eu" | "Parente" | "Outro">("Eu");

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };
  const handleOtherDateChange = (date: Date | null) => {
    setOtherData(date);
  };

  const [loadingData, setLoadingData] = useState(false);
  const [sucessData, setSucessData] = useState(false);

  const [loadingEmail, setLoadingEmail] = useState(false);
  const [sucessEmail, setSucessEmail] = useState(false);

  const [show, setShow] = useState(false);

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        setShow(false);
      }, 4000);
    }
  }, [show]);

  useEffect(() => {
    if (sucessData && sucessEmail) {
      clearOrders();
      setShow(true);
    }
  }, [sucessData, sucessEmail]);

  const send = () => {
    setLoadingData(true);
    saveContract();
  };

  const sendEmail = (id) => {
    setLoadingEmail(true);
    axios
      .post("https://api.emailjs.com/api/v1.0/email/send", {
        service_id: "service_qsgqtnf",
        template_id: "template_cahmrvr",
        user_id: "user_auNcVu0d5vqKOAjBnKuVi",
        template_params: {
          name: name,
          nickname: nick,
          birth: selectedDate.toISOString(),
          forWho: tipo,
          otherName: nameOther,
          otherBirth: otherDate.toISOString(),
          id,
          pedido:
            cardItems && cardItems.length > 0
              ? cardItems.map(
                  (cardItem) =>
                    `
            <h3>${cardItem.data.titulo}</h3>
            <p>${cardItem.description}</p>
            `
                )
              : "",
        },
      })
      .then((res) => {
        setSucessEmail(true);
      })
      .catch((err) => {
        setSucessEmail(false);
      })
      .finally(() => {
        setLoadingEmail(false);
      });
  };

  const saveContract = () => {
    instanceSelf
      .post(`/api/user`, {
        name: name,
        nickname: nick,
        birth: selectedDate.toISOString(),
        forWho: tipo,
        otherName: nameOther,
        otherBirth: otherDate.toISOString(),
      })
      .then((res) => {
        sendEmail(res.data.id ?? "0");
        setSucessData(true);
      })
      .catch((err) => {
        setSucessData(false);
      })
      .finally(() => {
        setLoadingData(false);
      });
  };

  if (loadingData || loadingEmail || sucessEmail || sucessEmail)
    return (
      <div
        style={{
          height: "90vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        {show && <Confetti colors={["#A3B5FF", "#DD5175"]} />}
        {loadingData ? (
          <div style={{ display: "flex", alignItems: "center", gap: 30 }}>
            <CircularProgress size={32} />
            <h1>Enviando Contrato...</h1>
          </div>
        ) : sucessData ? (
          <div style={{ display: "flex", alignItems: "center", gap: 30 }}>
            <DoneIcon fontSize="large" color="primary" />
            <h1>Contrato enviado com sucesso!</h1>
          </div>
        ) : (
          <div></div>
        )}
        {loadingEmail ? (
          <div style={{ display: "flex", alignItems: "center", gap: 30 }}>
            <CircularProgress size={32} />
            <h1>Enviando Email...</h1>
          </div>
        ) : sucessEmail ? (
          <div style={{ display: "flex", alignItems: "center", gap: 30 }}>
            <DoneIcon fontSize="large" color="primary" />
            <h1>Email enviado com sucesso!</h1>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );

  return (
    <FormContainer
      onSubmit={(e) => {
        e.preventDefault();
        send();
      }}
    >
      {cardItems.length > 0 && (
        <FormContractContainer>
          <h2>
            {t("contract:orders")} ({cardItems.length})
          </h2>
          {cardItems.map((cardItem) => (
            <CartCard
              onDescEdit={editOrder}
              onClose={closeOrder}
              order={cardItem}
              key={cardItem.data._id}
            />
          ))}
        </FormContractContainer>
      )}
      <h1>{t("contract:titleForm")}</h1>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <TextField
          onChange={(e) => setNick(e.target.value)}
          value={nick}
          fullWidth
          name="nick"
          label={t("contract:nickplace")}
          placeholder={t("contract:nickplace")}
          required
        />
        <TextField
          onChange={(e) => setName(e.target.value)}
          value={name}
          fullWidth
          name="name"
          label={t("contract:name")}
          required
        />
        {/* <KeyboardDatePicker
          fullWidth
          margin="normal"
          id="date-picker-dialog"
          label={t("contract:birth")}
          format="dd/MM/yyyy"
          name="birth"
          value={selectedDate}
          onChange={handleDateChange}
          helperText={t("contract:dateForm")}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
          required
        /> */}
        <DatePicker
          label={t("contract:birth")}
          inputFormat="dd/MM/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          renderInput={(params) => (
            <TextField
              {...params}
              name="birth"
              helperText={t("contract:dateForm")}
              fullWidth
              required
              id="date-picker-dialog"
            />
          )}
        />
        <FormControl component="fieldset">
          <FormLabel component="legend">{t("contract:whoPayment")}</FormLabel>
          <br />
          <RadioGroup
            value={tipo}
            onChange={(e) =>
              setTipo(e.target.value as "Eu" | "Parente" | "Outro")
            }
          >
            <FormControlLabel value="Eu" control={<Radio />} label="Eu" />
            <FormControlLabel
              value="Parente"
              control={<Radio />}
              label={t("contract:parentet")}
            />
            <FormControlLabel
              value="Outro"
              control={<Radio />}
              label={t("contract:other")}
            />
          </RadioGroup>
        </FormControl>
        {(tipo === "Outro" || tipo === "Parente") && (
          <>
            <h3 style={{ paddingLeft: 19, paddingBottom: 0, marginBottom: 0 }}>
              {t("contract:data")} {tipo}
            </h3>
            <TextField
              required={tipo === "Outro" || tipo === "Parente"}
              fullWidth
              name="nameOther"
              onChange={(e) => setNameOther(e.target.value)}
              value={nameOther}
              label={`${t("contract:name")} ${tipo.toLowerCase()}`}
            />
            <DatePicker
              label={`${t("contract:birth")} ${tipo.toLowerCase()}`}
              inputFormat="dd/MM/yyyy"
              value={otherDate}
              onChange={handleOtherDateChange}
              renderInput={(params) => (
                <TextField
                  {...params}
                  name="birth"
                  helperText={t("contract:dateForm")}
                  fullWidth
                  required={tipo === "Outro" || tipo === "Parente"}
                  id="date-picker-dialog"
                />
              )}
            />
          </>
        )}
      </LocalizationProvider>
      <Alert severity="info">{t("contract:alert")}</Alert>
      <Button
        style={{ position: "relative" }}
        onClick={() => {}}
        whileHover={{
          y: -5,
          filter: "hue-rotate(-30deg)",
        }}
        whileTap={{
          scale: 0.95,
        }}
      >
        {t("contract:send")}
      </Button>
    </FormContainer>
  );
}
