import React from "react";
import "./Login.css";
import profileImage from '../images/project1.jpg';
import Navbar from './Navbar';

const Login = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Login Form</h1>
        <div className="imgcontainer">
          <img src={profileImage} alt="User Avatar" className="avatar" />
        </div>
        <form action="/action_page.php" method="post">
          <div className="container" style={{ backgroundColor: "white" }}>
            <label htmlFor="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" required />
            <label htmlFor="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required />
            <button type="submit">Login</button>
            <label>
              <input type="checkbox" checked="checked" name="remember" /> Remember me
            </label>
          </div>
        </form>
        <div className="container" style={{ backgroundColor: "white" }}>
          <button type="button" className="cancelbtn">Cancel</button>
          <span className="psw">Forgot <button type="button" className="link-button">password?</button></span>
        </div>
      </div>
    </div>
  );
};

export default Login;
