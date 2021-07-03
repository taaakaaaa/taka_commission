import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import {
  CircularProgress,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { Button } from "../commissions/styles";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import { instanceSelf } from "../shared/api";
import DoneIcon from "@material-ui/icons/Done";
export default function FormC() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [otherDate, setOtherData] = useState<Date | null>(new Date());
  const [name, setName] = useState("");
  const [nameOther, setNameOther] = useState("");
  const [tipo, setTipo] = useState<"Eu" | "Parente" | "Outro">("Eu");

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };
  const handleOtherDateChange = (date: Date | null) => {
    setOtherData(date);
  };

  const [loading, setLoading] = useState(false);
  const [sucess, setSucess] = useState(false);

  const send = () => {
    setLoading(true);
    instanceSelf
      .post(`/api/user`, {
        name: name,
        birth: otherDate,
        forWho: tipo,
        otherName: nameOther,
        otherBirth: otherDate,
      })
      .then((res) => {
        setSucess(true);
      })
      .catch((err) => {
        setSucess(false);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (sucess)
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
        <h1>Enviado com sucesso</h1>
        <DoneIcon fontSize="large" color="primary" />
      </div>
    );

  if (loading)
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
        <h1>Enviando...</h1>
        <CircularProgress />
      </div>
    );

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        send();
      }}
    >
      <h1>Termos Formulário</h1>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container spacing={5}>
          <Grid item lg={12}>
            <TextField
              onChange={(e) => setName(e.target.value)}
              value={name}
              fullWidth
              name="name"
              label="Nome completo"
              required
            />
          </Grid>
          <Grid item lg={12}>
            <KeyboardDatePicker
              fullWidth
              margin="normal"
              id="date-picker-dialog"
              label="Data de nascimento"
              format="dd/MM/yyyy"
              name="birth"
              value={selectedDate}
              onChange={handleDateChange}
              helperText="dia/mes/ano"
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
              required
            />
          </Grid>
          <Grid item lg={12}>
            <FormControl component="fieldset">
              <FormLabel component="legend">
                Quem realizara o pagamento
              </FormLabel>
              <br />
              <RadioGroup
                aria-label="gender"
                name="gender1"
                value={tipo}
                onChange={(e) =>
                  setTipo(e.target.value as "Eu" | "Parente" | "Outro")
                }
              >
                <FormControlLabel value="Eu" control={<Radio />} label="Eu" />
                <FormControlLabel
                  value="Parente"
                  control={<Radio />}
                  label="Parente"
                />
                <FormControlLabel
                  value="Outro"
                  control={<Radio />}
                  label="Outro"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          {(tipo === "Outro" || tipo === "Parente") && (
            <>
              <h3
                style={{ paddingLeft: 19, paddingBottom: 0, marginBottom: 0 }}
              >
                Dados {tipo}
              </h3>
              <Grid item lg={12}>
                <TextField
                  required={tipo === "Outro" || tipo === "Parente"}
                  fullWidth
                  name="nameOther"
                  onChange={(e) => setNameOther(e.target.value)}
                  value={nameOther}
                  label={`Nome completo ${tipo.toLowerCase()}`}
                />
              </Grid>
              <Grid item lg={12}>
                <KeyboardDatePicker
                  fullWidth
                  required={tipo === "Outro" || tipo === "Parente"}
                  margin="normal"
                  id="date-picker-dialog"
                  label={`Data de nascimento ${tipo.toLowerCase()}`}
                  format="dd/MM/yyyy"
                  name="birth"
                  value={otherDate}
                  onChange={handleOtherDateChange}
                  helperText="dia/mes/ano"
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
              </Grid>
            </>
          )}
        </Grid>
      </MuiPickersUtilsProvider>
      <br />
      <Alert severity="info">This is an info alert — check it out!</Alert>
      <Button
        style={{ position: "relative", margin: "30px 0px" }}
        onClick={() => {}}
        whileHover={{
          y: -5,
          filter: "hue-rotate(-30deg)",
        }}
        whileTap={{
          scale: 0.95,
        }}
      >
        Send
      </Button>
    </form>
  );
}
