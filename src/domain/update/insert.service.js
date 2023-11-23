const { google } = require('googleapis');
const sheets = google.sheets('v4');

const { authorize } = require('../auth');

const insertService = async ({ range, sheetName, spreadsheetId, data }) => {
  const sheetsAPI = sheets.spreadsheets.values;
  const auth = await authorize();
  const transformedData = Object.values(data).map((line) => line.split('/'))
  try {
    const response = await sheetsAPI.append({
      spreadsheetId: spreadsheetId.toString(),
      range: `${sheetName}!${range}`,
      valueInputOption: 'RAW',
      resource: { values: transformedData, majorDimension: "ROWS" },
      auth,
    });
    return 'success';
  } catch (error) {
    throw Error(error.message);
  }
}

module.exports = { insertService }