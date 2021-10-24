const express = require('express')
const cors = require('cors')
const routes = require('../routes/routes')
const morgan = require('morgan');

function createServer() {
  const app = express();
  const corsOption = {origin: 'http://localhost:3000', optionsSuccessStatus: 200};

  app.use(express.urlencoded({extended: true}));
  app.use(express.json());
  app.use(cors(corsOption));

  app.use(morgan('dev'))
  app.use(routes)

  app.use(express.static(__dirname + "/uploads"));

  return app;
}

module.exports = createServer;
