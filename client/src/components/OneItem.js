import React from 'react';
import { Card, Typography, Button, Alert } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { editItemList } from '../actions';

const { Paragraph, Text } = Typography;

function OneItem({ itemData, storeName }) {
  const dispatch = useDispatch();
  const usingCurrency = useSelector(
    (state) => state.currencyReducer.usingCurrency
  );

  const moveItemToReceivedItems = async () => {
    const deleteReqBody = {
      id: itemData.id,
      store: storeName,
    };

    // Delete item from item list
    const receivedItem = await fetch('/api/v1/items', {
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

    // Add item to received list
    await fetch('/api/v1/receivedItems', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postReqBody),
    }).then((response) => response.json());

    // Change state
    const newState = await fetch('/api/v1/items').then((res) => res.json());
    dispatch(editItemList(newState));
  };

  return (
    <div className='card-margin'>
      <Card
        title={itemData.name}
        extra={
          <Button type='primary' onClick={() => moveItemToReceivedItems()}>
            Received
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
          Estimated date:{' '}
          <Text strong>
            {new Date(itemData.deliveryESTDate).toDateString()}
          </Text>
        </Paragraph>
        {Date.now() > itemData.deliveryESTDate ? (
          <Alert message='Still not here? Contact the seller.' type='error' />
        ) : (
          <Alert message='Everything is cool... wait for delivery.' />
        )}
      </Card>
    </div>
  );
}

export default OneItem;
