import axios from "axios";
import Commissions from "../../src/commissions";

export async function getServerSideProps() {
  var { data } = await axios.get("http://localhost:3000/api/commissions");

  return {
    props: { data },
  };
}

export default function CommissionsPage({ data }) {
  return <Commissions data={data} />;
}
