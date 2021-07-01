import { NextApiRequest, NextApiResponse } from "next";
import {
  ITakaArt,
  ITakaSubTag,
  TakaArt,
  TakaSubTag,
} from "../../../../src/models";
import { connectDuduDB } from "../../../../src/mongodb";

async function contract(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      const { id } = req.query;
      const subTag: ITakaSubTag = await TakaSubTag.findById(id);

      const art: ITakaArt[] = await TakaArt.find({
        subtag: subTag._id,
      });

      return res.status(200).send({
        subTag,
        art,
      });
    } catch (error) {
      return res.status(500).send(error);
    }
  }
}

export default connectDuduDB(contract);
