const express = require('express');
const { insertController } = require('./domain/operations/insert.controller');
require('dotenv/config')

const app = express()
app.use(express.json())
const port = process.env.PORT || 3001

app.post('/webhook', insertController)

app.listen(port, () => console.log(`Server running at port ${port}`))