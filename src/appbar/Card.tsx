import React from "react";
import Badge from "@material-ui/core/Badge";
import { Theme, withStyles, createStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
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
    >
      <StyledBadge badgeContent={cardItems.length} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}
