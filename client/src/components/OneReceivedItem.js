import React from 'react';
import { Card, Typography, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { editReceivedList } from '../actions';

const { Paragraph, Text } = Typography;

function OneReceivedItem({ itemData, storeName }) {
  const dispatch = useDispatch();

  const usingCurrency = useSelector(
    (state) => state.currencyReducer.usingCurrency
  );

  const backItemToItemList = async () => {
    const deleteReqBody = {
      id: itemData.id,
      store: storeName,
    };

    // Delete item from received item list
    const receivedItem = await fetch('/api/v1/receivedItems', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(deleteReqBody),
    }).then((response) => response.json());

    const postReqBody = {
      ...receivedItem,
      store: storeName,
    };

    // Add item back to item list
    await fetch('/api/v1/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postReqBody),
    }).then((response) => response.json());

    // Change state
    const newState = await fetch('/api/v1/receivedItems').then((res) =>
      res.json()
    );
    dispatch(editReceivedList(newState));
  };

  return (
    <div className='card-margin'>
      <Card
        title={itemData.name}
        extra={
          <Button type='primary' onClick={() => backItemToItemList()}>
            Recall
          </Button>
        }
        className='card-class'
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
