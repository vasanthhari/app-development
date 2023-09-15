import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./login.css"
import "./loginGpt.css";
import video from './video11.mp4';
// import video from './video.mp4';
const Login = () => {
  const [formData, setFormData] = useState({
      username: '',
      password: '',
    });
  
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    const validateForm = () => {
      const newErrors = {};
      if (!formData.username.trim()) {
        newErrors.username = 'Username is required';
      }
      if (!formData.password) {
        newErrors.password = 'Password is required';
      } else if (formData.password.length < 6) {
        newErrors.password = 'Password must be at least 6 characters long';
      }
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
  };
  const authenticate = (e) => {
      e.preventDefault();
      const isValid = validateForm();
      if (isValid) {
        setIsSubmitted(true);
      }
    };
  return (
        <div id="body">
    <video id="background-video" autoPlay loop muted>
    <source src={video} type="video/mp4" />
    </video>
    <div className="signup-form2">
    <div className="container">
      <div className="header">
      <h1 className="title">UNPLUGGED EVENTS</h1>
        <p className='cred'>Enter Credentials For Login</p>
      </div>
   
      <form onClick={authenticate}>
        <div className="input">
          <input type="text"
           placeholder="Username" 
           value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}/>
          {errors.username && <p className="error" style={{color: "red"}}>{errors.username}</p>}

        </div>
        <div className="input">
          <input type="password"  value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })} placeholder="Password" />
              {errors.password && <p className="error" style={{color: "red"}}>{errors.password}</p>}
        </div>
        <input onClick={authenticate} className="signup-btn" type="submit" value="LOGIN" />
      </form>
    <Link to="/register" style={{textDecoration: 'none'}}>  <p class="no-acc">No Account? Signup Now!</p></Link>
      
    </div>
  </div>
  </div>
  

  )
}

export default Login;