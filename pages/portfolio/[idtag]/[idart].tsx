import { ITakaArt } from "..";
import PortfolioItem from "../../../src/portfolio/item";
import { instance } from "../../../src/shared/api";

export async function getServerSideProps(ctx) {
  const { idtag, idart } = ctx.params;
  var { data } = await instance.get<ITakaArt>(
    `/api/taka/tags/subtags/art/${idtag}/${idart}`
  );

  return {
    props: { data },
  };
}

export default function PortfolioItemPage({ data }: { data: ITakaArt }) {
  return <PortfolioItem data={data} />;
}
