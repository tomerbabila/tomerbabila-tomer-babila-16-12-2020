import React from 'react';
import OneReceivedItem from './OneReceivedItem';
import { useSelector } from 'react-redux';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

function ReceivedList() {
  const receivedItems = useSelector((state) => state.mainReducer.receivedList);
  const screenSize = useSelector((state) => state.mainReducer.screenSize);

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
