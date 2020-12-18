import React, { useEffect } from 'react';
import ReceivedList from './ReceivedList';
import { Tabs, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { editReceivedList, changeUsingCurrency } from '../actions';

const { TabPane } = Tabs;
const { Option } = Select;

function MainReceivedList() {
  const dispatch = useDispatch();

  const currency = useSelector((state) => state.currencyReducer.currency);
  const usingCurrency = useSelector(
    (state) => state.currencyReducer.usingCurrency
  );
  // Load all items and stores to state
  useEffect(() => {
    (async () => {
      const data = await fetch('/api/v1/receivedItems').then((res) =>
        res.json()
      );
      dispatch(editReceivedList(data));
    })();
  }, [dispatch]);

  const handleCurrencyChange = (value) => {
    dispatch(
      changeUsingCurrency({ sign: value, value: currency.rates[value] })
    );
  };

  return (
    <div className='content-class'>
      {currency && (
        <Tabs
          tabBarExtraContent={
            <Select value={usingCurrency.sign} onChange={handleCurrencyChange}>
              {Object.keys(currency.rates).map((rateName) => (
                <Option value={rateName} key={rateName}>
                  {rateName}
                </Option>
              ))}
            </Select>
          }
        >
          <TabPane tab='Received Items' key='1'>
            <ReceivedList />
          </TabPane>
        </Tabs>
      )}
    </div>
  );
}

export default MainReceivedList;
