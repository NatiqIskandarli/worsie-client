import React from 'react';
import { Card, Row, Col, Input, Select, Button, Switch,Typography } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import '@/styles/Space.css';

const { Option } = Select;
const { Title, Text } = Typography;

const SpaceLayout = ({ id }) => {
    const router = useRouter();

    return (
        <div className="space-page">
            <div className="header-section">
                <Button 
                    className="back-button" 
                    icon={<ArrowLeftOutlined />} 
                    type="text" 
                    onClick={() => router.back()}
                    >
                </Button>
                <Title level={2} className="page-title">Inbox / Space</Title>
            </div>

            <Card className="space-card">
                <Row gutter={16}>
                    <Col span={12}>
                        <label>Name</label>
                        <Input placeholder="Enter Name" />
                    </Col>
                    <Col span={12}>
                        <label>Company</label>
                        <Input placeholder="Enter Company" />
                    </Col>
                    <Col span={12}>
                        <label>Description</label>
                        <Input placeholder="Enter Description" />
                    </Col>
                    <Col span={12}>
                        <label>Tags (rotating, project)</label>
                        <Input placeholder="Enter Tags" />
                    </Col>
                    <Col span={12}>
                        <label>Add Owner</label>
                        <Select defaultValue="Abdullah" className="full-width">
                            <Option value="abdullah">Abdullah</Option>
                        </Select>
                    </Col>
                    <Col span={12}>
                        <label>Add Approvers</label>
                        <Select defaultValue="Abdullah" className="full-width">
                            <Option value="abdullah">Abdullah</Option>
                        </Select>
                    </Col>
                    <Col span={24} style={{ marginTop: '20px' }}>
                        <label>Logo</label>
                        <div className="logo-buttons">
                            <Button>Replace</Button>
                            <Button>Delete</Button>
                        </div>
                    </Col>
                    <Col span={24} style={{ marginTop: '20px' }}>
                        <label>Ask for approval to create cabinet</label>
                        <Switch defaultChecked />
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

export default SpaceLayout;
