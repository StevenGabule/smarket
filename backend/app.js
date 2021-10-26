// const app = require('./utils/createServer')()
const express = require('express')
const log = require('./logs/index')
const config = require('config')
const conn = require('./db/conn')
const cors = require('cors')
const routes = require('./routes/routes')
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const corsOption = {origin: 'http://localhost:3000', optionsSuccessStatus: 200};

app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.json());
app.use(bodyParser.json());
app.use(cors(corsOption));

app.use(morgan('dev'))
app.use(routes)

app.use(express.static(__dirname + "/uploads"));

const PORT = config.get('port');
const HOST = config.get('host');

app.listen(PORT, async() => {
  log.info(`App is listening to http://${HOST}:${PORT}`)
  await conn();
});
