import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ButtonOutlined, PortItemContainer } from "./styles";
import ReactImageMagnify from "react-image-magnify";

function getHeight(length, ratio) {
  var height = length / Math.sqrt(Math.pow(ratio, 2) + 1);
  return Math.round(height);
}

function getWidth(length, ratio) {
  var width = length / Math.sqrt(1 / (Math.pow(ratio, 2) + 1));
  return Math.round(width);
}

export default function PortfolioItem() {
  const history = useRouter();
  const [size, setSize] = useState({
    width: 500,
    height: 500,
  });
  const [osize, setOSize] = useState({
    width: 500,
    height: 500,
  });

  useEffect(() => {
    const img = new Image();
    img.src =
      "https://pbs.twimg.com/media/E4KZPPzUYAU0n_f?format=jpg&name=medium";

    img.onload = function () {
      var maxWidth = Math.min(1366, window.innerWidth) - 60; // Max width for the image
      var maxHeight = window.innerHeight - 60; // Max height for the image
      var ratio = 0; // Used for aspect ratio
      var width = img.width; // Current image width
      var height = img.height; // Current image height
      console.log(`maxWidth`, img.width);

      setOSize({
        width,
        height,
      });

      if (width > maxWidth && width > height) {
        ratio = width / height;
        console.log("width", maxWidth); // Set new width

        setSize({
          height: maxWidth / ratio,
          width: maxWidth,
        });
      } else if (height > maxHeight && height > width) {
        ratio = height / width;
        console.log(height / width);
        setSize({
          height: maxHeight,
          width: maxHeight / ratio,
        });
      } else {
        setSize({
          height: maxHeight,
          width: maxWidth,
        });
      }
    };
  }, []);
  const images = [
    "https://pbs.twimg.com/media/E4KZPPzUYAU0n_f?format=jpg&name=medium",
    "https://pbs.twimg.com/media/DJJ3blsVAAAix11?format=jpg&name=small",
    "https://pbs.twimg.com/media/E1b9NJmVUAE_4PK?format=jpg&name=large",
    "https://pbs.twimg.com/media/E2n-e-cVEAQ9YdM?format=jpg&name=4096x4096",
  ];
  return (
    <PortItemContainer>
      <div className="title">
        <img
          onClick={() => history.push("/portfolio")}
          src="/arrow-left.svg"
          alt="Back"
        />
        <h1>Arte</h1>
      </div>

      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ bounce: 0.5, delay: 0.1, type: "spring" }}
        className="content"
      >
        <ReactImageMagnify
          {...{
            imageClassName: "info",
            enlargedImageContainerClassName: "info-zoom",
            smallImage: {
              alt: "Wristwatch by Ted Baker London",
              src: "https://pbs.twimg.com/media/E4KZPPzUYAU0n_f?format=jpg&name=medium",
              width: osize.width,
              // height: osize.height,
              isFluidWidth: true,
            },
            largeImage: {
              src: "https://pbs.twimg.com/media/E4KZPPzUYAU0n_f?format=jpg&name=medium",
              width: osize.width,
              height: osize.height,
            },
            enlargedImagePosition: "over",
          }}
        />
      </motion.div>
      <ButtonOutlined>Order</ButtonOutlined>
      <br />
      <div className="recomendacoes">
        <h2>Recomendações</h2>
        <div className="images">
          {images.map((image) => (
            <img key={image} src={image} />
          ))}
        </div>
      </div>
    </PortItemContainer>
  );
}
