import { Grid, TextField } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Dialog from "@material-ui/core/Dialog";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Slide from "@material-ui/core/Slide";
import Toolbar from "@material-ui/core/Toolbar";
import { TransitionProps } from "@material-ui/core/transitions";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
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
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6">Add to the card</Typography>
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
            Add to the card
          </Button>
        </div>
      </div>
    </Dialog>
  );
}
