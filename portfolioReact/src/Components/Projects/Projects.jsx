import React, { useState } from 'react'
import './Projects.css'
import Projects_data from '../../assets/projects_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Projects = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    return (
        <div id="projects" className='projects'>
            <div className="projects-title">
                <h1>Prosjekter</h1>
            </div>
            <div className="projects-container">
                {Projects_data.map((project, index) => {
                    const isExpanded = expandedIndex === index;
                    return (
                        <div className="projects-timeline-item" key={index}>
                            <div className="projects-timeline-marker">
                                <span className="projects-timeline-label">{project.s_label}</span>
                                <span className="projects-timeline-dot"></span>
                            </div>
                            <div
                                className={`projects-format${isExpanded ? ' expanded' : ''}`}
                                onClick={() => setExpandedIndex(isExpanded ? null : index)}
                            >
                                <h3>{project.s_no}</h3>
                                <h2>{project.s_name}</h2>
                                {isExpanded === false && (
                                    <p>{project.s_desc}</p>
                                )}
                                {isExpanded && project.s_longdesc && (
                                    <div className="projects-longdesc">
                                        {Array.isArray(project.s_longdesc)
                                            ? project.s_longdesc.map((desc, idx) => (
                                                <p key={idx}>{desc}</p>
                                            ))
                                            : <p>{project.s_longdesc}</p>
                                        }
                                        {isExpanded && project.s_github && (
                                            <a
                                                className="projects-github-btn"
                                                href={project.s_github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Se på GitHub
                                            </a>
                                        )}
                                        {isExpanded && project.s_youtube && (
                                            <a
                                                className="projects-youtube-btn"
                                                href={project.s_youtube}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Se på Youtube
                                            </a>
                                        )}
                                        <h3>Hva jeg har lært:</h3>
                                        <ul className="projects-learned">
                                            {project.s_learned.split('\n').map((line, idx) => (
                                                <li key={idx}>{line}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                <div className='projects-icons-row'>
                                    {project.s_icons && project.s_icons.map((icon, idx) => (
                                        <img className='skill-icon' src={icon} alt={project.s_name + " ikon"} key={idx} />
                                    ))}
                                </div>
                                <div className='projects-readmore'>
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

export default Projects