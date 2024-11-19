// FollowingPage.js
'use client';
import React from 'react';
import { Card, Row, Col, Tabs, Table, Avatar, Dropdown, Button, Menu, Pagination, Typography } from 'antd';
import {
  FolderOutlined,
  FileTextOutlined,
  ArrowLeftOutlined,
  EllipsisOutlined,
} from '@ant-design/icons';
import '@/styles/Following.css';

const { TabPane } = Tabs;
const { Title } = Typography;

const FollowingPage = () => {
  const columns = [
    {
      title: 'Archived Folder',
      dataIndex: 'type',
      key: 'type',
      render: (type) => (
        <div>
          {type === 'Cabinet' ? <FolderOutlined style={{ color: '#ffbb00' }} /> : <FileTextOutlined />}
          <span style={{ marginLeft: 8 }}>{type}</span>
        </div>
      ),
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Company',
      dataIndex: 'company',
      key: 'company',
    },
    {
      title: 'Change to User',
      dataIndex: 'userGroup',
      key: 'userGroup',
      render: (users) => (
        <Avatar.Group maxCount={4}>
          {users.map((user, index) => (
            <Avatar key={index} src={user.avatar} />
          ))}
        </Avatar.Group>
      ),
    },
    {
      title: 'Last Updated',
      dataIndex: 'lastUpdated',
      key: 'lastUpdated',
    },
    {
      title: 'Space Actions',
      key: 'actions',
      render: () => (
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item key="1">Action 1</Menu.Item>
              <Menu.Item key="2">Action 2</Menu.Item>
            </Menu>
          }
        >
          <Button icon={<EllipsisOutlined />} />
        </Dropdown>
      ),
    },
  ];

  const data = Array(10)
    .fill()
    .map((_, index) => ({
      key: index,
      type: index % 2 === 0 ? 'Cabinet' : 'Record',
      description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum',
      company: 'Company',
      userGroup: [
        { avatar: 'https://via.placeholder.com/40' },
        { avatar: 'https://via.placeholder.com/40' },
        { avatar: 'https://via.placeholder.com/40' },
        { avatar: 'https://via.placeholder.com/40' },
      ],
      lastUpdated: 'Sep 27, 2024',
    }));

  return (
    <div className="following-page">
      <div className="header-section">
        <Button 
            className="back-button" 
            icon={<ArrowLeftOutlined />} 
            type="text" 
            onClick={() => router.back()}
            >
        </Button>
        <Title level={2} className="page-title">Following</Title>
      </div>

      {/* Tabs Section */}
      <Tabs defaultActiveKey="1" className="following-tabs">
        <TabPane tab="Cabinets" key="1">
          <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            className="following-table"
          />
          <Pagination
            defaultCurrent={1}
            total={50}
            className="pagination-bar"
            showSizeChanger={false}
            showQuickJumper
          />
        </TabPane>
        <TabPane tab="Files" key="2">
          {/* Additional content for Files tab can be added here */}
        </TabPane>
      </Tabs>
    </div>
  );
};

export default FollowingPage;
