import React from "react";
import LoginForm from "./Input";

const GetStartedInput = () => {

  const [lastName, SetLastName] = useState('');
  const [fistName, SetFirstName] = useState('');

  const handleInput = (event) => {
    const { name, value } = event.target;

    if (name === 'lastName') {
      SetLastName(value);
    }  else if (name === 'fistName') {
      SetFirstName(value); // Set firstname value
  }}

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('LastName:', lastName);
    console.log('FirstName:', firstName);
  };

    return(
    <>
    <div className="input-btn-container" onSubmit={handleSubmit}>
            <div className="lastname-container">
         <label className="lastname">First name</label>
         <input 
         type="lastname" 
         id="lastname"
         className="lastname-input"
          name="lastname" 
          onChange={handleInput}
            value=''
            required
            />
            </div>
            <div className="lastname-container">
         <label className="lastname">Last name</label>
         <input 
         type="lastname" 
         id="lastname"
         className="lastname-input"
          name="lastname" 
          onChange={handleInput}
            value=''
            required
            />
            </div>
            <LoginForm />    
    </div>
    </>
  )
}
export default GetStartedInput;