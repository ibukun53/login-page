import React, { useState } from "react";
import LoginForm from "./Input";

const GetStartedInput = () => {
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');

  const handleInput = (event) => {
    const { name, value } = event.target;

    if (name === 'lastName') {
      setLastName(value);
    } else if (name === 'firstName') {
      setFirstName(value); // Corrected variable name
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('LastName:', lastName);
    console.log('FirstName:', firstName);
  };

  return (
    <>
      <form className="input-btn-container" onSubmit={handleSubmit}>
        <div className="lastname-container">
          <label className="lastname">First name</label>
          <input 
            type="text"  // Corrected type
            id="firstName"  // Unique id
            className="lastname-input"
            name="firstName"  // Corrected name
            onChange={handleInput}
            value={firstName}  // Bind value to state
            required
          />
        </div>
        <div className="lastname-container">
          <label className="lastname">Last name</label>
          <input 
            type="text"  // Corrected type
            id="lastName"  // Unique id
            className="lastname-input"
            name="lastName"  // Corrected name
            onChange={handleInput}
            value={lastName}  // Bind value to state
            required
          />
        </div>
        <LoginForm />    
      </form>
    </>
  );
}

export default GetStartedInput;
