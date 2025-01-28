import React, { useEffect } from "react";
import Navbar from './Navbar'; // Ensure the correct import
import "./Report.css";

const Report = () => {
  useEffect(() => {
    const totalIncome = parseFloat(localStorage.getItem("totalIncome")) || 0;
    const totalExpense = parseFloat(localStorage.getItem("totalExpense")) || 0;

    const financialSituation = getFinancialSituation(totalIncome, totalExpense);
    const color = financialSituation.includes("good") ? "green" : financialSituation.includes("dangerous") ? "red" : "black";

    const summaryContent = `
      <p>Total Income: RS ${totalIncome.toFixed(2)}</p>
      <p>Total Expenses: RS ${totalExpense.toFixed(2)}</p>
      <p style="color: ${color}; font-weight: bold;">Financial Situation: ${financialSituation}</p>
    `;

    document.getElementById("summary-content").innerHTML = summaryContent;
    document.getElementById("totalIncomeCell").textContent = `RS ${totalIncome.toFixed(2)}`;
    document.getElementById("totalExpenseCell").textContent = `RS ${totalExpense.toFixed(2)}`;
  }, []);

  const getFinancialSituation = (totalIncome, totalExpense) => {
    if (totalIncome > totalExpense) {
      return "You are in a good financial situation. Because Your Income > Your Expense";
    } else if (totalIncome < totalExpense) {
      return "You are in a dangerous financial situation. Because Your Income < Your Expense";
    } else {
      return "Your income and expenses are balanced.";
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Report Page</h1>
        <div className="table">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Rs :</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Total Income</td>
                <td id="totalIncomeCell">0</td>
              </tr>
              <tr>
                <td>Total Expense</td>
                <td id="totalExpenseCell">0</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="report-summary">
          <h3>Financial Summary Report</h3>
          <div id="summary-content"></div>
        </div>
      </div>
    </div>
  );
};

export default Report;
