import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { to, subject, text, html } = await req.json();

    // Validate required fields
    if (!to || !subject || !html) {
      return NextResponse.json(
        { success: false, error: "Missing required fields: to, subject, text" },
        { status: 400 }
      );
    }

    // Check if environment variables are configured
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("Email configuration missing: EMAIL_USER or EMAIL_PASS not set");
      return NextResponse.json(
        {
          success: false,
          error:
            "Email service not configured. Please set EMAIL_USER and EMAIL_PASS environment variables."
        },
        { status: 500 }
      );
    }

    // Setup transporter (example: Gmail)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your Gmail address
        pass: process.env.EMAIL_PASS // app password (not normal password)
      }
    });

    // Verify transporter configuration
    try {
      await transporter.verify();
      console.log("Email transporter verified successfully");
    } catch (verifyError) {
      console.error("Email transporter verification failed:", verifyError);
      return NextResponse.json(
        {
          success: false,
          error: "Email service configuration invalid. Please check your credentials."
        },
        { status: 500 }
      );
    }

    // Send mail
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
      cc: "info@pawtful.com",
      subject,
      html
    });

    console.log("Email sent successfully:", info.messageId);
    return NextResponse.json({ success: true, message: "Email sent!", messageId: info.messageId });
  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Failed to send email"
      },
      { status: 500 }
    );
  }
}
