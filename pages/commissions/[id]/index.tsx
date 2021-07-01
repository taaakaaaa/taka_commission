import axios from "axios";
import CommissionsItem from "../../../src/commissions/item";
import { ITakaArt, ITakaSubTag } from "../../portfolio";

export interface ICommissionItem {
  subTag: ITakaSubTag;
  art: ITakaArt[];
}

export async function getServerSideProps(ctx) {
  const { id } = ctx.params;
  const { data } = await axios.get<ICommissionItem>(
    `http://localhost:3000/api/commissions/${id}`
  );

  return {
    props: { data },
  };
}

export default function CommissionsItemPage({
  data,
}: {
  data: ICommissionItem;
}) {
  return <CommissionsItem data={data} />;
}
