import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { CommissionsItemContainer } from "./styles";
import ReactImageMagnify from "react-image-magnify";

export default function CommissionsItem() {
  const { push } = useRouter();

  const images = [
    "https://pbs.twimg.com/media/E4PFKpvVgAcshZQ?format=jpg&name=large",
    "https://pbs.twimg.com/media/E4KZPPzUYAU0n_f?format=jpg&name=medium",
    "https://pbs.twimg.com/media/E4QdJfsVkAEdJ17?format=jpg&name=large",
    "https://pbs.twimg.com/media/E4EcvGPVUAA1-Sh?format=jpg&name=4096x4096",
    "https://pbs.twimg.com/media/E4Qnu24VIAsi1gi?format=jpg&name=medium",
    "https://pbs.twimg.com/media/E4PgLlnVcAQuNcn?format=jpg&name=large",
    "https://pbs.twimg.com/media/E4P-_zQVcAYoXo3?format=jpg&name=large",
  ];

  return (
    <CommissionsItemContainer>
      <div className="title">
        <img
          onClick={() => push("/commissions")}
          src="/arrow-left.svg"
          alt="Back"
        />
        <motion.h1>Full Body</motion.h1>
      </div>
      <div className="images">
        {images.map((image) => (
          <ImageItem key={image} image={image} />
        ))}
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
        voluptate ipsa rem ducimus eveniet velit adipisci voluptatibus. Saepe
        culpa qui quisquam dolore. Ad quisquam dolorem unde vitae dolor, minus
        quod?
      </p>
      <h2>Interested?</h2>
      <div className="buttons">
        <button>Ask only for a vTuber</button>
        <button className="outline">Ask only for a vTuber</button>
      </div>
    </CommissionsItemContainer>
  );
}

function ImageItem({ image }: { image: string }) {
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const img = new Image();
    img.src = image;

    img.onload = function () {
      setSize({
        width: img.width,
        height: img.height,
      });
    };
  }, []);
  return (
    <div className="image">
      <ReactImageMagnify
        {...{
          imageClassName: "info",
          enlargedImageContainerClassName: "info-zoom",
          smallImage: {
            isFluidWidth: false,
            alt: "Wristwatch by Ted Baker London",
            src: image,
            width: Math.min(size.width, 378),

            height: 611,
          },
          largeImage: {
            src: image,
            ...{ ...size },
          },
          enlargedImagePosition: "over",
        }}
      />
    </div>
  );
}
