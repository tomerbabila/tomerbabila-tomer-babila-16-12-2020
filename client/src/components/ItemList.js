import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToItemList, addToStoreList } from '../actions';

function ItemList() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.itemList);
  const stores = useSelector((state) => state.storeList);

  // Load all items and stores to state
  useEffect(() => {
    (async () => {
      const data = await fetch('/api/').then((res) => res.json());
      const storesFromData = data.map((storeData) => storeData.store);
      dispatch(addToItemList(data));
      dispatch(addToStoreList(storesFromData));
    })();
  }, []);

  return (
    <div>
      {items &&
        items.map((storeData) => (
          <div key={storeData.store}>
            <h3>{storeData.store}</h3>
            <ul>
              {storeData.items &&
                storeData.items.map((item, i) => <li key={i}>{item.name}</li>)}
            </ul>
          </div>
        ))}
    </div>
  );
}

export default ItemList;
