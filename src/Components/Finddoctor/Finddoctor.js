import React, { useState, useEffect } from 'react';
import './Finddoctor.css';
import { motion } from 'framer-motion';
import background from '../../Assets/background.jpeg';
import locationicon from '../../Assets/location.png';
import arrowicon from '../../Assets/icon.png';
import doctor_data from '../../Assets/DoctorDetails';
import link from '../../Assets/link.png';
import degree from '../../Assets/degree.png';
import comment from '../../Assets/comment.png';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

function Finddoctor() {
  const [location, setLocation] = useState('location');
  const [expertise, setExpertise] = useState('Expertise');
  const [gender, setGender] = useState('Gender');
  const [fees, setFees] = useState('Fess');
  const [language, setLanguage] = useState('Language');
  const [filterChips, setFilterChips] = useState([])

  useEffect(() => {
    const chips = [];
    if (expertise) chips.push({ label: expertise, removable: true });
    if (gender) chips.push({ label: gender, removable: true });
    if (fees) chips.push({ label: fees, removable: true });
    if (language) chips.push({ label: language, removable: true });


    setFilterChips(chips);
  }, [expertise, gender, fees, language]);


  const handleRemoveChip = (chipLabel) => {
    setFilterChips(filterChips.filter((chip) => chip.label !== chipLabel));
  };

  const handleClick = () => {
    setTimeout(() => {
      alert('Please login to your account first!');
    }, 400);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="finddoctor-container">
      {/* Dashboard Section */}
      <div
        className="finddoctor-dashboard"
        style={{ backgroundImage: `url(${background})` }}
      >
        <h1>Find expert Doctors for an In-clinic session here</h1>
        <div className="dashboard-buttons">
          <select
            value={location}
            className="location"
            onChange={(e) => setLocation(e.target.value)}
            style={{ backgroundImage: `url(${locationicon})` }}
          >
            <option value="">Select Location</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
          </select>
          <div>
            <input
              id="search-doctor"
              placeholder="e.g. Doctor, Specialization, Clinic name"
            />
            <span
              style={{ backgroundImage: `url(${arrowicon})` }}
              className="arrow-icon"
            ></span>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="filter-section">
        <select value={expertise} onChange={(e) => {
          console.log(e.target.value)
          setExpertise(e.target.value)
        }}>
          <option value="expertise">Expertise</option>
          <option value="Hair Care">Hair Care</option>
          <option value="Neurology">Skin Care</option>
        </select>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="Gender">Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <select value={fees} onChange={(e) => setFees(e.target.value)}>
          <option value="Fees">Fees</option>
          <option value="500">₹ 500</option>
          <option value="1000">₹ 1000</option>
        </select>
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="Language">Language</option>
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
        </select>
      </div>

      {/* Filter Chips Section */}
      <div className="filter-chip-container">
        {filterChips.map((chip, index) => (
          <div key={index} className="filter-chip" onClick={() => handleRemoveChip(chip.label)} >
            <p>{chip.label}</p>
            {chip.removable && (
              <span >⛌</span>
            )}
          </div>
        ))}
      </div>

      {/* Doctor Cards Section */}
      <div className="doctor-container">
        {doctor_data.map((doctor, index) => (
          <div key={index} className="doctor-card">
            <div
              className="doctor-pic"
              style={{ backgroundImage: `url(${doctor.image})` }}
            ></div>
            <h1 className="doctor-name">{doctor.doctorName}</h1>
            <div className="doctor-details">
              <div className="data">
                <img src={link} alt="link" />
                <p>{doctor.linkText}</p>
              </div>
              <div className="data">
                <img src={degree} alt="degree" />
                <p>{doctor.degreeText}</p>
              </div>
              <div className="data">
                <img src={comment} alt="comment" />
                <p>{doctor.languages}</p>
              </div>
            </div>
            <div className="services">
              <div className="service-card">
                <h3>Video Consultancy</h3>
                <p>₹ 800</p>
              </div>
              <div className="service-card">
                <h3>Chat Consultancy</h3>
                <p>Free</p>
              </div>
            </div>
            <div className="doctor-buttons">
              <Link to="/BruceWillisprofile">
                <button className="profile-button">View Profile</button>
              </Link>
              <ScrollLink
                to="navbar"
                smooth={true}
                duration={300}
                onClick={handleClick}
              >
                <button className="book-button">Book a Consultant</button>
              </ScrollLink>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Finddoctor;
