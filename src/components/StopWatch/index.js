import React from 'react'
import { useStopwatch } from 'react-timer-hook'
import TimerStyled from './TimerStyled'

export default function UseStopwatchDemo() {
  const {
    seconds,
    minutes,
    hours,
    days
  } = useStopwatch({ autoStart: true })


  return (
    <TimerStyled seconds={seconds} minutes={minutes} hours={hours} days={days} />
  )
}