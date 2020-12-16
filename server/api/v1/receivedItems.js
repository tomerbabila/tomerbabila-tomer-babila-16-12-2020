const { Router } = require('express');
const db = require('../../database/database');

const router = Router();

// GET all received items from database
router.get('/', async (req, res) => {
  try {
    const receivedItems = await db.get('receivedList').value();
    res.send(receivedItems);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
