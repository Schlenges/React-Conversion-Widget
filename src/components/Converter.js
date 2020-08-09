import React, { useState } from 'react'

const measures = {
  temperature: {
    set1: {
      conversion: [1.8000, 32],
      "Celsius": {unit: "Celsius", symbol: "°C"},
      "Fahrenheit": {unit: "Fahrenheit", symbol: "°F"}
    }
  },
  weight: {
    set1: {
      conversion: 2.2046,
      "Kilogram": {unit: "Kilogram", symbol: "kg"},
      "Pound": {unit: "Pound", symbol: "lbs"}
    },
    set2: {
      conversion: 0.035274,
      "Gram": {unit: "Gram", symbol: "g"},
      "Ounce": {unit: "Ounce", symbol: "oz"}
    }
  },
  length: {
    set1: {
      conversion: 3.2808,
      "Meter": {unit: "Meter", symbol: "m"},
      "Feet": {unit: "Feet", symbol: "ft"}
    },
    set2: {
      conversion: 0.39370,
      "Centimeter": {unit: "Centimeter", symbol: "cm"},
      "Inch": {unit: "Inch", symbol: "in"}
    }
  }
}

const Converter = () => {
  const [unitA, setUnitA] = useState(measures.temperature.set1["Celsius"])
  const [unitB, setUnitB] = useState(measures.temperature.set1["Fahrenheit"])
  const [measurement, setMeasurement] = useState("temperature")
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")

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

  const onSubmit = (event) => {
    event.preventDefault()
    setOutput(_convert(measurement))
  }

  const onSelectChange = (value) => {
    changeUnit(value)
    setMeasurement(value)
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

  const onSwitch = () => {
    setUnitA(unitB)
    setUnitB(unitA)
    // clear form after switch?
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="measurements">Measurements: </label>
        <select 
          name="measurements"
          id="measurements" 
          onChange={({target}) => onSelectChange(target.value)}
        >
          <option value="temperature">Temperature</option>
          <option value="weight">Weight</option>
          <option value="length">Length</option>
        </select>

        {measurement === "weight" 
          ? (
            <select name="weights" onChange={({target}) => changeUnit(target.value)}>
              <option value="lbs">kg, lbs</option>
              <option value="oz">g, oz</option>
            </select>
          )
          : measurement === "length"
            ? (
              <select name="lengths" value={unitB.symbol} onChange={({target}) => changeUnit(target.value)}>
                <option value="ft">m, ft</option>
                <option value="in">cm, in</option>
              </select>
            )
            : null
        }

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