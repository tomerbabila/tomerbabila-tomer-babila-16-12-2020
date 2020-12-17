import React from 'react';
import { Card, Typography, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { editItemList } from '../actions';

const { Paragraph, Text } = Typography;

function OneItem({ itemData, storeName }) {
  const dispatch = useDispatch();

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
    // TODO: change fetch to local state change (slice from array)
    const newState = await fetch('/api/v1/items').then((res) => res.json());
    dispatch(editItemList(newState));
  };

  return (
    <Card
      title={itemData.name}
      extra={
        <Button type='primary' onClick={() => moveItemToReceivedItems()}>
          Received
        </Button>
      }
      style={{ width: 300 }}
    >
      <Paragraph>
        Price: <Text strong>{itemData.price}</Text>
      </Paragraph>
      <Paragraph>
        Delivery estimated time: <Text strong>{itemData.deliveryESTDate}</Text>
      </Paragraph>
    </Card>
  );
}

export default OneItem;
