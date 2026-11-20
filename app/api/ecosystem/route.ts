import { connection } from "next/server";
import { gzipSync } from "node:zlib";
import { GetSheetsClient, GetSpreadsheetId } from "@/services/google-sheets";
import { DEFAULT_ECOSYSTEM_DATA, parseEcosystemRows } from "@/lib/ecosystem-data";

export const maxDuration = 60;

export async function GET() {
  await connection();
  try {
    const client = GetSheetsClient();
    const spreadsheetId = GetSpreadsheetId("datatv");
    const response = await client.spreadsheets.values.get(
      {
        spreadsheetId,
        range: "'Ecosystem'!A1:W65",
        valueRenderOption: "UNFORMATTED_VALUE",
        dateTimeRenderOption: "SERIAL_NUMBER",
      },
      { timeout: 30_000, retry: false },
    );

    const rows = response.data.values ?? [];
    const data = parseEcosystemRows(rows);
    const body = JSON.stringify(data);
    const compressed = gzipSync(Buffer.from(body));

    return new Response(compressed, {
      headers: {
        "Content-Type": "application/json",
        "Content-Encoding": "gzip",
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("Ecosystem API error:", error instanceof Error ? error.message : error);
    // Jika Google Sheets belum terkoneksi atau error, fallback ke data default yang presisi
    const body = JSON.stringify(DEFAULT_ECOSYSTEM_DATA);
    const compressed = gzipSync(Buffer.from(body));
    return new Response(compressed, {
      headers: {
        "Content-Type": "application/json",
        "Content-Encoding": "gzip",
        "Cache-Control": "no-store",
      },
    });
  }
}
