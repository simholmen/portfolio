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
                <h1>Kom i kontakt med meg!</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>La oss prate!</h1>
                    <p>Jeg er glad i IT</p>
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
                <form className="contact-right">
                    <label htmlFor="">Navn / Bedrift</label>
                    <input type="text" placeholder='Skriv inn navnet ditt' name='name' />
                    <label htmlFor="">Din E-post</label>
                    <input type="email" placeholder='Skriv inn din E-post' name="e-mail" id="e-mail" />
                    <label htmlFor="">Skriv din melding her!</label>
                    <textarea name="message" id="" rows="8" placeholder='Skriv her'></textarea>
                    <button type='submit' className="contact-submit">Send nå</button>
                </form>
            </div>
        </div>
    )
}

export default Contact