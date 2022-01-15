import { React, useState } from 'react'
import { Button, Progress } from 'antd';
import style from "./Cases.module.css"
import { useDispatch } from 'react-redux';
import { setCurrentUscProgress } from '../../../../Redux/reducers/test/testReducer';

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
    dispatch(setCurrentUscProgress(percent));
    props.onPageChange(props.currentPage + 1);
    return;
  }
  const onSubmit = (name) => {
    props.addAnswer(name)
  }
  const selectAnswer = (name) => {
    setAnswer(name)
  }
  const percent = Math.trunc(33 * (props.question.index - 1));

  return (
    <div className={style.testInfo}>
      <h1 className={style.intro}>Выберите один из вариантов</h1>
      <Progress percent={percent}
        className={style.progressBar}
      />
      <div className={style.row}>
        <h1 className={style.question}>{props.question.question}</h1>
        <div className={style.buttonZone}>
          <Button className={style.answerButton} size='large'
            onDoubleClick={() => changePage("3")}
            onClick={() => (selectAnswer("3"))}
          >Полностью согласен</Button>
          <Button className={style.answerButton} size='large'
            onDoubleClick={() => changePage("2")}
            onClick={() => (selectAnswer("2"))}
          >Пожалуй, согласен</Button>
          <Button className={style.answerButton} size='large'
            onDoubleClick={() => changePage("1")}
            onClick={() => (selectAnswer("1"))}
          >Скорее согласен, чем несогласен</Button>
          <Button className={style.answerButton} size='large'
            onDoubleClick={() => changePage("-1")}
            onClick={() => (selectAnswer("-1"))}
          >Скорее несогласен, чем согласен</Button>
          <Button className={style.answerButton} size='large'
            onDoubleClick={() => changePage("-2")}
            onClick={() => (selectAnswer("-2"))}
          >Пожалуй, несогласен</Button>
          <Button className={style.answerButton} size='large'
            onDoubleClick={() => changePage("-3")}
            onClick={() => (selectAnswer("-3"))}
          >Полностью несогласен</Button>
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