import { readFile } from 'fs/promises';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import path from 'path';

export async function POST(req: Request) {
  try {
    const { firstName, lastName, company, subject, email, message } = await req.json();

    const filePath = path.join(process.cwd(), 'templates', 'contact-email.html');
    const htmlTemplateRaw = await readFile(filePath, 'utf8');
    
    const htmlTemplate = htmlTemplateRaw
      .replace('{{firstName}}', firstName)
      .replace('{{lastName}}', lastName)
      .replace('{{company}}', company)
      .replace('{{subject}}', subject)
      .replace('{{email}}', email)
      .replace('{{message}}', message);
      
    const transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 587,
      secure: false,
      auth: {
        user: "55e443a2901f26",
        pass: "d6a936c92336f1",
      },
    });

    await transporter.sendMail({
      from: "contact@inovativai.com",
      to: "contact@inovativai.com",
      subject: `New Contact Message`,
      html: htmlTemplate,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending contact email:", error);
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}
