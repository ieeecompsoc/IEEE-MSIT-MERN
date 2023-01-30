import React from 'react';
import './ExeCom.css';
import Menubar from '../../Components/Navbar/Menubar'

import execomDetailsOptions from '../../Constants/ExecomDetailsOptions';
import advisoryBoardList from '../../Constants/ExecomAdvisory';
import { AiOutlineMail, AiOutlineLinkedin, AiOutlineInstagram, AiOutlineFile } from 'react-icons/ai';

const team = require("./ExeComDetails.json");

const RenderExecomSection = ({ list, details }) => {
    const ranks = list.map(objects => {
        return parseInt(objects.rank);
    })
    const maxRank = Math.max(...ranks);
    const minRank = Math.min(...ranks);

    const { execom_section, section_heading, heading_color } = details;

    return (
        <div className='execom_card__main'>
            <h2 style={{ "color": heading_color, "borderBottom": `2px solid ${heading_color}` }} className="app__execom-header">{section_heading}</h2>
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
            <Menubar backgroundClr="#009CA6" />
            <div className="app__execom-mainContainer">
                <div className="app__execom-headerContainer">
                    <h1 className="app__execom-header">Meet the Execom 2023</h1>
                    <div className="hr-header"></div>
                </div>
                <div className='app__execom-execomListContainer'>
                    <div className='execom_card__main'>
                        <h2 style={{ "color": "#009CA6", "borderBottom": "2px solid #009CA6" }} className="app__execom-header">Advisory Board</h2>
                        <div className='execom_card__listContainer'>
                            <div className="execom_card__wrapper">
                                <div className="execom_card advisoryBoard">
                                    <div className="execom_card__image execom_card__image-advisoryBoard">
                                        <img src={advisoryBoardList[0].image} alt="" />
                                    </div>
                                    <div className="execom_card__description execom_card__description-advisoryBoard">
                                        <p className="execom_card__description-name execom_card__description-name-advisoryBoard">{advisoryBoardList[0].name}</p>
                                        <p className="execom_card__description-department">{advisoryBoardList[0].title}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="execom_card__wrapper">
                                {advisoryBoardList.map((member, index) => {
                                    return (
                                        (index) ?
                                            (

                                                <div className="execom_card advisoryBoard">
                                                    <div className="execom_card__image execom_card__image-advisoryBoard">
                                                        <img src={member.image} alt="" />
                                                    </div>
                                                    <div className="execom_card__description execom_card__description-advisoryBoard">
                                                        <p className="execom_card__description-name execom_card__description-name-advisoryBoard">{member.name}</p>
                                                        <p className="execom_card__description-department">{member.title}</p>
                                                    </div>
                                                </div>
                                            ) : (<></>)
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="app__execom-execomListContainer">
                        {Object.keys(team).map((key, index) => {
                            return (
                                (team[key].length) ? (<RenderExecomSection list={team[key]} details={execomDetailsOptions[index]} />) : (<></>)
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ExeCom;