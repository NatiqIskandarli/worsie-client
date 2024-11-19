'use client';
import { Layout, Button, Input, Table, DatePicker, Card, Tabs, Avatar, Space, Responsive, Typography } from 'antd';
import { UserOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { useState, useEffect, lazy } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts'; 
import styles from '../styles/MarketingTeam.css';
import {columns, tableDatas} from '@/data/tableData';
const MyTables = lazy(() => import('@/components/Tables'));

const { Header, Sider, Content } = Layout;
const { RangePicker } = DatePicker;
const { TabPane } = Tabs;
const { Search } = Input;
const { Title } = Typography;

const MarketingTeamLayout = () => {

  const [collapsed, setCollapsed] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [chartDataEntries, setChartDataEntries] = useState([]);  // For line chart
  const [chartDataTopEntries, setChartDataTopEntries] = useState([]); // For bar 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
      const entriesData = [
        { name: 'Jan', entries: 200 },
        { name: 'Feb', entries: 400 },
        { name: 'Mar', entries: 300 },
        { name: 'Apr', entries: 600 },
        { name: 'May', entries: 500 },
        { name: 'June', entries: 700 },
        { name: 'July', entries: 800 },
      ];
      
      const topEntriesData = [
        { name: 'Jan', value: 400 },
        { name: 'Feb', value: 800 },
        { name: 'Mar', value: 600 },
        { name: 'Apr', value: 400 },
        { name: 'May', value: 300 },
        { name: 'June', value: 500 },
        { name: 'July', value: 700 },
      ];
      
      setTimeout(() => {
        setTableData(tableDatas);
        setChartDataEntries(entriesData);
        setChartDataTopEntries(topEntriesData);
        setLoading(false);
      }, 500);


  }, []);


  const CustomizedLabel = ({ x, y, value, height }) => {
    const avatarSize = 30; // Avatar size in pixels
    return (
      <g>
        {/* Vertical Text Inside the Bar */}
        <text
          x={x}
          y={y + height / 2} // Center text vertically within the bar
          textAnchor="middle"
          fill="#555"
          transform={`rotate(-90, ${x}, ${y + height / 2})`} // Rotate text vertically
          fontSize={12}
          dy={4} // Adjust the vertical alignment slightly
        >
          {value} Entries
        </text>
  
        {/* Avatar Positioned Above the Bar */}
        <foreignObject x={x - avatarSize / 2} y={y - avatarSize - 10} width={avatarSize} height={avatarSize}>
          <img
            src="/images/avatar.png"
            alt="Avatar"
            style={{ borderRadius: '50%' }}
            width={avatarSize}
            height={avatarSize}
          />
        </foreignObject>
      </g>
    );
  };
  
  

  if (loading) {
    return <div>Loading...</div>; // Display a loading indicator
  }

  return (
    <><Layout style={{ minHeight: '100vh' }}>

      <Layout className={styles.siteLayout}>
        
      <Content style={{ margin: '16px' }}>
        <div className="header-section">
          <Button 
              className="back-button" 
              icon={<ArrowLeftOutlined />} 
              type="text" 
              onClick={() => router.back()}
              >
          </Button>
          <Title level={2} className="page-title">Marketing Team</Title>
        </div>
        
        <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>

                <Card style={{ flex: 1, minWidth: 280 }}> {/* minWidth for responsiveness */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <h3>Entries</h3>
                    <RangePicker picker="month" />
                  </div>
                    <ResponsiveContainer width="100%" height={200}>  {/* ResponsiveContainer */}
                      <LineChart data={chartDataEntries}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} />
                        <YAxis axisLine={false} tickLine={false} tickCount={6} domain={[0, 800]}  />
                        <Tooltip />
                        <Line type="monotone" dataKey="entries" stroke="#e0bc78" strokeWidth={2} dot={{ fill: '#e0bc78', r: 4 }} activeDot={{ r: 8 }} />
                      </LineChart>
                    </ResponsiveContainer>
                  <div style={{ position: 'absolute', top: '1px', right: '20px', fontSize: '12px', color: '#888' }}>
                    <span style={{ marginRight: '10px' }}>Last Year</span>
                    <span style={{ color: '#000', fontWeight: 'bold' }}>• This Year</span>
                  </div>
                </Card>



                <Card style={{ flex: 1, minWidth: 280 }}>
                   <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <h3>Top Entries</h3>
                    <RangePicker picker="month" />
                  </div>

                  <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={chartDataTopEntries}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} />
                      <YAxis axisLine={false} tickLine={false} domain={[0, 1000]} tickCount={6} />
                      <Tooltip />
                      <Bar dataKey="value" fill="#e6f7ff" label={<CustomizedLabel />} />
                    </BarChart>
                  </ResponsiveContainer>
                </Card>
        </div>

        <MyTables columns={columns} tableData={tableDatas} />    
         
      </Content>
      </Layout>
    </Layout>
    </>
  );
};

export default MarketingTeamLayout;