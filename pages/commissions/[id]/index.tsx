import CommissionsItem from "../../../src/commissions/item";
import { instanceSelf } from "../../../src/shared/api";
import { ITakaArt, ITakaSubTag } from "../../portfolio";
import { NextSeo } from "next-seo";

export interface ICommissionItem {
  subTag: ITakaSubTag;
  art: ITakaArt[];
}

export async function getServerSideProps(ctx) {
  const { id } = ctx.params;
  const { data } = await instanceSelf.get<ICommissionItem>(
    `/api/commissions/${id}`
  );

  return {
    props: { data, revalidate: 300 },
  };
}

export default function CommissionsItemPage({
  data,
}: {
  data: ICommissionItem;
}) {
  return (
    <>
      <NextSeo
        title={`${data.subTag.titulo} - Taka`}
        description={data.subTag.descricao}
        twitter={{
          cardType: "summary",
          site: "catmanga.org",
          handle: "bcscanlations",
        }}
        openGraph={{
          type: "website",
          images: [
            ...data.art.map((image) => ({
              url: image.url,
              alt: image.titulo,
            })),
          ],
          locale: "pt_br",
          site_name: "Taka",
        }}
      />
      <CommissionsItem data={data} />
    </>
  );
}
