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
          <ul key={storeData.store}>
            <h3>{storeData.store}</h3>
            {storeData.items &&
              storeData.items.map((item) => <li>{item.name}</li>)}
          </ul>
        ))}
    </div>
  );
}

export default ItemList;
