import React from 'react';
import { Card, Input, Row, Col, Button, Avatar, Table, Typography } from 'antd';
import { PaperClipOutlined, PlusOutlined, ArrowLeftOutlined, ReloadOutlined, EditOutlined, CheckCircleFilled,SyncOutlined} from '@ant-design/icons';
import '@/styles/OpenRecord.css';

const { Title } = Typography;

const OpenRecordPage = () => {
  const columns = [
    { title: 'File Name', dataIndex: 'fileName', key: 'fileName' },
    { title: 'Type', dataIndex: 'type', key: 'type' },
    { title: 'Size', dataIndex: 'size', key: 'size' },
    { title: 'Pages', dataIndex: 'pages', key: 'pages' },
    { title: 'Uploaded by', dataIndex: 'uploadedBy', key: 'uploadedBy' },
    { title: 'Uploaded on', dataIndex: 'uploadedOn', key: 'uploadedOn' },
    { title: 'Notes', dataIndex: 'notes', key: 'notes' },
  ];

  const data = []; // No data for now, but can be dynamically passed

  return (
    <div className="open-record-page">
      {/* Header Section */}
      <div className="header-section">
        <Button
          className="back-button"
          icon={<ArrowLeftOutlined />}
          type="text"
          onClick={() => console.log('Back navigation')}
        />
        <Title level={2} className="page-title">Apple Marketing Team</Title>
      </div>

      {/* Breadcrumb */}
      <div className="breadcrumb">
        <span>Apple Marketing Team &gt; Apple Marketing Team &gt; <b>Invoice Solar</b></span>
      </div>

      {/* Form Section */}
      <Row gutter={[16, 16]} className="form-section">
        <Col span={8}>
          <label>Name</label>
          <Input placeholder="Invoice for freight" suffix={<PaperClipOutlined />} />
        </Col>
        <Col span={8}>
          <label>MMT</label>
          <Input placeholder="546776" />
        </Col>
        <Col span={8}>
          <label>Declaration</label>
          <Input placeholder="11112390923" suffix={<PlusOutlined />} />
        </Col>
        <Col span={8}>
          <label>PO</label>
          <Input placeholder="430067854" suffix={<PlusOutlined />} />
        </Col>
        <Col span={8}>
          <label>Asset</label>
          <Input placeholder="Central Azeri" />
        </Col>
        <Col span={8}>
          <label>Reference</label>
          <Input placeholder="GPO" />
        </Col>
        <Col span={8}>
          <label>Country of origin</label>
          <Input placeholder="United Kingdom" />
        </Col>
        <Col span={8}>
          <label>Country of destination</label>
          <Input placeholder="Italy" />
        </Col>
        <Col span={8}>
          <label>Project ID</label>
          <Input placeholder="Value" />
        </Col>
        <Col span={8}>
          <label>Department</label>
          <Input placeholder="Marketing" />
        </Col>
        <Col span={8}>
          <label>Value</label>
          <Input placeholder="4562,43" />
        </Col>
        <Col span={8}>
          <label>Invoice #</label>
          <Input placeholder="65755346" />
        </Col>
        <Col span={8}>
          <label>Tags</label>
          <Input placeholder="Rotating equipment" />
        </Col>
        <Col span={8}>
          <label>Currency</label>
          <Input placeholder="$ US" />
        </Col>
        <Col span={8}>
          <label>Type</label>
          <Input placeholder="Invoice" />
        </Col>
      </Row>

      <div className='long-attachment-section'>
        {/* Long Text Section */}
        <div className="text-area-section">
          <label>Long Text:</label>
          <Input.TextArea rows={4} placeholder="Enter long text here" />
          <div className="last-updated">
            <span>Last updated on 8 Nov 2021</span>
            <ReloadOutlined className="reload-icon" />
          </div>
        </div>
        {/* Attachments Section */}
        <div className="attachments-section">
          <h3>Attachments</h3>
          <Table columns={columns} dataSource={data} pagination={false} />
        </div>
      </div>

      {/* Approval Section */}
      <div className="approval-section">
        <Row justify="left" align="middle" gutter={16}>
          <Col>
            <div className="approval-step">
              <Avatar size={40} src="/images/created.png" />
              <p>Created on<br />8 Nov 2021</p>
              <Avatar size={30} src="/images/avatar.png" />
            </div>
          </Col>
          <Col>
            <div className="approval-arrow">
              <span>→</span>
            </div>
          </Col>
          <Col>
            <div className="approval-step">
              <Avatar size={40} src="/images/approved.png" />
              <p>Approved on<br />8 Nov 2021</p>
              <Avatar size={30} src="/images/avatar.png" />
            </div>
          </Col>
          <Col>
            <div className="approval-arrow">
              <span>→</span>
            </div>
          </Col>
          <Col>
            <div className="approval-step">
              <Avatar size={40} src="/images/revised.png" />
              <p>Revised on<br />8 Nov 2021</p>
              <Avatar size={30} src="/images/avatar.png" />
            </div>
          </Col>
          <Col>
            <div className="approval-arrow">
              <span>→</span>
            </div>
          </Col>
          <Col>
            <div className="approval-step">
              <Avatar size={40} src="/images/approved.png" />
              <p>Approved on<br />8 Nov 2021</p>
              <Avatar size={30} src="/images/avatar.png" />
            </div>
          </Col>
        </Row>
      </div>

      

      {/* Action Buttons */}
      <div className="action-buttons">
        <Button type="primary" className="ok-button">Ok</Button>
        <Button type="default" className="save-button">Save</Button>
        <Button type="default" className="cancel-button">Cancel</Button>
      </div>
    </div>
  );
};

export default OpenRecordPage;
