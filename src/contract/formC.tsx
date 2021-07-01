import React from "react";
import TextField from "@material-ui/core/TextField";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { Button } from "../commissions/styles";

export default function FormC() {
  return (
    <div>
      <h1>Termos Formulário</h1>
      <Grid container spacing={5}>
        <Grid item lg={12}>
          <TextField fullWidth name="name" label="Nome completo" />
        </Grid>
        <Grid item lg={12}>
          <TextField fullWidth name="birth" label="Data de nascimento" />
        </Grid>
        <Grid item lg={12}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Quem realizara o pagamento</FormLabel>
            <br />
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value={""}
              onChange={() => {}}
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
      </Grid>
      <br />
      <Alert severity="info">This is an info alert — check it out!</Alert>
      <Button
        style={{ position: "relative", margin: "50px 0px" }}
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
    </div>
  );
}
