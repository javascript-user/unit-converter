import { useEffect, useCallback } from "react";
import { convert } from "../../services/conversionService.js";
import useUnitContext from "../../hooks/use-UnitContext.js";
import options from "../../utils/DropdownList.js";
import Accordion from "../Accordion/Accordion.js";
import { GoArrowSwitch } from "react-icons/go";

function Form() {
  const {
    activeTab,
    setData,
    setFromSelection,
    setToSelection,
    setResult,
    setError,
    result,
    data,
    error,
    fromSelection,
    toSelection,
    swapUnits,
  } = useUnitContext();

  const getTabOptions = useCallback(() => {
    return options[activeTab]?.units || [];
  }, [activeTab]);

  // Perform conversion whenever inputs change
  useEffect(() => {
    if (!fromSelection?.value || !toSelection?.value) {
      setResult("");
      setError(null);
      return;
    }

    if (data === "" || data === null || data === undefined) {
      setResult("");
      setError(null);
      return;
    }

    const { result: convertedValue, error: conversionError } = convert(
      data,
      fromSelection.value,
      toSelection.value,
      activeTab
    );

    setResult(convertedValue);
    setError(conversionError);
  }, [data, fromSelection, toSelection, activeTab, setResult, setError]);

  // Filter out characters that aren't valid for number input
  const handleInputChange = (e) => {
    const value = e.target.value;

    // Allow empty string (clearing input)
    if (value === "") {
      setData("");
      return;
    }

    // Allow negative sign only for temperature
    if (activeTab === "temperature") {
      // Allow: digits, one decimal point, leading minus sign
      if (/^-?\d*\.?\d*$/.test(value)) {
        setData(value);
      }
    } else {
      // Allow: digits and one decimal point only
      if (/^\d*\.?\d*$/.test(value)) {
        setData(value);
      }
    }
  };

  // Prevent invalid key presses
  const handleKeyDown = (e) => {
    const invalidKeys = ["e", "E", "+"];
    if (activeTab !== "temperature") {
      invalidKeys.push("-");
    }
    if (invalidKeys.includes(e.key)) {
      e.preventDefault();
    }
  };

  const showResult = result !== "" && result !== null && !error;

  return (
    <div className="converter-form">
      {/* Input Field */}
      <div className="input-group">
        <label className="input-label" htmlFor="convert-input">
          Value
        </label>
        <div className="input-wrapper">
          <input
            id="convert-input"
            type="text"
            inputMode="decimal"
            value={data}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder={
              activeTab === "temperature"
                ? "Enter value (e.g., -40, 100)"
                : "Enter a positive number"
            }
            className={`input-field ${error ? "has-error" : ""}`}
            autoComplete="off"
          />
          {fromSelection?.symbol && (
            <span className="input-symbol">{fromSelection.symbol}</span>
          )}
        </div>
        {error && (
          <div className="error-message" role="alert">
            <span className="error-icon">⚠️</span>
            {error}
          </div>
        )}
      </div>

      {/* Unit Selectors */}
      <div className="selectors-section">
        <div className="selector-row">
          <div className="selector-group">
            <span className="selector-label">From</span>
            <Accordion
              list={getTabOptions()}
              getSelected={(value) => setFromSelection(value)}
              selectedValue={fromSelection}
            />
          </div>

          <button
            className="swap-button"
            onClick={swapUnits}
            title="Swap units"
            aria-label="Swap from and to units"
            id="swap-units-btn"
          >
            <GoArrowSwitch />
          </button>

          <div className="selector-group">
            <span className="selector-label">To</span>
            <Accordion
              list={getTabOptions()}
              getSelected={(value) => setToSelection(value)}
              selectedValue={toSelection}
            />
          </div>
        </div>
      </div>

      {/* Result Display */}
      {showResult && (
        <div className="result-card" role="status" aria-live="polite">
          <div className="result-label">Converted Result</div>
          <div className="result-value-row">
            <span className="result-number">{result}</span>
            <span className="result-symbol">{toSelection?.symbol}</span>
          </div>
          <div className="result-formula">
            <span className="highlight">{data}</span> {fromSelection?.symbol} ={" "}
            <span className="highlight">{result}</span> {toSelection?.symbol}
          </div>
        </div>
      )}
    </div>
  );
}

export default Form;
