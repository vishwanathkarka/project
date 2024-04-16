import React, { useState } from "react";
import "../Login/Login.css";
import "../Signup/Signup.css";
import Header from "../../components/Header/Header.jsx";
import PersonDesk from "../../assets/Rectangle 2@2x.png";

const Signup = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if email, username, number, password, and confirmPassword are not empty
    if (email.trim() === '' || username.trim() === '' || number.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
      setErrorMessage('All fields are required.');
      return;
    }
    // Check if email is in valid email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    // Check if password and confirmPassword match
    if (password !== confirmPassword) {
      setErrorMessage('Password and confirm password do not match.');
      return;
    }
    // If all validations pass, proceed with registration
    // Here you can add your registration logic, e.g., call an API to register the user
    // For demonstration, I'm just logging the form data
    console.log('Email:', email);
    console.log('Username:', username);
    console.log('Number:', number);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="left-container">
          <div className="main-contain">
            <h1>Sign Up to</h1>
            <h2>Lorem lpsum is simply </h2>
          </div>
          <div className="sub-contain">
            <div className="sub-contain-register">
              <p>
                If you already have an account  
                <a href=""> Login here !</a>
              </p>
            </div>
            <div className="sub-contain-img">
              <img src={PersonDesk} alt="Person" />
            </div>
          </div>
        </div>
        <div></div>
        <div className="right-container">
          <div className="sign-in-container">
            <h1 className="sign-in-heading ">Sign Up</h1>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                id="email"
                value={email}
                className="input"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="text"
                id="username"
                value={username}
                className="input"
                placeholder="Create Username"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <input
                type="text"
                id="number"
                value={number}
                className="input"
                placeholder="Contact Number"
                onChange={(e) => setNumber(e.target.value)}
                required
              />
              <input
                type="password"
                id="password"
                value={password}
                className="input"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <input
                type="password"
                id="confirm-password"
                value={confirmPassword}
                className="input"
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <button type="submit" className="submit-button">Register</button>
              {errorMessage && <p className="error-message">{errorMessage}</p>}
            </form>
            <p className="login-subtext"> or continue with</p>
            <div className="login-social">
              <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="38" height="37" viewBox="0 0 38 37">
  <g id="Ellipse_1" data-name="Ellipse 1" stroke="#000" stroke-width="1">
    <ellipse cx="19" cy="18.5" rx="19" ry="18.5" stroke="none"/>
    <ellipse cx="19" cy="18.5" rx="18.5" ry="18" fill="none"/>
  </g>
  <path id="Icon_awesome-apple" data-name="Icon awesome-apple" d="M21.491,14.558c-.013-1.908,1.105-3.349,3.37-4.409a8.015,8.015,0,0,0-5.708-2.319c-2.393-.146-5.008,1.076-5.965,1.076-1.011,0-3.329-1.024-5.149-1.024C4.278,7.928.281,10.2.281,14.808a10.349,10.349,0,0,0,.971,4.222c.863,1.908,3.976,6.588,7.225,6.51,1.7-.031,2.9-.931,5.109-.931,2.143,0,3.255.931,5.149.931,3.275-.036,6.093-4.29,6.915-6.2-4.394-1.6-4.158-4.68-4.158-4.779ZM17.676,6.02a4.17,4.17,0,0,0,1.618-3.77,8.028,8.028,0,0,0-4.576,1.815A4.362,4.362,0,0,0,12.992,7.8,6.386,6.386,0,0,0,17.676,6.02Z" transform="translate(5.535 2.963)" fill="#fff"/>
</svg>
              </div>
              <div>
                             
<svg xmlns="http://www.w3.org/2000/svg" width="36.27" height="36.275" viewBox="0 0 36.27 36.275">
  <g id="Group_25" data-name="Group 25" transform="translate(-1120.14 -759.591)">
    <path id="Path_92" data-name="Path 92" d="M1156.41,778.131a15.114,15.114,0,0,0-.39-3.708h-17.38v6.731h10.2a8.8,8.8,0,0,1-3.78,5.885l-.04.225,5.5,4.171.38.038A17.543,17.543,0,0,0,1156.41,778.131Z" fill="#4285f4"/>
    <path id="Path_93" data-name="Path 93" d="M1138.64,795.866a17.866,17.866,0,0,0,12.26-4.393l-5.84-4.434a11.45,11.45,0,0,1-16.95-5.723l-.21.018-5.72,4.333-.07.2A18.525,18.525,0,0,0,1138.64,795.866Z" fill="#34a853"/>
    <path id="Path_94" data-name="Path 94" d="M1128.11,781.316a10.981,10.981,0,0,1-.61-3.587,11.526,11.526,0,0,1,.59-3.588l-.01-.24-5.78-4.4-.19.088a17.809,17.809,0,0,0,0,16.283Z" fill="#fbbc05"/>
    <path id="Path_95" data-name="Path 95" d="M1138.64,766.6a10.373,10.373,0,0,1,7.16,2.7l5.22-5a17.982,17.982,0,0,0-12.38-4.716,18.525,18.525,0,0,0-16.53,10l5.98,4.554A11.171,11.171,0,0,1,1138.64,766.6Z" fill="#eb4335"/>
  </g>
</svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
