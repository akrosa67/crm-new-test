import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Digit from './Digit'

const TimerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px;
  align-items: center;
`

const SepartorContainer = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: flex-end;
  margin: 0px;
`

const Separtor = styled.span`
  display: inline-block;
  width: 5px;
  height: 5px;
  background-color: #404549;
  border-radius: 6px;
  margin: 4px 0px;
`

function TimerStyled({ seconds, minutes, hours }) {
  return (
    <TimerContainer>
      <Digit value={hours} title="HOURS" addSeparator />
      <SepartorContainer><Separtor /><Separtor /></SepartorContainer>
      <Digit value={minutes} title="MINUTES" addSeparator />
      <SepartorContainer><Separtor /><Separtor /></SepartorContainer>
      <Digit value={seconds} title="SECONDS" />
    </TimerContainer>
  )
}

TimerStyled.propTypes = {
    seconds: PropTypes.any,
    minutes: PropTypes.any,
    hours: PropTypes.any,
    days: PropTypes.any
}

export default TimerStyled