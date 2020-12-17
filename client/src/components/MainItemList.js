import React, { useEffect } from 'react';
import ItemList from './ItemList';
import StoresInfo from './StoresInfo';
import { Tabs, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { editItemList, changeUsingCurrency } from '../actions';

const { TabPane } = Tabs;
const { Option } = Select;

function MainItemList() {
  const dispatch = useDispatch();
  const currency = useSelector((state) => state.currencyReducer.currency);
  const usingCurrency = useSelector(
    (state) => state.currencyReducer.usingCurrency
  );

  useEffect(() => {
    (async () => {
      // Load all items and their stores to state
      const itemsData = await fetch('/api/v1/items').then((res) => res.json());
      dispatch(editItemList(itemsData));
    })();
  }, [dispatch]);

  const handleCurrencyChange = (value) => {
    dispatch(
      changeUsingCurrency({ sign: value, value: currency.rates[value] })
    );
  };

  return (
    <div style={{ width: '60vw' }}>
      {currency && (
        <Tabs
          tabBarExtraContent={
            <Select value={usingCurrency.sign} onChange={handleCurrencyChange}>
              {Object.keys(currency.rates).map((rateName) => (
                <Option value={rateName} key={rateName}>{rateName}</Option>
              ))}
            </Select>
          }
        >
          <TabPane tab='Item List' key='1'>
            <ItemList />
          </TabPane>
          <TabPane tab='Stores Information' key='2'>
            <StoresInfo />
          </TabPane>
        </Tabs>
      )}
    </div>
  );
}

export default MainItemList;
