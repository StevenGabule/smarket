const mongoose = require('mongoose')
const config = require('config')
const log = require('../logs')


function connect() {
  const dbURI = config.get('dbURI');
  return mongoose.connect(dbURI, {}).then(() => {
    log.info('<===== DATABASE CONNECTION! =====>')
  }).catch((err) => {
    log.error("DB_ERROR", err)
  })
}

module.exports = connect;
