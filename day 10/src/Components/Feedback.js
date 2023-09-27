import React, { useState } from 'react';
import './feedback.css';

function Feedback() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // You can add your desired logic here to handle the form data
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Message:', message);
    window.alert('Feedback sent successfully');
  window.location.href = '/';

    // Clear form fields
    setFullName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className='feedback-page'>
    <div className="bdy">
      <p id='description'>Let us know Your Feedback</p>

      <div className="contact-form">
        <form action="" onSubmit={handleSubmit} id="contact-form">
          <div className="input-box">
            <input
              type="text"
              required={true}
              name="fullName"
              placeholder='Enter a name..'
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            ></input>
          </div>

          <div className="input-box">
            <input
              type="email"
              required={true}
              name="email"
              placeholder='Enter an email..'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>

          <div className="input-box">
            <textarea
              required={true}
              placeholder='Enter description..'
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <div className="input-box">
            <input type="submit" value="Send" name=""></input>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Feedback;
