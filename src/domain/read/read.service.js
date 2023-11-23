const { google } = require('googleapis');

const { authorize } = require('../auth')

const listAllSpreadsheetsService = async () => {
  const auth = await authorize();
  const drive = google.drive({ version: 'v3', auth });

  try {
    const response = await drive.files.list({
      q: "mimeType='application/vnd.google-apps.spreadsheet' and 'me' in owners",
      fields: 'files(id, name)',
    });

    const spreadsheets = response.data
    return spreadsheets
  } catch (err) {
    throw Error(err.message)
  }
}

const listAllSheetsInsideSpreadsheetService = async (spreadsheetId) => {
  const auth = await authorize();
  try {
    const { spreadsheets } = google.sheets({ version: 'v4', auth });
    const response = await spreadsheets.get({
      spreadsheetId,
    });

    const { sheets } = response.data;
    return sheets.map((sheet) => sheet.properties.title)
  } catch (err) {
    throw Error(err.message)
  }
}

module.exports = { listAllSpreadsheetsService, listAllSheetsInsideSpreadsheetService }