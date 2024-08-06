import React, { useState } from "react";

const  LoginForm = () => {

const [email, setEmail] = useState('');
const [emailError, setEmailError] = useState('');
const [password, SetPassword] = useState('');

const handleInput = (event) => {
    const { name, value } = event.target;

    if (name === 'email') {
        setEmail(value);
      // Regular expression for basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailRegex.test(value)) {
        setEmailError(''); // Clear error if valid
      } else {
        setEmailError('Invalid email address'); // Set error if invalid
      }
    } else if (name === 'password') {
        SetPassword(value); // Set password value
    }
  };

const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

    return(
        <>
        <form onSubmit={handleSubmit}>
         <div className="input-btn-container">
            <div className="email-container">
         <label className="email" htmlFor="email">Email address</label>
         <input 
         type="email" 
         id="email"
         className="email-input"
          name="email" 
            onChange={handleInput}
            value={email}
            required
            />
            </div>
         <div className="password-container">
        <label className="password" htmlFor="password">Password</label>
         <input type="password" 
         id="password"
          name="password" 
          className="password-input"
            onChange={handleInput}
            value={password}/>
            {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
            </div>
           </div>
           <div className="button-container">
      <button className="button" type="submit">Next</button>
      </div>
    </form>
        </>
       

    )

};

export default LoginForm;