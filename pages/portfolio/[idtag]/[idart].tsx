import { ITakaArt } from "..";
import PortfolioItem from "../../../src/portfolio/item";
import { instance, instanceSelf } from "../../../src/shared/api";

export async function getServerSideProps(ctx) {
  const { idtag, idart } = ctx.params;
  var { data } = await instanceSelf.get<{
    takaArt: ITakaArt;
    takaArtRecomen: ITakaArt[];
  }>(`/api/portfolio/item/${idtag}/${idart}`);

  return {
    props: { data: data.takaArt, recomendacoes: data.takaArtRecomen },
  };
}

export default function PortfolioItemPage({
  data,
  recomendacoes,
}: {
  data: ITakaArt;
  recomendacoes: ITakaArt[];
}) {
  return <PortfolioItem recomendacoes={recomendacoes} data={data} />;
}
