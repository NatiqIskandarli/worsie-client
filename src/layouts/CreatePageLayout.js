'use client';
import React, { lazy, Suspense } from 'react';
import { Card, Row, Col, Button, Typography, Spin } from 'antd';
import { useRouter } from 'next/navigation';
import { PlusOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import '@/styles/CreatePage.css';

// Lazy load components
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

const { Title } = Typography;

const CreatePageLayout = () => {
  const router = useRouter();

  const navigateToCreateRecord = () => {
    router.push('/CreateRecord');
  };

  const navigateToCreateCabinet = () => {
    router.push('/CreateCabinet');
  };

  const navigateToCreateSpace = () => {
    router.push('/CreateSpace');
  };

  return (
    <div className="create-page">
      <div className="header-section">
        <Button
          className="back-button"
          icon={<ArrowLeftOutlined />}
          type="text"
          onClick={() => router.back()}
        />
        <Title level={2} className="page-title">Create</Title>
      </div>

      <Row gutter={[16, 16]} className="create-options">
        <Col span={8}>
          <Card className="create-option-card" onClick={navigateToCreateRecord}>
            <div className="create-option-content">
              <PlusOutlined className="icon" />
              <Title level={4}>Create Record</Title>
            </div>
          </Card>
        </Col>
        <Col span={8}>
          <Card className="create-option-card" onClick={navigateToCreateCabinet}>
            <div className="create-option-content">
              <PlusOutlined className="icon" />
              <Title level={4}>Create Cabinet</Title>
            </div>
          </Card>
        </Col>
        <Col span={8}>
          <Card className="create-option-card" onClick={navigateToCreateSpace}>
            <div className="create-option-content">
              <PlusOutlined className="icon" />
              <Title level={4}>Create Space</Title>
            </div>
          </Card>
        </Col>
      </Row>

      {/* Recent Cabinets */}
      <Title level={3} className="section-title">Recent Cabinets</Title>
      <Suspense fallback={<Spin tip="Loading Cabinets..." />}>
        <CabinetCard />
      </Suspense>

      {/* Recent Spaces */}
      <Title level={3} className="section-title">Recent Spaces</Title>
      <Suspense fallback={<Spin tip="Loading Spaces..." />}>
        <SpaceCard />
      </Suspense>
    </div>
  );
};

export default CreatePageLayout;
