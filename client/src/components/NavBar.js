import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Typography } from 'antd';
import { ProfileOutlined, FileDoneOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { changeTab } from '../actions';

const { Title } = Typography;

function NavBar() {
  const dispatch = useDispatch();
  
  const tab = useSelector((state) => state.antdReducer.currentTab);

  return (
    <div className='navbar'>
      <Title>Items Tracker</Title>
      <Menu
        mode='horizontal'
        onClick={(e) => dispatch(changeTab(e.key))}
        selectedKeys={tab}
      >
        <Menu.Item key='list' icon={<ProfileOutlined />}>
          <Link to={'/list'}>List</Link>
        </Menu.Item>
        <Menu.Item key='received' icon={<FileDoneOutlined />}>
          <Link to={'/received'}>Received</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default NavBar;
