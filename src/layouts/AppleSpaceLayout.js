'use client';
import React, { useState, lazy } from 'react';
import { Card, Row, Col, Button, Input, Avatar, Radio, Typography, Space } from 'antd';
import { FilterOutlined, SearchOutlined, ArrowLeftOutlined, AppstoreOutlined, BarsOutlined,StarOutlined  } from '@ant-design/icons';
import '@/styles/AppleSpacePage.css';

const Dashboard = lazy(() => import('@/components/Dashboard'));
const CabinetCard = lazy(() =>
  import('@/components/CabinetAndSpaceCard').then((module) => ({
    default: module.CabinetCard,
  }))
);

const { Title,Text } = Typography;

const AppleSpacePage = () => {
  const [viewMode, setViewMode] = useState('grid');
  const cabinets = [
    { title: 'Rotating Equipment', time: '13 hours ago', avatars: ['/images/avatar.png', '/images/avatar.png', '/images/avatar.png'] },
    { title: 'Dry Gas Seals', time: '16 hours ago', avatars: ['/images/avatar.png', '/images/avatar.png', '/images/avatar.png'] },
    { title: 'Declarations', time: '3 weeks ago', avatars: ['/images/avatar.png', '/images/avatar.png', '/images/avatar.png'] },
    { title: 'Radioactive sources', time: '1 month ago', avatars: ['/images/avatar.png', '/images/avatar.png', '/images/avatar.png'] },
];
  const handleViewChange = (e) => {
    setViewMode(e.target.value);
  };

  return (
    <div className="apple-space-page">
      {/* Header Section */}
      <div className="header-section">
        <Button
          className="back-button"
          icon={<ArrowLeftOutlined />}
          type="text"
          onClick={() => console.log('Go Back')}
        />
        <Title level={2} className="page-title">Apple Space</Title>
      </div>

      {/* Dashboard */}
      <Dashboard />

      {/* Controls Section */}
      <div className="controls-section">
        <Space size="large" className="controls-wrapper">
          <Radio.Group defaultValue="grid" onChange={handleViewChange}>
            <Radio.Button value="grid">
              <AppstoreOutlined /> GRID
            </Radio.Button>
            <Radio.Button value="list">
              <BarsOutlined /> LIST
            </Radio.Button>
          </Radio.Group>
          <div className='filtrsearch'>
            <Button icon={<FilterOutlined />} type="default">
              Filters
            </Button>
            <Input
              placeholder="Search"
              prefix={<SearchOutlined />}
              className="search-input"
            />
          </div>
        </Space>
      </div>

      {/* Records Section */}


      <Row
        gutter={[24, 24]}
        className={`records-container ${viewMode === 'grid' ? 'grid-view' : 'list-view'}`}
      >
        {cabinets.map((cabinet, index) => (
          <Col span={6} key={index} xs={24} sm={12} md={viewMode === 'grid' ? 6 : 24}>
            <Card className="cabinet-card">
              <div className="cabinet-header">
                <Text className="cabinet-title">{cabinet.title}</Text>
                <StarOutlined className="favorite-icon" />
              </div>
              <div className={viewMode === 'grid' ? 'cabinet-content' : 'cabinet-content-list'}>
                <img src="/images/cabinet.png" alt="Cabinet" className="cabinet-image" />
              </div>
              <div className="cabinet-footer">
                <Text type="secondary">{cabinet.time}</Text>
                <Avatar.Group className="cabinet-avatars">
                  {cabinet.avatars.map((avatar, i) => (
                    <Avatar key={i} src={avatar} />
                  ))}
                </Avatar.Group>
              </div>
            </Card>
          </Col>
        ))}
    </Row>




     
    </div>
  );
};

export default AppleSpacePage;
