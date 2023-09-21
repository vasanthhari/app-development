import React from 'react';
import './Eventtype.css';

const EventType = () => {
  return (
    <div>
    <div className="online-event-container">
    <h1 className="unplugged-header">EVENT TYPES</h1>
    <div className="event-section">
      <h2>StandUp Shows</h2>
      <img
        src="https://media.istockphoto.com/id/1363286346/photo/stand-with-microphone-on-stage-before-the-concert.jpg?s=612x612&w=0&k=20&c=GkDv4U2B5c8emvzpJ5oA01Zf9nJ_sNo6bzLHfs61hT4="
      />
      <p>Stand-up comedy is a form of comedic performance where a comedian addresses the audience directly from the stage
      . The performer is known as a comedian, a comic, or a stand-up. Stand-up comedy can consist of one-liners, stories, observations, or a shtick that may incorporate props, music, magic tricks, or ventriloquism
      . It can be performed almost anywhere, including comedy clubs, comedy festivals, bars, nightclubs, colleges, or theater</p>
    </div>
      <div className="event-section">
        <h2>Online Events</h2>
        <img
          src="https://images.unsplash.com/photo-1588702547919-26089e690ecc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b25saW5lJTIwZXZlbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          alt="Online Event"
        />
        <p>Online events are digital gatherings hosted on the internet. They bring people together virtually to share information, collaborate, or celebrate, often utilizing video conferencing and interactive platforms. 
        Online events can include webinars, virtual conferences, livestreamed performances, and social gatherings, providing accessibility and convenience for participants worldwide.</p>
      </div>

      <div className="event-section">
        <h2>Music Concerts</h2>
        <img
          src="https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29uY2VydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="Concert Event"
        />
        <p>Concerts are live music performances where musicians and bands perform in front of an audience. They offer a unique and immersive experience, allowing fans to connect with their favorite artists and enjoy music in a communal setting.
        They often feature impressive lighting, sound systems, and visual effects to enhance the overall sensory experience, making concerts a beloved form of entertainment worldwide.</p>
      </div>


      <div className="event-section">
        <h2>Fairs</h2>
        <img
          src="https://images.unsplash.com/photo-1561490497-43bc900ac2d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhaXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          alt="Fair Event"
        />
        <p>Fairs are temporary events where vendors, exhibitors, and attractions gather to showcase goods, services, and entertainment. They offer a diverse range of products, food, games, and cultural experiences, creating a vibrant and festive atmosphere for attendees to enjoy. 
        Fairs can be themed, such as agricultural fairs or art fairs, and are often a source of community engagement and entertainment.</p>
      </div>
    </div>
    </div>
  );
};

export default EventType;