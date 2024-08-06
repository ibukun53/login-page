import React from "react";
import LoginForm from "./Input";

const GetStartedInput = () => {
  
    return(
    <>
    <div className="input-btn-container">
            <div className="lastname-container">
         <label className="lastname">First name</label>
         <input 
         type="lastname" 
         id="lastname"
         className="lastname-input"
          name="lastname" 
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