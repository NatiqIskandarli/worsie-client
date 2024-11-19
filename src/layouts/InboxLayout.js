import React from 'react';
import { Tabs, Table, Button, Input, Tag, Avatar, Pagination, Row, Col, Space,Typography,Divider } from 'antd';
import {
  CheckOutlined,
  CloseOutlined,
  SearchOutlined,
  FilterOutlined,
  DeleteOutlined,
  SyncOutlined,
  ArrowLeftOutlined,
  FileDoneOutlined,
  CheckCircleOutlined
} from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import '@/styles/Inbox.css';

const { TabPane } = Tabs;
const { Title, Text } = Typography;

const dataSource = [
  {
    key: '1',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum...',
    type: 'Record',
    sentBy: { name: 'Admin', avatar: '/images/avatar.png' },
    sentOn: 'July 9, 2024',
    priority: 'Med',
    deadlines: '01-02-2024',
  },{
    key: '2',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum...',
    type: 'Cabinet',
    sentBy: { name: 'Admin', avatar: '/images/avatar.png' },
    sentOn: 'July 19, 2024',
    priority: 'High',
    deadlines: '01-02-2024',
  },{
    key: '3',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum...',
    type: 'Space',
    sentBy: { name: 'Admin', avatar: '/images/avatar.png' },
    sentOn: 'July 19, 2024',
    priority: 'High',
    deadlines: '01-02-2024',
  },{
    key: '4',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum...',
    type: 'User Access',
    sentBy: { name: 'Admin', avatar: '/images/avatar.png' },
    sentOn: 'July 19, 2024',
    priority: 'High',
    deadlines: '01-02-2024',
  },{
    key: '5',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum...',
    type: 'Revise',
    sentBy: { name: 'Admin', avatar: '/images/avatar.png' },
    sentOn: 'July 19, 2024',
    priority: 'High',
    deadlines: '01-02-2024',
  },
];

const columns = [
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Sent by',
    dataIndex: 'sentBy',
    key: 'sentBy',
    render: (sentBy) => (
      <>
        <Avatar src={sentBy.avatar} /> {sentBy.name}
      </>
    ),
  },
  {
    title: 'Sent on',
    dataIndex: 'sentOn',
    key: 'sentOn',
  },
  {
    title: 'Priority',
    dataIndex: 'priority',
    key: 'priority',
    render: (priority) => (
      <Tag color={priority === 'High' ? 'red' : priority === 'Med' ? 'orange' : 'green'}>
        {priority}
      </Tag>
    ),
  },
  {
    title: 'Deadlines',
    dataIndex: 'deadlines',
    key: 'deadlines',
  },
  {
    title: 'Actions Required',
    key: 'actions',
    render: () => (
      <div className="action-buttons">
        <Button icon={<CheckOutlined />} type="text" className="action-btn checkok" />
        <Button icon={<CloseOutlined />} type="text" className="action-btn closedel" />
        <Button icon={<FileDoneOutlined />} type="text" className="action-btn assignok" />
      </div>
    ),
  },
];

