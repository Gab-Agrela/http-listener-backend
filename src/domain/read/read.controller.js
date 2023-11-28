const readService = require("./read.service");

const getAllSpreadsheets = async (req, res) => {
  const { authorization } = req.headers;
  const { email } = req.query;
  try {
    const list = await readService.getAllSpreadsheets(authorization, email);
    if (list) return res.status(200).json({ data: list });
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const getAllSheets = async (req, res) => {
  const { spreadSheetsId } = req.query;
  try {
    const sheetsList = await readService.getAllSheets("", spreadSheetsId);
    return res.status(200).json({ data: sheetsList });
  } catch (error) {
    return res.status(404).json({ error });
  }
};

const readController = {
  getAllSpreadsheets,
  getAllSheets,
};
module.exports = readController;
