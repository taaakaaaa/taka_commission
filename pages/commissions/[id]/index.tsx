import CommissionsItem from "../../../src/commissions/item";
import { instanceSelf } from "../../../src/shared/api";
import { ITakaArt, ITakaSubTag } from "../../portfolio";

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
