import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  editItemList,
  changeUsingCurrency,
  updateTime,
  editOptions,
} from '../actions';
import ItemList from './ItemList';
import StoresInfo from './StoresInfo';
import { Tabs, Select, Typography, Divider } from 'antd';

const { TabPane } = Tabs;
const { Option } = Select;
const { Text } = Typography;

function MainItemList() {
  const dispatch = useDispatch();

  const currency = useSelector((state) => state.currencyReducer.currency);
  const time = useSelector((state) => state.currencyReducer.time);
  const screenSize = useSelector((state) => state.mainReducer.screenSize);
  const usingCurrency = useSelector(
    (state) => state.currencyReducer.usingCurrency
  );

  useEffect(() => {
    (async () => {
      try {
        // Load all items and their stores to state
        const itemsData = await fetch('/api/v1/items').then((res) =>
          res.json()
        );

        const allStores = itemsData.map((storeData) => {
          return { value: storeData.store };
        });

        dispatch(editItemList(itemsData));
        dispatch(editOptions(allStores));
      } catch (error) {
        throw new Error(error);
      }
    })();
  }, [dispatch]);

  // Change currency state
  const handleCurrencyChange = (value) => {
    dispatch(
      changeUsingCurrency({ sign: value, value: currency.rates[value] })
    );
  };

  // Change fetch time of currency 
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
          <TabPane tab='Items' key='1'>
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
