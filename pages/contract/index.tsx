import { NextSeo } from "next-seo";
import useTranslation from "next-translate/useTranslation";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { Button } from "../../src/commissions/styles";
import { instanceSelf } from "../../src/shared/api";

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
  const { lang, t } = useTranslation();

  return (
    <>
      <NextSeo
        title={`${t("contract:title")} - Taka`}
        description={lang === "en" ? terms.termEn : terms.term}
        twitter={{
          cardType: "summary",
          handle: "_taaakaaaa",
        }}
      />
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
            <h1>{t("contract:title")}</h1>
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
              {t("contract:accep")}
            </Button>
          </>
        )}
      </div>
    </>
  );
}
