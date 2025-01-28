import React, { useState, useEffect, useCallback } from "react";
import Plotly from "plotly.js-dist";
import Navbar from './Navbar'; // Ensure the correct import
import "./Income.css";

const Income = () => {
  const [incomes, setIncomes] = useState(
    JSON.parse(localStorage.getItem("incomes")) || []
  );
  const [totalAmount, setTotalAmount] = useState(0);

  const updatePieChart = useCallback(() => {
    const xArray = incomes.map((income) => income.name);
    const yArray = incomes.map((income) => income.amount);

    Plotly.newPlot("myPlot", [
      { labels: xArray, values: yArray, type: "pie" },
    ]);
  }, [incomes]);

  useEffect(() => {
    const total = incomes.reduce((sum, income) => sum + income.amount, 0);
    setTotalAmount(total.toFixed(2));
    localStorage.setItem("incomes", JSON.stringify(incomes));
    updatePieChart(); // This is stable because it's wrapped in useCallback
  }, [incomes, updatePieChart]); // Correctly adding all dependencies

  const addIncome = (event) => {
    event.preventDefault();
    const incomeName = event.target.incomeName.value;
    const incomeAmount = parseFloat(event.target.incomeAmount.value);

    if (!incomeName || isNaN(incomeAmount)) {
      alert("Please enter valid income details.");
      return;
    }

    setIncomes([...incomes, { name: incomeName, amount: incomeAmount }]);
    event.target.reset();
  };

  const deleteIncome = (index) => {
    setIncomes(incomes.filter((_, i) => i !== index));
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Income Page</h1>
        <form onSubmit={addIncome}>
          <input type="text" name="incomeName" placeholder="Income Name" required />
          <input type="number" name="incomeAmount" placeholder="Amount" required />
          <button type="submit">Add Income</button>
        </form>
        <table>
          <thead>
            <tr>
              <th>Income Name</th>
              <th>Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {incomes.map((income, index) => (
              <tr key={index}>
                <td>{income.name}</td>
                <td>RS: {income.amount}</td>
                <td>
                  <button onClick={() => deleteIncome(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>Total Income: RS {totalAmount}</div>
        <div id="myPlot"></div>
      </div>
    </div>
  );
};

export default Income;
