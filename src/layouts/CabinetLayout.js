import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, Input, Row, Col, Button, Switch, Select,Radio, Typography,Checkbox } from 'antd';
import { PaperClipOutlined, EyeOutlined, UserOutlined,ArrowLeftOutlined,PlusCircleOutlined } from '@ant-design/icons';
import '@/styles/Cabinet.css';

const { Option } = Select;
const { Title, Text } = Typography;

const CabinetLayout = ({ id }) => {
    const router = useRouter();
    const [cabinetData, setCabinetData] = useState(null);

    useEffect(() => {
        if (id) {
            setCabinetData({
                id,
                name: 'Sample Cabinet Name',
                company: 'Company XYZ',
                description: 'Sample Description',
                tags: 'Sample Tag',
                users: ['User1', 'User2'],
                fields: [
                    { label: 'Declaration #', location: '', mandatory: false, apiReady: 'Notify' },
                ],
            });
        }
    }, [id]);


    return (
        <div className="cabinet-page">
            <div className="header-section">
                <Button 
                    className="back-button" 
                    icon={<ArrowLeftOutlined />} 
                    type="text" 
                    onClick={() => router.back()}
                    >
                </Button>
                <Title level={2} className="page-title">Inbox / Cabinet</Title>
            </div>

            <Card className="cabinet-details">
                <Row gutter={16}>
                    <Col span={12}>
                        <label>Name</label>
                        <Input defaultValue={cabinetData?.name}  />
                    </Col>
                    <Col span={12}>
                        <label>Company</label>
                        <Input defaultValue={cabinetData?.company}  />
                    </Col>
                    <Col span={12}>
                        <label>Description</label>
                        <Input defaultValue={cabinetData?.description}  />
                    </Col>
                    <Col span={12}>
                        <label>Tags</label>
                        <Input defaultValue={cabinetData?.tags}  />
                    </Col>
                    <Col span={12}>
                        <label>Add Users</label>
                        <Select defaultValue={cabinetData?.users[0]} className="full-width">
                            {cabinetData?.users.map(user => (
                                <Option key={user} value={user}>{user}</Option>
                            ))}
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

                {['Declaration #', 'PO #', 'MMT #', 'Department', 'Country of origin', 'Function'].map((field, index) => (
                    <React.Fragment key={index}>
                        <Col span={4}>
                            <Input placeholder={field} defaultValue={field}  />
                        </Col>
                        <Col span={4}>
                            <Select placeholder="click to select" className="full-width">
                                {cabinetData?.users.map(user => (
                                    <Option key={user} value={user}>{user}</Option>
                                ))}
                            </Select>
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

export default CabinetLayout;
