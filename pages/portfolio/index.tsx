import Portfolio from "../../src/portfolio";
import { instanceSelf } from "../../src/shared/api";

/**
 * Interface to model the Tag Schema for TypeScript.
 * @param _id:string
 * @param titulo:string
 */
export interface ITakaTag {
  _id: string;
  titulo: string;
}

/**
 * Interface to model the Profile Schema for TypeScript.
 * @param titulo:string
 * @param descricao:string
 */
export interface ITakaSubTag {
  titulo: string;
  descricao: string;
  open: boolean;
}

/**
 * Interface to model the Profile Schema for TypeScript.
 * @param rag:ref => ITakaSubTag._id
 * @param titulo:string
 * @param url:string
 * @param tipo:number
 */
export interface ITakaArt {
  _id: string;
  titulo: string;
  url: string;
  tipo: number;
}

export async function getServerSideProps() {
  var { data } = await instanceSelf.get<ITakaTag[]>("/api/portfolio/tags");

  return {
    props: { data },
  };
}

export default function PortfolioPage({ data }: { data: ITakaTag[] }) {
  return <Portfolio tags={data} />;
}
