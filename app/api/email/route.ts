import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_MAIL,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(req: Request) {
  const formData = await req.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  const file = formData.get("file") as unknown as File;

  if (file) {
    const mailOptions = {
      from: `${name} <${email}>`,
      to: process.env.MAIL_TO,
      subject: "Recruitment Agen",
      text: message as string,
      html: `<div>
            Email: ${email}
            <br/>
            Pesan : ${message}
            </div>`,
      attachments: [
        {
          filename: file.name,
          content: Buffer.from(await file.arrayBuffer()),
          contentType: file.type,
        },
      ],
    };

    try {
      await transporter.sendMail(mailOptions);
      return NextResponse.json(
        { message: "Email sent successfully" },
        { status: 200 }
      );
    } catch (error) {
      console.error(error);
      return NextResponse.json(
        { message: "Error sending email" },
        { status: 500 }
      );
    }
  } else {
    // If no file was uploaded, send the email without an attachment
    const mailOptions = {
      from: `${name} <${email}>`,
      to: process.env.MAIL_TO,
      subject: "Recruitment Agen",
      text: message as string,
      html: `<div>
            Email: ${email}
            <br/>
            Pesan : ${message}
            </div>`,
    };

    try {
      await transporter.sendMail(mailOptions);
      return NextResponse.json(
        { message: "Email sent successfully" },
        { status: 200 }
      );
    } catch (error) {
      console.error(error);
      return NextResponse.json(
        { message: "Error sending email" },
        { status: 500 }
      );
    }
  }
}
