import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import validator from 'validator';
import video from './video11.mp4';
function Register() {
  const nav = useNavigate();
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [conpassword, setConPassword] = useState('');

  const handleDetails = (e) => {
    e.preventDefault();
    
    
    if(age.length===0||email.length===0||password.length===0||username.length===0||phone.length===0){
        alert("Enter All fields")
      }
      else if (!validator.isEmail(email)) {
        alert('Enter Valid Email!')
      }
      else if(phone.length<10){
        alert("Enter Correct Phone Number!")
      }
      
      else if(age<18||age>65){
        alert("Enter Correct Age!")
      } 
      else if(password!=conpassword){
        alert("Password And Confirm Password Must be same!")
      }
      if(age.length!==0&&email.length!==0&&password.length!==0&&username.length!==0&&phone.length!==0){
      alert("Registered Successfully!!");
      nav("/");}
    }

  return (
    <div id="body">
    <video id="background-video" autoPlay loop muted>
    <source src={video} type="video/mp4" />
    </video>
      <div className="signup-form">
        <div className="container">
          <div className="header">
            <h1>Register an Account</h1>
            <p>Get started!</p>
          </div>
          <form>
            <div className="input">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
              />
            </div>
            <div className="input">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
            <div className="input">
              <input
                type="text"
                placeholder="Phone"
                value={phone}
                pattern="[0-9]+"
                maxLength="10"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="input">
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Age"
              />
            </div>
            <div className="input">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>
            <div className="input">
              <input
                type="password"
                value={conpassword}
                onChange={(e) => setConPassword(e.target.value)}
                placeholder="Confirm Password"
              />
            </div>
            
            <input className="signup-btn" onClick={handleDetails} type="submit" value="SIGN UP" />
          </form>
          
          <Link to="/">
            <p class="no-acc">Already have an account? Login</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;