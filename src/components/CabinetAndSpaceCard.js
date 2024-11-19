'use client';
import { Card, Row, Col, Avatar, Typography } from 'antd';
import { PlusOutlined, StarOutlined, ArrowRightOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import '@/styles/CabinetCard.css';
const { Text } = Typography;
    
export const CabinetCard = () => {
    
    const cabinets = [
        { title: 'Rotating Equipment', time: '13 hours ago',members: '14 members', avatars: ['/images/avatar.png', '/images/avatar.png', '/images/avatar.png'] },
        { title: 'Dry Gas Seals', time: '16 hours ago',members: '14 members', avatars: ['/images/avatar.png', '/images/avatar.png', '/images/avatar.png'] },
        { title: 'Declarations', time: '3 weeks ago',members: '14 members', avatars: ['/images/avatar.png', '/images/avatar.png', '/images/avatar.png'] },
        { title: 'Radioactive sources', time: '1 month ago',members: '14 members', avatars: ['/images/avatar.png', '/images/avatar.png', '/images/avatar.png'] },
    ];

  return (
    <Row gutter={[16, 16]}>
        {cabinets.map((cabinet, index) => (
          <Col span={6} key={index}>
            <Card className="cabinet-card">
              <div className="cabinet-header">
                <Text className="cabinet-title">{cabinet.title}</Text>
                <StarOutlined className="favorite-icon" />
              </div>
              <Text type="secondary">{cabinet.time}</Text>
              <div className="cabinet-content">
                <img src="/images/cabinet.png" alt="Cabinet" className="cabinet-image" />
              </div>
              <div className="cabinet-footer">
                <Text type="secondary">{cabinet.members}</Text>
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
  )
}



export const SpaceCard = () => {
    
  const spaces = [
    { title: 'Apple', time: '2 hours ago', logo: '/images/apple.png', members: '14 members', avatars: ['/images/avatar.png', '/images/avatar.png', '/images/avatar.png'] },
    { title: 'Shell', time: '19 hours ago', logo: '/images/shell.png', members: '91 members', avatars: ['/images/avatar.png', '/images/avatar.png', '/images/avatar.png'] },
    { title: 'Microsoft', time: '1 week ago', logo: '/images/apple.png', members: '100 members', avatars: ['/images/avatar.png', '/images/avatar.png', '/images/avatar.png'] },
    { title: 'Nestle', time: '2 months ago', logo: '/images/shell.png', members: '74 members', avatars: ['/images/avatar.png', '/images/avatar.png', '/images/avatar.png'] },
  ];

return (
  <Row gutter={[16, 16]}>
        {spaces.map((space, index) => (
          <Col span={6} key={index}>
            <Card className="space-card">
              <div className="space-header">
                <Text className="space-title">{space.title}</Text>
                <ArrowRightOutlined className="navigate-icon" />                
              </div>
              <Text type="secondary">{space.time}</Text>
              <div className="space-content">
                <img src={space.logo} alt="Space logo" className="space-logo" />
              </div>
              <div className="space-footer">
                <Text type="secondary">{space.members}</Text>
                <Avatar.Group className="space-avatars">
                  {space.avatars.map((avatar, i) => (
                    <Avatar key={i} src={avatar} />
                  ))}
                </Avatar.Group>
          
              </div>
            </Card>
          </Col>
        ))}
  </Row>
)
}

