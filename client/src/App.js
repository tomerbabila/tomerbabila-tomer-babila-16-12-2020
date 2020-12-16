import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToItemList, addToStoreList } from './actions';

function App() {
  const dispatch = useDispatch();

  // Load all items and stores to state
  useEffect(() => {
    (async () => {
      const items = await fetch('/api/').then((res) => res.json());
      const stores = Array.from(new Set(items.map((item) => item.store)));
      dispatch(addToItemList(items));
      dispatch(addToStoreList(stores));
    })();
  }, []);

  return <div>Hello React</div>;
}

export default App;
