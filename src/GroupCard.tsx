import React from "react";
import "./test.css"; // Import the CSS file

interface GroupCardProps {
  title: string;
  totalExpenses: number;
  amountOwed: number;
  imageUrl: string;
}

const GroupCard: React.FC<GroupCardProps> = ({
  title,
  totalExpenses,
  amountOwed,
  imageUrl,
}) => {
  return (
    <div className="group-card">
      <div className="card-content">
        <div className="text-section">
          <div className="text-group">
            <p className="total-expenses">Total expenses: ${totalExpenses}</p>
            <p className="title">{title}</p>
            <p className="amount-owed">You owe ${amountOwed}</p>
          </div>
          <button className="view-button">
            <span className="truncate">View</span>
          </button>
        </div>
        <div
          className="image-section"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
      </div>
    </div>
  );
};

export default GroupCard;
