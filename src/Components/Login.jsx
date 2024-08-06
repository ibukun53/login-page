import React from 'react'
import LoginForm from './Input';
import LoginPage from './LoginPage';
import SignUp from './SignUp';

const Login = () => (
 
      <div>
      
<div className="header-container">
<div className="header-des">
<LoginPage />
  </div>
  <div className="row-container">
  <span className="row-one"></span>
  <span className="row-two"></span>
  </div>
  </div>
  <div className= "container">
     <div className='section-container'>
     <p className="section-title">
      Login to your account
      </p>
      <div className='section-subcontainer'>
      <span className="row-three"></span>
      <p className='section-text'>Lorem ipsum dolor sit amet consectetur. Nibh vitae aliquet nuncmauris. Quam suspendisse lacus at eget.</p>
      </div>
      <div className= "form-container">
      <LoginForm />
    </div>
   <SignUp />
 </div>

<div className='article-container'>
 <div className="article-text-container">
    <h1 className="article-text-header">FlicksSolutions Ultimate Solution For Problems In Organizations</h1>
    <p className="article-text">Lorem ipsum dolor sit amet consectetur. Aliquet id tincidunt id turpis sed nunc vulputate leo sed. Sapien massa hac ut erat nec quam tincidunt interdum mauris. Id cras suscipit sagittis pellentesque. Justo nam vestibulum egestas nulla vitae integer. Imperdiet nibh praesent erat at tortor ultrices</p></div>
  </div>
  </div>
      </div>
  )

export default Login;