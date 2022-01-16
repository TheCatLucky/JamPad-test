import React, { useState, useEffect, useRef } from 'react'
import { Progress } from 'antd';
import { useNavigate } from 'react-router-dom';


export default function Countdown(props) {
  const INITIAL_COUNT = 120
  
  const [secondsRemaining, setSecondsRemaining] = useState(INITIAL_COUNT)
  const navigate = useNavigate()
  const secondsToDisplay = secondsRemaining % 60
  const minutesToDisplay = (secondsRemaining - secondsToDisplay) / 60
 
  useInterval(
    () => {
      if (secondsRemaining > 0) {
        setSecondsRemaining(secondsRemaining - 1)
      } else {
        props.handleStop(props.StatusBoard.STOPPED)
      }
    },
    props.status === props.StatusBoard.STARTED ? 1000 : null,
  )
  let percent = 100 - ((INITIAL_COUNT - secondsRemaining) / 100)
  let minute = oneDigit(minutesToDisplay);
  let seconds = twoDigits(secondsToDisplay)
  if (secondsRemaining === 0) {
    navigate(`/testing`);
  }
  return (
    <Progress type="circle" percent={percent} format={() => `${minute}:${seconds}`} />
  )
}

function useInterval(callback, delay) {
  const savedCallback = useRef()
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    function tick() {
      savedCallback.current()
    }
    if (delay !== null) {
      let id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

const twoDigits = (num) => String(num).padStart(2, '0')
const oneDigit = (num) => String(num).padStart(1)
