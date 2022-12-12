import React from 'react';
import { Layout, Menu } from 'antd';
import { AppstoreOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons';

const { Sider, Content, Footer } = Layout;
import type { MenuProps } from 'antd';
const items: MenuProps['items'] = [
    {
      label: 'About Me',
      key: '1',
      icon: <UserOutlined />,
    },
    {
      label: 'Experience',
      key: '2',
      icon: <AppstoreOutlined />,
    },
  ];

export const Navigation = (): JSX.Element  => (
      <Sider style={{
        overflow: 'auto',
        left: 0,
      }}>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={items}
        />
      </Sider>
);