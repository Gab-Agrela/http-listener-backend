const { insertService } = require("./insert.service");

const insertController = async (req, res) => {
  const { body } = req;
  try {
    const insertedLine = await insertService(body);
    return res.status(201).json({ message: insertedLine });
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

module.exports = { insertController };
