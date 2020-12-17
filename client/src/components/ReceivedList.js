import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToReceivedList, addToStoreReceivedList } from '../actions';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

function ReceivedList() {
  const dispatch = useDispatch();
  const receivedItems = useSelector((state) => state.receivedList);
  // const stores = useSelector((state) => state.storeReceivedList);

  // Load all items and stores to state
  useEffect(() => {
    (async () => {
      const data = await fetch('/api/v1/receivedItems').then((res) => res.json());
      const storesFromData = data.map((storeData) => storeData.store);
      dispatch(addToReceivedList(data));
      dispatch(addToStoreReceivedList(storesFromData));
    })();
  }, [dispatch]);

  return (
    <div>
      {/* TODO: make tabPosition responsive - 'top' in small screens */}
      <Tabs defaultActiveKey='1' tabPosition={'left'} style={{ height: 220 }}>
        {receivedItems &&
          receivedItems.map((storeData) => (
            <TabPane tab={`${storeData.store}`} key={storeData.store}>
              {storeData.items &&
                storeData.items.map((item) => (
                  <div key={item.id}>{item.name}</div>
                ))}
            </TabPane>
          ))}
      </Tabs>
    </div>
  );
}

export default ReceivedList;
