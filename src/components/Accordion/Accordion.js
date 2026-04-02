import { useEffect, useState } from "react";
import { GoChevronDown } from "react-icons/go";
import useUnitContext from "../../hooks/use-UnitContext";
import Modal from "../Modal";

export default function Accordion({ list = [], getSelected, selectedValue }) {
  const { activeTab } = useUnitContext();
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(list[0] || null);

  // Reset selection when tab changes
  useEffect(() => {
    if (list.length > 0) {
      setValue(list[0]);
    }
  }, [activeTab]); // eslint-disable-line react-hooks/exhaustive-deps

  // Sync with external selectedValue (for swap)
  useEffect(() => {
    if (selectedValue !== undefined && selectedValue !== null) {
      const found = list.find((item) => item.value === selectedValue.value);
      if (found && found.value !== value?.value) {
        setValue(found);
      }
    }
  }, [selectedValue]); // eslint-disable-line react-hooks/exhaustive-deps

  // Notify parent of selection changes
  useEffect(() => {
    if (value) {
      getSelected(value);
    }
  }, [value]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleUnitSelect = (item) => {
    setValue(item);
    setIsOpen(false);
  };

  const renderList = list.map((item) => (
    <div
      key={item.value}
      className={`modal-item ${value?.value === item.value ? "selected" : ""}`}
      onClick={() => handleUnitSelect(item)}
      role="option"
      aria-selected={value?.value === item.value}
    >
      <span>{item.label}</span>
      <span className="item-symbol">{item.symbol}</span>
    </div>
  ));

  return (
    <div className="selector-wrapper">
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={`selector-trigger ${isOpen ? "open" : ""}`}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span>{value?.label || "Select unit"}</span>
        <GoChevronDown className="chevron" />
      </button>

      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <div className="modal-header">Select a unit</div>
          <div className="modal-list" role="listbox">
            {renderList}
          </div>
        </Modal>
      )}
    </div>
  );
}
