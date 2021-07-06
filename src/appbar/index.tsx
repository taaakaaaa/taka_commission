import { useMediaQuery } from "@material-ui/core";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import React, { useCallback, useEffect } from "react";
import Card from "./Card";
import { AppBarContainer, SidenavContainer } from "./styles";
import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
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
              <IconButton onClick={onNavOpen}>
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
            <IconButton className="closeIcon" onClick={onNavClose}>
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
