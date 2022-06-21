import React from 'react';
import './ExeCom.css';
import Menubar from '../../Components/Navbar/Menubar'

import { AiOutlineMail, AiOutlineLinkedin, AiOutlineInstagram,AiOutlineFile } from 'react-icons/ai';

const team = require("./ExeComDetails.json");

const execomDetails = [
    {
        execom_section: "ta",
        section_heading: "Teacher Advisor",
        heading_color: "#000000"
    },
    {
        execom_section: "main",
        section_heading: "IEEE MAIN",
        heading_color: "#00629B"
    },
    {
        execom_section: "ras",
        section_heading: "IEEE RAS",
        heading_color: "#BA0C2F"
    },
    {
        execom_section: "cs",
        section_heading: "IEEE CS",
        heading_color: "#FFA300"
    },
    {
        execom_section: "pes",
        section_heading: "IEEE PES",
        heading_color: "#00843D"
    },
    {
        execom_section: "wie",
        section_heading: "IEEE WIE",
        heading_color: "#981D97"
    },
    {
        execom_section: "A",
        section_heading: "Web Development Committee",
        heading_color: "#000000"
    },
    {
        execom_section: "B",
        section_heading: "Publicity Committee",
        heading_color: "#000000"
    },
    {
        execom_section: "C",
        section_heading: "Program Committee",
        heading_color: "#000000"
    },
    {
        execom_section: "D",
        section_heading: "Project Committee",
        heading_color: "#000000"
    },
    {
        execom_section: "E",
        section_heading: "Editorial Committee",
        heading_color: "#000000"
    },
    {
        execom_section: "F",
        section_heading: "Design Committee",
        heading_color: "#000000"
    }
]

