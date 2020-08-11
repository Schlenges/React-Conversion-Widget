import React from 'react'
import SubSelect from './SubSelect'
import measures from '../data/measures'

const MeasureSelect = ({measurement, setMeasurement, unit, setUnitA, setUnitB}) => {
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
      <label htmlFor="measurements">Measurements: </label>
        <select name="measurements" id="measurements" onChange={({target}) => onSelectChange(target.value)}>
          <option value="temperature">Temperature</option>
          <option value="weight">Weight</option>
          <option value="length">Length</option>
        </select>
        
        {["weight", "length"].includes(measurement)
          ? <SubSelect measurement={measurement} changeUnit={changeUnit} unit={unit}/>
          : null
        }
    </div>
  )
}

export default MeasureSelect