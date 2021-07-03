import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React from "react";
import Card from "./Card";
import { AppBarContainer } from "./styles";

export default function AppBar({ onCardClick }: { onCardClick: () => void }) {
  const history = useRouter();
  const appBarItems = [
    {
      label: "Portfolio",
      url: "/portfolio",
    },
    {
      label: "Commissions",
      url: "/commissions",
    },
    {
      label: "Terms",
      url: "/contract",
    },
  ];

  return (
    <AppBarContainer>
      <div className="content">
        <h3 onClick={() => history.push("/")}>Taka</h3>
        <div className="items">
          {appBarItems.map((appBarItem) => (
            <motion.div
              whileTap={{ scale: 0.95 }}
              onClick={() => history.push(appBarItem.url)}
              className="item"
            >
              {appBarItem.label}
            </motion.div>
          ))}
          <Card onCardClick={onCardClick} />
        </div>
      </div>
    </AppBarContainer>
  );
}
