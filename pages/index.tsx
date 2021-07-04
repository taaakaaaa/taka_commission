import React from "react";
import { Button } from "../src/commissions/styles";
import { HomeContainer } from "../src/home";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

//@ts-ignore
const ReactTwitchEmbedVideo = dynamic(import("react-twitch-embed-video"), {
  ssr: false,
});
export async function getServerSideProps() {
  return {
    props: {},
  };
}

export default function HomePage() {
  const history = useRouter();
  return (
    <HomeContainer>
      <header>
        <div className="content">
          <motion.img
            src="https://pbs.twimg.com/media/EtVVie8WYAM7JWS?format=jpg&name=large"
            whileHover={{ x: -10, y: -10 }}
          />
          <div className="info">
            <motion.h1>Taka</motion.h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </p>

            <Button
              onClick={() => history.push("/commissions")}
              whileHover={{
                y: -5,
                filter: "hue-rotate(-30deg)",
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              See more
            </Button>
          </div>
        </div>
      </header>

      <div className="contact">
        <motion.h2 drag="x" dragConstraints={{ left: 0, right: 50 }}>
          Contato
        </motion.h2>
        <div className="items">
          {[
            "https://discord.io/taka",
            "https://twitter.com/_taaakaaaa",
            "https://www.instagram.com/_taaakaaaa/",
            "https://www.pixiv.net/en/users/65070291",
          ].map((contactItem, index) => (
            <motion.img
              onClick={() => window.open(contactItem.toString(), "_blank")}
              className="item"
              whileHover={{
                scale: 1.05,
                filter: "drop-shadow(2px 2px 6px rgba(200, 200, 200, 0.25))",
              }}
              animate={{
                filter: "",
              }}
              whileTap={{
                scale: 0.95,
                filter: "drop-shadow(1px 1px 3px rgba(200, 200, 200, 0.25))",
              }}
              src={`/contact/${index + 1}.svg`}
            />
          ))}
        </div>
      </div>

      <div className="twitch">
        {/* 
        //@ts-ignore */}
        <ReactTwitchEmbedVideo channel="taaakaaaa" />
      </div>
    </HomeContainer>
  );
}
