// CreateCabinetPage.js
'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { Card, Input, Row, Col, Button, Avatar, Switch, Select,Radio, Typography,Checkbox } from 'antd';
import { PaperClipOutlined, EyeOutlined, UserOutlined,ArrowLeftOutlined, StarOutlined, PlusCircleOutlined } from '@ant-design/icons';
import '@/styles/Cabinet.css';
import '@/styles/CreateCabinet.css';

const { Option } = Select;
const { Title, Text } = Typography;

const CreateCabinetPage = () => {
  const router = useRouter();

  const cabinets = [
    { title: 'Rotating Equipment', time: '13 hours ago', avatars: ['/images/avatar.png', '/images/avatar.png', '/images/avatar.png'] },
    { title: 'Dry Gas Seals', time: '16 hours ago', avatars: ['/images/avatar.png', '/images/avatar.png', '/images/avatar.png'] },
    { title: 'Declarations', time: '3 weeks ago', avatars: ['/images/avatar.png', '/images/avatar.png', '/images/avatar.png'] },
    { title: 'Radioactive sources', time: '1 month ago', avatars: ['/images/avatar.png', '/images/avatar.png', '/images/avatar.png'] },
  ];

  return (
      <div className="create-cabinet-page">
          <div className="header-section">
            <Button 
              className="back-button" 
              icon={<ArrowLeftOutlined />} 
              type="text" 
              onClick={() => router.back()}
            >
            </Button>
            <Title level={2} className="page-title">Create Cabinet</Title>
          </div>

          <Row gutter={[16, 16]}>
            {cabinets.map((cabinet, index) => (
              <Col span={6} key={index}>
                <Card className="cabinet-card">
                  <div className="cabinet-header">
                    <Text className="cabinet-title">{cabinet.title}</Text>
                    <StarOutlined className="favorite-icon" />
                  </div>
                  <div className="cabinet-content">
                    <img src="/images/cabinet.png" alt="Cabinet" className="cabinet-image" />
                  </div>
                  <div className="cabinet-footer">
                    <Text type="secondary">{cabinet.time}</Text>
                    <Avatar.Group className="cabinet-avatars">
                      {cabinet.avatars.map((avatar, i) => (
                        <Avatar key={i} src={avatar} />
                      ))}
                    </Avatar.Group>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>

          <Card className="cabinet-details-page">
              <Row gutter={16}>
                  <Col span={12}>
                      <label>Name</label>
                      <Input />
                  </Col>
                  <Col span={12}>
                      <label>Company</label>
                      <Input />
                  </Col>
                  <Col span={12}>
                      <label>Description</label>
                      <Input />
                  </Col>
                  <Col span={12}>
                      <label>Tags</label>
                      <Input />
                  </Col>
                  <Col span={12}>
                      <label>Add Users</label>
                      <Select className="full-width">
                        <Option value="test">test</Option>
                      </Select>
                  </Col>
              </Row>

              <Row gutter={[16, 16]} className="fields-section">
              <Col span={4}><Typography.Text>Field name</Typography.Text></Col>
                <Col span={4}><Typography.Text>Type</Typography.Text></Col>
                <Col span={3}><Typography.Text>Make Mandatory</Typography.Text></Col>
                <Col span={2}><Typography.Text>API Ready</Typography.Text></Col>
                <Col span={3}><Typography.Text>Duplications</Typography.Text></Col>
                <Col span={3}><Typography.Text>Source from</Typography.Text></Col>
                <Col span={3}><Typography.Text></Typography.Text></Col>

              {/* Data Rows */}
              {['Declaration #', 'PO #', 'MMT #', 'Department', 'Country of origin', 'Function'].map((field, index) => (
                  <React.Fragment key={index}>
                      <Col span={4}>
                          <Input placeholder={field} defaultValue={field} readOnly />
                      </Col>
                      <Col span={4}>
                          <Input placeholder="Enter Location name" />
                      </Col>
                      <Col span={3}>
                            <Switch />
                        </Col>
                        <Col span={2}>
                            <Checkbox />
                        </Col>
                      <Col span={3}>
                          <Radio.Group>
                              <Radio value="Notify">Notify</Radio>
                              <Radio value="Deny">Deny</Radio>
                              <Radio value="Allow">Allow</Radio>
                          </Radio.Group>
                      </Col>
                      <Col span={4}>
                          <Input placeholder="Enter Location name" />
                      </Col>
                      <Col span={3} className="duplication-icons">
                          <PaperClipOutlined style={{ marginRight: 8 }} />
                          <EyeOutlined style={{ marginRight: 8 }} />
                          <UserOutlined />
                      </Col>
                  </React.Fragment>
              ))}
              <Col span={8}>
                  <Button type="default" className="full-width" icon={<PlusCircleOutlined/>}>Add More Fields</Button>
              </Col>
              </Row>
          

          <Row gutter={16} style={{ marginTop: '50px'}}>
              <Col span={8}>                  
                  <label>Approver *</label>
                  <Select className="full-width" placeholder="Select from name">
                    <Option value="test">test</Option>
                  </Select>
                  <Button type="default" className="full-width" icon={<PlusCircleOutlined/>}>Add Approver</Button>
              </Col>
              <Col span={16}>
                <label>Quick Note to Approver</label>
                <Input.TextArea rows={4} placeholder="Add your note here" />
              </Col>
          </Row>
          </Card>

          <div className="action-buttons">
              <Button type="primary" style={{ marginRight: '10px' }}>Create</Button>
              <Button type="default">Cancel</Button>
          </div>
      </div>
  );
};

export default CreateCabinetPage;
