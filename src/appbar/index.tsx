import { MenuItem, Select, useMediaQuery } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import React, { useCallback, useEffect } from "react";
import Card from "./Card";
import { AppBarContainer, SidenavContainer } from "./styles";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import useTranslation from "next-translate/useTranslation";
import setLanguage from "next-translate/setLanguage";

export default function AppBar({
  onCardClick,
  open,
  onNavClose,
  onNavOpen,
}: {
  onCardClick: () => void;
  open: boolean;
  onNavClose: () => void;
  onNavOpen: () => void;
}) {
  const { lang } = useTranslation();
  const history = useRouter();
  const isMobile = useMediaQuery("(max-width: 780px)");
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
      label: "Termos",
      url: "/contract",
    },
  ];

  const escFunction = useCallback((event) => {
    if (event.keyCode === 27) {
      onNavClose();
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      setTimeout(() => {
        document.body.style.overflow = "auto";
      }, 300);
    }
  }, [open]);

  return (
    <>
      <AppBarContainer>
        <div className="content">
          <h3 onClick={() => history.push("/")}>Taka</h3>
          <div className="items">
            <Select
              variant="standard"
              className="select"
              value={lang}
              onChange={async (e) =>
                await setLanguage(e.target.value as string)
              }
            >
              <MenuItem value="en">EN</MenuItem>
              <MenuItem value="pt-BR">PT-BR</MenuItem>
            </Select>
            {!isMobile &&
              appBarItems.map((appBarItem) => (
                <motion.div
                  whileTap={{ scale: 0.95 }}
                  onClick={() => history.push(appBarItem.url)}
                  className="item"
                >
                  {appBarItem.label}
                </motion.div>
              ))}

            {isMobile && (
              <IconButton
                style={{ marginLeft: 24 }}
                onClick={onNavOpen}
                size="large"
              >
                <MenuIcon />
              </IconButton>
            )}
            <Card onCardClick={onCardClick} />
          </div>
        </div>
      </AppBarContainer>
      <AnimatePresence exitBeforeEnter>
        {open && (
          <SidenavContainer
            initial={{
              x: "100%",
            }}
            exit={{
              x: "100%",
            }}
            transition={{
              bounce: 0.8,
            }}
            animate={{ x: "0%" }}
          >
            <IconButton className="closeIcon" onClick={onNavClose} size="large">
              <CloseIcon />
            </IconButton>
            {appBarItems.map((appBarItem) => (
              <motion.div
                style={{ cursor: "pointer", fontSize: "2rem" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  onNavClose();
                  history.push(appBarItem.url);
                }}
                className="item"
              >
                {appBarItem.label}
              </motion.div>
            ))}
          </SidenavContainer>
        )}
      </AnimatePresence>
    </>
  );
}
