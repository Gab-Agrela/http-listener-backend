const { insertService } = require("./insert.service");

const insertController = async (req, res) => {
  const { message } = req.body;
  try {
    const insertedLine = await insertService(message);
    if (insertedLine) res.status(201).json({ message: insertedLine })
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

module.exports = { insertController }