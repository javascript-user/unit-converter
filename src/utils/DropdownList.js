const options = {
  length: {
    units: [
      { label: "Millimeter (mm)", value: "millimeter", symbol: "mm" },
      { label: "Centimeter (cm)", value: "centimeter", symbol: "cm" },
      { label: "Meter (m)", value: "meter", symbol: "m" },
      { label: "Kilometer (km)", value: "kilometer", symbol: "km" },
      { label: "Inch (in)", value: "inch", symbol: "in" },
      { label: "Foot (ft)", value: "foot", symbol: "ft" },
      { label: "Yard (yd)", value: "yard", symbol: "yd" },
      { label: "Mile (mi)", value: "mile", symbol: "mi" },
    ],
  },
  weight: {
    units: [
      { label: "Milligram (mg)", value: "milligram", symbol: "mg" },
      { label: "Gram (g)", value: "gram", symbol: "g" },
      { label: "Kilogram (kg)", value: "kilogram", symbol: "kg" },
      { label: "Ounce (oz)", value: "ounce", symbol: "oz" },
      { label: "Pound (lb)", value: "pound", symbol: "lb" },
      { label: "Metric Ton (t)", value: "ton", symbol: "t" },
    ],
  },
  temperature: {
    units: [
      { label: "Celsius (°C)", value: "celsius", symbol: "°C" },
      { label: "Fahrenheit (°F)", value: "fahrenheit", symbol: "°F" },
      { label: "Kelvin (K)", value: "kelvin", symbol: "K" },
    ],
  },
  area: {
    units: [
      { label: "Sq Millimeter (mm²)", value: "sqmillimeter", symbol: "mm²" },
      { label: "Sq Centimeter (cm²)", value: "sqcentimeter", symbol: "cm²" },
      { label: "Sq Meter (m²)", value: "sqmeter", symbol: "m²" },
      { label: "Sq Kilometer (km²)", value: "sqkilometer", symbol: "km²" },
      { label: "Sq Inch (in²)", value: "sqinch", symbol: "in²" },
      { label: "Sq Foot (ft²)", value: "sqfoot", symbol: "ft²" },
      { label: "Acre (ac)", value: "acre", symbol: "ac" },
      { label: "Hectare (ha)", value: "hectare", symbol: "ha" },
    ],
  },
  volume: {
    units: [
      { label: "Milliliter (mL)", value: "milliliter", symbol: "mL" },
      { label: "Liter (L)", value: "liter", symbol: "L" },
      { label: "Cubic Meter (m³)", value: "cubicmeter", symbol: "m³" },
      { label: "Gallon (gal)", value: "gallon", symbol: "gal" },
      { label: "Cup (cup)", value: "cup", symbol: "cup" },
      { label: "Fluid Ounce (fl oz)", value: "fluidounce", symbol: "fl oz" },
      { label: "Tablespoon (tbsp)", value: "tablespoon", symbol: "tbsp" },
      { label: "Teaspoon (tsp)", value: "teaspoon", symbol: "tsp" },
    ],
  },
  speed: {
    units: [
      { label: "Meters/sec (m/s)", value: "meterspersecond", symbol: "m/s" },
      { label: "Kilometers/hr (km/h)", value: "kilometersperhour", symbol: "km/h" },
      { label: "Miles/hr (mph)", value: "milesperhour", symbol: "mph" },
      { label: "Knot (kn)", value: "knot", symbol: "kn" },
      { label: "Feet/sec (ft/s)", value: "footpersecond", symbol: "ft/s" },
    ],
  },
  time: {
    units: [
      { label: "Millisecond (ms)", value: "millisecond", symbol: "ms" },
      { label: "Second (s)", value: "second", symbol: "s" },
      { label: "Minute (min)", value: "minute", symbol: "min" },
      { label: "Hour (hr)", value: "hour", symbol: "hr" },
      { label: "Day (d)", value: "day", symbol: "d" },
      { label: "Week (wk)", value: "week", symbol: "wk" },
      { label: "Month (mo)", value: "month", symbol: "mo" },
      { label: "Year (yr)", value: "year", symbol: "yr" },
    ],
  },
};

export default options;
