'use client';
import React from 'react';
import { Card, Row, Col } from 'antd';
import { RiseOutlined, FallOutlined, DatabaseOutlined, InboxOutlined, EditOutlined } from '@ant-design/icons';

const Dashboard = () => {
  const stats = [
    {
      label: 'Total Records',
      value: 450,
      change: '8.5% Up from yesterday',
      changeType: 'up',
      icon: <DatabaseOutlined style={{ fontSize: '24px', color: '#52c41a' }} />,
    },
    {
      label: 'New Records',
      value: 112,
      change: '8.5% Up from last week',
      changeType: 'up',
      icon: <InboxOutlined style={{ fontSize: '24px', color: '#faad14' }} />,
    },
    {
      label: 'Revisions',
      value: 187,
      change: '4.3% Down from yesterday',
      changeType: 'down',
      icon: <EditOutlined style={{ fontSize: '24px', color: '#ff4d4f' }} />,
    },
    {
      label: 'Unallocated',
      value: '45 Gb',
      change: '1.3% Up from last month',
      changeType: 'up',
      icon: <FallOutlined style={{ fontSize: '24px', color: '#1890ff' }} />,
    },
  ];

  return (
    <Row gutter={[16, 16]} className="mb-6 customDashCard">
      {stats.map((stat, index) => (
        <Col key={index} xs={24} sm={12} md={6}>
          <Card bordered={true} className="flex items-center space-x-4">
            <div className='dashboardModules'>
              <h4 className="text-lg font-semibold">{stat.label}</h4>
              <div className="icon-container">{stat.icon}</div>
            </div>
            <div>
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className={`mt-3 ${stat.changeType === 'down' ? 'text-red-500' : 'text-green-500'}`}>
                {stat.changeType === 'up' ? <RiseOutlined /> : <FallOutlined />} {stat.change}
              </p>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Dashboard;
