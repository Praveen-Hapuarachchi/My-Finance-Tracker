import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Income from './components/Income'; // Ensure this component exists
import Expense from './components/Expense';
import Budgete from './components/Budgete';
import Report from './components/Report';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/income" element={<Income />} />
          <Route path="/expense" element={<Expense />} />
          <Route path="/budgeting" element={<Budgete />} />
          <Route path="/reports" element={<Report />} />
          <Route path="/login" element={<Login />} />
          {/* Add other routes here as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
