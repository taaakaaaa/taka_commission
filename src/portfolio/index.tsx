import { useEffect, useState } from "react";
import { PortContainer } from "./styles";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";

export default function Portfolio() {
  const [active, setActive] = useState(0);
  const history = useRouter();

  const tabs = ["vTuber", "Arte", "Stream"];

  const images = {
    vTuber: [
      "https://pbs.twimg.com/media/E2pXr7rVEAEWfNe?format=jpg&name=large",
      "https://pbs.twimg.com/media/DJJ3blsVAAAix11?format=jpg&name=small",
      "https://pbs.twimg.com/media/E1b9NJmVUAE_4PK?format=jpg&name=large",
      "https://pbs.twimg.com/media/E2n-e-cVEAQ9YdM?format=jpg&name=4096x4096",
      "https://pbs.twimg.com/media/DGm5BxSV0AUtVEe?format=jpg&name=large",
    ],
    Arte: [
      "https://pbs.twimg.com/media/E3H1YrCVEAAj_RJ?format=jpg&name=small",
      "https://pbs.twimg.com/media/E3EO1aiUUAI-cPd?format=jpg&name=4096x4096",
      "https://pbs.twimg.com/media/E3Edc13UcAAMpzm?format=jpg&name=large",
    ],
    Stream: [
      "https://pbs.twimg.com/media/DH_SdugWAAAhi78?format=jpg&name=large",
      "https://external-preview.redd.it/oaIeDgnU5J0T6Q04Nq2QLCTs6q4luJtW-3GcIecIrDM.jpg?width=640&crop=smart&auto=webp&s=9ea92399fbba98038baaa06726776618986e6b71",
    ],
  };

  useEffect(() => {
    return () => {};
  }, [active]);

  const redirect = () => {
    history.push("/portfolio/0");
  };

  const changeActive = (index: number) => setActive(index);

  return (
    <PortContainer>
      <div className="title">
        <h1>Porftolio</h1>
      </div>
      <header>
        <div className="tabs">
          {tabs.map((tab, index) => (
            <div
              onClick={() => changeActive(index)}
              className={`tab ${index === active ? "active" : ``}`}
              key={tab}
            >
              {tab}
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
          <h2>Busto</h2>
          <div className="tabContent">
            {images[tabs[active]].map((image) => (
              <img
                onClick={redirect}
                key={image}
                className="item"
                src={image}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </PortContainer>
  );
}
