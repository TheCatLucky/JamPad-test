import { React, useState } from 'react'
import { Button, Progress } from 'antd';
import style from "./Cases.module.css"
import { setCurrentHolProgress } from '../../../../Redux/reducers/test/testReducer';
import { useDispatch } from 'react-redux';
import left from "./../../../../Common/img/LeftPicture.svg"
import right from "./../../../../Common/img/RightPicture.svg"

const Cases = (props) => {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const changePage = (answer) => {
    if (!answer) {
      setError(true)
      return;
    }
    onSubmit(answer);
    setAnswer("");
    setError(false);
    dispatch(setCurrentHolProgress(percent));
    props.onPageChange(props.currentPage + 1);
    return;
  }
  const onSubmit = (name) => {
    props.addAnswer(name)
  }
  const selectAnswer = (name) => {
    setAnswer(name)
  }

  const percent = 0;

  return (
    <div className={style.testInfo}>
      <h1 className={style.bold}>Найдите соответствующие фигуры в обоих множествах</h1>
      <Progress percent={percent}
        className={style.progressBar}
      />
      <div className={style.pictures}>
        <img src={left} className={style.left} alt="leftPicture" />
        <img src={right} className={style.right} alt="rightPicture" />
        <div className={style.objectsLeft}>
          <div className={style.l1}></div>
          <div className={style.l2}></div>
          <div className={style.l3}></div>
          <div className={style.l4}></div>
          <div className={style.l5}></div>
          <div className={style.l6}></div>
          <div className={style.l7}></div>
          <div className={style.l8}></div>
          <div className={style.l9}></div>
          <div className={style.l10}></div>
          <div className={style.l11}></div>
          <div className={style.l12}></div>
          <div className={style.l13}></div>
          <div className={style.l14}></div>
          <div className={style.l15}></div>
          <div className={style.l16}></div>
          <div className={style.l17}></div>
          <div className={style.l18}></div>
          <div className={style.l19}></div>
          <div className={style.l20}></div>
          <div className={style.l21}></div>
          <div className={style.l22}></div>
          <div className={style.l23}></div>
          <div className={style.l24}></div>
          <div className={style.l25}></div>
        </div>
        <div className={style.objectsRight}>
          <div className={style.r1}></div>
          <div className={style.r2}></div>
          <div className={style.r3}></div>
          <div className={style.r4}></div>
          <div className={style.r5}></div>
          <div className={style.r6}></div>
          <div className={style.r7}></div>
          <div className={style.r8}></div>
          <div className={style.r9}></div>
          <div className={style.r10}></div>
          <div className={style.r11}></div>
          <div className={style.r12}></div>
          <div className={style.r13}></div>
          <div className={style.r14}></div>
          <div className={style.r15}></div>
          <div className={style.r16}></div>
          <div className={style.r17}></div>
          <div className={style.r18}></div>
          <div className={style.r19}></div>
          <div className={style.r20}></div>
          <div className={style.r21}></div>
          <div className={style.r22}></div>
          <div className={style.r23}></div>
          <div className={style.r24}></div>
          <div className={style.r25}></div>
        </div>

      </div>
      <div className={style.error}>
        {error && <p >Выберите вариант!</p>}
      </div>
      <Button type="primary"
        className={style.acceptButton}
        size='large'
        onClick={() => changePage(answer)}
      >
        Продолжить
      </Button>
    </div>
  )
}

export default Cases;