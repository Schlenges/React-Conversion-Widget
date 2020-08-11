import React from 'react'

const Input = ({unitA, unitB, input, output, setInput}) => {

  return (
    <div>
      <input 
        type="text"
        id="input"
        value={input}
        placeholder={unitA.unit}
        onChange={({target}) => setInput(target.value)}
      />
      <label> {unitA.symbol} </label>
      <span> ➜ </span>
      <input
        type="text"
        id="output"
        value={output}
        placeholder={unitB.unit}
        readOnly
      />
      <label> {unitB.symbol} </label>

      <button type="submit" className="pure-button convert-button">convert</button>
    </div>
  )
}

export default Input
