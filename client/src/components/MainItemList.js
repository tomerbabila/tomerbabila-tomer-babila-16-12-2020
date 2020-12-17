import React from 'react';
import ItemList from './ItemList';
import { Tabs, Select } from 'antd';

const { TabPane } = Tabs;
const { Option } = Select;

function MainItemList() {
  return (
    <div style={{width: '60vw'}}>
      <Tabs
        tabBarExtraContent={
          <Select value='ils'>
            <Option value='usd'>USD</Option>
            <Option value='ils'>ILS</Option>
          </Select>
        }
      >
        <TabPane tab='Item List' key='1'>
          <ItemList />
        </TabPane>
        <TabPane tab='Stores Information' key='2'>
          Content of tab 2
        </TabPane>
      </Tabs>
    </div>
  );
}

export default MainItemList;
