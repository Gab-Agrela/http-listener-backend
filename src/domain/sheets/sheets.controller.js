const { sheetsService } = require("./sheets.service");

const getAllSheets = async (req, res) => {
  const { authorization } = req.headers;
  const { spreadSheetsId } = req.query;
  try {
    const sheetsList = await sheetsService.getAllSheets(authorization, spreadSheetsId);
    return res.status(200).json({ data: sheetsList });
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const updateSheet = async (req, res) => {
  const { authorization } = req.headers;
  const { body } = req;
  try {
    const sheetUpdated = await sheetsService.updateSheet(authorization, body);
    return res.status(200).json({ data: sheetUpdated })
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}

const sheetsController = {
  getAllSheets,
  updateSheet
}
module.exports = { sheetsController }