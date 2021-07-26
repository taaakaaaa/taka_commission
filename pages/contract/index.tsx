import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "../../src/commissions/styles";
import dynamic from "next/dynamic";
import { instanceSelf } from "../../src/shared/api";
import useTranslation from "next-translate/useTranslation";

export const FormC = dynamic(() => import("../../src/contract/formC"), {
  ssr: false,
});

export async function getStaticProps() {
  var { data: terms } = await instanceSelf.get("/api/contract");

  return {
    props: { terms },
  };
}

export default function ContractPage({ terms }) {
  const [accept, setAccept] = useState(false);
  const { lang } = useTranslation();

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0px auto",
        padding: "0px 30px",
        background: "#1F1F1F",
      }}
    >
      {accept ? (
        <FormC />
      ) : (
        <>
          <h1>Termos</h1>
          {terms?.term ? (
            <div
              dangerouslySetInnerHTML={{
                __html: lang === "en" ? terms.termEn : terms.term,
              }}
            />
          ) : (
            <div>Loading...</div>
          )}
          <Button
            style={{ position: "relative", margin: "50px 0px" }}
            onClick={() => setAccept(true)}
            whileHover={{
              y: -5,
              filter: "hue-rotate(-30deg)",
            }}
            whileTap={{
              scale: 0.95,
            }}
          >
            li e aceito os termos
          </Button>
        </>
      )}
    </div>
  );
}
