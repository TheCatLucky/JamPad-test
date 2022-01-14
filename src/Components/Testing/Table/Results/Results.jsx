import { Row, Badge } from 'antd'
import React from 'react'
import { FireOutlined, ClockCircleOutlined, LikeOutlined } from '@ant-design/icons';
import style from "./Result.module.css"

const Result = () => {
  return (
    <Row justify='end' className={style.result}>
      <div className={style.col}>
        <Row>
          <Badge color={"#1890FF"} />
          <span>Всего приглашений</span>
        </Row>
        <Row style={{ marginTop: 5, marginLeft: 15 }}>
          <span className={style.resultNum}>234</span>
        </Row>
      </div>
      <div className={style.col}>
        <Row>
          <Badge color={"#52C41A"}/>
          <span>Пройдено</span>
        </Row>
        <Row align="middle" style={{marginTop : 5, marginLeft: 15}}>
          <LikeOutlined style={{ color: "#000",paddingRight: 5 }}/>
          <span className={style.resultNum}>45</span
          ></Row>
      </div>
      <div className={style.col}>
        <Row>
          <Badge color={"#FAAD14"}/>
          <span>В процессе</span>
        </Row>
        <Row align="middle" style={{marginTop : 5, marginLeft: 15}}>
          <ClockCircleOutlined style={{ color: "#000",paddingRight: 5 }}/>
          <span className={style.resultNum}>2</span>
        </Row>
      </div>
      <div className={style.col}>
        <Row>
          <Badge color={"#FF4D4F"}/>
          <span>Отказано</span>
        </Row>
        <Row align="middle" style={{marginTop : 5, marginLeft: 15}}>
          <FireOutlined style={{ color: "#000",paddingRight: 5 }}/>
          <span className={style.resultNum}>76</span>
        </Row>
      </div>
    </Row>
  )
}

export default Result;