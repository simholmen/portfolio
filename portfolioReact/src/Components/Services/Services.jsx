import React, { useState } from 'react'
import './services.css'
import Services_data from '../../assets/Services_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Services = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    return (
        <div id="services" className='services'>
            <div className="services-title">
                <h1>Prosjekter</h1>
            </div>
            <div className="services-container">
                {Services_data.map((service, index) => {
                    const isExpanded = expandedIndex === index;
                    return (
                        <div className="services-timeline-item" key={index}>
                            <div className="services-timeline-marker">
                                <span className="services-timeline-label">{service.s_label}</span>
                                <span className="services-timeline-dot"></span>
                            </div>
                            <div
                                className={`services-format${isExpanded ? ' expanded' : ''}`}
                                onClick={() => setExpandedIndex(isExpanded ? null : index)}
                            >
                                <h3>{service.s_no}</h3>
                                <h2>{service.s_name}</h2>
                                {isExpanded === false && (
                                    <p>{service.s_desc}</p>
                                )}
                                {isExpanded && service.s_longdesc && (
                                    <div className="services-longdesc">
                                        {Array.isArray(service.s_longdesc)
                                            ? service.s_longdesc.map((desc, idx) => (
                                                <p key={idx}>{desc}</p>
                                            ))
                                            : <p>{service.s_longdesc}</p>
                                        }
                                        {isExpanded && service.s_github && (
                                            <a
                                                className="services-github-btn"
                                                href={service.s_github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Se på GitHub
                                            </a>
                                        )}
                                        {isExpanded && service.s_youtube && (
                                            <a
                                                className="services-youtube-btn"
                                                href={service.s_youtube}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Se på Youtube
                                            </a>
                                        )}
                                        <h3>Hva jeg har lært:</h3>
                                        <ul className="services-learned">
                                            {service.s_learned.split('\n').map((line, idx) => (
                                                <li key={idx}>{line}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                <div className='services-icons-row'>
                                    {service.s_icons && service.s_icons.map((icon, idx) => (
                                        <img className='skill-icon' src={icon} alt={service.s_name + " ikon"} key={idx} />
                                    ))}
                                </div>
                                <div className='services-readmore'>
                                    <p>{isExpanded ? "Lukk" : "Les mer"}</p>
                                    <img src={arrow_icon} alt="Pil icon" />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Services