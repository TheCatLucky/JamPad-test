import { Steps } from 'antd';
import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { testsAPI } from '../../../API/Api';
import { setCurrentUscPage } from '../../../Redux/reducers/test/testReducer';
import logo from "./../../../Common/img/Logo.png";
import Cases from './Cases/Cases';
import IntroCase from './IntroCase/IntroCase';
import style from "./UscTest.module.css";

const UscTest = () => {
  const { Step } = Steps;
  const [current, setCurrent] = useState(+localStorage.getItem("uscPage") || 0);
  const [answers, setAnswers] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const onPageChange = (current) => {
    setCurrent(current);
    dispatch(setCurrentUscPage(current));
    localStorage.setItem("uscPage", current);
  }
  if (+localStorage.getItem("uscPage") === 4) {
    navigate(`/testing`);
    localStorage.setItem("uscPage", 0);
  }
  const addAnswer = (answer) => {
    setAnswers((arr) => [...arr, answer]);
  }
  const goToNextTest = (answer) => {
    testsAPI.sendUscQuizzAnswer(1, 1, `${answer[0]},${answer[1]},${answer[2]}`)
    navigate(`/gatbTest`);
  }
  const questions = [{
    "index": 1,
    "question": "Продвижение по службе больше зависит от удачного стечечния обстоятельств, чем от способностей и усилий человека."
  },
  {
    "index": 2,
    "question": "Большинство разводов происходит от того, что люди не захотели приспособиться друг к другу."
  },
  {
    "index": 3,
    "question": "Болезнь – дело случая; если уж суждено заболеть, то ничего не поделаешь."
  }
  ]
  let currentRender = null;
  const testCase = <Cases onPageChange={onPageChange}
    addAnswer={addAnswer}
    question={questions[current - 1]}
    currentPage={current}
  />;
  switch (current) {
    case 0:
      currentRender = <IntroCase onPageChange={onPageChange} />
      break;
    case 1:
      currentRender = testCase;
      break;
    case 2:
      currentRender = testCase;
      break;
    case 3:
      currentRender = testCase;
      break;
    case 4:
      goToNextTest(answers)
      break;
    default:
      currentRender = null;
      break;
  }
  return (
    <div className={style.wrapper}>
      <div className={style.row}>
        <div>
          <img src={logo} alt="logo" className={style.logo} />
        </div>
        <Steps current={current} className={style.steps}>
          <Step />
          <Step />
          <Step />
          <Step />
        </Steps>
      </div>
      {currentRender}
    </div>
  )
}

export default UscTest