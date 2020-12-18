const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
require('dotenv').config()

const app = express();

app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());

app.use('/api', require('./api'));

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use('*', (req, res) => {
  res.sendStatus(404);
});

module.exports = app;
