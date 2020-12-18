import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PlusOutlined } from '@ant-design/icons';
import {
  Tabs,
  Button,
  Typography,
  Modal,
  Form,
  Input,
  InputNumber,
  DatePicker,
  AutoComplete,
  message,
} from 'antd';
import OneItem from './OneItem';
import { editItemList } from '../actions';

const { TabPane } = Tabs;
const { Text } = Typography;

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
};

function ItemList() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.mainReducer.itemList);
  const screenSize = useSelector((state) => state.mainReducer.screenSize);
  const options = useSelector((state) => state.antdReducer.options);

  // Local states for new item modal
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [newItemName, setNewItemName] = useState('');
  const [newItemStore, setNewItemStore] = useState('');
  const [newItemDate, setNewItemDate] = useState(0);
  const [newItemPrice, setNewItemPrice] = useState(0);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);

    (async () => {
      try {
        const postReqBody = {
          name: newItemName,
          store: newItemStore,
          deliveryESTDate: newItemDate,
          price: newItemPrice,
        };

        await fetch('/api/v1/items', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(postReqBody),
        }).then((response) => response.json());

        // Load all items and their stores to state
        const itemsData = await fetch('/api/v1/items').then((res) =>
          res.json()
        );
        dispatch(editItemList(itemsData));

        setVisible(false);
        setConfirmLoading(false);

        message.success('Item added successfully!');
      } catch (error) {
        throw new Error(error);
      }
    })();
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <div>
      <Tabs
        defaultActiveKey='1'
        tabPosition={screenSize.width > 850 ? 'left' : 'top'}
        size={'large'}
        tabBarExtraContent={
          <Typography>
            <Button
              type='primary'
              size='large'
              icon={<PlusOutlined />}
              onClick={showModal}
            >
              {screenSize.width > 850 ? 'Add Item' : ''}
            </Button>
            <Modal
              title='Add new item...'
              visible={visible}
              onOk={handleOk}
              confirmLoading={confirmLoading}
              onCancel={handleCancel}
            >
              <Form {...layout} name='basic'>
                <Form.Item
                  label='Store'
                  name='store'
                  rules={[
                    { required: true, message: 'Please enter store name!' },
                  ]}
                >
                  <AutoComplete
                    options={options}
                    onChange={(value) => setNewItemStore(value)}
                    filterOption={(inputValue, option) =>
                      option.value
                        .toUpperCase()
                        .indexOf(inputValue.toUpperCase()) !== -1
                    }
                  />
                </Form.Item>
                <Form.Item
                  label='Item'
                  name='item'
                  rules={[
                    { required: true, message: 'Please enter item name!' },
                  ]}
                >
                  <Input onChange={(e) => setNewItemName(e.target.value)} />
                </Form.Item>
                <Form.Item
                  label='Price'
                  name='price'
                  rules={[{ required: true, message: 'Please enter price!' }]}
                >
                  <InputNumber
                    onChange={(value) => setNewItemPrice(parseFloat(value))}
                  />
                  <Text strong> USD</Text>
                </Form.Item>
                <Form.Item
                  label='Estimated Date'
                  name='date'
                  rules={[{ required: true, message: 'Please pick date!' }]}
                >
                  <DatePicker
                    onChange={(date, dateString) =>
                      setNewItemDate(Date.parse(dateString))
                    }
                  />
                </Form.Item>
              </Form>
            </Modal>
          </Typography>
        }
      >
        {items &&
          items.map((storeData) => (
            <TabPane
              tab={`${storeData.store}`}
              key={storeData.store}
              className='list-class'
            >
              {storeData.items &&
                storeData.items.map((item) => (
                  <OneItem
                    key={item.id}
                    itemData={item}
                    storeName={storeData.store}
                  />
                ))}
            </TabPane>
          ))}
      </Tabs>
    </div>
  );
}

export default ItemList;
