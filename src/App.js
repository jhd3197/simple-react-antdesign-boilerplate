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
import MainLayout from './components/MainLayout';

const { Sider, Content, Footer } = Layout;

function App() {
  const [menuTheme, setMenuTheme] = useState('light');

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
      <MainLayout>
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
      </MainLayout>
    </ConfigProvider>
  );
}

export default App;
