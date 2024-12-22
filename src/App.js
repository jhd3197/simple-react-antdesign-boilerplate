import React, { useState } from 'react';
import {
  Switch,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { Layout, Menu, theme, Switch as ThemeSwitch, ConfigProvider, theme as antdTheme } from 'antd';
import {
  DashboardOutlined,
  InfoCircleOutlined,
  TableOutlined,
  SettingOutlined,
  BulbOutlined
} from '@ant-design/icons';
import Dashboard from './views/Dashboard';
import About from './views/About';
import TablePage from './views/Table';
import Config from './views/Config';
import logo from './logo.svg';

const { Sider, Content, Footer } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [menuTheme, setMenuTheme] = useState('light');
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const location = useLocation();
  const currentPath = location.pathname === '/' ? 'dashboard' : location.pathname.substring(1);

  const menuItems = [
    {
      key: '1',
      icon: <DashboardOutlined />,
      label: <Link to="/">Dashboard</Link>,
    },
    {
      key: '2',
      icon: <TableOutlined />,
      label: <Link to="/table">Table</Link>,
    },
    {
      key: '3',
      icon: <SettingOutlined />,
      label: <Link to="/config">Config</Link>,
    },
    {
      key: '4',
      icon: <InfoCircleOutlined />,
      label: <Link to="/about">About</Link>,
    },
  ];

  return (
    <ConfigProvider
      theme={{
        cssVar: true,
        algorithm:
          menuTheme === 'dark'
            ? antdTheme.darkAlgorithm
            : antdTheme.defaultAlgorithm,
        token: {
          colorPrimary: '#DA498D',
          colorInfo: '#DA498D',
          colorSuccess: '#DA498D',
          colorLink: '#DA498D',
          colorWarning: '#D2FF72',
          colorTextSecondary: '#D2FF72',
        },
      }}
    >
      <Layout 
        className={`ant-layout ${menuTheme === 'dark' ? 'ant-layout-dark' : 'ant-layout-light'}`}
        style={{ 
          minHeight: '100vh',
          background: menuTheme === 'dark' ? '#141414' : '#f0f2f5'
        }}
      >
        <Sider
          style={{
            background: menuTheme === 'dark' ? '#141414' : '#fff'
          }}
          collapsible
          collapsed={collapsed}
          onCollapse={setCollapsed}
        >
          <img
            src={logo}
            alt="React Logo"
            style={{ width: '40px', margin: '16px' }}
          />
          <Menu theme={menuTheme} mode="inline" defaultSelectedKeys={['1']} items={menuItems} />
          <div style={{ 
            padding: '16px',
            textAlign: 'center',
            position: 'absolute',
            bottom: '60px',
            width: '100%',
            color: menuTheme === 'dark' ? 'white' : 'rgba(0, 0, 0, 0.65)'
          }}>
            <BulbOutlined style={{ marginRight: '8px' }} />
            <ThemeSwitch
              checkedChildren="🌙"
              unCheckedChildren="☀️"
              checked={menuTheme === 'dark'}
              onChange={() => setMenuTheme(menuTheme === 'light' ? 'dark' : 'light')}
            />
          </div>
        </Sider>
        <Layout 
          className={`ant-layout ${menuTheme === 'dark' ? 'ant-layout-dark' : 'ant-layout-light'}`}
          style={{
            background: menuTheme === 'dark' ? '#141414' : '#f0f2f5'
          }}
        >
          <Content
            className={`content ${currentPath}`}
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              background: menuTheme === 'dark' ? '#1f1f1f' : colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Switch>
              <Route exact path="/">
                <Dashboard />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/table">
                <TablePage />
              </Route>
              <Route path="/config">
                <Config />
              </Route>
            </Switch>
          </Content>
          <Footer style={{ 
            textAlign: 'center',
            background: menuTheme === 'dark' ? '#141414' : '#f0f2f5',
            color: menuTheme === 'dark' ? '#ffffff99' : undefined
          }}>
            Crafted with care by <a href='https://github.com/jhd3197'>Juan Denis</a> + <a href='https://ant.design/'>Ant Design</a>
          </Footer>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
}

export default App;
