/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
import React from 'react';

const Listings = ({ searchResults }) => (
  <div className="Listings">
    { searchResults.map((home) => (
      <div className="home" id={home.home}>
        <b id="title">{home.title}</b>
        <br />
        <b id="Rating">⭐ {home.rating}</b>
        <span>  ・  </span>
        <b id="location">{home.location}</b>
        <button id="share" className="btn btn-outline-success" type="submit">📤 Share</button>
        <button id="save" className="btn btn-outline-success" type="submit">❤️ Save</button>
        <div id="photos">
          <img className="img-fluid" id="p1" alt="1" src={home.photoUrls[0]} />
          <img className="img-fluid" id="p2" alt="2" src={home.photoUrls[1]} />
          <img className="img-fluid" id="p3" alt="3" src={home.photoUrls[2]} />
          <img className="img-fluid" id="p4" alt="4" src={home.photoUrls[3]} />
          <img className="img-fluid" id="p5" alt="5" src={home.photoUrls[4]} />
        </div>
      </div>
    ))}
  </div>
);

export default Listings;
