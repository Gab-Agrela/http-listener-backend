const insertMiddleware = (req, res, next) => {
  const { range, sheetName, spreadsheetId, newData } = req.body;
  if (!range) {
    return res.status(404).json({ message: "O range deve ser passado" });
  }
  if (!sheetName) {
    return res
      .status(404)
      .json({ message: "O nome da planilha deve ser passado" });
  }
  if (!spreadsheetId) {
    return res
      .status(404)
      .json({ message: "O id da planilha deve ser passado" });
  }
  if (!newData) {
    return res
      .status(404)
      .json({ message: "O dado a ser adicionado deve ser passado" });
  }
  next();
};

module.exports = { insertMiddleware };
