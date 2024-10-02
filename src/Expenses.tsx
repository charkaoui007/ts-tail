import React from "react";
import "./Expenses.css"; // Link to the updated CSS

const expensesData = [
  { id: 1, title: "Dinner", amount: "$50.00" },
  { id: 2, title: "Groceries", amount: "$20.00" },
  { id: 3, title: "Transport", amount: "$30.00" },
  { id: 4, title: "Cinema", amount: "$15.00" },
  { id: 5, title: "Fuel", amount: "$40.00" },
  { id: 6, title: "Shopping", amount: "$120.00" },
  { id: 7, title: "Coffee", amount: "$5.00" },
  { id: 8, title: "Utilities", amount: "$75.00" },
  { id: 9, title: "Internet", amount: "$60.00" },
  { id: 10, title: "Phone Bill", amount: "$30.00" },
];

const Expenses: React.FC = () => {
  return (
    <div className="expenses-container">
      <div className="expenses-list">
        {expensesData.map((expense) => (
          <div key={expense.id} className="expense-item">
            <div className="expense-info">
              <div className="expense-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M72,104a8,8,0,0,1,8-8h96a8,8,0,0,1,0,16H80A8,8,0,0,1,72,104Zm8,40h96a8,8,0,0,0,0-16H80a8,8,0,0,0,0,16ZM232,56V208a8,8,0,0,1-11.58,7.15L192,200.94l-28.42,14.21a8,8,0,0,1-7.16,0L128,200.94,99.58,215.15a8,8,0,0,1-7.16,0L64,200.94,35.58,215.15A8,8,0,0,1,24,208V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56Zm-16,0H40V195.06l20.42-10.22a8,8,0,0,1,7.16,0L96,199.06l28.42-14.22a8,8,0,0,1,7.16,0L160,199.06l28.42-14.22a8,8,0,0,1,7.16,0L216,195.06Z"></path>
                </svg>
              </div>
              <div className="expense-details">
                <p className="expense-title">{expense.title}</p>
                <p className="expense-amount">{expense.amount}</p>
              </div>
            </div>
            <div className="expense-arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
              </svg>
            </div>
          </div>
        ))}
      </div>
      <div className="add-expense-container">
        <button className="add-expense-button">Add Expense</button>
      </div>
    </div>
  );
};

export default Expenses;
