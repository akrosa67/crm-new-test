import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 5px;
  &: first-child {
    margin-left: 0;
  }
`


const DigitContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0;
`

const SingleDigit = styled.span`
  position: relative;
  display: flex;
  flex: 0 1 25%;
  font-size: 18px;
  background-color: #404549;
  border-radius: 5px;
  padding: 10px 12px;
  color: white;
  height: 30px;
  align-items: center;
  justify-content: center;
  width: 26px;
  &:first-child {
    margin-right: 2px;
  }
  &:after {
    position: absolute;
    left: 0px;
    right: 0px;
    top: 47%;
    bottom: 50%;
    content: "";
    width: '100%';
    height: 2px;
    background-color: #232323;
    opacity: 0.4;
  }
`

function Digit({ value }) {
  const leftDigit = value >= 10 ? value.toString()[0] : '0'
  const rightDigit = value >= 10 ? value.toString()[1] : value.toString()
  return (
    <Container>
      <DigitContainer>
        <SingleDigit>
          {leftDigit}
        </SingleDigit>
        <SingleDigit>
          {rightDigit}
        </SingleDigit>
      </DigitContainer>
    </Container>
  )
}


Digit.propTypes = {
    value: PropTypes.any,
    title: PropTypes.any
}
export default Digit