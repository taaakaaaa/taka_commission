import Commissions from "../../src/commissions";
import { instanceSelf } from "../../src/shared/api";

export async function getServerSideProps() {
  var { data } = await instanceSelf.get("/api/commissions");

  return {
    props: { data },
  };
}

export default function CommissionsPage({ data }) {
  return <Commissions data={data} />;
}
