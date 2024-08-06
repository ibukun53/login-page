import React from 'react';
import logo from '../assets/logo.png';
import img2 from '../assets/img2.jpg';


const GetStartedPage = () => {
  return (
    <div>
       <img src={logo} className='logo' alt="Logo" />
      <img src={img2} className='image-two' alt="Img2" />
    </div>
  );
};

export default GetStartedPage;
