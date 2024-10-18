import React from "react";
import "./BarGraph.css"; // Import the CSS file

const BarGraph: React.FC = () => {
  return (
    <div className="bar-graph">
      <p className="title">Expenses by Category</p>
      <div className="grid">
        <p className="category">Rent</p>
        <div className="bar-container">
          <div className="bar rent-bar" style={{ width: "90%" }}></div>
        </div>
        <p className="category">Groceries</p>
        <div className="bar-container">
          <div className="bar groceries-bar" style={{ width: "10%" }}></div>
        </div>
        <p className="category">Utilities</p>
        <div className="bar-container">
          <div className="bar utilities-bar" style={{ width: "80%" }}></div>
        </div>
      </div>
    </div>
  );
};

export default BarGraph;
