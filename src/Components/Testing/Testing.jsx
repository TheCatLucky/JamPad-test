import { Layout } from 'antd';
import React from 'react';
import MyHeader from './Header/Header';
import SmallHeader from './Header/SmallHeader';
/* import Header from './Header/Header'; */
import SideBar from './SideBar/SideBar';
import Table from './Table/Table';

const { Header, Content, Sider } = Layout;
const Testing = () => {
  return (
    <Layout>
      <Header style={{ padding: 0, zIndex: 10, height: 80 }}>
        <MyHeader />
      </Header>
      <Layout>
        <Sider width={304}>
          <SideBar style={{ zIndex: 5 }} />
        </Sider>
        <Layout >
          <Header style={{ padding: 0, zIndex: 3 }}>
            <SmallHeader />
          </Header>
          <Content>
            <Table />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default Testing