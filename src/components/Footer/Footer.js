import React from 'react';
import "./Footer.css";

const Footer = () => {

    return (
        <div className='footer' id='footer'>
            <div className="footer-1">
                <div className='nav-links'>
                    <ul>
                        <li><a href="#/">Home</a></li>
                        <li><a href="#/">Contact Us</a></li>
                        <li><a href="#/">Term of Use</a></li>
                    </ul>
                    <ul>
                        <li><a href="#/">Privacy Policies</a></li>
                        <li><a href="#/">Contributors</a></li>
                        <li><a href="#/">FAQ/Help</a></li>
                    </ul>
                </div>
                <p>
                    &copy; 2022 V-Arena. All rights reserved.
                </p>
            </div>
        </div>
    )
}

export default Footer