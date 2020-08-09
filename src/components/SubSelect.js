import React from 'react'

const SubSelect = ({measurement, changeUnit, unit}) => {
  let weights = {
    name: "weights",
    values: ["lbs", "oz"],
    labels: ["kg, lbs", "g, oz"]
  }

  let lengths = {
    name: "lengths",
    values: ["ft", "in"],
    labels: ["m, ft", "cm, in"]
  }

  const SelectForm = ({name, values, labels}) => (
    <select name={name} value={unit} onChange={({target}) => changeUnit(target.value)}>
      <option value={values[0]}>{labels[0]}</option>
      <option value={values[1]}>{labels[1]}</option>
    </select>
  )

  return measurement === "weight" 
      ?  SelectForm(weights)
      :  SelectForm(lengths)
}

export default SubSelect