import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import {AdminSidebarData } from './AdminSidebarData';
import './AdminNavbar.css';
import { IconContext } from 'react-icons';
import 
{ BsFillPeopleFill, BsClock, BsBarChartLineFill, BsBarChartSteps}
 from 'react-icons/bs';
 import { useSelector } from 'react-redux';
function AdminNavbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const username = useSelector((state) => state.user.username);
  return (
    <>
      <IconContext.Provider value={{ color: 'white' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} style={{color: "white"}}/>
          </Link>
          <div id="button" style={{color:"white",fontSize:"21px"}}>
            <div id="Log-sign">
            <Link to="/" style={{textDecoration: "none"}}><span style={{marginRight:"100px",color:"white"}}>Log out</span></Link>
            </div>
            </div>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {AdminSidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
      <div className='main-cards'>
        <div className='card'>
          <div className='card-inner'>
            <h3>Seats Available</h3>
            <BsFillPeopleFill className='card_icon'/>
          </div>
          <h2>300</h2>
        </div>
        <div className='card'>
                <div className='card-inner'>
                    <h3>Seats Filled</h3>
                    <BsFillPeopleFill className='card_icon'/>
                </div>
                <h2>200</h2>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Hours</h3>
                    <BsClock className='card_icon'/>
                </div>
                <h2>10</h2>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Upcoming Event</h3>
                    <BsBarChartSteps className='card_icon'/>
                </div>
                <h2>AS Concert</h2>
            </div>
      </div>
      <h1>Welcome, Admin: {username}!</h1>
    </>
  );
}

export default AdminNavbar;