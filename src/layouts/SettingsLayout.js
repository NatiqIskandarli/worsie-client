'use client';
import React from 'react';
import { Card, Input, Button, Typography, Select } from 'antd';
import '@/styles/SettingsPage.css';

const { Title } = Typography;
const { Option } = Select;

const SettingsLayout = () => {
  return (
    <div className="settings-page">
      <Title level={2}>Settings</Title>

      <Card className="settings-card">
        <Title level={4}>Change Password</Title>
        <Input.Password placeholder="Current Password" />
        <Input.Password placeholder="New Password" style={{ marginTop: 10 }} />
        <Input.Password placeholder="Confirm Password" style={{ marginTop: 10 }} />
        <Button type="primary" style={{ marginTop: 10 }}>Update Password</Button>
      </Card>

      <Card className="settings-card">
        <Title level={4}>Two-Way Authentication</Title>
        <Button type="default">Enable Two-Way Authentication</Button>
      </Card>

      <Card className="settings-card">
        <Title level={4}>Edit Personal Information</Title>
        <Input placeholder="Full Name" />
        <Input placeholder="Company" style={{ marginTop: 10 }} />
        <Input placeholder="Date of Birth" type="date" style={{ marginTop: 10 }} />
        <Select placeholder="Gender" style={{ marginTop: 10, width: '100%' }}>
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
        </Select>
        <Input placeholder="Country" style={{ marginTop: 10 }} />
        <Input placeholder="Time Zone" style={{ marginTop: 10 }} />
        <Button type="primary" style={{ marginTop: 10 }}>Save Changes</Button>
      </Card>
    </div>
  );
};

export default SettingsLayout;
