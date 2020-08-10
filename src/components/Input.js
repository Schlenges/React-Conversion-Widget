import React, {useState} from 'react'
import measures from '../data/measures'

const Input = ({unitA, unitB, measurement}) => {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")

  const onSubmit = (event) => {
    event.preventDefault()
    setOutput(_convert(measurement))
  }

  const _convert = (measurement) => {
    let {set1, set2} = measures[measurement]

    return Object.keys(set1).includes(unitA.unit)
      ? _calculate(unitA.unit, set1.conversion)
      : _calculate(unitA.unit, set2.conversion)
  }

  const _calculate = (unit, conversionVal) => {
    if(["Celsius", "Fahrenheit"].includes(unit)){
      let val = unit === "Celsius"
        ? input * conversionVal[0] + conversionVal[1]
        : (input - conversionVal[1]) / conversionVal[0]
      return val.toFixed(1)
    }

    let val = ["Kilogram", "Gram", "Meter", "Centimeter"].includes(unit) 
      ? input * conversionVal 
      : input / conversionVal

    return val.toFixed(2)
  }

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

      <button className="pure-button convert-button" onClick={onSubmit}>convert</button>
    </div>
  )
}

export default Input
