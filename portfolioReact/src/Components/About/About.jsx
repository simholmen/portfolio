import React from 'react'
import './about.css'
import profilebilde from '../../assets/profilbilde.jpeg'
import theme_pattern from '../../assets/theme_pattern.svg'

const About = () => {
  return (
    <div id="about" className='about'>
      <div className="about-title">
        <h1>Om meg</h1>
        <img src={theme_pattern} alt="Profilbilde" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profilebilde} alt="Profilbilde" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>
                    Hei, jeg er Simen, en 22 år gammel IT-student ved Universitetet i Agder. Jeg har en stor interesse for programmering og teknologi, og jeg elsker å lære nye ting. Jeg har erfaring med flere programmeringsspråk, inkludert JavaScript, Python og Java. Jeg er også interessert i webutvikling og har jobbet med HTML, CSS og React.
                </p>
                <p>
                    I tillegg til mine tekniske ferdigheter, er jeg også en kreativ person som liker å jobbe med design og brukeropplevelse. Jeg tror at god design er viktig for å lage brukervennlige applikasjoner, og jeg prøver alltid å forbedre mine ferdigheter innen dette området.
                </p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>JavaScript</p><hr style={{width: "50%"}}></hr></div>
                <div className="about-skill"><p>React JS</p><hr style={{width: "70%"}}></hr></div>
                <div className="about-skill"><p>HTML and CSS</p><hr style={{width: "20%"}}></hr></div>
                <div className="about-skill"><p>Next JS</p><hr style={{width: "60%"}}></hr></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>10+</h1>
            <p>Prosjekter fullført</p> 
        </div>
        <hr />
        <div className="about-achievement">
            <h1>3+</h1>
            <p>Års erfaring</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>3+</h1>
            <p>Glade klienter</p>
        </div>
      </div>
    </div>
  )
}

export default About
