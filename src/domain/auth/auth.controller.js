const { authorize } = require(".")

const authController = async (req, res) => {
  try {
    const auth = await authorize()
    if (auth) {
      return res.status(200).json({ data: auth, message: "success" })
    }
  } catch (error) {
    return res.status(404).json({ error })
  }
}

module.exports = { authController }