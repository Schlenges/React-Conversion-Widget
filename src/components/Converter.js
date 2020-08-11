import React, { useState } from 'react'
import MeasureSelect from './MeasureSelect'
import Switch from './Switch'
import Input from './Input'
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
    <div className="container">
      <div className="header">
        <h1>Metric Conversion</h1>
      </div>
      <form className="pure-form" onSubmit={onSubmit}>
        <fieldset>
          <MeasureSelect 
            measurement={measurement}
            setMeasurement={setMeasurement}
            unit={unitB.symbol}
            setUnitA={setUnitA}
            setUnitB={setUnitB}/>

          <Switch 
            unitA={unitA} 
            unitB={unitB} 
            setUnitA={setUnitA} 
            setUnitB={setUnitB} 
            setOutput={setOutput}/>

          <Input
            unitA={unitA}
            unitB={unitB}
            input={input}
            output={output}
            setInput={setInput}/>
        </fieldset>
      </form>
    </div>
  )
}

export default Converter