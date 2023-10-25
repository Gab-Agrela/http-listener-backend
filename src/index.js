const express = require("express");
const cors = require('cors')
require("dotenv/config");

const { insertController } = require("./domain/operations/insert.controller");
const { insertMiddleware } = require("./domain/operations/insert.middleware");

const app = express();
app.use(cors())
app.use(express.json());
const port = process.env.PORT || 3001;

app.post("/insert", insertMiddleware, insertController);

app.listen(port, () => console.log(`Server running at port ${port}`));
