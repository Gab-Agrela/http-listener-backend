const express = require("express");
const cors = require("cors");
require("dotenv/config");

const { insertController } = require("./domain/update/insert.controller");
const { insertMiddleware } = require("./domain/update/insert.middleware");
const readController = require("./domain/read/read.controller");

const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 3001;

app.post("/insert", insertMiddleware, insertController);
app.get("/spreadsheets", readController.getAllSpreadsheets);
app.get("/sheets", readController.getAllSheets);

app.listen(port, () => console.log(`Server running at port ${port}`));
