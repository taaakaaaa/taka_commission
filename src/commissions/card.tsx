import { Variants } from "framer-motion";
import React from "react";
import { CommissionsCardContainer } from "./styles";
import { RippleButton } from "react-ripple-effect";

export interface CommissionCardProps {
  title: string;
  description: string;
  image: string;
  price: number;
}
const itemVar: Variants = {
  hidden: { y: "120%" },
  visible: {
    y: "0%",
    transition: {
      type: "tween",
      ease: "circIn",
      duration: 0.4,
    },
  },
};

export default function CommissionCard({
  title,
  description,
  image,
  price,
}: CommissionCardProps) {
  return (
    <div style={{ overflow: "hidden" }}>
      <CommissionsCardContainer whileTap={{ scale: 0.95 }} variants={itemVar}>
        <img className="miniature" src={image} />

        <div className="info">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>

        <div className="price">
          <h4>{price}</h4>
        </div>
      </CommissionsCardContainer>
    </div>
  );
}
