'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, Input, Row, Col, DatePicker, Select, Button,Typography } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import moment from 'moment';
import '@/styles/RecordDetails.css';

const { Option } = Select;
const { Title, Text } = Typography;

const RecordDetails = ({ id }) => {
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
                dateSubmitted: moment('2024-07-09'),
                createdBy: 'Admin',
                tags: 'Project, Rotating',
                assets: 'Asset-123',
                approvalStatus: 'Pending',
                documentType: 'Invoice',
                cabinet: 'Main Archive',
            });
        }
    }, [id]);

    if (!recordData) return <div>Loading...</div>;

    return (
        <div className="record-details-page">
            <div className="header-section">
                <Button 
                    className="back-button" 
                    icon={<ArrowLeftOutlined />} 
                    type="text" 
                    onClick={() => router.back()}
                    >
                </Button>
                <Title level={2} className="page-title">Inbox/{recordData.id === '1' ? 'Record' : 'Cabinet'} Details for {recordData.id}</Title>
            </div>

            <Card className="record-details-card">
                <Row gutter={16}>
                    <Col span={12}>
                        <label>Description</label>
                        <Input defaultValue={recordData.description} />
                    </Col>
                    <Col span={12}>
                        <label>Reference</label>
                        <Input defaultValue={recordData.reference} />
                    </Col>
                    <Col span={12}>
                        <label>PO</label>
                        <Input defaultValue={recordData.po}  />
                    </Col>
                    <Col span={12}>
                        <label>Version</label>
                        <Select defaultValue={recordData.version} className="full-width" >
                            <Option value="1.0">1.0</Option>
                            <Option value="2.0">2.0</Option>
                        </Select>
                    </Col>
                    <Col span={12}>
                        <label>Date Submitted</label>
                        <DatePicker defaultValue={recordData.dateSubmitted} className="full-width"  />
                    </Col>
                    <Col span={12}>
                        <label>Created By</label>
                        <Input defaultValue={recordData.createdBy}  />
                    </Col>
                    <Col span={12}>
                        <label>Tags</label>
                        <Input defaultValue={recordData.tags}  />
                    </Col>
                    <Col span={12}>
                        <label>Assets</label>
                        <Input defaultValue={recordData.assets}  />
                    </Col>
                    <Col span={12}>
                        <label>Approval Status</label>
                        <Select defaultValue={recordData.approvalStatus} className="full-width" >
                            <Option value="Pending">Pending</Option>
                            <Option value="Approved">Approved</Option>
                            <Option value="Rejected">Rejected</Option>
                        </Select>
                    </Col>
                    <Col span={12}>
                        <label>Document Type</label>
                        <Input defaultValue={recordData.documentType}  />
                    </Col>
                    <Col span={12}>
                        <label>Cabinet</label>
                        <Select defaultValue={recordData.cabinet} className="full-width" >
                            <Option value="Main Archive">Main Archive</Option>
                            <Option value="cabinet1">cabinet1</Option>
                            <Option value="cabinet2">cabinet2</Option>
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

export default RecordDetails;
