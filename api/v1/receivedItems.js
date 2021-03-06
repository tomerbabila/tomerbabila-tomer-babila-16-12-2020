const { Router } = require('express');
const db = require('../../database/database');

const router = Router();

// GET all received items from database
router.get('/', async (req, res) => {
  try {
    const receivedItems = await db.get('receivedList').value();
    // Sort items new to old
    for (const store of receivedItems) {
      store.items.sort((a, b) => b.deliveryESTDate - a.deliveryESTDate);
    }
    res.send(receivedItems);
  } catch (error) {
    console.log(error);
  }
});

// POST a received item (from itemList)
router.post('/', (req, res) => {
  try {
    const newReceivedItem = req.body;
    const newReceivedItemStore = newReceivedItem.store;
    delete newReceivedItem.store;
    const allReceivedStores = db.get('receivedList').map('store').value();

    if (allReceivedStores.includes(newReceivedItemStore)) {
      db.get('receivedList')
        .find({ store: newReceivedItemStore })
        .get('items')
        .push(newReceivedItem)
        .write();
    } else {
      db.get('receivedList')
        .push({ store: newReceivedItemStore, items: [newReceivedItem] })
        .write();
    }

    res.send(newReceivedItem);
  } catch (error) {
    console.log(error);
  }
});

// DELETE an item (back to itemList)
router.delete('/', (req, res) => {
  try {
    const { id, store } = req.body;
    const removedItem = db
      .get('receivedList')
      .find({ store })
      .get('items')
      .remove({ id })
      .write();
    // Check if store is empty and if yes, delete it as well
    const checkStoreEmpty = db
      .get('receivedList')
      .find({ store })
      .get('items')
      .value();

    if (checkStoreEmpty.length === 0) {
      db.get('receivedList').remove({ store }).write();
    }

    res.send(...removedItem);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
