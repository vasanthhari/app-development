import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components'; // Import styled-components

import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import Event from './Components/Event';
import Booking from './Components/Bookings';
import EventTypes from './Components/EventTypes';
import Bookevent from './Components/Bookevent';
import Navbar from './Components/Navbar';
import Feedback from './Components/Feedback';
import About from './Components/About';
import Selection from './Components/Selection';
import Terms from './Components/Terms';
import PrivacyPolicy from './Components/PrivacyPolicy';
import FAQ from './Components/FAQ';
import Support from './Components/Support';
import AdminLogin from './Components/AdminLogin';
import AdminNavbar from './Components/AdminNavbar';
function App() {

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/userlogin" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/userregister" element={<Register />} />
            <Route path="/events" element={<Event/>} />
            <Route path="/event-types" element={<EventTypes/>} />
            <Route path="/pay" element={<Booking/>} />
            <Route path="/booking" element={<Bookevent/>} />
            <Route path="/navbarr" element={<Navbar/>} />
            <Route path="/feedback" element={<Feedback/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/selection" element={<Selection/>} />
            <Route path="/terms" element={<Terms/>} />
            <Route path="/privacy" element={<PrivacyPolicy/>} />
            <Route path="/policy" element={<PrivacyPolicy/>} />
            <Route path="/faq" element={<FAQ/>} />
            <Route path="/Support" element={<Support/>} />
            <Route path="/adminlogin" element={<AdminLogin/>} />
            <Route path="/dashboard" element={<AdminNavbar/>} />
          </Routes>
        </BrowserRouter>
      </div>
    
    </>
  );
}

export default App;
