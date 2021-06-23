import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import { CartCardContainer } from "./styles";

export default function CartCard() {
  const [showTextField, setShowTextField] = useState(false);
  const [showDescField, setShowDescField] = useState(false);
  return (
    <CartCardContainer>
      {showTextField ? (
        <TextField
          onBlur={() => setShowTextField(false)}
          value="vTuber"
          fullWidth
          autoFocus
          variant="standard"
          inputProps={{ className: "h4" }}
        />
      ) : (
        <h4 onClick={() => setShowTextField(true)}>vTuber</h4>
      )}
      {showDescField ? (
        <TextField
          onBlur={() => setShowDescField(false)}
          style={{ fontSize: 14 }}
          value=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus a possimus enim officiis praesentium veniam error. Quos numquam, culpa  nostrum fugit, mollitia possimus doloremque debitis molestias dignissimos, cum voluptate odio!"
          multiline={true}
          rows={6}
          variant="filled"
          inputProps={{ className: "p" }}
          fullWidth
          autoFocus
        />
      ) : (
        <p onClick={() => setShowDescField(true)}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus a
          possimus enim officiis praesentium veniam error. Quos numquam, culpa
          nostrum fugit, mollitia possimus doloremque debitis molestias
          dignissimos, cum voluptate odio!
        </p>
      )}
    </CartCardContainer>
  );
}
