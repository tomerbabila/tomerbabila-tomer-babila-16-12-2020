const express = require('express');
const fs = require('fs').promises;
const app = express();

// GET all items from mock data
app.get('/', async (req, res) => {
  try {
    const items = await fs.readFile('./db.json');
    res.send(items);
  } catch (error) {
    console.log(error);
  }
});

module.exports = app;
