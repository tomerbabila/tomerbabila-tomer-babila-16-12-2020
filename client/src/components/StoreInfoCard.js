import React from 'react';
import { Card, Typography } from 'antd';
import { useSelector } from 'react-redux';

const { Paragraph, Text } = Typography;

function StoreInfoCard({ storeData }) {
  const usingCurrency = useSelector(
    (state) => state.currencyReducer.usingCurrency
  );

  return (
    <div className='card-margin'>
      <Card title={storeData.store} className='card-class'>
        <Paragraph>
          You bought from this store:{' '}
          <Text strong>{storeData.items.length}</Text> items.
        </Paragraph>
        <Paragraph>
          Total amount:{' '}
          <Text strong>
            {(
              storeData.items.reduce((a, { price }) => a + price, 0) *
              usingCurrency.value
            ).toFixed(2)}{' '}
            {usingCurrency.sign}
          </Text>
        </Paragraph>
      </Card>
    </div>
  );
}

export default StoreInfoCard;
