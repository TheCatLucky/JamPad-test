import { Button } from 'antd';
import React from 'react';
import style from "./IntroCase.module.css";
const IntroCase = (props) => {

  const changePage = () => {
    props.onPageChange(1);
  }
  return (
    <div className={style.testInfo}>
      <h1 className={style.testNum}>Тест №_</h1>
      <p className={style.bold}>Вам попарно будут представлены различные профессии, например:</p>
      <div className={style.buttonZone}>
        <Button className={style.answerButton} size='large'
        onDoubleClick={() => changePage()}
        >ЗООТЕХНИК</Button>
        <Button className={style.answerButton} size='large'
        onDoubleClick={() => changePage()}
        >ГЛАВНЫЙ ВРАЧ</Button>
      </div>
      <p className={style.bold}>В каждой паре Вам следует отдать предпочтение какой-то одной.</p>
      <p className={style.smaillBold}>Выбрать вариант можно при помощи мыши. Подтвердить выбор можно через двойной
        щелчок или кнопки "Продолжить"</p>
      <Button type="primary"
        className={style.acceptButton}
        size='large'
        onClick={() => changePage()}
      >
        Всё понятно!
      </Button>
    </div>
  )
}

export default IntroCase;