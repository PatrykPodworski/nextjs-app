import { NextApiRequest, NextApiResponse } from "next";
import createRandomComments from "./mock/createRandomComments";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Comment[]>
) => {
  res.status(200).json(createRandomComments());
};

export type Comment = {
  id: string;
  author: string;
  createdAt: Date;
  content: string;
};

export default handler;
