const express = require("express");
require("dotenv/config");

const { insertController } = require("./domain/operations/insert.controller");
const { insertMiddleware } = require("./domain/operations/insert.middleware");

const app = express();
app.use(express.json());
const port = process.env.PORT || 3001;

app.post("/insert", insertMiddleware, insertController);

app.listen(port, () => console.log(`Server running at port ${port}`));
