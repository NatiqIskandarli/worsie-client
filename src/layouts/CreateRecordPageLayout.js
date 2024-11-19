'use client';
import React from 'react';
import { Card, Row, Col, Input, Select, DatePicker, Button, Avatar,Typography } from 'antd';
import { useRouter } from 'next/navigation';
import { ArrowLeftOutlined, UserOutlined, FileOutlined,StarOutlined } from '@ant-design/icons';
import '@/styles/CreateRecordPage.css';

const { Option } = Select;
const { Title, Text } = Typography;

const CreateRecordPage = () => {
  const router = useRouter();

  const cabinets = [
    { title: 'Rotating Equipment', time: '13 hours ago', avatars: ['/images/avatar.png', '/images/avatar.png', '/images/avatar.png'] },
    { title: 'Dry Gas Seals', time: '16 hours ago', avatars: ['/images/avatar.png', '/images/avatar.png', '/images/avatar.png'] },
    { title: 'Declarations', time: '3 weeks ago', avatars: ['/images/avatar.png', '/images/avatar.png', '/images/avatar.png'] },
    { title: 'Radioactive sources', time: '1 month ago', avatars: ['/images/avatar.png', '/images/avatar.png', '/images/avatar.png'] },
  ];

  return (
    <div className="create-record-page">
      <div className="header-section">
        <div>
        <Button 
          className="back-button" 
          icon={<ArrowLeftOutlined />} 
          type="text" 
          onClick={() => router.back()}
        >
        </Button>
        <Title level={2} className="page-title">Create Record</Title>
        </div>
        <Button className="browse-button" type="primary">
          Browse Cabinet
        </Button>
      </div>
        
      <Row gutter={[16, 16]}>
        {cabinets.map((cabinet, index) => (
          <Col span={6} key={index}>
            <Card className="cabinet-card">
              <div className="cabinet-header">
                <Text className="cabinet-title">{cabinet.title}</Text>
                <StarOutlined className="favorite-icon" />
              </div>
              <div className="cabinet-content">
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

      
      <div className="record-form">
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <label>Description</label>
            <Input placeholder="Enter description" />
          </Col>
          <Col span={8}>
            <label>Reference MMT</label>
            <Input placeholder="Enter reference MMT" />
          </Col>
          <Col span={8}>
            <label>PO</label>
            <Input placeholder="Enter PO" />
          </Col>

          <Col span={8}>
            <label>Version *</label>
            <Select placeholder="Select version">
              <Option value="v1">v1</Option>
              <Option value="v2">v2</Option>
            </Select>
          </Col>
          <Col span={8}>
            <label>Date Submitted *</label>
            <DatePicker className="full-width" />
          </Col>
          <Col span={8}>
            <label>Ownership *</label>
            <Input placeholder="ownership" />
          </Col>

          <Col span={8}>
            <label>Users *</label>
            <Select placeholder="Select user">
              <Option value="abdullah">Abdullah</Option>
            </Select>
          </Col>
          <Col span={8}>
            <label>Access Type (per user)</label>
            <Input placeholder="Access Type" />
          </Col>
          <Col span={8}>
            <label>Visible to (only) *</label>
            <Input placeholder="Visible to" prefix={<UserOutlined />} />
          </Col>

          <Col span={8}>
            <label>Current Status</label>
            <Select placeholder="Select status">
              <Option value="active">Active</Option>
              <Option value="inactive">Inactive</Option>
            </Select>
          </Col>
          <Col span={8}>
            <label>Tags (rotating, project)</label>
            <Input placeholder="Tags" />
          </Col>
          <Col span={8}>
            <label>Document Type</label>
            <Input placeholder="Document Type" prefix={<FileOutlined />} />
          </Col>

          <Col span={8}>
            <label>Assets</label>
            <DatePicker className="full-width" />
          </Col>
          <Col span={8}>
            <label>Approval *</label>
            <Select placeholder="Select approval status">
              <Option value="approved">Approved</Option>
              <Option value="pending">Pending</Option>
            </Select>
          </Col>
          <Col span={8}>
            <label>Cabinets *</label>
            <Select placeholder="Select cabinet">
              <Option value="cabinet1">Cabinet 1</Option>
              <Option value="cabinet2">Cabinet 2</Option>
            </Select>
          </Col>
        </Row>

        <div className="form-buttons">
          <Button type="default">Save as Draft</Button>
          <Button type="primary">Create</Button>
        </div>
      </div>
    </div>
  );
};

export default CreateRecordPage;
