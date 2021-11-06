const dotenv = require('dotenv')
dotenv.config();

module.exports = {
  port: process.env.PORT,
  host: process.env.HOST,
  dbURI: process.env.DB_URI,
  URL: process.env.URL,
  JWT_SECRET: process.env.JWT_SECRET,
  PAYPAL_BASE_URL: process.env.PAYPAL_BASE_URL,
  PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID,
  PAYPAL_CLIENT_SECRET: process.env.PAYPAL_CLIENT_SECRET
}
