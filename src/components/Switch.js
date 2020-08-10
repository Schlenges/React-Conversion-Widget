import React from 'react'

const Switch = ({unitA, unitB, setUnitA, setUnitB}) => {
  const onSwitch = (event) => {
    event.preventDefault()
    setUnitA(unitB)
    setUnitB(unitA)
  }

  return (
    <p>Convert from {unitA.unit} to {unitB.unit} 
      <button onClick={onSwitch}>switch</button>
    </p>
  )
}

export default Switch