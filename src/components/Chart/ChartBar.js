import React from "react";
import "./ChartBar.css";

const ChartBar = (props) => {
  let barFillHeight = "0%";
  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  return (
    <div className="chartbar">
      <div className="chartbar-inner">
        <div
          className="chartbar-inner__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chartbar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
