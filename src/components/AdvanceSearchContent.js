'use client';
import React, { useState } from 'react';
import { Card, Input, Row, Col, Select, DatePicker, Checkbox, Radio, Button, Space } from 'antd';
import { SearchOutlined, UserOutlined, PlusOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import '@/styles/AdvanceSearch.css';

const { Option } = Select;
const { RangePicker } = DatePicker;

const searchFields = [
    { label: 'Owner', icon: <UserOutlined />, defaultValue: 'Olivia Rhye' },
    { label: 'File Type', icon: <PlusOutlined />, defaultValue: 'PDF' },
    { label: 'Approved', icon: <UserOutlined />, defaultValue: 'Olivia Rhye' },
    { label: 'All Records by', icon: <UserOutlined />, defaultValue: 'Olivia Rhye' },
    { label: 'Uploaded by', icon: <UserOutlined />, defaultValue: 'Olivia Rhye' },
    { label: 'Created by', icon: <UserOutlined />, defaultValue: 'Olivia Rhye' },
    { label: 'Department', icon: <PlusOutlined />, defaultValue: 'Maintenance' },
    { label: 'Company', icon: <PlusOutlined />, defaultValue: 'Shell' },
    { label: 'Tags', icon: <PlusOutlined />, defaultValue: 'Rotating Equipment' },
    { label: 'Record Type', icon: <PlusOutlined />, defaultValue: 'Invoice' },
];

const dateFields = [
    { label: 'Uploaded Date' },
    { label: 'Approval Date' },
    { label: 'Creation Date' }
];

const ToggleOptions = () => {
    const [tolerance, setTolerance] = useState(2);

    return (
        <Card className="toggle-options">
            <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                <Row gutter={[16, 16]}>
                    <Col><Checkbox>Strict match</Checkbox></Col>
                    <Col>
                        <Checkbox defaultChecked>
                            Allowed tolerance
                            <span className="tolerance-count">{tolerance}</span>
                        </Checkbox>
                    </Col>
                    <Col><Checkbox>Search inside the records</Checkbox></Col>
                    <Col><Checkbox defaultChecked>Has File</Checkbox></Col>
                    <Col><Checkbox defaultChecked>Search Field</Checkbox></Col>
                </Row>
                <Radio.Group defaultValue="all" className="radio-group">
                    <Space direction="horizontal">
                        <Radio value="all">Search All</Radio>
                        <Radio value="record">Search In Record</Radio>
                        <Radio value="cabinet">Search in Cabinet</Radio>
                        <Radio value="space">Search in Space</Radio>
                    </Space>
                </Radio.Group>
            </Space>
        </Card>
    );
};

const SearchCriteria = () => (
    <Card className="search-criteria">
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
            {searchFields.map((field, index) => (
                <Row key={index} align="middle">
                    <Col span={6}><label>{field.label}</label></Col>
                    <Col span={16}>
                        <Select
                            defaultValue={field.defaultValue}
                            className="criteria-select"
                            style={{ width: '100%' }}
                        >
                            <Option value={field.defaultValue}>{field.defaultValue}</Option>
                            <Option value="option2">Option 2</Option>
                        </Select>
                    </Col>
                    <Col span={2}>
                        <Button icon={field.icon} type="text" className="criteria-icon-btn" />
                    </Col>
                </Row>
            ))}
            {dateFields.map((field, index) => (
                <Row key={`date-${index}`} align="middle">
                    <Col span={6}><label>{field.label}</label></Col>
                    <Col span={18}>
                        <RangePicker style={{ width: '100%' }} />
                    </Col>
                </Row>
            ))}
        </Space>
    </Card>
);

const AdvanceSearchContent = () => {
    const router = useRouter();

return (
    <div className="advance-search-page">
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
            <div className="header-section">
                <Button 
                    className="back-button" 
                    icon={<ArrowLeftOutlined />} 
                    type="text" 
                    onClick={() => router.back()}
                />
                <h2 className="page-title">Advance Search</h2>
            </div>
            <Input
                placeholder="Type Record name or description"
                prefix={<SearchOutlined />}
                size="large"
            />
            <ToggleOptions />
            <SearchCriteria />
            <div className="form-footer">
            <Button type="default">Search</Button>
            </div>
        </Space>
    </div>
    );
};

export default AdvanceSearchContent;