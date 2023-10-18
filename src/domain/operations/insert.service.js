const { google } = require('googleapis');
const { getAuthToken } = require('../auth');
const sheets = google.sheets('v4');

const insertService = async (newData) => {
  const sheetsAPI = sheets.spreadsheets.values;
  const auth = await getAuthToken();
  const spreadsheetId = process.env.SHEET_ID;
  const sheetName = process.env.SHEET_NAME;

  try {
    const response = sheetsAPI.append({
      spreadsheetId,
      range: `${sheetName}!C:C`,
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      resource: { values: [newData] },
      auth,
    });

    return `Nova linha adicionada: ${JSON.stringify(response.data)}`;
  } catch (error) {
    throw Error(`Erro ao adicionar a nova linha: ${error}`);
  }
}

module.exports = { insertService }