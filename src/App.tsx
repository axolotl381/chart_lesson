import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LinePlot from "./components/LinePlot";
import Test from "./components/test";
import PiePlot from "./components/PiePlot";
function App() {
  return (
    <div className="App">
      <LinePlot></LinePlot>
      <PiePlot></PiePlot>
    </div>
  );
}

export default App;
