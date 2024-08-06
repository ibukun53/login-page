import React from 'react';
import GetStartedPage from './GetStartedPage';
import SignIn from './SignIn';
import GetStartedInput  from './GetStartedInput';

const GetStarted = () => (
  <div>
    <div className="header-container">
      <div className="header-des">
        <GetStartedPage />
      </div>
      <div className="row-container">
        <span className="row-one"></span>
        <span className="row-two"></span>
      </div>
    </div>
    <div className="container">
      <div className='section-container'>
        <p className="section-title">Get Started</p>
        <div className='section-subcontainer'>
          <span className="row-three"></span>
          <p className='section-text'>Lorem ipsum dolor sit amet consectetur. Nibh vitae aliquet nuncmauris. Quam suspendisse lacus at eget.</p>
        </div>
        <div className="form-container">
          <GetStartedInput />
        </div>
        <SignIn />
      </div>
      <div className='article-container'>
        <div className="getstarted-article-text-container">
          <h1 className="article-text-header">FlicksSolutions Ultimate Solution For Problems In Organizations</h1>
          <p className="article-text">Lorem ipsum dolor sit amet consectetur. Aliquet id tincidunt id turpis sed nunc vulputate leo sed. Sapien massa hac ut erat nec quam tincidunt interdum mauris. Id cras suscipit sagittis pellentesque. Justo nam vestibulum egestas nulla vitae integer. Imperdiet nibh praesent erat at tortor ultrices</p>
        </div>
      </div>
    </div>
  </div>
);

export default GetStarted;
