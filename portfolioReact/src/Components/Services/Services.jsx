import React from 'react'
import './services.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_data from '../../assets/Services_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Services = () => {
  return (
    <div id="services" className='services'>
        <div className="services-title">
            <h1>Tjenester</h1>
            <img src={theme_pattern} alt="Tema mønster" />
        </div>
        <div className="services-container">
            {Services_data.map((service, index) => {
                return <div key={index} className="services-format"> 
                    <h3>{service.s_no}</h3>
                    <h2>{service.s_name}</h2>
                    <p>{service.s_desc}</p>
                    <div className='services-readmore'>
                        <p>Les mer</p>
                        <img src={arrow_icon} alt="Pil icon" />
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Services
