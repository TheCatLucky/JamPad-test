import { Steps } from 'antd';
import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { testsAPI } from '../../../API/Api';
import Countdown from '../../../Common/Timer/Timer';
import { setCurrentHolPage } from '../../../Redux/reducers/test/testReducer';
import logo from "./../../../Common/img/Logo.png";
import Cases from './Cases/Cases';
import style from "./GATBTest.module.css";
import IntroCase from './IntroCase/IntroCase';

const GATBTest = () => {
  const { Step } = Steps;
  const StatusBoard = {
    STARTED: 'Started',
    STOPPED: 'Stopped',
  }
  const [current, setCurrent] = useState(1);
  const [answers, setAnswers] = useState([]);
  const [status, setStatus] = useState(StatusBoard.STOPPED)
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const onPageChange = (current) => {
    setCurrent(current);
    dispatch(setCurrentHolPage(current));
  }

  const addAnswer = (answer) => {
    setAnswers((arr) => [...arr, answer]);
  }
  const handleStart = () => {
   // setStatus(StatusBoard.STARTED)
  }
  const handleStop = () => {
    setStatus(StatusBoard.STOPPED)
  }
  const goToNextTest = (answers) => {
    testsAPI.sendGatb_5QuizzAnswer(1, answers)
    /* dispatch(sendHolTestData({
      id: 1,
      index: 1,
      name: answers
    })); */
    navigate(`/testing`);
  }

  let currentRender = null;
  const testCase = <Cases onPageChange={onPageChange}
    addAnswer={addAnswer}
    currentPage={current}
  />;
  switch (current) {
    case 0:
      currentRender = <IntroCase onPageChange={onPageChange}
        handleStart={handleStart}
        handleStop={handleStop}
        status={status}
        />
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
        <div className={style.timer}>
        <Countdown StatusBoard={StatusBoard}
          status={status}
          />
        </div>
      </div>
      
      {currentRender}
    </div>
  )
}

export default GATBTest;