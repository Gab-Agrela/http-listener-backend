const { default: fetch } = require("node-fetch");

const getAllSheets = async (authorization, spreadsheetId) => {
  try {
    const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}?access_token=${authorization}`)
    const data = await response.json()
    return data
  } catch (error) {
    throw new Error(error.message)
  }
};

const updateSheet = async (authorization, { spreadsheetId, sheetName, values }) => {
  try {
    const response = await fetch({
      method: 'PUT',
      url: `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}A:A?valueInputOption=RAW&access_token=${authorization}`,
      body: values
    });
    const data = await response.json()
    return data
  } catch (error) {
    throw new Error(error.message)
  }
}

const sheetsService = {
  getAllSheets,
  updateSheet
}
module.exports = { sheetsService }