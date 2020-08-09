import React, { useState } from 'react'

const Converter = () => {
  const [unitA, setUnitA] = useState({unit: "Celsius", symbol: "°C"})
  const [unitB, setUnitB] = useState({unit: "Fahrenheit", symbol: "°F"})
  const [measurement, setMeasurement] = useState("temperature")
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")

  const _convert = (measurement) => {
    switch (measurement) {
      case "temperature":
        let temp = unitA.unit === "Celsius" ? input * 1.8000 + 32.00 : (input - 32) / 1.8000
        return temp.toFixed(1)
      case "weight":
        let weight = unitA.unit === "Kilogram" ? input * 2.2046 : input / 2.2046
        return weight.toFixed(1)
      case "length":
        let length = unitA.unit === "Meters" ? input * 3.2808 : input / 3.2808
        return length.toFixed(2)
    }
  }

  const onSubmit = (event) => {
    event.preventDefault()
    setOutput(_convert(measurement))
  }

  const onSelectChange = (value) => {
    switch (value) {
      case "temperature":
        setUnitA({unit: "Celsius", symbol: "°C"})
        setUnitB({unit: "Fahrenheit", symbol: "°F"})
        break
      case "weight":
        setUnitA({unit: "Kilogram", symbol: "kg"})
        setUnitB({unit: "Pound", symbol: "lbs"})
        break
      case "length":
        setUnitA({unit: "Meters", symbol: "m"})
        setUnitB({unit: "Feet", symbol: "ft"})
        break
    }

    setMeasurement(value)
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

// g * 0.035274
// oz / 0.035274

// cm * 0.39370
// in / 0.39370

export default Converter