import conversions from "../utils/conversionsUtils.js";

/**
 * Validates input value and returns a sanitized number or an error object.
 */
export function validateInput(value, type) {
  if (value === "" || value === null || value === undefined) {
    return { valid: false, error: null, value: "" };
  }

  const num = Number(value);

  if (isNaN(num)) {
    return { valid: false, error: "Please enter a valid number", value };
  }

  // For non-temperature types, negative values don't make physical sense
  const nonNegativeTypes = ["length", "weight", "area", "volume", "speed", "time"];
  if (nonNegativeTypes.includes(type?.toLowerCase()) && num < 0) {
    return {
      valid: false,
      error: `Negative values are not valid for ${type}`,
      value,
    };
  }

  // Check for extremely large numbers that could cause display issues
  if (Math.abs(num) > 1e15) {
    return {
      valid: false,
      error: "Value is too large. Please enter a smaller number.",
      value,
    };
  }

  return { valid: true, error: null, value: num };
}

/**
 * Formats the result to a reasonable number of decimal places.
 */
export function formatResult(value) {
  if (value === "" || value === null || value === undefined) return "";
  const num = Number(value);
  if (isNaN(num)) return "";

  // If the number is an integer, show it as-is
  if (Number.isInteger(num)) return num.toString();

  // For very small numbers, use scientific notation
  if (Math.abs(num) < 0.000001 && num !== 0) {
    return num.toExponential(4);
  }

  // For large numbers, limit decimals
  if (Math.abs(num) >= 1000) {
    return parseFloat(num.toFixed(4)).toString();
  }

  // Otherwise, show up to 6 significant decimals
  return parseFloat(num.toPrecision(8)).toString();
}

/**
 * Converts a value between units.
 */
export function convert(value, from, to, type) {
  if (!from || !to || !type) {
    return { result: "", error: "Please select both units" };
  }

  const validation = validateInput(value, type);
  if (!validation.valid) {
    return { result: "", error: validation.error };
  }

  if (validation.value === "") {
    return { result: "", error: null };
  }

  const typeConversions = conversions[type.toLowerCase()];
  if (!typeConversions) {
    return { result: "", error: `Unknown conversion type: ${type}` };
  }

  const fromConversions = typeConversions[from.toLowerCase()];
  if (!fromConversions) {
    return { result: "", error: `Unknown unit: ${from}` };
  }

  const conversionRule = fromConversions[to.toLowerCase()];
  if (conversionRule === undefined) {
    return { result: "", error: `Cannot convert from ${from} to ${to}` };
  }

  const numValue = Number(validation.value);
  const rawResult =
    typeof conversionRule === "function"
      ? conversionRule(numValue)
      : numValue * conversionRule;

  return { result: formatResult(rawResult), error: null };
}
