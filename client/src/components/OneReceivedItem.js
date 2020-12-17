import React from 'react';
import { Card, Typography, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

const { Paragraph, Text } = Typography;

function OneReceivedItem({ itemData }) {
  const usingCurrency = useSelector(
    (state) => state.currencyReducer.usingCurrency
  );

  return (
    <div>
      <Card
        title={itemData.name}
        style={{ width: 300 }}
      >
        <Paragraph>
          Price:{' '}
          <Text strong>
            {(itemData.price * usingCurrency.value).toFixed(2)}{' '}
            {usingCurrency.sign}
          </Text>
        </Paragraph>
        <Paragraph>
          <Text strong>Item arrived!</Text>
        </Paragraph>
      </Card>
    </div>
  );
}

export default OneReceivedItem;
