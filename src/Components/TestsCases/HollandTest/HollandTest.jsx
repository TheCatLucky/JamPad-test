import { Steps } from 'antd';
import 'antd/dist/antd.css';
import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { testsAPI } from '../../../API/Api';
import { setCurrentHolPage } from '../../../Redux/reducers/test/testReducer';
import logo from "./../../../Common/img/Logo.png";
import { sendHolTestData } from './../../../Redux/reducers/test/testReducer';
import Cases from './Cases/Cases';
import style from "./HolandTest.module.css";
import IntroCase from './IntroCase/IntroCase';

const HollandTest = () => {
  const { Step } = Steps;
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const onPageChange = (current) => {
    setCurrent(current);
    dispatch(setCurrentHolPage(current));
  }

  const addAnswer = (answer) => {
    setAnswers((arr) => [...arr, answer]);
  }
  const goToNextTest = (answers) => {
    testsAPI.sendHolQuizzAnswer(1, 1, `${answers[0]},${answers[1]},${answers[2]}`)
    /* dispatch(sendHolTestData({
      id: 1,
      index: 1,
      name: answers
    })); */
    navigate(`/uscTest`);
  }
  const questions = [{
    "index": 1,
    "question": "Какую профессию вы бы предпочли?",
    "answers": {
      "left": {
        "name": "R",
        "text": "Автомеханик"
      },
      "right": {
        "name": "I",
        "text": "Биофизик"
      }
    }
  }, {
    "index": 2,
    "question": "Какую профессию вы бы предпочли?",
    "answers": {
      "left": {
        "name": "R",
        "text": "Егерь"
      },
      "right": {
        "name": "S",
        "text": "Интервьюер"
      }
    }
  },
  {
    "index": 3,
    "question": "Какую профессию вы бы предпочли?",
    "answers": {
      "left": {
        "name": "R",
        "text": "Кондитер"
      },
      "right": {
        "name": "C",
        "text": "Делопроизводитель"
      }
    }
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

export default HollandTest