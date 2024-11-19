'use client';
import React, { useState, lazy, Suspense} from 'react';
import { Card, Row, Col, Tabs, Input, Button, Table, Badge, Pagination, Avatar,Dropdown,Menu,Radio,Typography,Spin } from 'antd';
import {
  DatabaseOutlined,
  ArrowLeftOutlined,
  DeleteOutlined,
  InboxOutlined, 
  EditOutlined, 
  FallOutlined,
  RiseOutlined,
  FilterOutlined
} from '@ant-design/icons';
import '@/styles/MyStaff.css';
import {columns, tableDatas} from '@/data/tableData';
const MyTables = lazy(() => import('@/components/Tables'));
const CabinetCard = lazy(() =>
  import('@/components/CabinetAndSpaceCard').then((module) => ({
    default: module.CabinetCard,
  }))
);

const SpaceCard = lazy(() =>
  import('@/components/CabinetAndSpaceCard').then((module) => ({
    default: module.SpaceCard,
  }))
);

const { Title, Text } = Typography;

const MyStaffPage = () => {
  const [activeTab, setActiveTab] = useState("1");
  const [selectedFileKeys, setSelectedFileKeys] = useState([]);

  const handleTabChange = (key) => {
    setActiveTab(key);
  };


  // Data for "My Cabinets" tab cards
  const cabinetsData = [
    { title: 'Rotating Equipment', users: 14, followers: 1, time: '13 hours ago' },
    { title: 'Dry Gas Seals', users: 9, time: '16 hours ago' },
    { title: 'Declarations', users: 498, followers: 611, time: '3 weeks ago' },
    { title: 'Radioactive Sources', users: 2, time: '1 month ago' },
  ];


// Handle file selection with radio button
const handleSelectFile = (fileKey) => {
    setSelectedFileKeys(prevSelectedKeys => {
      if (prevSelectedKeys.includes(fileKey)) {
        return prevSelectedKeys.filter(key => key !== fileKey);
      } else {
        return [fileKey]; // Ensure only one file is selected at a time
      }
    });
  };

  // Handle deletion of selected file
  const handleDelete = () => {
    // Perform deletion logic here
    console.log("Deleting selected files:", selectedFileKeys);
    setSelectedFileKeys([]); // Clear selection after deletion
  };

  // Sample data for Unallocated Files table
  const unallocatedColumns = [
    {
      title: 'File Name',
      dataIndex: 'fileName',
      key: 'fileName',
      render: (text, record) => (
        <Radio
          checked={selectedFileKeys.includes(record.key)}
          onChange={() => handleSelectFile(record.key)}
        >
          {text}
        </Radio>
      ),
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Uploaded on',
      dataIndex: 'uploadedOn',
      key: 'uploadedOn',
    },
    {
      title: 'Size',
      dataIndex: 'size',
      key: 'size',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      render: (type) => (
        <Avatar shape="square" src={`/images/${type.toLowerCase()}.png`} alt={type} />
      ),
    },
    {
      title: 'Assigned to',
      dataIndex: 'assignedTo',
      key: 'assignedTo',
      render: (assignedTo) => (
        <Dropdown overlay={
          <Menu>
            <Menu.Item key="1">Kashif</Menu.Item>
            <Menu.Item key="2">Abdullah</Menu.Item>
            <Menu.Item key="3">Olivia</Menu.Item>
          </Menu>
        }>
          <Button>{assignedTo}</Button>
        </Dropdown>
      ),
    },
  ];

  const unallocatedData = Array(5).fill().map((_, index) => ({
    key: index,
    fileName: `#123456`,
    description: 'Lorem Ipsum',
    uploadedOn: 'July 9, 2024 12:34:59',
    size: '10 mbs',
    type: index % 2 === 0 ? 'word' : 'excel',
    assignedTo: 'Kashif',
  }));


  const stats = [
    {
      label: 'Total Records',
      value: 450,
      change: '8.5% Up from yesterday',
      changeType: 'up',
      icon: <DatabaseOutlined style={{ fontSize: '24px', color: '#52c41a' }} />,
    },
    {
      label: 'New Records',
      value: 112,
      change: '8.5% Up from last week',
      changeType: 'up',
      icon: <InboxOutlined style={{ fontSize: '24px', color: '#faad14' }} />,
    },
    {
      label: 'Revisions',
      value: 187,
      change: '4.3% Down from yesterday',
      changeType: 'down',
      icon: <EditOutlined style={{ fontSize: '24px', color: '#ff4d4f' }} />,
    },
    {
      label: 'Unallocated',
      value: '45 Gb',
      change: '1.3% Up from last month',
      changeType: 'up',
      icon: <FallOutlined style={{ fontSize: '24px', color: '#1890ff' }} />,
    },
  ];




  const tabItems = [
    { label: "My Record", key: "1" },
    { label: "My Draft", key: "2" },
    { label: "My Cabinets", key: "3" },
    { label: "My Space", key: "4" },
    { label: "Unallocated files", key: "5" },
  ];


  return (
    <div className="my-staff-page">
      <div className="header-section">
        <Button 
            className="back-button" 
            icon={<ArrowLeftOutlined />} 
            type="text" 
            onClick={() => router.back()}
            >
        </Button>
        <Title level={2} className="page-title">My Staff</Title>
      </div>

      {/* Metrics Cards */}
      <Row gutter={[16, 16]} className="mb-6 customDashCard">
        {stats.map((stat, index) => (
          <Col key={index} xs={24} sm={12} md={6}>
            <Card bordered={true} className="flex items-center space-x-4">
              <div className='dashboardModules'>
                <h4 className="text-lg font-semibold">{stat.label}</h4>
                <div className="icon-container">{stat.icon}</div>
              </div>
              <div>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className={`mt-3 ${stat.changeType === 'down' ? 'text-red-500' : 'text-green-500'}`}>
                  {stat.changeType === 'up' ? <RiseOutlined /> : <FallOutlined />} {stat.change}
                </p>
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Tabs Section */}
      <Tabs activeKey={activeTab} onChange={handleTabChange} items={tabItems} className="records-tabs" />



      {/* Table for My Record and My Drafts */}
      {(activeTab === "1" || activeTab === "2") && (
        <>

        <MyTables columns={columns} tableData={tableDatas} />

        </>
      )}



      {/* Content for My Cabinets Tab */}
      {activeTab === "3" && (
        <Suspense fallback={<Spin tip="Loading Cabinets..." />}>
          <CabinetCard />
        </Suspense>
      )}

      {activeTab === "4" && (
        <Suspense fallback={<Spin tip="Loading Spaces..." />}>
          <SpaceCard />
        </Suspense>
      )}


      {/* Unallocated Files Section */}
      {activeTab === "5" && (
        <div className="unallocated-section">
          <div className="unallocated-header">
            <Button type="default" icon={<FilterOutlined />} onClick={handleDelete} className='filterbtn'>
            </Button>
            <Button type="primary" className="assign-button">
              Assign to Cabinet
            </Button>
            <Button type="default" icon={<DeleteOutlined />} onClick={handleDelete} className='filterbtn'>
            </Button>
            <Button type="default">
              View All
            </Button>
          </div>
          <Table columns={unallocatedColumns} dataSource={unallocatedData} pagination={false} className="unallocated-table" />
          <Pagination
            defaultCurrent={1}
            total={50}
            className="pagination-bar"
            showSizeChanger={false}
            showQuickJumper
          />
        </div>
      )}

      {/* Pagination for My Cabinets */}
      {activeTab === "3" && (
        <Pagination
          defaultCurrent={1}
          total={40}
          className="pagination-bar"
          showSizeChanger={false}
          showQuickJumper
        />
      )}
    </div>
  );
};

export default MyStaffPage;
