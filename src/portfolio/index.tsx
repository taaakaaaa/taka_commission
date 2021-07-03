import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ITakaArt, ITakaTag } from "../../pages/portfolio";
import { instanceSelf } from "../shared/api";
import Title from "../shared/title";
import { PortContainer } from "./styles";

export interface IPortItem {
  tag: ITakaTag;
  art: ITakaArt[];
}

export default function Portfolio({ tags }: { tags: ITakaTag[] }) {
  const [active, setActive] = useState<number>(0);
  const history = useRouter();
  const [images, setImages] = useState<null | IPortItem[]>();

  useEffect(() => {
    return () => {};
  }, [active]);

  const redirect = (idtag: string, idart: string) => {
    history.push(`/portfolio/${idtag}/${idart}`);
  };

  useEffect(() => {
    const id = tags[active]._id;
    setImages(null);
    instanceSelf.get<IPortItem[]>(`/api/portfolio/${id}`).then(({ data }) => {
      setImages(data);
    });
  }, [active]);

  const changeActive = (index: number) => setActive(index);

  return (
    <PortContainer>
      <div className="title">
        <Title text={"Porftolio"} />
      </div>
      <header>
        <div className="tabs">
          {tags.map((tab, index) => (
            <div
              onClick={() => changeActive(index)}
              className={`tab ${index === index ? "active" : ``}`}
              key={tab._id}
            >
              {tab.titulo}
            </div>
          ))}
          <motion.div
            animate={{
              x: 130 * active,
            }}
            className="indicator"
          />
        </div>
      </header>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="content"
          key={active}
        >
          <div>
            {!images ? (
              <div>Carregando</div>
            ) : (
              images.map((item) => (
                <div key={item.tag._id}>
                  <h2>{item.tag.titulo}</h2>
                  <div className="tabContent">
                    {item.art.map((artItem) => (
                      <motion.img
                        whileTap={{ scale: 0.95 }}
                        onClick={() => redirect(item.tag._id, artItem._id)}
                        key={artItem._id}
                        className="item"
                        src={artItem.url}
                      />
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </PortContainer>
  );
}
