import { NextApiRequest, NextApiResponse } from "next";
import { TakaArt, ITakaArt } from "../../../../../src/models";
import { connectDuduDB } from "../../../../../src/mongodb";

async function contract(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const { idart, idtag } = req.query;

    try {
      const takaArt: ITakaArt = await TakaArt.findById(idart);
      const takaArtRecomen: ITakaArt[] = await TakaArt.find({
        subtag: idtag,
      });

      return res.status(200).send({ takaArt, takaArtRecomen });
    } catch (err) {
      console.error(err.message);
      return res.status(500).send(err.message);
    }
  }
}

export default connectDuduDB(contract);
