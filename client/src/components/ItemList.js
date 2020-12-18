import React from 'react';
import { useSelector } from 'react-redux';
import { Tabs } from 'antd';
import OneItem from './OneItem';

const { TabPane } = Tabs;

function ItemList() {
  const items = useSelector((state) => state.mainReducer.itemList);
  const screenSize = useSelector((state) => state.mainReducer.screenSize);

  return (
    <div>
      <Tabs
        defaultActiveKey='1'
        tabPosition={screenSize.width > 850 ? 'left' : 'top'}
        size={'large'}
      >
        {items &&
          items.map((storeData) => (
            <TabPane
              tab={`${storeData.store}`}
              key={storeData.store}
              className='list-class'
            >
              {storeData.items &&
                storeData.items.map((item) => (
                  <OneItem
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

export default ItemList;
