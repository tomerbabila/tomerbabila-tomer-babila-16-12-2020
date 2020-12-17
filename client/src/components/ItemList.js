import React from 'react';
import { useSelector } from 'react-redux';
import { Tabs } from 'antd';
import OneItem from './OneItem';

const { TabPane } = Tabs;

function ItemList() {
  const items = useSelector((state) => state.mainReducer.itemList);

  return (
    <div>
      {/* TODO: make tabPosition responsive - 'top' in small screens */}
      <Tabs
        defaultActiveKey='1'
        tabPosition={window.innerWidth > 600 ? 'left' : 'top'}
        size={'large'}
      >
        {items &&
          items.map((storeData) => (
            <TabPane
              tab={`${storeData.store}`}
              key={storeData.store}
              style={{ height: 500, overflow: 'auto' }}
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
