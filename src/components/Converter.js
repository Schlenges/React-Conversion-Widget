import React, { useState } from 'react'
import MeasureSelect from './MeasureSelect'
import Switch from './Switch'
import Input from './Input'
import measures from '../data/measures'

const Converter = () => {
  const [unitA, setUnitA] = useState(measures.temperature.set1["Celsius"])
  const [unitB, setUnitB] = useState(measures.temperature.set1["Fahrenheit"])
  const [measurement, setMeasurement] = useState("temperature")

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

  return (
    <div>
      <form>
        <MeasureSelect 
          onSelectChange={onSelectChange} 
          measurement={measurement}
          changeUnit={changeUnit}
          unit={unitB.symbol}
        />

        <Switch unitA={unitA} unitB={unitB} setUnitA={setUnitA} setUnitB={setUnitB}/>

        <Input
          unitA={unitA}
          unitB={unitB}
          measurement={measurement}
        />
      </form>
    </div>
  )
}

export default Converter