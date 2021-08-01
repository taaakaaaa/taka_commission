import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import { CommissionsItemContainer } from "./styles";
import ReactImageMagnify from "react-image-magnify";
import DialogCommissions from "./dialog";
import { ICommissionItem } from "../../pages/commissions/[id]";

export default function CommissionsItem({
  data: { art, subTag },
}: {
  data: ICommissionItem;
}) {
  const { push } = useRouter();
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState(300);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const div = useCallback((node) => {
    if (node !== null) {
      console.log(
        `node.getBoundingClientRect().height`,
        node.getBoundingClientRect().height
      );
      setHeight(node.getBoundingClientRect().height);
    }
  }, []);

  return (
    <>
      <DialogCommissions
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        open={open}
        data={subTag}
      />
      <CommissionsItemContainer>
        <div className="title">
          <img
            onClick={() => push("/commissions")}
            src="/arrow-left.svg"
            alt="Back"
          />
          <motion.h1>{subTag.titulo}</motion.h1>
        </div>
        <motion.div
          ref={div}
          drag="x"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          className="images"
          dragConstraints={{
            right: art.length * 350,
            left: 0,
          }}
        >
          {art.map((image) => (
            <ImageItem key={image._id} image={image.url} />
          ))}
        </motion.div>
        <p>{subTag.descricao}</p>
        <h2>{subTag.open ? "Interessado?" : "Commission fechada"}</h2>
        <div className="buttons">
          <motion.button
            disabled={!subTag.open}
            onClick={handleClickOpen}
            whileHover={
              subTag.open
                ? {
                    y: -5,
                    filter: "hue-rotate(-30deg)",
                  }
                : {}
            }
            whileTap={
              subTag.open
                ? {
                    scale: 0.95,
                  }
                : {
                    rotate: ["0deg", "2deg", "-2deg", "0deg"],
                  }
            }
          >
            Adicionar ao carrinho
          </motion.button>
          {/* <motion.button
            onClick={handleClickOpen}
            whileHover={{
              y: -5,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="outline"
          >
            Add to the card
          </motion.button> */}
        </div>
      </CommissionsItemContainer>
    </>
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
