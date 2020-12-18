import React, { useEffect } from 'react';
import OneReceivedItem from './OneReceivedItem';
import { useSelector, useDispatch } from 'react-redux';
import { editReceivedList } from '../actions';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

function ReceivedList() {
  const dispatch = useDispatch();

  const receivedItems = useSelector((state) => state.mainReducer.receivedList);
  const screenSize = useSelector((state) => state.mainReducer.screenSize);

  // Load all items and stores to state
  useEffect(() => {
    (async () => {
      const data = await fetch('/api/v1/receivedItems').then((res) =>
        res.json()
      );
      dispatch(editReceivedList(data));
    })();
  }, [dispatch]);

  return (
    <div>
      <Tabs
        size={'large'}
        defaultActiveKey='1'
        tabPosition={screenSize.width > 600 ? 'left' : 'top'}
      >
        {receivedItems &&
          receivedItems.map((storeData) => (
            <TabPane
              tab={`${storeData.store}`}
              key={storeData.store}
              className='list-class'
            >
              {storeData.items &&
                storeData.items.map((item) => (
                  <OneReceivedItem
                    key={item.id}
                    itemData={item}
                    storeName={storeData.store}
                  />
                ))}
            </TabPane>
          ))}
      </Tabs>
    </div>
  );
}

export default ReceivedList;
