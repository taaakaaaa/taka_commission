import { NextApiRequest, NextApiResponse } from "next";
import { connectDuduDB } from "../../../src/mongodb";
import { ITakaTag, TakaTag } from "../../../src/models";

async function contract(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      const takaTags: ITakaTag[] = await TakaTag.find();

      return res.status(200).send(takaTags);
    } catch (error) {
      return res.status(500).send(error);
    }
  }
}

export default connectDuduDB(contract);
