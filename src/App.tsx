import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LinePlot from "./components/LinePlot";
import Test from "./components/test";
import PiePlot from "./components/PiePlot";
import BarPlot from "./components/BarPlot";
import RadarPlot from "./components/RadarPlot";

function App() {
  return (
    <div className="App">
      <LinePlot></LinePlot>
      <PiePlot></PiePlot>
      <BarPlot></BarPlot>
      <RadarPlot />
    </div>
  );
}

export default App;
