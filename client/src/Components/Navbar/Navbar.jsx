import React from 'react'
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
                            <>
                                {(index !== 0) && (
                                    <div className="app__navbar-ieeeLinks-verticalDiv"></div>
                                )}
                                <li className='' key={index}><a href={links.url} target="_blank" rel='noreferrer'>{links.display}</a></li>
                            </>
                        )
                    })}
                </ul>
                <img src={Images.logoMainWhite} alt="IEEE-Logo" title='IEEE MSIT' onClick={() => navigate('/')} />
            </nav>
            {/* <nav>
                
                <ul>
                    {(NavItems).map((items, index) => {
                        return (
                            <li className='' key={index} onClick={() => navigate(items.route)}>{items.display}</li>
                        )
                    })}
                </ul>
            </nav> */}
        </div>
    )
}

export default Navbar