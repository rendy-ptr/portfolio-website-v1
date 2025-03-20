import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import type SMTPTransport from "nodemailer/lib/smtp-transport";
import fs from "fs";
import path from "path";
import winston from "winston";

// Create logs directory if it doesn't exist
const logDir = path.join(process.cwd(), "logs");
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const logFilePath = path.join(logDir, "errors.log");

// Winston Logger
const logger = winston.createLogger({
  level: "error",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, message }) => `[${timestamp}] ${message}`)
  ),
  transports: [
    new winston.transports.File({ filename: logFilePath, maxsize: 5 * 1024 * 1024, maxFiles: 3 }),
  ],
});

const logError = (error: unknown) => {
  logger.error(error);
};

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    const transporterOptions: SMTPTransport.Options = {
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: process.env.EMAIL_SECURE === "true",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    };

    const transporter = nodemailer.createTransport(transporterOptions);

    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: subject,
      text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      {
        message: "Email sent successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    logError(error);
    return NextResponse.json(
      {
        error: "Failed to send email",
      },
      {
        status: 500,
      }
    );
  }
}
