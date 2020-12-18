const { Router } = require('express');
const db = require('../../database/database');
const { nanoid } = require('nanoid');

const router = Router();

// GET all items from database
router.get('/', (req, res) => {
  try {
    const allItems = db.get('itemList').value();
    // Sort items old to new
    for (const store of allItems) {
      store.items.sort((a, b) => a.deliveryESTDate - b.deliveryESTDate);
    }
    res.send(allItems);
  } catch (error) {
    console.log(error);
  }
});

// POST a new item
router.post('/', (req, res) => {
  try {
    const newItem = req.body;
    const newItemStore = newItem.store;
    delete newItem.store;
    const allStores = db.get('itemList').map('store').value();
    if (allStores.includes(newItemStore)) {
      db.get('itemList')
        .find({ store: newItemStore })
        .get('items')
        .push({ ...newItem, id: newItem.id ? newItem.id : nanoid() })
        .write();
    } else {
      db.get('itemList')
        .push({
          store: newItemStore,
          items: [{ ...newItem, id: newItem.id ? newItem.id : nanoid() }],
        })
        .write();
    }
    res.send(newItem);
  } catch (error) {
    console.log(error);
  }
});

// DELETE an item (move to receivedItems)
router.delete('/', (req, res) => {
  try {
    const { id, store } = req.body;

    const removedItem = db
      .get('itemList')
      .find({ store })
      .get('items')
      .remove({ id })
      .write();

    // Check if store is empty and if yes, delete it as well
    const checkStoreEmpty = db
      .get('itemList')
      .find({ store })
      .get('items')
      .value();

    if (checkStoreEmpty.length === 0) {
      db.get('itemList').remove({ store }).write();
    }

    res.send(...removedItem);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
