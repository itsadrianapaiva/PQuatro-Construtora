import dotenv from "dotenv";
dotenv.config();

import { google } from "googleapis";
import nodemailer from "nodemailer";

// Validate environment variables
console.log("Environment variables:", {
  GOOGLE_CLIENT_EMAIL: !!process.env.GOOGLE_CLIENT_EMAIL,
  GOOGLE_PRIVATE_KEY: !!process.env.GOOGLE_PRIVATE_KEY,
  GOOGLE_SPREADSHEET_ID: !!process.env.GOOGLE_SPREADSHEET_ID,
  GMAIL_USER: !!process.env.GMAIL_USER,
  GMAIL_APP_PASSWORD: !!process.env.GMAIL_APP_PASSWORD,
});

// Initialize Google Sheets API
console.log("Initializing Google Sheets auth...");
const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
  },
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth });
const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;

// Initialize Nodemailer
console.log("Initializing Nodemailer...");
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function handler(event) {
  const headers = {
    "Access-Control-Allow-Origin": "http://localhost:3000",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  if (event.httpMethod === "OPTIONS") {
    console.log("Handling OPTIONS request");
    return {
      statusCode: 200,
      headers,
      body: "",
    };
  }

  if (event.httpMethod !== "POST") {
    console.log("Invalid method:", event.httpMethod);
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ message: "Method Not Allowed" }),
    };
  }

  console.log("Received POST request:", event.body);
  let parsedBody;
  try {
    parsedBody = JSON.parse(event.body);
    console.log("Parsed body:", parsedBody);
  } catch (error) {
    console.error("JSON parse error:", error);
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ message: "Invalid JSON format" }),
    };
  }

  const { name, email, phone, projectType, message } = parsedBody;

  if (!name || !email || !phone) {
    console.log("Missing required fields:", { name, email, phone });
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ message: "Missing required fields" }),
    };
  }

  try {
    // Log to Google Sheets
    console.log("Appending to Google Sheets...");
    const timestamp = new Date().toISOString();
    const id = Date.now().toString();
    const values = [
      [id, timestamp, name, email, phone, projectType || "", message || ""],
    ];
    const sheetResponse = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A:G",
      valueInputOption: "RAW",
      requestBody: { values },
    });
    console.log("Sheets append response:", sheetResponse.data);

    // Send email with Nodemailer
    console.log("Sending email...");
    const mailOptions = {
      from: "P4 Construtora <pquatroconstrutora@gmail.com>",
      to: "pquatroconstrutora@gmail.com",
      subject: "Novo Lead - P4 Construtora",
      text: `
        Nova submissão recebida:
        ID: ${id}
        Data: ${timestamp}
        Nome: ${name}
        E-mail: ${email}
        Telefone: ${phone}
        Tipo de Projeto: ${projectType || "Não especificado"}
        Mensagem: ${message || "Nenhuma mensagem"}
      `,
      html: `
        <h2>Nova Submissão de Formulário</h2>
        <p><strong>ID:</strong> ${id}</p>
        <p><strong>Data:</strong> ${timestamp}</p>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
        <p><strong>Tipo de Projeto:</strong> ${projectType || "Não especificado"}</p>
        <p><strong>Mensagem:</strong> ${message || "Nenhuma mensagem"}</p>
      `,
    };

    const emailResponse = await transporter.sendMail(mailOptions);
    console.log("Email sent:", emailResponse.messageId);

    console.log("Submission successful");
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: "Form submitted successfully" }),
    };
  } catch (error) {
    console.error("Submission error:", error.message, error.stack);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        message: "Internal Server Error",
        error: error.message,
      }),
    };
  }
}
