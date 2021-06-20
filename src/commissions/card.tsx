import { motion, Variants } from "framer-motion";
import React from "react";
import { CommissionsCardContainer } from "./styles";
import { RippleButton } from "react-ripple-effect";
import { useRouter } from "next/router";

export interface CommissionCardProps {
  title: string;
  description: string;
  image: string;
  price: number;
  id: number;
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
  id,
}: CommissionCardProps) {
  const { push } = useRouter();

  const redirect = () => {
    push("/commissions/" + id);
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <CommissionsCardContainer
        onClick={redirect}
        whileTap={{ scale: 0.95 }}
        variants={itemVar}
      >
        <img className="miniature" src={image} />

        <div className="info">
          <motion.h3 layoutId={id.toString()}>{title}</motion.h3>
          <p>{description}</p>
        </div>

        <div className="price">
          <h4>{price}</h4>
        </div>
      </CommissionsCardContainer>
    </div>
  );
}
