const { listAllSpreadsheetsService, listAllSheetsInsideSpreadsheetService } = require("./read.service")

const listAllSpreadsheetsController = async (req, res) => {
  try {
    const list = await listAllSpreadsheetsService();
    if (list) return res.status(200).json({ data: list })
  } catch (error) {
    return res.status(404).json(error)
  }
}

const listAllSheetsInsideSpreadsheetController = async (req, res) => {
  const { id } = req.query
  try {
    const sheetsList = await listAllSheetsInsideSpreadsheetService(id)
    return res.status(200).json({ data: sheetsList })
  } catch (error) {
    return res.status(404).json({ error })
  }
}
module.exports = { listAllSpreadsheetsController, listAllSheetsInsideSpreadsheetController }