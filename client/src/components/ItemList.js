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
      const storesFromData = Array.from(
        new Set(data.map((item) => item.store))
      );
      dispatch(addToItemList(data));
      dispatch(addToStoreList(storesFromData));
    })();
  }, []);

  return (
    <div>
      {items.map((item, i) => (
        <div key={i}>
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
