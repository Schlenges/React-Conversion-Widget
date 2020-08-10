import React from 'react'

const Switch = ({unitA, unitB, setUnitA, setUnitB}) => {
  const onSwitch = (event) => {
    event.preventDefault()
    setUnitA(unitB)
    setUnitB(unitA)
  }

  return (
    <p>Convert from <strong>{unitA.unit}</strong> to <strong>{unitB.unit}</strong> 
      <button className="pure-button button-small" onClick={onSwitch}>
        <i className="fas fa-exchange-alt"></i> switch
      </button>
    </p>
  )
}

export default Switch