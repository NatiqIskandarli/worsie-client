'use client';
import React, { useState, useEffect } from 'react';
import { Table, Button, Popover,Avatar } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import { v4 as uuidv4 } from 'uuid';

const Approvals = ({ className }) => {
  const [approvals, setApprovals] = useState([]);
  const [visiblePopover, setVisiblePopover] = useState(null);

  useEffect(() => {
    const generatedApprovals = Array(10).fill().map(() => ({
      id: uuidv4(),
      name: {
        avatar: '',  
        displayName: 'John Smith John Smith',
      },
      subject: 'Lorem',
      reason: 'Lorem Ipsum',
    }));
    setApprovals(generatedApprovals);
  }, []);

  const handleVisibleChange = (id) => {
    setVisiblePopover(visiblePopover === id ? null : id);
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (name) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Avatar src={name.avatar} alt="User" style={{ marginRight: 8 }} />
          <span>{name.displayName}</span>
        </div>
      ),
    },
    {
      title: 'Subject',
      dataIndex: 'subject',
      key: 'subject',
    },
    {
      title: 'Reason',
      dataIndex: 'reason',
      key: 'reason',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <div className="actionCustom">
          <div className="desktop-actions">
            <Button variant="filled" className='approve' style={{ marginRight: 8 }}>Approve</Button>
            <Button color="primary" variant="filled" style={{ marginRight: 8 }}>Reassign</Button>
            <Button color="danger" variant="filled">Reject</Button>
          </div>
          <div className="responsive-actions">
            <Popover
              content={
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <Button variant="filled" className='approve' style={{ marginBottom: 8 }} block>Approve</Button>
                  <Button color="primary" variant="filled" style={{ marginBottom: 8 }} block>Reassign</Button>
                  <Button color="danger" variant="filled">Reject</Button>
                </div>
              }
              trigger="click"
              open={visiblePopover === record.id}
              onOpenChange={() => handleVisibleChange(record.id)}
            >
              <Button icon={<EllipsisOutlined />} />
            </Popover>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className={`bg-white p-4 rounded shadow-md ${className || ''}`}>
      <h4 className="text-gray-700 font-semibold mb-4">Approvals</h4>
      <Table 
        columns={columns} 
        dataSource={approvals} 
        rowKey="id" 
        pagination={false} 
      />
    </div>
  );
};

export default Approvals;
