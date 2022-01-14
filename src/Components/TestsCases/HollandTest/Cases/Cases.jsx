import { React, useState} from 'react'
import { Button, Progress } from 'antd';
import style from "./Cases.module.css"

const Cases = (props) => {
  const [answer, setAnswer] = useState("");
  const changePage = (answer) => {
    onSubmit(answer);
    props.onPageChange(props.currentPage + 1);
  }
  const onSubmit = (name) => {
    props.addAnswer(name)
  }
  const selectAnswer = (name) => {
    setAnswer(name)
  }
  const leftAnswer = props.question.answers.left.name;
  const rightAnswer = props.question.answers.right.name;
  const percent = Math.trunc(33 * (props.question.index - 1));
  
  return (
    <div className={style.testInfo}>
      <h1 className={style.bold}>{props.question.question}</h1>
      <Progress percent={percent}
        className={style.progressBar}
      />
      <div className={style.buttonZone}>
        <Button className={style.answerButton} size='large'
          onDoubleClick={() => changePage(leftAnswer)}
          onClick={() => (selectAnswer(leftAnswer))}
        >{props.question.answers.left.text.toUpperCase()}</Button>
        <Button className={style.answerButton} size='large'
          onDoubleClick={() => changePage(rightAnswer)}
          onClick={() => (selectAnswer(rightAnswer))}
        >{props.question.answers.right.text.toUpperCase()}</Button>
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