'use client';
import React, { useState } from 'react';
import { Layout, Avatar, Dropdown, List, Typography, Menu } from 'antd';
import {
  BulbOutlined,
  GlobalOutlined,
  BellOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import '@/styles/NavigationBar.css';

const { Header } = Layout;
const { Text } = Typography;

const mockNotifications = [
  { id: 1, name: 'Test 1', action: 'Added', date: '2024-11-19', type: 'Record', link: '/Inbox/RecordDetails/1' },
  { id: 2, name: 'Test 2', action: 'Approved', date: '2024-11-18', type: 'Cabinet', link: '/Inbox/Cabinet/2' },
  { id: 3, name: 'Test 3', action: 'Modified', date: '2024-11-17', type: 'Space', link: '/Inbox/Space/3' },
];

const NavigationBar = () => {
  const [quickNotificationsVisible, setQuickNotificationsVisible] = useState(false);
  const [userMenuVisible, setUserMenuVisible] = useState(false);
  const router = useRouter();

  const toggleQuickNotifications = () => {
    setQuickNotificationsVisible(!quickNotificationsVisible);
  };

  const toggleUserMenu = () => {
    setUserMenuVisible(!userMenuVisible);
  };

  const navigateTo = (path) => {
    router.push(path);
  };

  const notificationsMenu = (
    <div className="notifications-dropdown">
      <List
        dataSource={mockNotifications.slice(0, 10)}
        renderItem={(item) => (
          <List.Item>
            <a href={item.link}>
              <Text strong>{item.name}</Text> {item.action} a {item.type} on {item.date}.
            </a>
          </List.Item>
        )}
      />
      <div className="view-all-button" onClick={() => navigateTo('/notifications')}>
        View All Notifications
      </div>
    </div>
  );

  const userProfileMenu = (
    <Menu>
      <Menu.ItemGroup title={
        <div className="user-profile-header">
          <Avatar src="/images/avatar.png" size={40} alt="User" />
          <div className="user-info">
            <Text strong>Ad soyad</Text>
            <br />
            <Text type="secondary">worsie@example.com</Text>
          </div>
        </div>
      } />
      <Menu.Divider />
      <Menu.Item key="settings" onClick={() => navigateTo('/settings')}>
        Settings
      </Menu.Item>
      <Menu.Item key="help" onClick={() => navigateTo('/help')}>
        Help
      </Menu.Item>
    </Menu>
  );

  return (
    <Header className="navigation-bar">
      <div className="navigation-links">
        <Link href="/" className="nav-link">Home</Link>
        <Link href="/dynamic-sheets" className="nav-link">Dynamic Sheets</Link>
        <Link href="/recordo" className="nav-link active">Recordo</Link>
        <Link href="/papercut" className="nav-link">Papercut</Link>
        <Link href="/notebook" className="nav-link">Notebook</Link>
      </div>
      <div className="navigation-actions">
        <div className="action-item">
          <BulbOutlined style={{ fontSize: '20px', marginRight: '5px' }} />
          <span>Dark Mode</span>
        </div>
        <div className="action-item">
          <GlobalOutlined style={{ fontSize: '20px', marginRight: '5px' }} />
          <span>English</span>
        </div>
        <div className="action-item">
          <Dropdown
            overlay={notificationsMenu}
            trigger={['click']}
            placement="bottomRight"
            visible={quickNotificationsVisible}
            onVisibleChange={toggleQuickNotifications}
          >
            <div className="notification-icon">
              <BellOutlined style={{ fontSize: '20px', marginRight: '5px' }} />
            </div>
          </Dropdown>
        </div>
        <div className="action-item">
          <Dropdown
            overlay={userProfileMenu}
            trigger={['click']}
            placement="bottomRight"
            visible={userMenuVisible}
            onVisibleChange={toggleUserMenu}
          >
            <Avatar src="/images/avatar.png" alt="User" size={40} />
          </Dropdown>
        </div>
      </div>
    </Header>
  );
};

export default NavigationBar;
