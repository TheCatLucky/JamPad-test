import { FileDoneOutlined } from '@ant-design/icons';
import { Row } from 'antd';
import React from 'react';
import style from "./SmallHeader.module.css";

const SmallHeader = () => {
  return (

    <div className={style.header}>
      <Row align='middle' >
        <span className={style.smallText}>Домашняя страница</span>
        <span className={style.bigText}>Домашняя страница</span>
        <FileDoneOutlined style={{ opacity: 0.45, paddingLeft: 650 }} className={style.icon} />
      </Row>
    </div>

  )
}

export default SmallHeader;