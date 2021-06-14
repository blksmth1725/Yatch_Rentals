// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import data from "./data.json";
const { boats } = data;

export default (req, res) => {
  const boat = boats.filter((boat) => boat.slug === req.query.slug);
  if (req.method === "GET") {
    res.status(200).json(boat);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
};
