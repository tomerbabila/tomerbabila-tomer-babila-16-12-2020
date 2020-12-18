import React, { useEffect } from 'react';
import ReceivedList from './ReceivedList';
import { Tabs, Select, Divider, Typography } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { editReceivedList, changeUsingCurrency, updateTime } from '../actions';

const { TabPane } = Tabs;
const { Option } = Select;
const { Text } = Typography;

function MainReceivedList() {
  const dispatch = useDispatch();

  const currency = useSelector((state) => state.currencyReducer.currency);
  const time = useSelector((state) => state.currencyReducer.time);
  const screenSize = useSelector((state) => state.mainReducer.screenSize);
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

  const handleChangeTime = (value) => {
    dispatch(updateTime(value));
  };

  return (
    <div className='content-class'>
      {currency && (
        <Tabs
          tabBarExtraContent={
            <Typography>
              {screenSize.width > 1000 ? (
                <Text>Update currency every: </Text>
              ) : null}
              <Select value={time} onChange={handleChangeTime}>
                <Option value={10000} key='1'>
                  10 sec.
                </Option>
                <Option value={30000} key='2'>
                  30 sec.
                </Option>
                <Option value={60000} key='3'>
                  60 sec.
                </Option>
              </Select>
              <Divider type='vertical' />
              {screenSize.width > 1000 ? <Text>Currency: </Text> : null}
              <Select
                value={usingCurrency.sign}
                onChange={handleCurrencyChange}
              >
                {Object.keys(currency.rates).map((rateName) => (
                  <Option value={rateName} key={rateName}>
                    {rateName}
                  </Option>
                ))}
              </Select>
            </Typography>
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
