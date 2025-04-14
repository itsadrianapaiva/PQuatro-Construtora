import { google } from "googleapis";
import { v4 as uuidv4 } from "uuid";
import credentials from "../../config/p4-construtora-api-76b7a7ef15b4.json" assert { type: "json" };

export async function handler(event) {
  try {
    // Parse form data
    if (event.httpMethod !== "POST") {
      return {
        statusCode: 405,
        body: JSON.stringify({ error: "Method not allowed" }),
      };
    }

    const body = JSON.parse(event.body || "{}");
    const { name, email, phone, projectType, message } = body;

    // Authenticate with Google Sheets
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    // Generate ID and Timestamp
    const id = uuidv4();
    const timestamp = new Date().toISOString();

    // Append data to Sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: "1WWQVlmZLSVfBr-hYQGAfUhBXK0vENI7vqc2iA64JKJ8",
      range: "Sheet1!A:G",
      valueInputOption: "RAW",
      resource: {
        values: [[id, timestamp, name, email, phone, projectType, message]],
      },
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Submission logged successfully" }),
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to log submission" }),
    };
  }
}
