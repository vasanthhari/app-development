import React from 'react';
import './Event.css'; // Import your scoped CSS file here
import { Link } from 'react-router-dom';

function Event() {
  return (
    <div className="camp-sites">
      <h2 className="camp-sites-h2">UPCOMING EVENTS</h2>
      <section className="camp-sites-columns">
      <div className="camp-sites-div camp-sites-columns-div">
        <figure>
          <img
            src="https://e0.pxfuel.com/wallpapers/318/931/desktop-wallpaper-ar-rahman-singing-thumbnail.jpg"
            alt="Rugged Cabin"
            id="Second Camp"
            className="camp-sites-img"
          />
          <figcaption className="camp-sites-figcaption">ARR CONCERT</figcaption>
        </figure>
        <p className="camp-sites-p">Concert By: AR Rahman</p>
        <p className="camp-sites-p">Concert Details:</p>
        <ul className="camp-sites-li">
        <li>Location:Nehru Stadium,Chennai</li>
        <li>Date:12-12-23</li>
        <li>Timing:6 pm to 12 pm</li>
        <li>Tickets:Gold,Silver,Bronze</li>
        <li>Special Guest:Sherya Ghoshal</li>
        </ul>
        <p className="camp-sites-p">Gold:2000</p>
        <p className="camp-sites-p">Silver:1500</p>
        <p className="camp-sites-p">Bronze:1000</p>
        <h4 className="camp-sites-h4">ENJOY THE SOULFUL MUSIC WITH ARR!</h4>
        <Link to="/selection">
          <button className="camp-sites-button" type="submit">Book</button></Link>
      </div>
        <div className="camp-sites-div camp-sites-columns-div">
          <figure>
            <img
              src="https://e0.pxfuel.com/wallpapers/641/562/desktop-wallpaper-arijit-singh-arijit-singh-thumbnail.jpg"
              alt="Rustic Cabin"
              id="First Camp"
              className="camp-sites-img"
              height={230}
            />
            <figcaption className="camp-sites-figcaption">AS CONCERT</figcaption>
          </figure>
          <p className="camp-sites-p">Concert By: Arijth Singh</p>
          <p className="camp-sites-p">Concert Details:</p>
          <ul className="camp-sites-li">
            <li>Location:Nehru Stadium,Chennai</li>
            <li>Date:12-10-23</li>
            <li>Timing:6 pm to 10 pm</li>
            <li>Tickets:Gold,Silver,Bronze</li>
            <li>Special Guest:Deepika padukone</li>
          </ul>
       
          <p className="camp-sites-p">Gold:2000</p>
          <p className="camp-sites-p">Silver:1500</p>
          <p className="camp-sites-p">Bronze:1000</p>
          <h4 className="camp-sites-h4">ENJOY THE SOULFUL MUSIC WITH ARIJTH!</h4>
          <Link to="/selection">
            <button className="camp-sites-button" type="submit">Book</button></Link>
        </div>
        <div className="camp-sites-div camp-sites-columns-div">
          <figure>
            <img
              src="data:image/jpeg;base64,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"
              alt="Forest Tent"
              id="Third Camp"
              className="camp-sites-img"
            />
            <figcaption className="camp-sites-figcaption">JAMBO CIRCUS</figcaption>
          </figure>
          <p className="camp-sites-p">Conducted By: Jambo Circus</p>
          <p className="camp-sites-p">Event Details:</p>
          <ul className="camp-sites-li">
          <li>Location:Nehru Stadium,Chennai</li>
          <li>Date:12-12-23</li>
          <li>Timing:6 pm to 9 pm</li>
          <li>Tickets:Gold,Silver,Bronze</li>
          <li>Special Event:Gymnastics</li>
          </ul>
          <p className="camp-sites-p">Gold:2000</p>
          <p className="camp-sites-p">Silver:1500</p>
          <p className="camp-sites-p">Bronze:1000</p>
          <h4 className="camp-sites-h4">HAVE A FUN EVENING!</h4>
          <Link to="/selection">
            <button className="camp-sites-button" type="submit">Book</button></Link>
        </div>
        {/* Rest of the HTML content for the third camp */}
      </section>
    </div>
  );
}

export default Event;
