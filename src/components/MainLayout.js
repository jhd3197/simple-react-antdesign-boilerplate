import React, { useState } from 'react';
import { Layout, Menu, Switch as ThemeSwitch } from 'antd';
import { Link, useLocation } from "react-router-dom";
import { BulbOutlined } from '@ant-design/icons';
import { routes } from '../config/routes';
import logo from '../logo.svg';

const { Sider, Content, Footer } = Layout;

function MainLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const [menuTheme, setMenuTheme] = useState('light');
  const location = useLocation();
  const currentPath = location.pathname === '/' ? 'dashboard' : location.pathname.substring(1);
  const selectedKey = routes.find(route => route.key === currentPath)?.menuKey || '1';

  const menuItems = routes.map(route => ({
    key: route.menuKey,
    icon: <route.icon />,
    label: <Link to={route.path}>{route.label}</Link>,
  }));

  return (
    <Layout
      className={`ant-layout ${menuTheme === 'dark' ? 'ant-layout-dark' : 'ant-layout-light'}`}
      style={{ minHeight: '100vh', background: menuTheme === 'dark' ? '#141414' : '#f0f2f5' }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed} theme={menuTheme}>
        <img src={logo} alt="React Logo" style={{ width: '40px', margin: '16px' }} />
        <Menu theme={menuTheme} mode="inline" selectedKeys={[selectedKey]} items={menuItems} />
        <div style={{ padding: '16px', textAlign: 'center', position: 'absolute', bottom: '60px', width: '100%', color: menuTheme === 'dark' ? 'white' : 'rgba(0, 0, 0, 0.65)' }}>
          <BulbOutlined style={{ marginRight: '8px' }} />
          <ThemeSwitch
            checkedChildren="🌙"
            unCheckedChildren="☀️"
            checked={menuTheme === 'dark'}
            onChange={() => setMenuTheme(menuTheme === 'light' ? 'dark' : 'light')}
          />
        </div>
      </Sider>
      <Layout className={`ant-layout ${menuTheme === 'dark' ? 'ant-layout-dark' : 'ant-layout-light'}`} style={{ background: menuTheme === 'dark' ? '#141414' : '#f0f2f5' }}>
        <Content className={`content ${currentPath}`} style={{ margin: '24px 16px', padding: 24, minHeight: 280, background: menuTheme === 'dark' ? '#1f1f1f' : undefined, borderRadius: 12 }}>
          {children}
        </Content>
        <Footer style={{ textAlign: 'center', background: menuTheme === 'dark' ? '#141414' : '#f0f2f5', color: menuTheme === 'dark' ? '#ffffff99' : undefined }}>
          Crafted with care by <a href='https://github.com/jhd3197'>Juan Denis</a> + <a href='https://ant.design/'>Ant Design</a>
        </Footer>
      </Layout>
    </Layout>
  );
}

export default MainLayout;
