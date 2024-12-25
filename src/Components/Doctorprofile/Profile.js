import React from 'react';
import { motion } from 'framer-motion';
import './Profile.css';
import background1 from '../../Assets/upperbackground.png';
import background2 from '../../Assets/lowerbackground.png';
import profilepic from '../../Assets/profilepic.png';
import polygon from '../../Assets/Polygon.png';
import star from '../../Assets/stars.png';
import verified from '../../Assets/verified.png';
import Doctorabout from '../Doctorabout/Doctorabout';
import Appointment from '../Appointment/Appointment';

const Profile = () => {
  const handleClick = () => {
    setTimeout(() => {
      alert('Please login to your account first!');
    }, 400);
  };

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}
    >
      <div
        className="doctorprofile-container">
        {/* Background Section */}
        <div
          className="container"
          style={{ backgroundImage: `url(${background1})` }}
        >
          <div
            className="background"
            style={{ backgroundImage: `url(${background2})` }}
          ></div>
        </div>

        {/* Doctor Profile Section */}
        <div className="Doctor-profile">
          <div className="profile-detail">
            <div
              className="profile-pic"
              style={{ backgroundImage: `url(${profilepic})` }}
            ></div>
            <div className="doctor-description">
              <div className="doctor-name">
                <h3>Dr. Bruce Willis</h3>
                <div
                  className="symbol"
                  style={{ backgroundImage: `url(${polygon})` }}
                >
                  <img src={verified} alt="icon" />
                </div>
              </div>
              <p>Gynecologist</p>
              <div className="rating">
                <p>4.2</p>
                <img src={star} alt="star icon" />
                <img src={star} alt="star icon" />
                <img src={star} alt="star icon" />
                <img src={star} alt="star icon" />
              </div>
            </div>
          </div>

          {/* Impression Section */}
          <div className="impression-section">
            <div className="impression">
              <p>Followers</p>
              <h5>850</h5>
            </div>
            <div className="impression">
              <p>Following</p>
              <h5>18K</h5>
            </div>
            <div className="impression">
              <p>Posts</p>
              <h5>250</h5>
            </div>
          </div>
          <button className="Appointment-button" onClick={handleClick}>Book an Appointment</button>
        </div>
      </div>

      {/* Doctor About and Appointment Sections */}
      <div className="body-container">
        <Doctorabout />
        <Appointment />
      </div>
    </motion.div>
  );
};

export default Profile;
