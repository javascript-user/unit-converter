import React from "react";
import useUnitContext from "../../hooks/use-UnitContext.js";

function NavBar() {
  const { activeTab, setActiveTab, resetForm } = useUnitContext();

  const handleTabChange = (tab) => {
    if (tab === activeTab) return;
    setActiveTab(tab);
    resetForm();
  };

  const tabList = [
    { label: "Length", value: "length", icon: "📏" },
    { label: "Weight", value: "weight", icon: "⚖️" },
    { label: "Temp", value: "temperature", icon: "🌡️" },
    { label: "Area", value: "area", icon: "📐" },
    { label: "Volume", value: "volume", icon: "🧪" },
    { label: "Speed", value: "speed", icon: "⚡" },
    { label: "Time", value: "time", icon: "⏱️" },
  ];

  return (
    <header className="app-header">
      <div className="app-logo">
        <div className="app-logo-icon">⚡</div>
        <h1 className="app-title">UnitFlipper</h1>
      </div>
      <p className="app-subtitle">Smart Unit Converter</p>

      <nav className="tab-nav" role="tablist" aria-label="Conversion categories">
        {tabList.map((item) => (
          <button
            key={item.value}
            role="tab"
            aria-selected={activeTab === item.value}
            onClick={() => handleTabChange(item.value)}
            className={`tab-btn ${activeTab === item.value ? "active" : ""}`}
            id={`tab-${item.value}`}
          >
            <span className="tab-icon">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  );
}

export default NavBar;
