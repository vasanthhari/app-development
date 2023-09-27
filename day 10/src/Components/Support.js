import React from 'react';
import './Support.css';
import { Link } from 'react-router-dom';
const Support = () => {
  return (
    <div className='support-page'>
    <main className="container">
     
    <div className="faq-title-container">
    <h1 className="search-title">How can we help?</h1>
  </div>
      

      <main className="main">
        <section className="menu">
          <h1 className="menu-title">Popular topics</h1>
          <nav className="menu-links">
          <div className='footer-links'>
            <a href="/terms" className="menu-link">Terms</a>
            <a href="/policy" className="menu-link">Policy</a>
            <a href="/privacy" className="menu-link">Privacy</a>
            <a href="/" className="menu-link">Home</a>
            </div>
            </nav>

          <div className="support">
            <h2 className="support-title">Contact support</h2>
            <p className="support-text">24/7 help from our support staff</p>
            <a href="#" className="support-button">Contact</a>
          </div>
        </section>

        <section className="content">
          <div className="content-item">
            <h3 className="content-title">
              Waiting period for first payout
              <span className="badge badge-primary">Payment</span>
            </h3>
            <p className="content-description">With so many different ways today to find information online, it can sometimes be hard to know where to go to first.</p>
          </div>

          <div className="content-item">
            <h3 className="content-title">
              See the privacy policies of unplugged events
              <Link to="/privacy">
              <span className="badge badge-secondary">Privacy</span></Link>
            </h3>
            <p className="content-description">With so many different ways today to find information online, it can sometimes be hard to know where to go to first.</p>
          </div>

          <div className="content-item">
            <h3 className="content-title">
              How To Protect Your Computer Very Useful Tips
              <span className="badge badge-primary">API</span>
            </h3>
            <p className="content-description">With so many different ways today to find information online, it can sometimes be hard to know where to go to first.</p>
          </div>
        </section>
      </main>
    </main>
    </div>
  );
};

export default Support;