import { HomeFilled, UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { Row } from 'antd';
import React from 'react';
import style from './SideBar.module.css';
const SideBar = () => {
  return (
    <div className={style.sideBar}>
      <Row className={style.firstDiv} align='bottom'>
        <HomeFilled className={style.homeIcon} />
        <span className={style.homePage} >Домашняя страница</span>
      </Row>
      <div className={style.footerSideBar}>
        <span className={style.settings}>Настройки</span>
        <Row align='bottom' className={style.footerMenu}>
          <UserOutlined className={style.footerIcon} style={{ opacity: 0.45 }}/>
          <span className={style.homePage}>Профиль</span>
        </Row>
        <Row align='bottom' className={style.footerMenu}>
          <LogoutOutlined className={style.footerIcon} style={{ opacity: 0.45 }} />
          <span className={style.homePage}>Выход</span>
        </Row>
      </div>
    </div>

  )
}

export default SideBar