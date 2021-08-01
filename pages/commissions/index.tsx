import { NextSeo } from "next-seo";
import React from "react";
import Commissions from "../../src/commissions";
import { instanceSelf } from "../../src/shared/api";

export async function getServerSideProps() {
  var { data } = await instanceSelf.get("/api/commissions");

  return {
    props: { data },
  };
}

export default function CommissionsPage({ data }) {
  return (
    <>
      <NextSeo
        title={`Commissions - Taka`}
        twitter={{
          cardType: "summary",
          site: "catmanga.org",
          handle: "bcscanlations",
        }}
        openGraph={{
          type: "website",
          images: [
            data.flatMap(({ tag, subTags, art }) =>
              subTags?.map((commissionItemData) => ({
                url: `${tag.titulo} - ${commissionItemData.titulo}`,
                alt: commissionItemData.art?.[
                  Math.floor(Math.random() * commissionItemData.art.length)
                ]?.url,
              }))
            ),
          ],
          locale: "pt_br",
          site_name: "Taka",
        }}
      />
      <Commissions data={data} />
    </>
  );
}
