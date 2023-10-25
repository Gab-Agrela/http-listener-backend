const { google } = require("googleapis");

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];

const getAuthToken = async () => {
  try {
    const auth = new google.auth.GoogleAuth({
      keyFile: "plugawebhooklistener-3561bfcab990.json",
      scopes: SCOPES,
    });
    const authToken = await auth.getClient();
    return authToken;
  } catch (error) {
    throw Error(error.message)
  }
}

module.exports = { getAuthToken };
