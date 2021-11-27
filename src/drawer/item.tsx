import { IconButton, TextField, Zoom } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";
import { ITakaOrder } from "../../pages/_app";

export default function CartCard({
  order,
  onClose,
  onDescEdit,
}: {
  order: ITakaOrder;
  onClose: (id: string) => void;
  onDescEdit: (id: string, newDescription: string) => void;
}) {
  const [showDescField, setShowDescField] = useState(false);
  const [showClose, setShowClose] = useState(false);
  const [description, setDescription] = useState<string>(order.description);

  return (
    <div
      className="card-item"
      onMouseLeave={() => setShowClose(false)}
      onMouseEnter={() => setShowClose(true)}
    >
      <div className="title">
        <h4>{order.data.titulo}</h4>
        <Zoom key={showClose.toString()} in={showClose} unmountOnExit>
          <IconButton
            onClick={() => onClose(order.id)}
            size="small"
            className="icon"
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </Zoom>
      </div>

      {showDescField ? (
        <TextField
          onBlur={() => {
            setShowDescField(false);
            onDescEdit(order.id, description);
          }}
          style={{ fontSize: 14 }}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          multiline={true}
          rows={6}
          inputProps={{ className: "p" }}
          fullWidth
          autoFocus
        />
      ) : (
        <p onClick={() => setShowDescField(true)}>{description}</p>
      )}
    </div>
  );
}
