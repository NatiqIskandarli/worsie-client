'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, Input, Row, Col, Select, DatePicker, Button,Typography } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import '@/styles/Modification.css';

const { Option } = Select;
const { Title, Text } = Typography;

const ModificationLayout = ({ id }) => {
    const router = useRouter();
    const [recordData, setRecordData] = useState(null);

    useEffect(() => {
        if (id) {
            setRecordData({
                id,
                description: 'Sample Record Description',
                reference: '123456',
                po: 'PO-78910',
                version: '1.0',
                dateSubmitted: null,
                ownership: 'ownership',
                users: 'Abdullah',
                accessType: '',
                addGroup: '',
                currentStatus: '',
                tags: '',
                assets: null,
                approval: '',
                documentType: '',
                cabinets: '',
            });
        }
    }, [id]);

    if (!recordData) return <div>Loading...</div>;

    return (
        <div className="modification-page">
            <div className="header-section">
                <Button 
                    className="back-button" 
                    icon={<ArrowLeftOutlined />} 
                    type="text" 
                    onClick={() => router.back()}
                    >
                </Button>
                <Title level={2} className="page-title">Inbox / Modification</Title>
            </div>

            <Card className="modification-card">
                <Row gutter={16}>
                    <Col span={8}>
                        <label>Description</label>
                        <Input defaultValue={recordData.description} />
                    </Col>
                    <Col span={8}>
                        <label>Reference MMT</label>
                        <Input defaultValue={recordData.reference} className='highlighted'/>
                    </Col>
                    <Col span={8}>
                        <label>PO</label>
                        <Select defaultValue={recordData.po} className="full-width">
                            <Option value="PO-78910">PO-78910</Option>
                        </Select>
                    </Col>
                    <Col span={8}>
                        <label>Version</label>
                        <Select defaultValue={recordData.version} className="full-width">
                            <Option value="1.0">1.0</Option>
                            <Option value="2.0">2.0</Option>
                        </Select>
                    </Col>
                    <Col span={8}>
                        <label>Date Submitted</label>
                        <DatePicker defaultValue={recordData.dateSubmitted} className="full-width" />
                    </Col>
                    <Col span={8}>
                        <label>Ownership</label>
                        <Input defaultValue={recordData.ownership} />
                    </Col>
                    <Col span={8}>
                        <label>Users</label>
                        <Select defaultValue={recordData.users} className="full-width">
                            <Option value="Abdullah">Abdullah</Option>
                        </Select>
                    </Col>
                    <Col span={8}>
                        <label>Access Type (per user)</label>
                        <Input defaultValue={recordData.accessType} />
                    </Col>
                    <Col span={8}>
                        <label>Add Group</label>
                        <Select defaultValue={recordData.addGroup} className="full-width">
                            <Option value="Group1">Group 1</Option>
                            <Option value="Group2">Group 2</Option>
                        </Select>
                    </Col>
                    <Col span={8}>
                        <label>Current Status</label>
                        <Select defaultValue={recordData.currentStatus} className="full-width">
                            <Option value="Active">Active</Option>
                            <Option value="Inactive">Inactive</Option>
                        </Select>
                    </Col>
                    <Col span={8}>
                        <label>Tags (rotating, project)</label>
                        <DatePicker defaultValue={recordData.tags} className="full-width" />
                    </Col>
                    <Col span={8}>
                        <label>Document Type</label>
                        <Select defaultValue={recordData.documentType} className="full-width">
                            <Option value="Approved">Approved</Option>
                            <Option value="Pending">Pending</Option>
                        </Select>
                    </Col>
                    <Col span={8}>
                        <label>Assets</label>
                        <DatePicker defaultValue={recordData.assets} className="full-width" />
                    </Col>
                    <Col span={8}>
                        <label>Approval</label>
                        <Select defaultValue={recordData.approval} className="full-width">
                            <Option value="Approved">Approved</Option>
                            <Option value="Pending">Pending</Option>
                        </Select>
                    </Col>                    
                    <Col span={8}>
                        <label>Cabinets</label>
                        <Select defaultValue={recordData.cabinets} className="full-width">
                            <Option value="Main Archive">Main Archive</Option>
                            <Option value="Secondary Archive">Secondary Archive</Option>
                        </Select>
                    </Col>
                </Row>
            </Card>

            <Row gutter={16} style={{ marginTop: '20px' }}>
                <Col span={12}>
                    <label>Quick Note to Approver</label>
                    <Input.TextArea rows={4} placeholder="Add your note here" />
                </Col>
                <Col span={12}>
                    <label>My Comments</label>
                    <Input.TextArea rows={4} placeholder="Add comments here" />
                </Col>
            </Row>

            <div className="action-buttons">
                <Button color="danger" variant="solid" className='approveok'>Approve</Button>
                <Button color="default" variant="solid" className='rejectok'>Reject</Button>
                <Button color="default" variant="solid" className='reassignok'>Reassign</Button>
                <Button color="danger" variant="solid" className='deleteok'>Delete</Button>
            </div>
        </div>
    );
};

export default ModificationLayout;
