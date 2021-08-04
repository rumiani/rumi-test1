import React from 'react';
import { Link } from 'react-router-dom'
import ContactForm from './ContactForm/ContactForm';
import './Footer.css'
import SocialIcons from './SocialIcons/SocialIcons'
const Footer = () => {
    return ( 
        <div className="footer-container" id='footer'>
            <ContactForm />
            <SocialIcons/>
            <div className="logo-webRights">
                <Link to='/' className='footer-logo'>
                    Rumiani &nbsp; <i className='fas fa-laptop-code' />
                </Link>
                <div className="webRights">
                    Rumiani &copy; 2020
                </div>
            </div>
        </div>
     );
}
 
export default Footer;