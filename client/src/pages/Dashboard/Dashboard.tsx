import React,{useState} from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined,MailOutlined } from '@ant-design/icons';
import { ConfigProvider, MenuProps } from 'antd';
import type { MenuTheme } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import './style.css';
import TradeHistory from '../TradeHistory/TradeHistory';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));

function getItem(
    label: React.ReactNode,
    key?: React.Key | null,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem;
  }
  
  const items: MenuItem[] = [
    getItem('User', 'sub1', <MailOutlined />, [
      getItem('Trade', '1'),
      getItem('Trade History', '2'),
      getItem('News', '3'),
      getItem('Option 4', '4'),
    ])
  ];

const Dashboard: React.FC = () => {

  const [current, setCurrent] = useState('1');

  const {
    token: { colorBgContainer },
  } = theme.useToken();


  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <ConfigProvider
    theme={{
        token: {
          colorPrimary: '#00b96b',
        },
      }}
    >
        <Layout style={{height:"100vh"}}>
            <Header className="header">
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
            </Header>
            <Content style={{ height: "100vh" }}>
                <Breadcrumb style={{ margin: '16px 5px' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Layout style={{ padding: '24px 0', background: colorBgContainer }}>
                <Sider style={{ background: colorBgContainer}} width={250} trigger={null} collapsible={false}>
                <Menu
                    onClick={onClick}
                    style={{ height: '70vh' }}
                    defaultOpenKeys={['sub1']}
                    selectedKeys={[current]}
                    mode="inline"
                    items={items}
                />
                </Sider>
                <Content style={{ padding: '0 24px', minHeight: 280 }}>
                    <TradeHistory></TradeHistory>
                </Content>
                </Layout>
            </Content>
            <Footer style={{ textAlign: 'center' }}>CryCoin ©2023</Footer>
        </Layout>
    </ConfigProvider>
    
  );
};

export default Dashboard;

