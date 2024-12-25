import React from 'react'
import './Doctorabout.css'
import ellips from "../../Assets/Ellips.png"
import instagram from "../../Assets/instagram.png"
import youtube from "../../Assets/youtube.png"
import twitter from "../../Assets/facebook.png"
import facebook from "../../Assets/twitter.png"
import hair from "../../Assets/health-care.png"
import immunity from "../../Assets/immunity.png"
import skincare from "../../Assets/skin-care.png"
import women from "../../Assets/women-health.png"
import clinic from "../../Assets/clinic.png"
import profile from "../../Assets/reviewprofile.png"
import star from "../../Assets/stars.png"

function Doctorabout() {
    return (
        <div
            className="about-section">
            {/* about doctor */}
            <div className="about">
                <div className="about-header header">
                    <h2>A Little About me</h2>
                    <button>Follow +</button>
                </div>
                <div className="Description">
                    <p>
                        Hello, I am Dr. Bruce Willis, a Gynaecologist at Sanjivni Hospital, Surat. I love working with all my hospital staff and senior doctors. I completed my graduation in Gynaecology Medicine from the...            </p>
                    <div className="readmore">
                        <div className="line"></div>
                        <h3>Read More</h3>
                    </div>
                </div>
                <div className="language-section">
                    <h2>Language Spoken</h2>
                    <p className="language">English</p>
                    <p className="language">Hindi</p>
                    <p className="language">Telgue</p>
                </div>
                <div className="socialmedia-section">
                    <div className='media' style={{ backgroundImage: `url(${ellips})` }}>
                        <img src={facebook} alt="icon" className="icon" />
                    </div>
                    <div className='media' style={{ backgroundImage: `url(${ellips})` }}>
                        <img src={instagram} alt="icon" className="icon" />
                    </div>
                    <div className='media' style={{ backgroundImage: `url(${ellips})` }}>
                        <img src={youtube} alt="icon" className="icon" />
                    </div>
                    <div className='media' style={{ backgroundImage: `url(${ellips})` }}>
                        <img src={twitter} alt="icon" className="icon" />
                    </div>
                </div>
            </div>
            {/* doctor specialization */}
            <div className="specialization">
                <div className="specialization-header header">
                    <h2>I Specialize In</h2>
                </div>
                <div className="specialized-in">
                    <img src={women} alt='icon' />
                    <img src={skincare} alt='icon' />
                    <img src={immunity} alt='icon' />
                    <img src={hair} alt='icon' />
                </div>
            </div>
            {/* treatment section */}
            <div className='treatment-section'>
                <div className=' treatment-header header'>
                    <h2>The Concerns I Treat</h2>
                </div>
                <div class='treatment'>
                    <div className='chip'>Skin treatment</div>
                    <div className='chip'>Pregnancy</div>
                    <div className='chip'>Period Doubts</div>
                    <div className='chip'>Endometriosis</div>
                    <div className='chip'>Pelvic Pain</div>
                    <div className='chip'>Ovarian Cysts</div>
                    <button className='more'>+ 5 More</button>
                </div>
            </div>
            {/* work experience */}
            <div className="experience-section">
                <div className='experience-header header'>
                    <h2>My work experience</h2>
                </div>
                <div className='time-duration'>
                    <h2>I have been in practice for : 7+ Years</h2>
                    <div className='partition-line'></div>
                </div>
                <div className='clinic-section'>
                    <div className='clinic-detail'>
                        <div className='clinic' style={{ backgroundImage: `url(${clinic})` }}></div>
                        <div className='address-section'>
                            <div className='address'>
                                <h3>Midtown Medical Clinic</h3>
                                <p>Senior doctor</p>
                            </div>
                            <p>2016-PRESENT</p>
                        </div>
                    </div>
                    <div className='clinic-detail'>
                        <div className='clinic' style={{ backgroundImage: `url(${clinic})` }}></div>
                        <div className='address-section'>
                            <div className='address'>
                                <h3>Midtown Medical Clinic</h3>
                                <p>Senior doctor</p>
                            </div>
                            <p>2010-2015</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Review card */}
            <div className='review-section'>
                <div className='header review-header'>
                    <h2>Featured Reviews (102)</h2>
                </div>
                <div className='reviews'>
                    <div className='review-card'>
                        <div className='review-details'>
                            <div className='profile' style={{ backgroundImage: `url(${profile})` }}></div>
                            <div className='review-name'>
                                <div className='address'>
                                    <h3>Alicent Hightower</h3>
                                    <p>Consulted for Skin care</p>
                                </div>
                                <p>20 January 2023</p>
                            </div>
                        </div>
                        {/* Rating-card */}
                        <div className='rating-section'>
                            <div className='rating-icon'>
                                <img src={star} alt="star icon" />
                                <img src={star} alt="star icon" />
                                <img src={star} alt="star icon" />
                                <img src={star} alt="star icon" />
                                <img src={star} alt="star icon" />
                            </div>
                            <p className='rating-description'>
                                It might be a bit early to confirm, but I can see a noticeable difference in my hair fall. I will write again after using it for a longer period.                    </p>
                        </div>
                    </div>
                    {/* Review-card */}
                    <div className='review-card'>
                        <div className='review-details'>
                            <div className='profile' style={{ backgroundImage: `url(${profile})` }}></div>
                            <div className='review-name'>
                                <div className='address'>
                                    <h3>Alicent Hightower</h3>
                                    <p>Consulted for Pregnancy</p>
                                </div>
                                <p>20 January 2023</p>
                            </div>
                        </div>
                        <div className='rating-section'>
                            <div className='rating-icon'>
                                <img src={star} alt="star icon" />
                                <img src={star} alt="star icon" />
                                <img src={star} alt="star icon" />
                                <img src={star} alt="star icon" />
                                <img src={star} alt="star icon" />
                            </div>
                            <p className='rating-description'>
                                It might be a bit early to confirm, but I can see a noticeable difference in my hair fall. I will write again after using it for a longer period.                    </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Doctorabout