const RenderExecomSection = ({ list, details }) => {
    const ranks = list.map(objects => {
        return parseInt(objects.rank);
    })
    const maxRank = Math.max(...ranks);
    const minRank = Math.min(...ranks);

    const { execom_section, section_heading, heading_color} = details;

    return (
        <div className='execom_card__main'>
            <h2 style={{"color": heading_color}} className="app__execom-header">{section_heading}</h2>
            <div className='execom_card__listContainer'>
                {(minRank <= maxRank) && (
                    <div className="execom_card__wrapper">
                        {(list).map((execoms, index) => {
                            if (parseInt(execoms.rank) === minRank) {
                                return (
                                    <div className={`execom_card ${execom_section}`} key={index}>
                                        <div className={`execom_card__image execom_card__image-${execom_section}`}>
                                            <img src={execoms.image} alt="" />
                                            <div className="execom_card__image-linksContainer">
                                                <span className="execom_card__linkIcons">
                                                    <a href={`mailto:${execoms.email}`}><AiOutlineMail className='linkIcons' title='Email' /></a>
                                                </span>
                                                {(execoms.instagram) && (
                                                    <span className="execom_card__linkIcons">
                                                        <a href={execoms.instagram} target="_blank" rel="noreferrer noopener"><AiOutlineInstagram className='linkIcons' title='Instagram' /></a>
                                                    </span>
                                                )}
                                                {(execoms.linkedin) && (
                                                    <span className="execom_card__linkIcons">
                                                        <a href={execoms.linkedin} target="_blank" rel="noreferrer noopener"><AiOutlineLinkedin className='linkIcons' title='LinkedIn' /></a>
                                                    </span>
                                                )}
                                                {(execoms.resume) && (
                                                    <span className="execom_card__linkIcons">
                                                        <a href={execoms.resume} target="_blank" rel="noreferrer noopener"><AiOutlineFile className='linkIcons' title='Resume' /></a>
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        <div className="execom_card__description">
                                            <p className={`execom_card__description-name execom_card__description-name-${execom_section}`}>{execoms.name}</p>
                                            <p className="execom_card__description-department">{execoms.stream}</p>
                                            <p className="execom_card__description-designation">{execoms.position}</p>
                                        </div>
                                    </div>
                                )
                            } else {
                                return (<></>)
                            }
                        })}
                    </div>
                )}
                {((minRank + 1) <= maxRank) && (
                    <div className="execom_card__wrapper">
                        {(list).map((execoms, index) => {
                            if (parseInt(execoms.rank) === (minRank + 1)) {
                                return (
                                    <div className={`execom_card ${execom_section}`} key={index}>
                                        <div className={`execom_card__image execom_card__image-${execom_section}`}>
                                            <img src={execoms.image} alt="" />
                                            <div className="execom_card__image-linksContainer">
                                                <span className="execom_card__linkIcons">
                                                    <a href={`mailto:${execoms.email}`}><AiOutlineMail className='linkIcons' title='Email' /></a>
                                                </span>
                                                {(execoms.instagram) && (
                                                    <span className="execom_card__linkIcons">
                                                        <a href={execoms.instagram} target="_blank" rel="noreferrer noopener"><AiOutlineInstagram className='linkIcons' title='Instagram' /></a>
                                                    </span>
                                                )}
                                                {(execoms.linkedin) && (
                                                    <span className="execom_card__linkIcons">
                                                        <a href={execoms.linkedin} target="_blank" rel="noreferrer noopener"><AiOutlineLinkedin className='linkIcons' title='LinkedIn' /></a>
                                                    </span>
                                                )}
                                                {(execoms.resume) && (
                                                    <span className="execom_card__linkIcons">
                                                        <a href={execoms.resume} target="_blank" rel="noreferrer noopener"><AiOutlineFile className='linkIcons' title='Resume' /></a>
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        <div className="execom_card__description">
                                            <p className={`execom_card__description-name execom_card__description-name-${execom_section}`}>{execoms.name}</p>
                                            <p className="execom_card__description-department">{execoms.stream}</p>
                                            <p className="execom_card__description-designation">{execoms.position}</p>
                                        </div>
                                    </div>
                                )
                            } else {
                                return (<></>)
                            }
                        })}
                    </div>
                )}
                {((minRank + 2) <= maxRank) && (
                    <div className="execom_card__wrapper">
                        {(list).map((execoms, index) => {
                            if (parseInt(execoms.rank) === (minRank + 2)) {
                                return (
                                    <div className={`execom_card ${execom_section}`} key={index}>
                                        <div className={`execom_card__image execom_card__image-${execom_section}`}>
                                            <img src={execoms.image} alt="" />
                                            <div className="execom_card__image-linksContainer">
                                                <span className="execom_card__linkIcons">
                                                    <a href={`mailto:${execoms.email}`}><AiOutlineMail className='linkIcons' title='Email' /></a>
                                                </span>
                                                {(execoms.instagram) && (
                                                    <span className="execom_card__linkIcons">
                                                        <a href={execoms.instagram} target="_blank" rel="noreferrer noopener"><AiOutlineInstagram className='linkIcons' title='Instagram' /></a>
                                                    </span>
                                                )}
                                                {(execoms.linkedin) && (
                                                    <span className="execom_card__linkIcons">
                                                        <a href={execoms.linkedin} target="_blank" rel="noreferrer noopener"><AiOutlineLinkedin className='linkIcons' title='LinkedIn' /></a>
                                                    </span>
                                                )}
                                                {(execoms.resume) && (
                                                    <span className="execom_card__linkIcons">
                                                        <a href={execoms.resume} target="_blank" rel="noreferrer noopener"><AiOutlineFile className='linkIcons' title='Resume' /></a>
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        <div className="execom_card__description">
                                            <p className={`execom_card__description-name execom_card__description-name-${execom_section}`}>{execoms.name}</p>
                                            <p className="execom_card__description-department">{execoms.stream}</p>
                                            <p className="execom_card__description-designation">{execoms.position}</p>
                                        </div>
                                    </div>
                                )
                            } else {
                                return (<></>)
                            }
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}

const ExeCom = () => {
    return (
        <section className="app__execom">
            {/* <Menubar backgroundClr="#009CA6" /> */}
            <div className="app__execom-mainContainer">
                <div className="app__execom-headerContainer">
                    <h1 className="app__execom-header">Meet the Execom 2022-23</h1>
                    <div className="hr-header"></div>
                </div>
                <div className="app__execom-execomListContainer">
                    {
                        Object.keys(team).map ((key, index) => {
                            return (
                                (team[key].length) && (
                                    <RenderExecomSection
                                    list={team[key]}
                                    details={execomDetails[index]}
                                />
                                )
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default ExeCom;