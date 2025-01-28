import React, { useState, useEffect, useCallback } from "react";
import Plotly from "plotly.js-dist";
import Navbar from './Navbar'; // Ensure the correct import
import "./Expense.css";

const Expense = () => {
  const [expenses, setExpenses] = useState(
    JSON.parse(localStorage.getItem("expenses")) || []
  );
  const [totalAmount, setTotalAmount] = useState(0);

  const updatePieChart = useCallback(() => {
    const xArray = expenses.map((expense) => expense.name);
    const yArray = expenses.map((expense) => expense.amount);

    Plotly.newPlot("myPlot", [
      { labels: xArray, values: yArray, type: "pie" },
    ]);
  }, [expenses]);

  useEffect(() => {
    const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    setTotalAmount(total.toFixed(2));
    localStorage.setItem("expenses", JSON.stringify(expenses));
    updatePieChart(); // This is stable because it's wrapped in useCallback
  }, [expenses, updatePieChart]); // Correctly adding all dependencies

  const addExpense = (event) => {
    event.preventDefault();
    const expenseName = event.target.expenseName.value;
    const expenseAmount = parseFloat(event.target.expenseAmount.value);

    if (!expenseName || isNaN(expenseAmount)) {
      alert("Please enter valid expense details.");
      return;
    }

    setExpenses([...expenses, { name: expenseName, amount: expenseAmount }]);
    event.target.reset();
  };

  const deleteExpense = (index) => {
    setExpenses(expenses.filter((_, i) => i !== index));
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Expense Page</h1>
        <form onSubmit={addExpense}>
          <input type="text" name="expenseName" placeholder="Expense Name" required />
          <input type="number" name="expenseAmount" placeholder="Amount" required />
          <button type="submit">Add Expense</button>
        </form>
        <table>
          <thead>
            <tr>
              <th>Expense Name</th>
              <th>Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense, index) => (
              <tr key={index}>
                <td>{expense.name}</td>
                <td>RS: {expense.amount}</td>
                <td>
                  <button onClick={() => deleteExpense(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>Total Expenses: RS {totalAmount}</div>
        <div id="myPlot"></div>
      </div>
    </div>
  );
};

export default Expense;
