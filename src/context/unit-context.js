import { createContext, useState } from "react";

const UnitContext = createContext();

function UnitProvider({ children }) {
  const [activeTab, setActiveTab] = useState("length");
  const [data, setData] = useState("");
  const [fromSelection, setFromSelection] = useState(null);
  const [toSelection, setToSelection] = useState(null);
  const [result, setResult] = useState("");
  const [error, setError] = useState(null);

  const swapUnits = () => {
    const tempFrom = fromSelection;
    setFromSelection(toSelection);
    setToSelection(tempFrom);
  };

  const resetForm = () => {
    setData("");
    setFromSelection(null);
    setToSelection(null);
    setResult("");
    setError(null);
  };

  const shareData = {
    activeTab,
    setActiveTab,
    data,
    setData,
    fromSelection,
    setFromSelection,
    toSelection,
    setToSelection,
    result,
    setResult,
    error,
    setError,
    swapUnits,
    resetForm,
  };

  return (
    <UnitContext.Provider value={shareData}>{children}</UnitContext.Provider>
  );
}

export { UnitProvider };
export default UnitContext;
