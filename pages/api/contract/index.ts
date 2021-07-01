import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../../src/mongodb";
import { Contract } from "../../../src/models";

async function contract(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const newContract = new Contract({
      term: "<p>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi inventore voluptatibus cupiditate cum consequatur ducimus totam id ea modi cumque necessitatibus dicta, ullam doloremque at ipsum, nisi vero ad optio deleniti eius. Quos maiores totam ad id numquam minus veniam quo iste alias, praesentium tenetur necessitatibus, sapiente eligendi nisi amet dolorem fugiat omnis dolor, perspiciatis quisquam! Culpa veritatis porro fugit temporibus voluptates hic dolor similique accusantium possimus ullam qui, veniam nisi tempora velit praesentium unde atque? Voluptates molestiae, accusantium iusto labore velit eius amet officia asperiores officiis, eligendi tempora incidunt id ipsum rerum dolorum, perspiciatis omnis neque explicabo iure et.</p>",
      dateCreated: new Date(),
    });

    const contractCreated = await newContract.save();
    return res.status(200).send(contractCreated);
  } else if (req.method === "GET") {
    Contract.findOne({}, {}, { sort: { dateCreated: "-1" } }, (err, data) => {
      if (err) {
        return res.status(500);
      }
      return res.status(200).send(data);
    });
  } else {
    return res.status(404);
  }
}

export default connectDB(contract);
