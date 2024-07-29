import type { NextApiResponse } from "next";
import nodemailer from "nodemailer";

type ResponseData = {
  name: string;
  company: string;
  email: string;
};

export async function POST(req: Request, res: NextApiResponse) {
  const { name, email, company, phone } = await req.json();

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "novumbot@gmail.com",
      pass: process.env.PASSWORD,
    },
    secure: true,
  });

  const mailData = {
    from: "novumbot@gmail.com",
    to: "bengez@novumanalytica.com",
    subject: `Message From ${name} via Website`,
    text: `${name}, ${email}, ${company}, ${phone}`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });

  return new Response("Success", { status: 200 });
}
