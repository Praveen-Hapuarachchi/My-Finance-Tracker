import React from 'react';
import Navbar from './Navbar'; // Ensure the correct import
import './Home.css';
import logoImage from '../images/images.jpeg';
import financeImage from '../images/personal_finance_1-2957311.jpg';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="spacer"></div> {/* Add this line */}
      <div className="container">
        <div className="logo">
          <img src={logoImage} alt="Logo" />
        </div>
        <h1>Personal Finance Tracker</h1>
        <br />
        <div className="container1">
          <img src={financeImage} alt="Personal Finance Tracker" />
        </div>
        <ul className="bullet-points">
          <li className="para">
            <i className="fa fa-check-square"></i> Welcome to your personal finance hub, where managing your income, expenses, and budgeting becomes effortless and empowering.
          </li>
          <li className="para">
            <i className="fa fa-check-square"></i> Explore a smarter way to handle your finances - from tracking income to managing expenses - all in one place!
          </li>
          <li className="para">
            <i className="fa fa-check-square"></i> Take control of your financial journey with our user-friendly platform, designed to simplify your personal finance management.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
