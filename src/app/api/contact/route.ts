import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  name: string;
  company: string;
  emnail: string;
};

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { name } = req.body;

  console.log(req);

  return Response.json({ msg: "Hi" });
}
