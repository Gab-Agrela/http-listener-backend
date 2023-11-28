const fetch = require("node-fetch");

const getAllSpreadsheets = async (authorization, email) => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/drive/v3/files?q=mimeType='application/vnd.google-apps.spreadsheet' and '${email}' in owners&access_token=${authorization}
      `
    );
    const data = await response.json();
    const spreadsheets = data?.files;
    if (!spreadsheets) throw new Error("Erro na busca de planilhas");
    return spreadsheets;
  } catch (err) {
    throw new Error(err.message);
  }
};

const getAllSheets = async (auth, spreadsheetId) => {
  try {
    const { spreadsheets } = google.sheets({ version: "v4", auth });
    const response = await spreadsheets.get({
      spreadsheetId,
    });

    const { sheets } = response.data;
    return sheets.map((sheet) => sheet.properties.title);
  } catch (err) {
    throw new Error(err.message);
  }
};

const readService = {
  getAllSpreadsheets,
  getAllSheets,
};

module.exports = readService;
