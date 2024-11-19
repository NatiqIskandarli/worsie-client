// CreateSpacePage.js
'use client';
import React from 'react';
import { Card, Input, Row, Col, Select, Switch, Button, Upload,Typography } from 'antd';
import { ArrowLeftOutlined, UploadOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import '@/styles/CreateSpace.css';

const { Option } = Select;
const { Title, Text } = Typography;

const CreateSpacePage = () => {
  const router = useRouter();

  return (
    <div className="create-space-page">
      <div className="header-section">
        <Button 
            className="back-button" 
            icon={<ArrowLeftOutlined />} 
            type="text" 
            onClick={() => router.back()}
            >
        </Button>
        <Title level={2} className="page-title">Create Space</Title>
      </div>

      <Card className="space-form">
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <label>Name*</label>
            <Input placeholder="Enter space name" />
          </Col>
          <Col span={12}>
            <label>Company</label>
            <Input placeholder="Select company" />
          </Col>
          <Col span={12}>
            <label>Tags (rotating, project)*</label>
            <Input placeholder="Add tags" />
          </Col>
          <Col span={12}>
            <label>Add Users*</label>
            <Select placeholder="Select user" defaultValue="John Smith" className="full-width">
              <Option value="john">John Smith</Option>
              <Option value="olivia">Olivia Rhye</Option>
            </Select>
          </Col>
          <Col span={12}>
            <label>Country*</label>
            <Select placeholder="Select country" defaultValue="United States" className="full-width">
              <Option value="usa">United States</Option>
              <Option value="canada">Canada</Option>
            </Select>
          </Col>
          <Col span={12}>
            <label>User Group*</label>
            <Select placeholder="Select user group" defaultValue="Full Access" className="full-width">
              <Option value="full-access">Full Access</Option>
              <Option value="limited-access">Limited Access</Option>
            </Select>
          </Col>
          <Col span={12}>
            <label>Description</label>
            <Select placeholder="Select description" className="full-width">
              <Option value="description1">Description 1</Option>
              <Option value="description2">Description 2</Option>
            </Select>
          </Col>
          <Col span={12}>
            <label>Upload Logo*</label>
            <Upload>
              <Button icon={<UploadOutlined />}>Browse my pc</Button>
            </Upload>
          </Col>
          <Col span={12}>
            <label>Ask for approval to create cabinet</label>
            <Switch />
          </Col>
        </Row>

        <div className="form-footer">
          <Button type="primary" className="create-button">Create</Button>
          <Button type="default" className="cancel-button">Cancel</Button>
        </div>
      </Card>
    </div>
  );
};

export default CreateSpacePage;
