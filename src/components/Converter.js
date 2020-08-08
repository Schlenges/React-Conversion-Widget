import React, { useState } from 'react'

  // g * 0.035274
  // oz / 0.035274

  // cm * 0.39370
  // in / 0.39370

const Converter = () => {

  const [unitA, setUnitA] = useState("Kilogram")
  const [unitB, setUnitB] = useState("Fahrenheit")
  const [measurement, setMeasurement] = useState("temperature")
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")

  const _convert = (measurement) => {
    switch (measurement) {
      case "temperature":
        let temp = unitA === "Celsius" ? input * 1.8000 + 32.00 : (input - 32) / 1.8000
        return temp.toFixed(1)
      case "weight":
        let weight = unitA === "Kilogram" ? input * 2.2046 : input / 2.2046
        return weight.toFixed(1)
      case "length":
        let length = unitA === "Meters" ? input * 3.2808 : input / 3.2808
        return length.toFixed(2)
    }
  }

  const onSubmit = (event) => {
    event.preventDefault()
    setOutput(_convert(measurement))
    // clear state
  }

  const onChange = (value) => {
    switch (value) {
      case "temperature":
        setUnitA("Celsius")
        setUnitB("Fahrenheit")
        break
      case "weight":
        setUnitA("Kilogram")
        setUnitB("Pound")
        break
      case "length":
        setUnitA("Meters")
        setUnitB("Feet")
        break
    }

    setMeasurement(value)
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="measurements">Measurements: </label>
        <select 
          name="measurements"
          id="measurements" 
          onChange={({target}) => onChange(target.value)}
        >
          <option value="temperature">Temperature</option>
          <option value="weight">Weight</option>
          <option value="length">Length</option>
        </select>

        <p>Convert from {unitA} to {unitB} <button>switch</button></p>
        <input 
          type="text"
          id="input"
          value={input}
          placeholder={unitA}
          onChange={({target}) => setInput(target.value)}
        />
         ➜ 
        <input
          type="text"
          id="output"
          value={output}
          placeholder={unitB}
          readOnly
        />
        <br></br>
        <button>convert</button>
      </form>
    </div>
  )
}

export default Converter