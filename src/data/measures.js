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

export default measures