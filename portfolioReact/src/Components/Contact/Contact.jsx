import React from 'react'
import '../Contact/Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import location_icon from '../../assets/location_icon.svg'


const Contact = () => {
    return (
        <div id="contact" className='contact'>
            <div className="contact-title">
                <h1>Kontakt meg!</h1>
            </div>
            <div className="contact-media">
                <a href="https://www.linkedin.com/in/simenholmen" target="_blank" rel="noopener noreferrer">
                    <img src="https://skillicons.dev/icons?i=linkedin" alt="LinkedIn" />
                </a>
                <a href="https://github.com/simholmen" target="_blank" rel="noopener noreferrer">
                    <img src="https://skillicons.dev/icons?i=github" alt="GitHub" />
                </a>
            </div>
            <div className="contact-section">
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" /> <p>simen.emil.wiig@gmail.com</p>
                    </div>

                    <div className="contact-detail">
                        <img src={call_icon} alt="" /> <p>+47 47540288</p>
                    </div>

                    <div className="contact-detail">
                        <img src={location_icon} alt="" /> <p>Kristiansand, Norge</p>
                    </div>
                </div>
            </div>
            <div className="footer">
                <p>© 2025 Simen Emil Wiig Holmen. All rights reserved.</p>
            </div>
        </div>

    )
}

export default Contact