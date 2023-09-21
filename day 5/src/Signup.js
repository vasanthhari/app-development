import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import validator from 'validator';
import './login.css'
function Signup() {
  const nav=useNavigate();
  const[name,setname]=useState('');
  const[age,setAge]=useState('');
  const[email,setemail]=useState('');
  const[username,setUsername]=useState('');
  const[password,setpassword]=useState('');
  const[conpassword,setconpassword]=useState('');
  const senddb=(e)=>{
    e.preventDefault()
    const details={age,email,name,password,username}
    if(age.length===0||email.length===0||password.length===0||name.length===0||username.length===0){
      alert("Enter All fields")
    }
    else if (!validator.isEmail(email)) {
      alert('Enter Valid Email!')
    } 
    else if(password!==conpassword){
      alert("Password And Confirm Password Must be same!")
    }
    else{
    fetch("http://localhost:8080/signup/post",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(details)
    }
    ).then(()=>{
      console.log("New Detail Added");   
      console.log(JSON.stringify(details));
      console.log(e);
      nav("/login")
    })
  }
}
  return (
    <div id="body">
    <div className='signup-form1' >
  <div className='container'>
    <div className='header'>
      <h1 id="ryzoo-title">RYZOO APP</h1>
      <p>Get started free!</p>
    </div>
    <form>
      <div className="input">
        <i className="fa-solid fa-user"></i>
        <input type="text" value={name} onChange={(e)=>setname(e.target.value)} placeholder="Name" />
      </div>
      <div className="input">
        <i className="fa-solid fa-user"></i>
        <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="Username" />
      </div>
      <div className="input">
        <i className="fa-solid fa-envelope"></i>
        <input type="email" value={email} onChange={(e)=>setemail(e.target.value)} placeholder="Email" />
      </div>
      <div className="input">
        <i className="fa-solid fa-envelope"></i>
        <input type="number"   value={age} onChange={(e)=>setAge(e.target.value)} placeholder="Age" />
      </div>
      <div className="input">
        <i className="fa-solid fa-lock"></i>
        <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)} placeholder="Password" />
      </div>
      <div className="input">
        <i className="fa-solid fa-lock"></i>
        <input type="password"  onChange={(e)=>setconpassword(e.target.value)} placeholder="Confirm Password" />
      </div>
     <input className="signup-btn" onClick={senddb} type="submit" value="SIGN UP" /> 
    </form>
    <Link to="/login" style={{textDecoration: 'none'}}>  <p  id="already-acc" >Already have an account? Sign in</p></Link>
  </div>
</div>
<Link to="/">
<button style={{width: "150px"}}>Back</button>
</Link>
</div>
  )
}

export default Signup;