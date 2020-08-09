import React, { useState } from 'react'
import MeasureSelect from './MeasureSelect'
import measures from '../data/measures'

const Converter = () => {
  const [unitA, setUnitA] = useState(measures.temperature.set1["Celsius"])
  const [unitB, setUnitB] = useState(measures.temperature.set1["Fahrenheit"])
  const [measurement, setMeasurement] = useState("temperature")
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")

  const onSubmit = (event) => {
    event.preventDefault()
    setOutput(_convert(measurement))
  }

  const onSelectChange = (value) => {
    changeUnit(value)
    setMeasurement(value)
  }

  const onSwitch = () => {
    setUnitA(unitB)
    setUnitB(unitA)
    // clear form after switch?
  }

  const changeUnit = (value) => {
    let {temperature, weight, length} = measures
    value = value === "weight" ? "lbs" : value
    value = value === "length" ? "ft" : value

    switch (value) {
      case "temperature":
        setUnitA(temperature.set1["Celsius"])
        setUnitB(temperature.set1["Fahrenheit"])
        break
      case "lbs":
        setUnitA(weight.set1["Kilogram"])
        setUnitB(weight.set1["Pound"])
        break
      case "oz":
        setUnitA(weight.set2["Gram"])
        setUnitB(weight.set2["Ounce"])
        break
      case "ft":
        setUnitA(length.set1["Meter"])
        setUnitB(length.set1["Feet"])
        break
      case "in":
        setUnitA(length.set2["Centimeter"])
        setUnitB(length.set2["Inch"])
        break
      default:
        break
    }
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
      <form onSubmit={onSubmit}>
        <MeasureSelect 
          onSelectChange={onSelectChange} 
          measurement={measurement}
          changeUnit={changeUnit}
          unit={unitB.symbol}
        />

        <p>Convert from {unitA.unit} to {unitB.unit} 
        <button onClick={() => onSwitch()}>switch</button></p>
        <input 
          type="text"
          id="input"
          value={input}
          placeholder={unitA.unit}
          onChange={({target}) => setInput(target.value)}
        />
          {unitA.symbol} ➜ 
        <input
          type="text"
          id="output"
          value={output}
          placeholder={unitB.unit}
          readOnly
        /> {unitB.symbol}
        <br></br>
        <button>convert</button>
      </form>
    </div>
  )
}

export default Converter