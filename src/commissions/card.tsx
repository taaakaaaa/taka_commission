import { motion, Variants } from "framer-motion";
import React from "react";
import { CommissionsCardContainer } from "./styles";
import { RippleButton } from "react-ripple-effect";
import { useRouter } from "next/router";

export interface CommissionCardProps {
  titulo: string;
  descricao: string;
  image: string;
  preco: number;
  id: number;
  art: any;
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
  titulo,
  descricao,
  art,
  preco,
  id,
}: CommissionCardProps) {
  const { push } = useRouter();

  const redirect = () => {
    push("/commissions/" + id);
  };

  console.log(`art`, art);

  return (
    <div style={{ overflow: "hidden" }}>
      <CommissionsCardContainer
        onClick={redirect}
        whileTap={{ scale: 0.95 }}
        variants={itemVar}
      >
        <img
          className="miniature"
          src={art?.[Math.floor(Math.random() * art.length)]?.url}
        />

        <div className="info">
          <motion.h3 layoutId={id.toString()}>{titulo}</motion.h3>
          <p>{descricao.substr(0, 60)}</p>
        </div>

        <div className="price">
          <h4>{preco}</h4>
        </div>
      </CommissionsCardContainer>
    </div>
  );
}
