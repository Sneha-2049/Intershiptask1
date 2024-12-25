import React from 'react'
import './Appointment.css'
import mark from "../../Assets/marked.png"
import arrow from "../../Assets/DA.png"
import reversearrow from "../../Assets/reverse.png"
import calander from "../../Assets/calander.png"
import { Link as ScrollLink } from 'react-scroll';

function Appointment() {
    const handleClick = () => {
        setTimeout(() => {
          alert('Please login to your account first!');
        }, 400);
      };
    
    return (
        <div className='appointment-container'>
            <div className='appointment-fee'>
                <h2>Appointment Fee</h2>
                <h3>&#8377; 699.0</h3>
            </div>
            <div className='mode'>
                <h2>Select your mode of session</h2>
                <div className='line'></div>
            </div>
            <div className='appointment-mode'>
                <div className='mode-card'>
                    <h5>In-Clinic</h5>
                    <p>45 Mins</p>
                </div>
                <div className='mode-card' id='video'>
                    <h5>Video <span style={{ backgroundImage: `url(${mark})` }}></span></h5>
                    <p>45 Mins</p>
                </div>
                <div className='mode-card'>
                    <h5>Chat</h5>
                    <p>45 Mins</p>
                </div>
            </div>
            <div className='time-section'>
                <div className='time-slot'>
                    <h2>Pick a Time Slot</h2>
                    <div className='line'></div>
                    <img src={calander} alt='calander' />
                </div>
                <div className='timings'>
                    <img src={arrow} alt='arrow' />
                    <div className='slots'>
                        <div className='date' id='monday'>
                            <h5>Mon, 10 Oct</h5>
                            <p>10 slots</p>
                        </div>
                        <div className='date' id='tuesday'>
                            <h5>Tue, 11 Oct</h5>
                            <p>02 slots</p>
                        </div>
                        <div className='date' id='wednesday'>
                            <h5>Web, 12 Oct</h5>
                            <p>05 slots</p>
                        </div>
                    </div>
                    <img src={reversearrow} alt='arrow' />
                </div>
                <div className='timing-section'>
                    <h2>Morning</h2>
                    <div className='time'>
                        <div className='time-chip'>09:00 AM</div>
                        <div className='time-chip'>09:30 AM</div>
                        <div className='time-chip'>10:00 AM</div>
                        <div className='time-chip'>10:15 AM</div>
                        <div className='time-chip'>10:45 AM</div>
                        <div className='time-chip' id='sloted-time'>11:00 AM</div>
                    </div>
                </div>
                <div className='timing-section'>
                    <h2>Evening</h2>
                    <div className='time'>
                        <div className='time-chip'>04:00 PM</div>
                        <div className='time-chip'>04:15 PM</div>
                        <div className='time-chip'>04:30 PM</div>
                        <div className='time-chip'>04:45 PM</div>
                        <div className='time-chip'>05:15 PM</div>
                    </div>
                </div>
            </div>
            <ScrollLink
                to="navbar"
                smooth={true}
                duration={300}
                onClick={handleClick}
            ><button className='appointment-button'>Make an Appointment</button></ScrollLink>
        </div>
    )
}

export default Appointment