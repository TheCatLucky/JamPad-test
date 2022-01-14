import { Button } from 'antd';
import React from 'react';
import style from "./IntroCase.module.css";
const UscIntroCase = (props) => {

  const changePage = () => {
    props.onPageChange(1);
  }
  return (
    <div className={style.testInfo}>
      <h1 className={style.testNum}>Тест №_</h1>
      <p className={style.bold}>Вам предстоит оценить ряд утверждений, касающихся различных сторон жизни. <br />
        Просим вас отвечать правдиво и быстро.</p>
      <p className={style.bold}>Помните, что нет ответов хороших и плохих, правильных и неправильных.
      Просто мы все разные.</p>
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

export default UscIntroCase;