import React from 'react'
import SubSelect from './SubSelect'

const MeasureSelect = ({onSelectChange, measurement, changeUnit, unit}) => {

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