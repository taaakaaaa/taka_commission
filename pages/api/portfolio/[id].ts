import { NextApiRequest, NextApiResponse } from "next";
import {
  ITakaArt,
  ITakaSubTag,
  TakaArt,
  TakaSubTag,
} from "../../../src/models";
import { connectDuduDB } from "../../../src/mongodb";

async function contract(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      const { id } = req.query;
      let result: any[] = [];
      const subTags: ITakaSubTag[] = await TakaSubTag.find({
        tag: id,
      });

      for (let i = 0; i < subTags.length; i++) {
        const element = subTags[i];

        const art: ITakaArt[] = await TakaArt.find({
          subtag: element._id,
        });
        result = [
          ...result,
          {
            tag: element,
            art,
          },
        ];
      }

      return res.status(200).send(result);
    } catch (error) {
      return res.status(500).send(error);
    }
  }
}

export default connectDuduDB(contract);
