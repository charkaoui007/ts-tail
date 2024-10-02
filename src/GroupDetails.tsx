import React, { useState } from "react";
import Expenses from "./Expenses"; // Adjust the import path as needed
import SearchBar from "./SearchBar";
import "./GroupDetails.css"; // Import the vanilla CSS file

const GroupDetails: React.FC = () => {
  const [activeTab, setActiveTab] = useState("expenses");

  return (
    <div className="group-details-container">
      <div className="layout-content">
        <div className="group-header">
          <p className="group-title">New Zealand Trip</p>
          <button className="settle-button">
            <span className="button-text">Settle up</span>
          </button>
        </div>
        <h3 className="group-description-header">Group description</h3>
        <p className="group-description">7 people · $5,000 budget · 20 days</p>
        <div className="tab-container">
          <div className="tab-header">
            <a
              className={`tab-item ${
                activeTab === "expenses" ? "tab-active" : "tab-inactive"
              }`}
              onClick={() => setActiveTab("expenses")}
            >
              <p className="tab-text">Expenses</p>
            </a>
            <a
              className={`tab-item ${
                activeTab === "summary" ? "tab-active" : "tab-inactive"
              }`}
              onClick={() => setActiveTab("summary")}
            >
              <p className="tab-text">Summary</p>
            </a>
          </div>
        </div>
        {/* Conditional Rendering for Expenses and Summary */}
        {activeTab === "expenses" ? <Expenses /> : <SearchBar />}
      </div>
    </div>
  );
};

export default GroupDetails;
