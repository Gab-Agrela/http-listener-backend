const express = require("express");
const cors = require("cors");
const { spreadsheetController } = require("./domain/spreadsheet/spreadsheet.controller");
const { sheetsController } = require("./domain/sheets/sheets.controller");
require("dotenv/config");

const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 3001;

app.get("/spreadsheets", spreadsheetController.getAllSpreadsheets);
app.get("/sheets", sheetsController.getAllSheets);
app.put("/sheets", sheetsController.updateSheet);

app.listen(port, () => console.log(`Server running at port ${port}`));
