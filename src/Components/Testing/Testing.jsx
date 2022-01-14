import { Layout } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { testsAPI } from '../../API/Api';
import { setTests } from '../../Redux/reducers/test/testReducer';
import MyHeader from './Header/Header';
import SmallHeader from './Header/SmallHeader';
/* import Header from './Header/Header'; */
import SideBar from './SideBar/SideBar';
import Result from './Table/Results/Results';
import MyTable from './Table/Table';
const { Header, Content, Sider } = Layout;
const Testing = () => {
  const dispatch = useDispatch();
  const tableValue = useSelector(state => state.test.tests.tests);

  useEffect(() => {
    console.log(tableValue, "---tableValu")
    const timeoutId = setTimeout(() => {
      testsAPI.getAllQuizzes().then(data => {
        dispatch(setTests(data))
        console.log("я тут был")
        //dispatch(setLoaded())
      })
    }, 1000)
    if (!tableValue) {
      return;
    }
    return clearTimeout(timeoutId);
  }, []) 

  /*  if (!isLoading) {
     return <Preloader/>
   } */
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
            <Result />
            <MyTable tableValue={tableValue} />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default Testing