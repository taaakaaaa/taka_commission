import React, { useEffect } from "react";
import CartCard from "./item";
import { DrawerContainer } from "./styles";
import CloseIcon from "@material-ui/icons/Close";
import { IconButton } from "@material-ui/core";
import { motion } from "framer-motion";
import { Button } from "../commissions/styles";

export interface DrawerCardProps {
  open: boolean;
  onCardClose?: () => void;
}

export default function DrawerCard({ open, onCardClose }: DrawerCardProps) {
  const cardItems = [1, 2, 3, 4];

  useEffect(() => {
    const onKeyPress = (e: KeyboardEvent) =>
      e.code === "Escape" && onCardClose();

    document.addEventListener("keyup", onKeyPress);

    return () => document.removeEventListener("keyup", onKeyPress);
  }, []);

  return (
    <DrawerContainer open={open}>
      <motion.div animate={{ x: open ? "0%" : "120%" }} className="content">
        <div className="close">
          <IconButton onClick={onCardClose} className="icon">
            <CloseIcon />
          </IconButton>
        </div>

        <h3>Carrinho</h3>
        <div className="line"></div>
        <div className="body">
          {cardItems.map((cardItem) => (
            <CartCard key={cardItem} />
          ))}
        </div>

        <Button
          onClick={() => {}}
          whileHover={{
            y: -5,
            filter: "hue-rotate(-30deg)",
          }}
          whileTap={{
            scale: 0.95,
          }}
        >
          FINISH
        </Button>
      </motion.div>
    </DrawerContainer>
  );
}