const pendingApprovalsData = [
    {
      key: '1',
      description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum...',
      reference: '#123456',
      priority: 'Medium',
      date: 'July 9, 2024',
      deadline: 'July 12, 2024',
      sentBy: { name: 'John Doe', avatar: '/images/avatar.png' },
    },
  ];
  
  const pendingApprovalsColumns = [
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Reference #',
      dataIndex: 'reference',
      key: 'reference',
    },
    {
      title: 'Priority',
      dataIndex: 'priority',
      key: 'priority',
      render: (priority) => (
        <Tag color={priority === 'High' ? 'red' : priority === 'Medium' ? 'orange' : 'green'}>
          {priority}
        </Tag>
      ),
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Deadline',
      dataIndex: 'deadline',
      key: 'deadline',
    },
    {
      title: 'Sent By',
      dataIndex: 'sentBy',
      key: 'sentBy',
      render: (sentBy) => (
        <>
          <Avatar src={sentBy.avatar} /> {sentBy.name}
        </>
      ),
    },
    {
      title: 'Status Tracker',
      key: 'statusTracker',
      render: () => (
        <div className="status-tracker">
          <Button icon={<FileDoneOutlined />} type="text" className="status-btn check-btn" />
          <Divider type="horizontal" />
          <Button icon={<CheckOutlined />} type="text" className="status-btn check-btncheck" />
          <Divider type="horizontal" />
          <Button icon={<CheckCircleOutlined />} type="text" className="status-btn close-btn" />
          <Divider type="horizontal" />
          <Button icon={<SyncOutlined />} type="text" className="status-btn sync-btn" />
          <Divider type="horizontal" />
          <Button icon={<DeleteOutlined />} type="text" className="status-btn delete-btn" />
        </div>
      ),
    },
  ];



  const rejectedData = [
    {
      key: '1',
      description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum...',
      status: { label: 'Admin', color: 'gray' },
      rejectedOn: 'July 9, 2024',
      reason: 'Lorem',
      type: 'File',
      priority: 'Medium',
    },
  ];
  
  const rejectedColumns = [
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <Tag color={status.color} className="status-tag">
          {status.label}
        </Tag>
      ),
    },
    {
      title: 'Rejected on',
      dataIndex: 'rejectedOn',
      key: 'rejectedOn',
    },
    {
      title: 'Reason',
      dataIndex: 'reason',
      key: 'reason',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Priority',
      dataIndex: 'priority',
      key: 'priority',
      render: (priority) => (
        <Tag color={priority === 'High' ? 'red' : priority === 'Medium' ? 'orange' : 'green'}>
          {priority}
        </Tag>
      ),
    },
    {
      title: 'Actions Required',
      key: 'actions',
      render: () => (
        <div className="action-buttons">
        <Button icon={<CheckOutlined />} type="text" className="action-btn checkok" />
        <Button icon={<CloseOutlined />} type="text" className="action-btn closedel" />
        <Button icon={<FileDoneOutlined />} type="text" className="action-btn assignok" />
        </div>
      ),
    },
  ];



  

const InboxLayout = () => {
  
    const router = useRouter();

    const onRecordClick = (record) => {
        router.push(`/Inbox/RecordDetails/${record.key}`);
    };

    const onModificationClick= (record) => {
      router.push(`/Inbox/Modification/${record.key}`);
    };

    const onUserAccessClick= (record) => {
      router.push(`/Inbox/UserAccess/${record.key}`);
    };

    const onSpaceClick= (record) => {
      router.push(`/Inbox/Space/${record.key}`);
    };

    const onCabinetClick= (record) => {
      router.push(`/Inbox/Cabinet/${record.key}`);
    };



  return (
    <div className="inbox-page">
      <div className="header-section">
        <Button 
            className="back-button" 
            icon={<ArrowLeftOutlined />} 
            type="text" 
            onClick={() => router.back()}
            >
        </Button>
        <Title level={2} className="page-title">Inbox</Title>
      </div>
      <Row justify="space-between" align="middle" className="inbox-header">
        
        <Col>
          <Button icon={<FilterOutlined />}>Filters</Button>
          <Input
            placeholder="Search here"
            prefix={<SearchOutlined />}
            className="search-input"
          />
        </Col>
      </Row>

      <Tabs defaultActiveKey="1" className="custom-tabs">
        <TabPane tab="My Approvals" key="1">
          <Table
            dataSource={dataSource}
            columns={columns}
            pagination={false}
            rowSelection={{ type: 'checkbox' }}
            onRow={(record) => ({
              onClick: () => record.key === '1' ? onRecordClick(record) : 
              record.key === '2' ? onCabinetClick(record) :
              record.key === '3' ? onSpaceClick(record) : 
              record.key === '4' ? onUserAccessClick(record) : onModificationClick(record),
            })}
          />
        </TabPane>
        <TabPane tab="Pending Approvals" key="2">
            <Table
            dataSource={pendingApprovalsData}
            columns={pendingApprovalsColumns}
            pagination={false}
            rowSelection={{ type: 'checkbox' }}
            />
        </TabPane>
        <TabPane tab="Rejected" key="3">
            <Table
            dataSource={rejectedData}
            columns={rejectedColumns}
            pagination={false}
            rowSelection={{ type: 'checkbox' }}
            />
        </TabPane>
      </Tabs>

      <div className="footer-section">
      <Pagination className="pagination" defaultCurrent={1} total={50} showSizeChanger={false} />
      </div>
    </div>
  );
};

export default InboxLayout;
