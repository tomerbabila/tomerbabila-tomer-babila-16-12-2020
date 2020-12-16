const express = require('express');
const db = require('../database/database');
const app = express();

// GET all items from mock data
app.get('/', async (req, res) => {
  try {
    const items = await db.get('itemList').value();
    res.send(items);
  } catch (error) {
    console.log(error);
  }
});

module.exports = app;
