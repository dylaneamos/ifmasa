import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home';
import IFMASA_Leadership from './Components/Pages/IFMASA-Leadership';
import IFMASA_Memberprofile from './Components/Pages/IFMASA-Memberprofile';
import Products from './Components/Pages/Products';
import Contact_US from './Components/Pages/Contact-us';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/IFMASA-Leadership" element={<IFMASA_Leadership />} />
          <Route path="/IFMASA-Memberprofile" element={<IFMASA_Memberprofile />} />
          <Route path="/products" element={<Products />} />
          <Route path="/Contact-us" element={<Contact_US />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
