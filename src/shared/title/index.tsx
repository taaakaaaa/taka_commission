import { motion, Variants } from "framer-motion";
import React from "react";
import styled from "@emotion/styled";

const TitleContainer = styled(motion.h1)`
  letter-spacing: 6px;
  @media only screen and (max-width: 1024px) {
    letter-spacing: 3px;
  }
  padding: 0px;
  margin: 0px;
  font-size: clamp(42px, 7vw, 72px);
  color: #f9e2fc;
  padding-bottom: 50px;
  display: flex;
  gap: 5px;

  @media only screen and (max-width: 1400px) {
    padding: 0px 50px;
  }

  @media only screen and (max-width: 1024px) {
    padding: 0px 30px;
  }
`;

const containerVar: Variants = {
  hidden: { x: -150 },
  visible: {
    x: 0,
    transition: {
      bounce: 0.4,
      type: "spring",
      delayChildren: 0.3,
      staggerChildren: 0.05,
    },
  },
};

const itemVar: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
  hover: {
    opacity: 0.5,
  },
};

export default function Title({ text }: { text: string }) {
  console.log(`text.split("")`, text.split(""));
  return (
    <TitleContainer initial="hidden" animate="visible" variants={containerVar}>
      {text.split("").map((t, i) => (
        <motion.span variants={itemVar} key={`${t}-${i}`}>
          {t}
        </motion.span>
      ))}
    </TitleContainer>
  );
}
