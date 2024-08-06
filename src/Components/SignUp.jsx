import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/getstarted');
  };

  return (
    <div>
      <p>Don't have an account? <span onClick={handleSignUpClick} className='sign-text'>Sign Up</span></p>
    </div>
  );
};

export default SignUp;
