import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import GetStarted from './Components/GetStarted';
import LoginPage from './Components/LoginPage';
import GetStartedPage from './Components/GetStartedPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/getstarted" element={<GetStarted />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/get-started" element={<GetStartedPage />} />
        {/* Default route */}
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
