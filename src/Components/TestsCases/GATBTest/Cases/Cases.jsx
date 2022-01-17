import { Button, Progress } from 'antd';
import classnames from "classnames";
import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentGatbProgress } from '../../../../Redux/reducers/test/testReducer';
import left from "./../../../../Common/img/LeftPicture.svg";
import right from "./../../../../Common/img/RightPicture.svg";
import style from "./Cases.module.css";

const Cases = (props) => {

  let selectedState = {};
  let resultLeft = [];
  let resultRight = [];
  const result = [];
  for (let i = 1; i <= 25; i++) {
    selectedState[`l${i}`] = false;
    selectedState[`r${i}`] = false;
    resultLeft.push(`l${i}`);
    resultRight.push(`r${i}`)
  }
  const [error, setError] = useState(false);
  const [percent, setPercent] = useState(0);
  const [answers, setAnswers] = useState([])
  const [selectedL, setSelectedL] = useState(selectedState);

  const dispatch = useDispatch();
  const changePage = (answer) => {
    let correctAnswers = 0;
    for (let i = 0; i < result.length; i++) {
      if (result[i] === true) {
        correctAnswers++;
      }
    }
    if (!answer) {
      setError(true)
      return;
    }
    onSubmit(correctAnswers);
    setError(false);
    dispatch(setCurrentGatbProgress(percent));
    props.onPageChange(props.currentPage + 1);
    return;
  }
  const onSubmit = (correctAnswers) => {
    props.addAnswer(correctAnswers)
  }
  const selectAnswer = (name) => {
    setAnswers([...answers, name])
    setPercent(answers.length * 2);
  }

  const sendAnswers = (answer) => {
    for (let i = 0; i < answer.length; i++) {
      switch (answer[i]) {
        case "l1":
          result.push(answer[i + 1] === 'r25');
          break;
        case "l2":
          result.push(answer[i + 1] === 'r15');
          break;
        case "l3":
          result.push(answer[i + 1] === 'r18');
          break;
        case "l4":
          result.push(answer[i + 1] === 'r4');
          break;
        case "l5":
          result.push(answer[i + 1] === 'r17');
          break;
        case "l6":
          result.push(answer[i + 1] === 'r16');
          break;
        case "l7":
          result.push(answer[i + 1] === 'r11');
          break;
        case "l8":
          result.push(answer[i + 1] === 'r24');
          break;
        case "l9":
          result.push(answer[i + 1] === 'r22');
          break;
        case "l10":
          result.push(answer[i + 1] === 'r14');
          break;
        case "l11":
          result.push(answer[i + 1] === 'r12');
          break;
        case "l12":
          result.push(answer[i + 1] === 'r3');
          break;
        case "l13":
          result.push(answer[i + 1] === 'r8');
          break;
        case "l14":
           result.push(answer[i + 1] === 'r7');
           break;
        case "l15":
           result.push(answer[i + 1] === 'r23');
           break;
        case "l16":
           result.push(answer[i + 1] === 'r9');
           break;
        case "l17":
           result.push(answer[i + 1] === 'r10');
           break;
        case "l18":
           result.push(answer[i + 1] === 'r2');
           break;
        case "l19":
           result.push(answer[i + 1] === 'r6');
           break;
        case "l20":
          result.push(answer[i + 1] === 'r13');
          break;
        case "l21":
           result.push(answer[i + 1] === 'r5');
           break;
        case "l22":
           result.push(answer[i + 1] === 'r20');
           break;
        case "l23":
           result.push(answer[i + 1] === 'r21');
           break;
        case "l24":
           result.push(answer[i + 1] === 'r19');
           break;
        case "l25":
           result.push(answer[i + 1] === 'r1');
           break;
        default:
          break;
      }
    }
  }
  const handlerClick = (e, name) => {
    selectAnswer(name)
    setSelectedL(names => ({
      ...names,
      [name]: true,
    }))
  }
  const LeftCube = (props) => {

    return <div className={classnames(style[props.i], selectedL[props.i] && style[`active${props.i}`])}
      onClick={(e) => {
        handlerClick(e, props.i)
      }}></div>
  }
  const RightCube = (props) => {
    return <div className={classnames(style[props.i], selectedL[props.i] && style[`active${props.i}`])}
      onClick={(e) => {
        handlerClick(e, props.i)
      }}></div>
  }
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
          {resultLeft.map(i => <LeftCube i={i} key={i} />)}
        </div>
        <div className={style.objectsRight}>
          {resultRight.map(i => <RightCube i={i} key={i} />)}
        </div>
      </div>
      <div className={style.error}>
        {error && <p >Выберите вариант!</p>}
      </div>
      <Button type="primary"
        className={style.acceptButton}
        size='large'
        onClick={() => {
          sendAnswers(answers);
          changePage(answers);
        }}
      >
        Продолжить
      </Button>
    </div>
  )
}

export default Cases;