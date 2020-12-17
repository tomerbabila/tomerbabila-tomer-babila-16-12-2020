import React from 'react';
import { Card, Typography, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

const { Title, Paragraph, Text, Link } = Typography;

function OneItem({ itemData, storeName }) {
  

  return (
    <Card
      title={itemData.name}
      style={{ width: 300 }}
    >
      <Text>Delivery estimated time: {itemData.deliveryESTDate}</Text>
    </Card>
  );
}

export default OneItem;
