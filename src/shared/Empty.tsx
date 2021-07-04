import { motion } from "framer-motion";
import React from "react";

export function Empty() {
  return (
    <div
      style={{
        height: "90vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 30,
      }}
    >
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
      <h2 style={{ margin: 0, padding: 0 }}>Vazio</h2>
      <p>Tente novamente mais tarde</p>
    </div>
  );
}
