import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Form from "../components/Form/Form";

function HomePage() {
  return (
    <div className="main-card">
      <NavBar />
      <Form />
      <div className="app-footer">
        Crafted with precision • UnitFlipper v2.0
      </div>
    </div>
  );
}

export default HomePage;