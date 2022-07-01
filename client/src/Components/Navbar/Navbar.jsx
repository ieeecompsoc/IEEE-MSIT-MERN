import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import './Navbar.css'
import Images from '../../Constants/Images'

import { IEEELinks } from '../../Constants/NavLinks'

const Navbar = () => {
    let navigate = useNavigate();
    return (
        <div className="app__navbar">
            <nav className='app__navbar-ieeeLinks'>
                <ul>
                    {(IEEELinks).map((links, index) => {
                        return (
                            <Fragment  key={index}>
                                {(index !== 0) && (
                                    <div className="app__navbar-ieeeLinks-verticalDiv"></div>
                                )}
                                <li className=''><a href={links.url} target="_blank" rel='noreferrer'>{links.display}</a></li>
                            </Fragment>
                        )
                    })}
                </ul>
                <img src={Images.logoMainWhite} alt="IEEE-Logo" title='IEEE MSIT' onClick={() => navigate('/')} />
            </nav>
        </div>
    )
}

export default Navbar