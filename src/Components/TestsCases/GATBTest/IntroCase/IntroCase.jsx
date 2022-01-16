import { Button } from 'antd';
import React from 'react';
import style from "./IntroCase.module.css";
const IntroCase = (props) => {

  const changePage = () => {
    props.onPageChange(1);
    props.handleStart();
  }
  return (
    <div className={style.testInfo}>
      <h1 className={style.testNum}>Тест №_</h1>
      <p className={style.bold}>Вам будут представлены два множества, <br/> в которых представлены геометрические фигуры.</p>
      <p className={style.blueBold}>Этот тест на время!</p>
      <p className={style.bold}>Найдите каждой фигуре первого множества соотвествующую фигуру из второго.</p>
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