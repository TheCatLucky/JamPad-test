import { HomeFilled, LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { Row } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from './../../../Redux/reducers/auth/authReducer';
import style from './SideBar.module.css';

const SideBar = (props) => {
  
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(logOut())
    
  }
  return (
    <div className={style.sideBar}>
      <Row className={style.firstDiv} align='bottom'>
        <HomeFilled className={style.homeIcon} />
        <span className={style.homePage} >Домашняя страница</span>
      </Row>
      <div className={style.footerSideBar}>
        <button className={style.settings}>Настройки</button>
        <Row align='middle' className={style.footerMenu} >
          <UserOutlined className={style.footerIcon} style={{ opacity: 0.45 }} />
          <button className={style.homePage}>Профиль</button>
        </Row>
        <Row align='middle' className={style.footerMenu} >
          <LogoutOutlined className={style.footerIcon} style={{ opacity: 0.45 }} />
          <button className={style.homePage} onClick={() => logout()}>
            Выход
          </button>
        </Row>
      </div>
    </div>

  )
}

export default SideBar;
