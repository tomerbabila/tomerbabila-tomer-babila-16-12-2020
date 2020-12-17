import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editItemList, editStoreItemList } from '../actions';
import { Tabs } from 'antd';
import OneItem from './OneItem';

const { TabPane } = Tabs;

function ItemList() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.mainReducer.itemList);
  // const stores = useSelector((state) => state.storeItemList);

  // Load all items and stores to state
  useEffect(() => {
    (async () => {
      const data = await fetch('/api/v1/items').then((res) => res.json());
      const storesFromData = data.map((storeData) => storeData.store);
      dispatch(editItemList(data));
      dispatch(editStoreItemList(storesFromData));
    })();
  }, [dispatch]);

  return (
    <div>
      {/* TODO: make tabPosition responsive - 'top' in small screens */}
      <Tabs defaultActiveKey='1' tabPosition={'left'} size={'large'} style={{ height: 220 }}>
        {items &&
          items.map((storeData) => (
            <TabPane tab={`${storeData.store}`} key={storeData.store}>
              {storeData.items &&
                storeData.items.map((item) => (
                  // <div key={item.id}>{item.name}</div>
                  <OneItem key={item.id} itemData={item} storeName={storeData.store} />
                ))}
            </TabPane>
          ))}
      </Tabs>
    </div>
  );
}

export default ItemList;
