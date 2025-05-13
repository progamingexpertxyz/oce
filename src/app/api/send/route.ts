import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { name, email, phone, services, page } = await req.json();

  if (!name || !email || !phone || !services?.length || !page) {
    return NextResponse.json(
      { success: false, message: 'Missing required fields' },
      { status: 400 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Form Submission" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: `New Form Submission from ${page}`,
    text: `
      📝 New Form Submission

      👤 Name: ${name}
      📧 Email: ${email}
      📱 Phone: ${phone}
      🎓 Selected Services: ${services.join(', ')}
      📄 Submitted From: ${page}

      Thank you!
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true, message: 'Form submitted and email sent' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send email' },
      { status: 500 }
    );
  }
}
