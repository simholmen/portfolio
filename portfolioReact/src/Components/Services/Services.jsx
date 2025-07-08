import React from 'react'
import './services.css'
import Services_data from '../../assets/Services_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Services = () => {
    return (
        <div id="services" className='services'>
            <div className="services-title">
                <h1>Prosjekter</h1>
            </div>
            <div className="services-container">
                {Services_data.map((service, index) => {
                    return (
                        <div className="services-timeline-item">
                            <div className="services-timeline-marker">
                                <span className="services-timeline-label">{service.s_label}</span>
                                <span className="services-timeline-dot"></span>
                            </div>
                            <div className="services-format">
                                <h3>{service.s_no}</h3>
                                <h2>{service.s_name}</h2>
                                <p>{service.s_desc}</p>
                                <div className='services-icons-row'>
                                    {service.s_icons && service.s_icons.map((icon, idx) => (
                                        <img className='skill-icon' src={icon} alt={service.s_name + " ikon"} key={idx} />
                                    ))}
                                </div>
                                <div className='services-readmore'>
                                    <p>Les mer</p>
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
