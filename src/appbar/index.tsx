import { useRouter } from "next/router";
import React from "react";
import { AppBarContainer } from "./styles";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import { IconButton } from "@material-ui/core";
import Card from "./Card";
import { motion } from "framer-motion";

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
