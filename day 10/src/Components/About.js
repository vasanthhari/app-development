import React from 'react'
import "./About.css";
function About() {
  return (
    <div>
    <div className="about-section">
  <h1>About Us</h1>
  <h2> An event management website is a platform designed to help individuals or organizations plan, organize, and promote their events. Whether it's a small corporate meeting, a conference, a wedding, or a music festival, event management websites provide various features and tools to streamline the entire event planning process.
  Welcome to our event management website! We are a dedicated team of professionals who specialize in planning and organizing memorable events for all occasions. With our expertise and attention to detail, we aim to create experiences that exceed our clients' expectations.

At our event management company, we understand that each event is unique and requires a personalized touch. Whether you're organizing a corporate conference, a wedding, a charity gala, or a social gathering, we have the knowledge and resources to bring your vision to life.

Our team consists of experienced event planners, designers, coordinators, and technicians who work seamlessly together to handle all aspects of event management. From conceptualization and theme development to venue selection, vendor coordination, and logistics management, we take care of every detail to ensure a flawless execution.
  </h2>

</div>

 <h2 style={{textAlign:'center'}}>Our Team</h2>
<div className="row">
  <div className="column">
    <div className="card">
    <img src="https://media.istockphoto.com/id/144324264/photo/business-abroad.jpg?s=612x612&w=0&k=20&c=UgWVzVEya-YQOgGk4McE8vYQj_QDzo7fCip41Ian45A=" alt="Mike" style={{width:"400px",height:"300px"}} ></img>
      <div className="container">
        <h2>Evangeline</h2>
        <p className="title">Founder</p>
        
        <p>evang@gmail.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
      <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJ1c2luZXNzJTIwd29tYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Mike" style={{width:"400px",height:"300px"}} ></img>
      <div className="container">
        <h2>Srii</h2>
        <p className="title">Principal</p>
        
        <p>srii@gmail.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>
  
  <div className="column">
    <div className="card">
    <img src="https://t4.ftcdn.net/jpg/06/01/02/71/360_F_601027181_JYZAvwl48pCllc8936XsGOLOGhSY09aV.jpg" alt="Mike" style={{width:"400px",height:"300px"}} ></img>
      <div className="container">
        <h2>Mike Ross</h2>
        <p className="title">Chairman</p>
        
        <p>mike@gmail.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>
</div> 
    </div> 
  )
}

export default About