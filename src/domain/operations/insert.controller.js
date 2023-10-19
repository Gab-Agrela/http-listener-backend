const { insertService } = require("./insert.service");

const insertController = async (req, res) => {
  const { body } = req;
  try {
    const insertedLine = await insertService(body);
    if (insertedLine) res.status(201).json({ message: insertedLine });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = { insertController };
