require("dotenv").config();
const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(routes);

const port = process.env.APP_PORT || 3333;
app.listen(port, () => {
  console.log(`[app.js] > Server running in http://${process.env.APP_URL}:${process.env.APP_PORT}`);
});