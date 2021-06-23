import { useRouter } from "next/router";
import React from "react";
import { AppBarContainer } from "./styles";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import { IconButton } from "@material-ui/core";
import Card from "./Card";

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
  ];

  return (
    <AppBarContainer>
      <div className="content">
        <h3>Taka</h3>
        <div className="items">
          {appBarItems.map((appBarItem) => (
            <div onClick={() => history.push(appBarItem.url)} className="item">
              {appBarItem.label}
            </div>
          ))}
          <Card onCardClick={onCardClick} />
        </div>
      </div>
    </AppBarContainer>
  );
}
