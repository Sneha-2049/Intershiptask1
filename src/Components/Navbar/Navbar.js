import React from 'react'
import "./Navbar.css"
import logo from "../../Assets/logo.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
  let count=0;
  let underLine='';
  let prevElement=''
  const handleClick = (evt) => {
    ++count;
    underLine = evt.target.nextElementSibling;
    underLine.classList.toggle('underline'); 
    if(count>1){
    prevElement.classList.toggle('underline'); 
  }
  prevElement=underLine
  };
    return (
    <div className="Navbar-container" id='navbar'>
      <div className="Navbar">
        <div className="Nav-items">
          <div className="logo" style={{ backgroundImage: `url(${logo})` }}></div>
          <div className="menu-itmes">
            <div className='menu' onClick={handleClick}>
            <Link to="/" id="home">Home</Link>
            <hr className='style-line'/>
            </div>
            <div className='menu' onClick={handleClick}>
            <Link to="/doctor" id="doctors">find Doctors</Link>
            <hr className='style-line'/>
            </div>
            <div className='menu' onClick={handleClick}>
            <Link to="/" id="about" >About us</Link>
            <hr className='style-line'/>
            </div>
          </div>
        </div>
        <div className="Login-section">
          <button id="login">Login</button>
          <button id="sign-up">Sign-up</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar