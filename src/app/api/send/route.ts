import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { name, email, phone, service, page } = await req.json();

  // Check if required fields are present
  if (!name || !email || !phone || !service || !page) {
    return NextResponse.json(
      { success: false, message: 'Missing required fields' },
      { status: 400 }
    );
  }

  // Create Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',  // Using Gmail as the email service
    auth: {
      user: process.env.EMAIL_USER,  // Your admin email from .env
      pass: process.env.EMAIL_PASS,  // Your Gmail app password from .env
    },
  });

  // Email content for admin (receiver)
  const mailOptions = {
    from: `"Form Submission" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,  // Admin email (where the form will be sent)
    subject: `New Form Submission from ${page}`,
    text: `
      📝 New Form Submission

      👤 Name: ${name}
      📧 User's Email: ${email}
      📱 Phone: ${phone}
      🎓 Selected Service: ${service}
      📄 Submitted From: ${page}

      Thank you!
    `,
  };

  try {
    // Send the email to the admin
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
