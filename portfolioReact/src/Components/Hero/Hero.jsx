import React from 'react'
import './hero.css'
import profilebilde from '../../assets/profilbilde.jpeg'

const Hero = () => {
    return (
        <div id="home" className='hero'>
            <img src={profilebilde} alt="Profilbilde" />
            <h1><span>Hei, jeg er Simen,</span> en IT-student ved universitetet i Agder!</h1>
            <p>Jeg er en 22 år gammel student som studerer IT ved Universitetet i Agder. Jeg har en stor interesse for programmering og teknologi, og jeg elsker å lære nye ting. Jeg har erfaring med flere programmeringsspråk, inkludert JavaScript, Python og Java. Jeg er også interessert i webutvikling og har jobbet med HTML, CSS og React.</p>
            <div className="hero-action">
                <div className="hero-connect">Kontakt meg</div>
                <div className="hero-resume">Last ned CV</div>
            </div>
        </div>
    )
}

export default Hero
