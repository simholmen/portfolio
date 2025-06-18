import React from 'react'
import './hero.css'
import profilebilde from '../../assets/profilbilde.png'

const Hero = () => {
    return (
        <div id="home" className='hero'>
            <img src={profilebilde} alt="Profilbilde" />
            <h1><span>Simen Emil Wiig Holmen</span></h1>
            <p> Jeg er en 23 år gammel student som studerer 3. året på IT ved Universitetet i
                Agder.
            </p>
            <div className="hero-action">
                <a
                    href="https://www.linkedin.com/in/simenholmen/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-connect"
                >
                    LinkedIn
                </a>
                <a
                    href="cv.pdf"
                    download
                    className="hero-resume"
                >
                    Last ned CV
                </a>
            </div>
        </div>
    )
}

export default Hero
