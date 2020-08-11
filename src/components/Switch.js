import React from 'react'

const Switch = ({unitA, unitB, setUnitA, setUnitB, setOutput}) => {
  const onSwitch = (event) => {
    event.preventDefault()
    setUnitA(unitB)
    setUnitB(unitA)
    setOutput("")
  }

  return (
    <p>Convert from <strong>{unitA.unit}</strong> to <strong>{unitB.unit}</strong> 
      <button type="button" className="pure-button button-small" onClick={onSwitch}>
        <i className="fas fa-exchange-alt"></i> switch
      </button>
    </p>
  )
}

export default Switch