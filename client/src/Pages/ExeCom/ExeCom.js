import React, { useState } from 'react';
import './ExeCom.css';
import Menubar from '../../Components/Navbar/Menubar'

import { AiOutlineMail, AiOutlineLinkedin, AiOutlineInstagram,AiOutlineFile } from 'react-icons/ai';

const team = require("./ExeComDetails.json");

const RenderExecomSection = ({ execomSection, sectionHeading, headingClr, execomList }) => {
    const ranks = execomList.map(objects => {
        return parseInt(objects.rank);
    })
    const maxRank = Math.max(...ranks);
    const minRank = Math.min(...ranks);

    return (
        <div className='execom_card__main'>
            <h2 style={{"color": headingClr}} className="app__execom-header">{sectionHeading}</h2>
            <div className='execom_card__listContainer'>
                {(minRank <= maxRank) && (
                    <div className="execom_card__wrapper">
                        {(execomList).map((execoms, index) => {
                            if (parseInt(execoms.rank) === minRank) {
                                return (
                                    <div className={`execom_card ${execomSection}`} key={index}>
                                        <div className={`execom_card__image execom_card__image-${execomSection}`}>
                                            <img src={execoms.image} alt="" />
                                            <div className="execom_card__image-linksContainer">
                                                <span className="execom_card__linkIcons">
                                                    <a href={`mailto:${execoms.email}`}><AiOutlineMail className='linkIcons' title='Email' /></a>
                                                </span>
                                                <span className="execom_card__linkIcons">
                                                    <a href={execoms.instagram} target="_blank" rel="noreferrer noopener"><AiOutlineInstagram className='linkIcons' title='Instagram' /></a>
                                                </span>
                                                <span className="execom_card__linkIcons">
                                                    <a href={execoms.linkedin} target="_blank" rel="noreferrer noopener"><AiOutlineLinkedin className='linkIcons' title='LinkedIn' /></a>
                                                </span>
                                                <span className="execom_card__linkIcons">
                                                    <a href={execoms.resume} target="_blank" rel="noreferrer noopener"><AiOutlineFile className='linkIcons' title='Resume' /></a>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="execom_card__description">
                                            <p className={`execom_card__description-name execom_card__description-name-${execomSection}`}>{execoms.name}</p>
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
                        {(execomList).map((execoms, index) => {
                            if (parseInt(execoms.rank) === (minRank + 1)) {
                                return (
                                    <div className={`execom_card ${execomSection}`} key={index}>
                                        <div className={`execom_card__image execom_card__image-${execomSection}`}>
                                            <img src={execoms.image} alt="" />
                                            <div className="execom_card__image-linksContainer">
                                                <span className="execom_card__linkIcons">
                                                    <a href={`mailto:${execoms.email}`}><AiOutlineMail className='linkIcons' title='Email' /></a>
                                                </span>
                                                <span className="execom_card__linkIcons">
                                                    <a href={execoms.instagram} target="_blank" rel="noreferrer noopener"><AiOutlineInstagram className='linkIcons' title='Instagram' /></a>
                                                </span>
                                                <span className="execom_card__linkIcons">
                                                    <a href={execoms.linkedin} target="_blank" rel="noreferrer noopener"><AiOutlineLinkedin className='linkIcons' title='LinkedIn' /></a>
                                                </span>
                                                <span className="execom_card__linkIcons">
                                                    <a href={execoms.resume} target="_blank" rel="noreferrer noopener"><AiOutlineFile className='linkIcons' title='Resume' /></a>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="execom_card__description">
                                            <p className={`execom_card__description-name execom_card__description-name-${execomSection}`}>{execoms.name}</p>
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
                        {(execomList).map((execoms, index) => {
                            if (parseInt(execoms.rank) === (minRank + 2)) {
                                return (
                                    <div className={`execom_card ${execomSection}`} key={index}>
                                        <div className={`execom_card__image execom_card__image-${execomSection}`}>
                                            <img src={execoms.image} alt="" />
                                            <div className="execom_card__image-linksContainer">
                                                <span className="execom_card__linkIcons">
                                                    <a href={`mailto:${execoms.email}`}><AiOutlineMail className='linkIcons' title='Email' /></a>
                                                </span>
                                                <span className="execom_card__linkIcons">
                                                    <a href={execoms.instagram} target="_blank" rel="noreferrer noopener"><AiOutlineInstagram className='linkIcons' title='Instagram' /></a>
                                                </span>
                                                <span className="execom_card__linkIcons">
                                                    <a href={execoms.linkedin} target="_blank" rel="noreferrer noopener"><AiOutlineLinkedin className='linkIcons' title='LinkedIn' /></a>
                                                </span>
                                                <span className="execom_card__linkIcons">
                                                    <a href={execoms.resume} target="_blank" rel="noreferrer noopener"><AiOutlineFile className='linkIcons' title='Resume' /></a>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="execom_card__description">
                                            <p className={`execom_card__description-name execom_card__description-name-${execomSection}`}>{execoms.name}</p>
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
                    <RenderExecomSection execomSection="main" sectionHeading="IEEE MAIN" headingClr="#00629B" execomList={team.MAIN} />
                    <RenderExecomSection execomSection="cs" sectionHeading="IEEE CS" headingClr="#BA0C2F" execomList={team.CS} />
                    <RenderExecomSection execomSection="ras" sectionHeading="IEEE RAS" headingClr="#FFA300" execomList={team.RAS} />
                    <RenderExecomSection execomSection="pes" sectionHeading="IEEE PES" headingClr="#00843D" execomList={team.PES} />
                    <RenderExecomSection execomSection="wie" sectionHeading="IEEE WIE" headingClr="#981D97" execomList={team.WIE} />
                    <RenderExecomSection execomSection="" sectionHeading="Web Development Committee" headingClr="#000000" execomList={team.WEB_DEV_COMMITTEE} />
                    <RenderExecomSection execomSection="" sectionHeading="Publicity Committee" headingClr="#000000" execomList={team.PUBLICITY_COMMITTEE} />
                    <RenderExecomSection execomSection="" sectionHeading="Program Committee" headingClr="#000000" execomList={team.PROGRAM_COMMITTEE} />
                    <RenderExecomSection execomSection="" sectionHeading="Project Committee" headingClr="#000000" execomList={team.PROJECT_COMMITTEE} />
                    <RenderExecomSection execomSection="" sectionHeading="Editorial Committee" headingClr="#000000" execomList={team.EDITORIAL_COMMITTEE} />
                    <RenderExecomSection execomSection="" sectionHeading="Design Committee" headingClr="#000000" execomList={team.DESIGN_COMMITTEE} />
                </div>
            </div>
        </section>
    )
}

export default ExeCom;