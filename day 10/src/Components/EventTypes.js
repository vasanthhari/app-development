import React from 'react';
import './Event.css'; // Import your scoped CSS file here
import { Link } from 'react-router-dom';

function EventTypes() {
  return (
    <div className="camp-sites">
      <h2 className="camp-sites-h2">BOOK YOUR EVENT</h2>
      <section className="camp-sites-columns">
        <div className="camp-sites-div camp-sites-columns-div">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1573003107970-7be16c3c28be?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzl8fGNhbXAlMjBncm91bmRzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="Rustic Cabin"
              id="First Camp"
              className="camp-sites-img"
            />
            <figcaption className="camp-sites-figcaption">BIRTHDAY PARTY</figcaption>
          </figure>
          <ul className="camp-sites-li">
            <li>Location:Unplugged Event Hall,Coimbatore.</li>
            <li>Third Floor Birthday Hall</li>
            <li>Price:30000</li>
            <li>With complete decoration and Food</li>
          </ul>
          <h4 className="camp-sites-h4">ENJOY THE BIRTHDAY PARTY!</h4>
          
          <Link to="/pay">
            <button className="camp-sites-button" type="submit">Book</button></Link>
        
        </div>
        <div className="camp-sites-div camp-sites-columns-div">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1582520343863-a9e00c10af26?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDJ8fGNhbXAlMjBncm91bmRzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="Rugged Cabin"
              id="Second Camp"
              className="camp-sites-img"
            />
            <figcaption className="camp-sites-figcaption">MARRIAGE</figcaption>
          </figure>
          <ul className="camp-sites-li">
          <li>Location:Unplugged Event Hall,Coimbatore.</li>
            <li>Second Floor Marriage Hall</li>
            <li>Price:1000000</li>
            <li>With complete decoration and Food</li>
          </ul>
          <h4 className="camp-sites-h4">WISH THE COUPLE!</h4>
          
          <Link to="/pay">
            <button className="camp-sites-button" type="submit">Book</button></Link>
         
        </div>
        <div className="camp-sites-div camp-sites-columns-div">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8ODJ8fGNhbXAlMjBncm91bmRzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="Forest Tent"
              id="Third Camp"
              className="camp-sites-img"
            />
            <figcaption className="camp-sites-figcaption">OFFICE MEETING</figcaption>
          </figure>
          <ul className="camp-sites-li">
          <li>Location:Unplugged Event Hall,Coimbatore.</li>
            <li>Third Floor Seminar Hall</li>
            <li>Price:20000</li>
            <li>With complete decoration and Food</li>
          </ul>
          <h4 className="camp-sites-h4">HAVE A DISCUSSION!</h4>
         
          <Link to="/pay">
            <button className="camp-sites-button" type="submit">Book</button></Link>
    
        </div>
        {/* Rest of the HTML content for the third camp */}
      </section>
    </div>
  );
}

export default EventTypes;
