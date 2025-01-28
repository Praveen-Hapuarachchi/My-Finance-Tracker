import React, { useEffect } from "react";
import { Chart, registerables } from "chart.js";
import Navbar from './Navbar'; // Ensure the correct import
import "./Budgete.css";

const Budgete = () => {
  useEffect(() => {
    // Register required Chart.js components
    Chart.register(...registerables);

    // Retrieve and parse data from localStorage
    const incomes = JSON.parse(localStorage.getItem("incomes")) || [];
    const expenses = JSON.parse(localStorage.getItem("expenses")) || [];

    // Calculate total income and expenses
    const totalIncome = incomes.reduce((sum, income) => sum + income.amount, 0);
    const totalExpense = expenses.reduce((sum, expense) => sum + expense.amount, 0);

    // Store total income and total expense in localStorage
    localStorage.setItem("totalIncome", totalIncome.toFixed(2));
    localStorage.setItem("totalExpense", totalExpense.toFixed(2));

    // Initialize the chart
    const ctx = document.getElementById("budgetChart").getContext("2d");
    const budgetChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Total"],
        datasets: [
          {
            label: "Income",
            data: [totalIncome],
            backgroundColor: "blue",
            borderColor: "rgba(0, 128, 0, 1)",
            borderWidth: 1,
          },
          {
            label: "Expenses",
            data: [totalExpense],
            backgroundColor: "rgba(255, 0, 0, 0.8)",
            borderColor: "rgba(255, 0, 0, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        plugins: {
          legend: {
            display: true,
          },
        },
      },
    });

    // Update table cells
    document.getElementById("totalIncomeCell").textContent = `RS ${totalIncome.toFixed(2)}`;
    document.getElementById("totalExpenseCell").textContent = `RS ${totalExpense.toFixed(2)}`;
    document.getElementById("theremainingCell").textContent = `RS ${(totalIncome - totalExpense).toFixed(2)}`;

    // Cleanup function
    return () => {
      if (budgetChart) {
        budgetChart.destroy();
      }
    };
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Budgeting Page</h1>
        <div className="budget-summary">
          <canvas id="budgetChart"></canvas>
        </div>
        <div className="table">
          <table>
            <caption className="caption">Budgeting Summary Table</caption>
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
              <tr>
                <td>The remaining</td>
                <td id="theremainingCell">0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Budgete;
