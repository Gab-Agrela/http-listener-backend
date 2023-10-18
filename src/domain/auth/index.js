const { google } = require("googleapis");

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];

const getAuthToken = async () => {
  const auth = new google.auth.GoogleAuth({
    keyFile: "plugawebhooklistener.json",
    scopes: SCOPES,
  });
  const authToken = await auth.getClient();
  return authToken;
}

module.exports = { getAuthToken };
