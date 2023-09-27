import React, { useState, useEffect } from 'react';
import './booking.css'; // Make sure to import your CSS file
import { useNavigate } from 'react-router-dom';
function Booking() {
  const initialFormData = {
    name: '',
    gender: '',
    email: '',
    pincode: '',
    cardType: '',
    cardNumber: '',
    expDate: '',
    cvv: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [formValid, setFormValid] = useState(false);
  const nav = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (formValid) {
      alert('Payment successful. You will now be redirected to the first page.');
      nav('/');
    } else {
      alert('Please fill in all required fields.');
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }
  const validateForm = () => {
    const { name, gender, email, pincode, cardType, cardNumber, expDate, cvv } = formData;
    return (
      name.trim() !== '' &&
      gender !== '' &&
      email.trim() !== '' &&
      pincode.trim() !== '' &&
      cardType !== '' &&
      cardNumber.trim() !== '' &&
      expDate.trim() !== '' &&
      cvv.trim() !== ''
    );
  }

  // Update form validity whenever form data changes
  useEffect(() => {
    setFormValid(validateForm());
  }, [formData]);

  return (
    <div className='booking-container'>
    <div className="container">
      <h1 className="main_heading">Make a payment</h1>
      <form onSubmit={handleSubmit}>
        <h1 className="pf">Payment form</h1>
        <h2>Contact Information</h2>
        <p>
          Name: <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Kumar" />
        </p>
        <fieldset>
          <legend>Gender</legend>
          <p>
            Male: <input type="radio" name="gender" value="Male" checked={formData.gender === 'Male'} onChange={handleChange} required />
            Female: <input type="radio" name="gender" value="Female" checked={formData.gender === 'Female'} onChange={handleChange} required />
            Other: <input type="radio" name="gender" value="Other" checked={formData.gender === 'Other'} onChange={handleChange} required />
          </p>
        </fieldset>
        <p>
          Mail: <input type="email" name="email" value={formData.email} onChange={handleChange} id="email" placeholder="abcde44@gmail.com" />
        </p>
        <p>
          Pincode: <input type="number" name="pincode" value={formData.pincode} onChange={handleChange} id="pincode" required placeholder="000000" />
        </p>
        <hr />
        <h2>Payment</h2>
        <p>
          Card Type:
          <select name="cardType" value={formData.cardType} onChange={handleChange} id="cardType" required>
            <option value="">--Select A Card Type--</option>
            <option value="rupay">Rupay</option>
            <option value="mastercard">Mastercard</option>
            <option value="visa">Visa</option>
          </select>
        </p>
        <p>
          Card No. <input type="number" name="cardNumber" value={formData.cardNumber} onChange={handleChange} id="cardnumber" required placeholder="0000 0000 0000" />
        </p>
        <p>
          Expiration: <input type="date" name="expDate" value={formData.expDate} onChange={handleChange} id="exp_date" required />
        </p>
        <p>
          CVV: <input type="password" name="cvv" value={formData.cvv} onChange={handleChange} id="cvv" required placeholder="123" />
        </p>
        <input type="submit" value="Pay Now" disabled={!formValid} />
      </form>
    </div>
    </div>
  );
}

export default Booking;
