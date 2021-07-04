import { NextApiRequest, NextApiResponse } from "next";
import {
  ITakaArt,
  ITakaSubTag,
  ITakaTag,
  TakaArt,
  TakaSubTag,
  TakaTag,
} from "../../../src/models";
import { connectDuduDB } from "../../../src/mongodb";

async function contract(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      let result: any[] = [];
      const takaTags: ITakaTag[] = await TakaTag.find();

      console.log(`takaTags`, takaTags);
      for (let iTag = 0; iTag < takaTags.length; iTag++) {
        const tag = takaTags[iTag];
        let subTags: ITakaSubTag[] = await TakaSubTag.find({
          tag: tag._id,
        });

        let newSubTags: any[] = [];
        for (let iSubTag = 0; iSubTag < subTags.length; iSubTag++) {
          const subTag = subTags[iSubTag];

          const art: ITakaArt[] = await TakaArt.find({
            subtag: subTag._id,
          });

          newSubTags = [
            ...newSubTags,
            {
              id: subTags[iSubTag]._id,
              titulo: subTags[iSubTag].titulo,
              descricao: subTags[iSubTag].descricao,
              preco: subTags[iSubTag].preco,
              art: art,
            },
          ];
        }

        result = [
          ...result,
          {
            tag: { titulo: tag.titulo, id: tag._id },
            subTags: newSubTags,
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
