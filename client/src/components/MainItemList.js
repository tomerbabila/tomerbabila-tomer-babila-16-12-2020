import React, { useEffect } from 'react';
import ItemList from './ItemList';
import { Tabs, Select } from 'antd';
import { useDispatch } from 'react-redux';
import { editItemList } from '../actions';

const { TabPane } = Tabs;
const { Option } = Select;

function MainItemList() {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      // Load all items and their stores to state
      const itemsData = await fetch('/api/v1/items').then((res) => res.json());
      dispatch(editItemList(itemsData));
    })();
  }, [dispatch]);

  return (
    <div style={{ width: '60vw' }}>
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
