import React from 'react'
import './About.css'
import profilebilde from '../../assets/profilbilde.jpeg'

const About = () => {
    return (
        <div id="about" className='about'>
            <div className="about-title">
                <h1>Om meg</h1>
            </div>
            <div className="about-sections">
                <div className="about-main">
                    <img src={profilebilde} alt="Profilbilde" />
                    <div className="about-para">
                        <p>
                            Hei, jeg er Simen, en 22 år gammel IT-student ved Universitetet i Agder. Jeg har en stor interesse for programmering og teknologi, og er alltid klar for å lære nye ting. Jeg har erfaring innen flere programmeringsspråk, men er alltid klar for å lære nye. I tillegg til mine tekniske ferdigheter, er jeg også en kreativ person som liker å finne nye løsninger på problemer, og prøver alltid å forbedre mine ferdigheter.
                        </p>
                        <p>
                            De teknologiene jeg har jobbet mest med er listet nedenfor sammen med hvor jeg har jobbet med dem. Jeg har også lært mye gjennom arbeidet som studentmentor og læringsassistent ved Universitetet i Agder og medlem av styre i NITO Studentene.
                        </p>
                    </div>
                </div>
                <div className='about-stats'>
                    <img src="https://github-readme-stats.vercel.app/api?username=simholmen&show_icons=true&title_color=#4dffb3&text_color=#4dffb3&icon_color=#4dffb3" alt="" />
                    <img src="https://nirzak-streak-stats.vercel.app/?user=simholmen&theme=green" alt="" />
                    <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=simholmen&layout=compact" alt="" />
                </div>
                <div className="about-skills">
                    <div className="about-skills">
                        <div className="skill-icon">
                            <img src="https://skillicons.dev/icons?i=html" alt="HTML" />
                            <span className="tooltip">HTML
                                <li>IS-114</li>
                                <li>IS-200</li>
                                <li>Portofolio prosjekt</li>
                            </span>
                        </div>
                        <div className="skill-icon">
                            <img src="https://skillicons.dev/icons?i=css" alt="CSS" />
                            <span className="tooltip">CSS
                                <li>Portfolio prosjekt</li>
                                <li>IS-114</li>
                            </span>
                        </div>
                        <div className="skill-icon">
                            <img src="https://skillicons.dev/icons?i=git" alt="Git" title='Git' />
                            <span className="tooltip">Git
                                <li>IS-114</li>
                            </span>
                        </div>
                        <div className="skill-icon">
                            <img src="https://skillicons.dev/icons?i=js" alt="JavaScript" title='JavaScript' />
                            <span className="tooltip">JavaScript
                                <li>Portofolio prosjekt</li>
                                <li>IS-202</li>
                            </span>
                        </div>
                        <div className="skill-icon">
                            <img src="https://skillicons.dev/icons?i=figma" alt="Figma" title='Figma' />
                            <span className="tooltip">Figma
                                <li>IS-104</li>
                                <li>LA i IS-104</li>
                                <li>IS-200</li>
                                <li>IS-112</li>
                            </span>
                        </div>
                        <div className="skill-icon">
                            <img src="https://skillicons.dev/icons?i=dotnet" alt="DotNet" title='DotNet' />
                            <span className="tooltip">DotNet
                                <li>IS-202</li>
                            </span>
                        </div>
                        <div className="skill-icon">
                            <img src="https://skillicons.dev/icons?i=java" alt="Java" title='Java' />
                            <span className="tooltip">Java
                                <li>IS-110</li>
                            </span>
                        </div>
                        <div className="skill-icon">
                            <img src="https://skillicons.dev/icons?i=react" alt="React" title='React' />
                            <span className="tooltip">React
                                <li>Portofolio prosjekt</li>
                                <li>IS-218</li>
                            </span>
                        </div>
                        <div className="skill-icon">
                            <img src="https://skillicons.dev/icons?i=postgres" alt="Postgres" title='Postgres' />
                            <span className="tooltip">Postgres
                                <li>IS-218</li>
                                <li>IS-309</li>
                            </span>
                        </div>
                        <div className="skill-icon">
                            <img src="https://skillicons.dev/icons?i=docker" alt="Docker" title='Docker' />
                            <span className="tooltip">Docker
                                <li>IS-105</li>
                                <li>IS-202</li>
                                <li>IS-218</li>
                            </span>
                        </div>
                        <div className="skill-icon">
                            <img src="https://skillicons.dev/icons?i=python" alt="Python" title='Python' />
                            <span className="tooltip">Python
                                <li>IS-211</li>
                                <li>Padel turnering prosjekt</li>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
