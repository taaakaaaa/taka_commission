import { IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useOrder } from "../../pages/_app";
import { Button } from "../commissions/styles";
import CartCard from "./item";
import { DrawerContainer } from "./styles";

export interface DrawerCardProps {
  open: boolean;
  onCardClose?: () => void;
}

export default function DrawerCard({ open, onCardClose }: DrawerCardProps) {
  const { orders: cardItems, closeOrder, editOrder } = useOrder();
  const history = useRouter();

  useEffect(() => {
    const onKeyPress = (e: KeyboardEvent) =>
      e.code === "Escape" && onCardClose();

    document.addEventListener("keyup", onKeyPress);

    return () => document.removeEventListener("keyup", onKeyPress);
  }, []);

  return (
    <DrawerContainer open={open}>
      <motion.div
        initial={{ x: "0%", opacity: 0 }}
        animate={{ x: open ? "0%" : "120%", opacity: open ? 1 : 0 }}
        className="content"
      >
        <div className="close">
          <IconButton onClick={onCardClose} className="icon">
            <CloseIcon />
          </IconButton>
        </div>

        <h3>Carrinho</h3>
        <div className="line"></div>
        <div className="body">
          {!cardItems || cardItems.length <= 0 ? (
            <div className="no-items">
              <motion.img
                whileHover={{
                  rotate: [
                    "0deg",
                    "15deg",
                    "-25deg",
                    "35deg",
                    "-65deg",
                    "105deg",
                    "-360deg",
                    "0deg",
                  ],
                  transition: {
                    duration: 10,
                  },
                }}
                src="/takaSad.svg"
                alt="Taka sad"
              />
              <h2>Seu carrinho está vazio</h2>
              <p>Adione algo para deixar o taka feliz.</p>
              <br />
              <Button
                onClick={() => {
                  history.push("/commissions");
                  onCardClose();
                }}
                whileHover={{
                  y: -5,
                  filter: "hue-rotate(-30deg)",
                }}
                className="outline"
                whileTap={{
                  scale: 0.95,
                }}
              >
                Ir para commissions
              </Button>
            </div>
          ) : (
            <>
              {cardItems.map((cardItem) => (
                <CartCard
                  onDescEdit={editOrder}
                  onClose={closeOrder}
                  order={cardItem}
                  key={cardItem.data._id}
                />
              ))}
              <Button
                onClick={() => {
                  history.push("/contract");
                  onCardClose();
                }}
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
            </>
          )}
        </div>
      </motion.div>
    </DrawerContainer>
  );
}
