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
  } catch (error) {
    throw new Error(error.message);
  }
};


const spreadsheetService = {
  getAllSpreadsheets,
};
module.exports = { spreadsheetService };
