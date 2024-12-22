import {
  DashboardOutlined,
  InfoCircleOutlined,
  TableOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import Dashboard from '../views/Dashboard';
import About from '../views/About';
import TablePage from '../views/Table';
import Config from '../views/Config';

export const routes = [
  {
    key: 'dashboard',
    path: '/',
    exact: true,
    icon: DashboardOutlined,
    label: 'Dashboard',
    component: Dashboard,
    menuKey: '1'
  },
  {
    key: 'table',
    path: '/table',
    icon: TableOutlined,
    label: 'Table',
    component: TablePage,
    menuKey: '2'
  },
  {
    key: 'config',
    path: '/config',
    icon: SettingOutlined,
    label: 'Config',
    component: Config,
    menuKey: '3'
  },
  {
    key: 'about',
    path: '/about',
    icon: InfoCircleOutlined,
    label: 'About',
    component: About,
    menuKey: '4'
  },
];
