import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/login');
  };

  return (
    <div>
      <p>Already have an account? <span onClick={handleSignUpClick} className='sign-text'>Sign In</span></p>
    </div>
  );
};

export default SignIn;
