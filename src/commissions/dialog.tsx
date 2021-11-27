import { Grid, TextField } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Dialog from "@mui/material/Dialog";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Slide from "@mui/material/Slide";
import Toolbar from "@mui/material/Toolbar";
import { TransitionProps } from "@mui/material/transitions";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";
import { useAlert, useOrder } from "../../pages/_app";
import { Button } from "./styles";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogCommissions({
  handleClickOpen,
  handleClose,
  open,
  data,
}) {
  const [description, setDescription] = useState("");
  const { addOrder } = useOrder();
  const { setAlert } = useAlert();

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
      style={{
        backgroundImage: "url(/background.png)",
      }}
    >
      <AppBar variant="outlined" color="transparent">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
            size="large">
            <CloseIcon />
          </IconButton>
          <Typography variant="h6">Adicionar ao carrinho</Typography>
        </Toolbar>
      </AppBar>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          paddingTop: "110px",
          width: "100%",
          height: "100%",
          backgroundImage: "url(/background.png)",
        }}
      >
        <div
          style={{
            maxWidth: 800,
            width: "100%",
          }}
        >
          <Typography variant="h5">
            Descreva o que você quer na sua commission
          </Typography>
          <br />
          <Grid container spacing={5}>
            <Grid item lg={12}>
              <TextField
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                fullWidth
                name="description"
                multiline
                rows={6}
                autoFocus
                label=""
              />
            </Grid>
          </Grid>
          <br />
          <Button
            style={{
              position: "relative",
              margin: "30px 0px",
              padding: "15px 30px",
            }}
            onClick={() => {
              addOrder({ description, data });
              handleClose();
              setDescription("");
              setAlert({
                message: "Adicionado com sucesso!",
                status: true,
                severity: "success",
              });
            }}
            whileHover={{
              y: -5,
              filter: "hue-rotate(-30deg)",
            }}
            whileTap={{
              scale: 0.95,
            }}
          >
            Adicionar ao carrinho
          </Button>
        </div>
      </div>
    </Dialog>
  );
}
