'use client';
import React, { useState } from 'react';
import { Card, Row, Col, Table, Avatar, Button, Input, Switch, Select, Badge, Pagination, Modal, Tooltip,Typography } from 'antd';
import { ArrowLeftOutlined, FilterOutlined, PlusOutlined, TeamOutlined, SettingOutlined,CloseOutlined } from '@ant-design/icons';
import '@/styles/UserManagement.css';

const { Option } = Select;
const { Title } = Typography;

const UserManagementPage = () => {
//pop

const [isModalVisible, setIsModalVisible] = useState(false);

  // Function to open the modal
  const showModal = () => {
    setIsModalVisible(true);
  };

  // Function to close the modal
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // Columns for the user list table inside the modal
  const columnsp = [
    {
      title: 'User List',
      dataIndex: 'userList',
      key: 'userList',
      render: (text, record) => (
        <div className="user-info">
          <Avatar src={record.avatar} />
          <span className="user-name">{record.name}</span>
        </div>
      ),
    },
    { title: 'Group', dataIndex: 'group', key: 'group' },
    { title: 'Department', dataIndex: 'department', key: 'department' },
    { title: 'Company', dataIndex: 'company', key: 'company' },
    {
      title: 'Guest',
      dataIndex: 'guest',
      key: 'guest',
      render: (guest) => <Switch checked={guest} />,
    },
    {
      title: 'Read',
      dataIndex: 'read',
      key: 'read',
      render: (read) => <Switch checked={read} />,
    },
    {
      title: 'Write',
      dataIndex: 'write',
      key: 'write',
      render: (write) => <Switch checked={write} />,
    },
    {
      title: 'Full',
      dataIndex: 'full',
      key: 'full',
      render: (full) => <Switch checked={full} />,
    },
    {
      title: 'Owner',
      dataIndex: 'owner',
      key: 'owner',
      render: (owner) => <Switch checked={owner} />,
    },
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <Tooltip title="Edit">
          <Button icon={<CloseOutlined />} type="text" />
        </Tooltip>
      ),
    },
  ];

  // Sample data for the table
  const datap = Array(10).fill().map((_, index) => ({
    key: index,
    name: 'Lorem t',
    avatar: 'https://via.placeholder.com/40',
    group: 'Lorem ipsum',
    department: 'Lorem ipsum',
    company: 'Lorem ipsum',
    guest: index % 2 === 0,
    read: true,
    write: index % 2 === 0,
    full: true,
    owner: index % 3 === 0,
  }));



//pop end

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => (
        <div className="user-info">
          <Avatar src={record.avatar} />
          <div className="user-details">
            <span className="user-name">{record.name}</span>
            <span className="user-description">{record.description}</span>
          </div>
        </div>
      ),
      sorter: (a, b) => a.file.localeCompare(b.name),
    },
    {
      title: 'Group',
      dataIndex: 'group',
      key: 'group',
      render: (group) => <Badge count={group} style={{ backgroundColor: '#52c41a' }} />,
      sorter: (a, b) => a.file.localeCompare(b.group),
    },
    {
      title: 'Dept',
      dataIndex: 'department',
      key: 'department',
      render: (dept) => <Badge count={dept} style={{ backgroundColor: '#9254de' }} />,
      sorter: (a, b) => a.file.localeCompare(b.department),
    },
    {
      title: 'Guest',
      dataIndex: 'guest',
      key: 'guest',
      render: (guest) => <Switch checked={guest} />,
      sorter: (a, b) => a.file.localeCompare(b.department),
    },
    {
      title: 'Member',
      dataIndex: 'member',
      key: 'member',
      render: (member) => <Switch checked={member} />,
      sorter: (a, b) => a.file.localeCompare(b.department),
    },
    {
      title: 'Admin',
      dataIndex: 'admin',
      key: 'admin',
      render: (admin) => <Switch checked={admin} />,
      sorter: (a, b) => a.file.localeCompare(b.department),
    },
    {
      title: 'Permission',
      dataIndex: 'permission',
      key: 'permission',
      render: (permission) => <span>{permission}</span>,
      sorter: (a, b) => a.file.localeCompare(b.department),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: () => (
        <Tooltip title="Settings">
          <SettingOutlined />
        </Tooltip>
      ),
    },
  ];

  // Sample data for table
  const data = Array(10).fill().map((_, index) => ({
    key: index,
    name: 'Olivia Rhye',
    avatar: 'https://via.placeholder.com/40',
    description: 'Give the user permission to access the file/grp',
    group: 'Lorem',
    department: 'Lorem',
    guest: index % 2 === 0,
    member: index % 2 !== 0,
    admin: index % 3 === 0,
    permission: 'Partial Read Only',
  }));

  return (
    <div className="user-management-page">
      <div className="header-section">
        <Button 
            className="back-button" 
            icon={<ArrowLeftOutlined />} 
            type="text" 
            onClick={() => router.back()}
            >
        </Button>
        <Title level={2} className="page-title">User Management</Title>
      </div>

      {/* Select Cabinet */}
      <Button className="select-cabinet-button" type="primary">
        Select Cabinet
      </Button>

      <div className='user-management-box'>

        <div className="actions-row">
          <Input.Search placeholder="Search here" style={{ width: 200 }} />
          <Button icon={<FilterOutlined />} className="action-button">Filters</Button>
          <Button icon={<PlusOutlined />} type="primary" onClick={showModal}className="action-button">
            Add User
          </Button>
          <Button icon={<TeamOutlined />} className="action-button">Create Group</Button>
        </div>

          <Modal
            title="Add User"
            visible={isModalVisible}
            onCancel={handleCancel}
            footer={null}
            width="100%"
            style={{ top: 20 }}
            closeIcon={<CloseOutlined />}
            bodyStyle={{ padding: 0 }}
            >
            <Table
              columns={columnsp}
              dataSource={datap}
              pagination={false}
              className="user-list-table"
            />
          </Modal>

        
        <Table 
          columns={columns} 
          dataSource={data} 
          pagination={false} 
          className="user-management-table" 
          rowKey="id" 
        />

        <div className="footer-section">
          <Pagination className="pagination" defaultCurrent={1} total={50} showSizeChanger={false} />
        </div>
      </div>
    </div>
  );
};

export default UserManagementPage;
