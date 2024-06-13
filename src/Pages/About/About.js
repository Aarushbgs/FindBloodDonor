import React from 'react'
import './About.css'
import logo from '../../img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faClock, faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons'; // Import the required icons
import xyz from '../../img/xyz1.png'; 

const About = () => {
    return (
        <div className='guidline-box'>
            <h1 className='guidline-h1'>Why BloodFinder ?</h1>
            <div className='why-container'>
                <img src={xyz} alt="Logo" className='why-img' />
                <div className='box'>
                    <div className='box-item'>
                    <h2><FontAwesomeIcon icon={faMapMarkerAlt} /> Geo-Search</h2>

                        <p>Enter your location and you will be shown the donors available in the closest proximity.</p>


                    </div>
                    <div className='box-item'>
                    <h2><FontAwesomeIcon icon={faClock} /> Real-time Connect</h2>
                        <p>No delays in receiving blood anymore. Connect with donors and recipients in real-time</p>
                    </div>
                    <div className='box-item'>
                    <h2><FontAwesomeIcon icon={faMoneyBillAlt} /> Free Service</h2>
                    <p>We never charge for blood donations,it's a selfless act. Save lives without cost</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About