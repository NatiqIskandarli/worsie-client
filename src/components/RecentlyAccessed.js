'use client';
import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { v4 as uuidv4 } from 'uuid';

const RecentlyAccessed = ({ className }) => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const generatedFiles = Array(8).fill().map(() => ({
      id: uuidv4(),
      file: 'Siemens',
      invoice: '12344',
      date: 'Feb 9, 2015',
      folder: 'Siemens RSL'
    }));
    setFiles(generatedFiles);
  }, []);

  const columns = [
    { 
      title: 'File', 
      dataIndex: 'file', 
      key: 'file', 
      sorter: (a, b) => a.file.localeCompare(b.file),
    },
    { 
      title: 'Invoice', 
      dataIndex: 'invoice', 
      key: 'invoice', 
      sorter: (a, b) => a.invoice.localeCompare(b.invoice),
    },
    { 
      title: 'Date', 
      dataIndex: 'date', 
      key: 'date', 
      sorter: (a, b) => new Date(a.date) - new Date(b.date),
    },
    { 
      title: 'Folder', 
      dataIndex: 'folder', 
      key: 'folder', 
      sorter: (a, b) => a.folder.localeCompare(b.folder),
    }
  ];

  return (
    <div className={`bg-white p-4 rounded shadow-md ${className || ''}`}>
      <h4 className="text-gray-700 font-semibold mb-4">Recently Accessed</h4>
      <Table 
        columns={columns} 
        dataSource={files} 
        rowKey="id" 
        pagination={false} 
      />
    </div>
  );
};

export default RecentlyAccessed;
