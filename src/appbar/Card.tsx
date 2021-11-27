import React from "react";
import Badge from "@mui/material/Badge";
import { Theme } from "@mui/material/styles";
import withStyles from '@mui/styles/withStyles';
import createStyles from '@mui/styles/createStyles';
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useOrder } from "../../pages/_app";

const StyledBadge = withStyles((theme: Theme) =>
  createStyles({
    badge: {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
      background: "#6650F3",
      fontSize: 12,
    },
  })
)(Badge);

export default function Card({ onCardClick }: { onCardClick: () => void }) {
  const { orders: cardItems } = useOrder();

  return (
    <IconButton
      onClick={onCardClick}
      style={{ color: "white" }}
      className="item"
      aria-label="cart"
      size="large">
      <StyledBadge badgeContent={cardItems.length} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}
