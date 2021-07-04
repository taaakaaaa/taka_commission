import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../../src/mongodb";
import { User, Contract } from "../../../src/models";

async function user(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    Contract.findOne(
      {},
      {},
      { sort: { dateCreated: "-1" } },
      async (err, contract) => {
        if (err) return res.status(500).send({});
        const data = req.body;

        let ip = req.headers["x-real-ip"] || req.socket.remoteAddress;
        ip = ip.toString();

        if (ip.substr(0, 7) == "::ffff:") {
          ip = ip.substr(7);
          console.log(ip);
        }

        const newUser = new User({
          ...data,
          dateAccepted: new Date(),
          ip,
          contract: contract.id,
        });

        const { _id } = await newUser.save();
        return res.status(200).send({ id: _id });
      }
    );
  }
}

export default connectDB(user);
