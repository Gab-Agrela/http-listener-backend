const { spreadsheetService } = require("./spreadsheet.service");

const getAllSpreadsheets = async (req, res) => {
  const { authorization } = req.headers;
  const { email } = req.query;
  try {
    const list = await spreadsheetService.getAllSpreadsheets(authorization, email);
    if (list) return res.status(200).json({ data: list });
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};



const spreadsheetController = {
  getAllSpreadsheets,
};
module.exports = { spreadsheetController };
