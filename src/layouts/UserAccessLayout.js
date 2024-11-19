import React from 'react';
import { Card, Row, Col, Button, Input, Table,Typography } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import '@/styles/UserAccess.css';

const { Title, Text } = Typography;

const UserAccessLayout = ({ id }) => {
    const router = useRouter();

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Company',
            dataIndex: 'company',
            key: 'company',
        },
        {
            title: 'Access to',
            dataIndex: 'accessTo',
            key: 'accessTo',
        },
        {
            title: 'Sent on',
            dataIndex: 'sentOn',
            key: 'sentOn',
        },
        {
            title: 'Cabinet',
            dataIndex: 'cabinet',
            key: 'cabinet',
        },
        {
            title: 'Space',
            dataIndex: 'space',
            key: 'space',
        },
        {
            title: 'Access requested',
            dataIndex: 'accessRequested',
            key: 'accessRequested',
        },
        {
            title: 'Access Approve',
            dataIndex: 'accessApprove',
            key: 'accessApprove',
        },
    ];

    const dataSource = [
        {
            key: '1',
            name: 'Natig Iskandarli',
            company: 'Company A',
            accessTo: 'Record A',
            sentOn: '2024-07-09',
            cabinet: 'Main Archive',
            space: 'Shared Space',
            accessRequested: 'Yes',
            accessApprove: 'Pending',
        },
        {
            key: '2',
            name: 'Farid Mammadov',
            company: 'Company B',
            accessTo: 'Record A',
            sentOn: '2024-07-09',
            cabinet: 'Main Archive',
            space: 'Shared Space',
            accessRequested: 'Yes',
            accessApprove: 'Pending',
        },
    ];

    return (
        <div className="user-access-page">
            <div className="header-section">
                <Button 
                    className="back-button" 
                    icon={<ArrowLeftOutlined />} 
                    type="text" 
                    onClick={() => router.back()}
                    >
                </Button>
                <Title level={2} className="page-title">Inbox / User Access Request</Title>
            </div>

            <Table dataSource={dataSource} columns={columns} pagination={false} />

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

export default UserAccessLayout;
