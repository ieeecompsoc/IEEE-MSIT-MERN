import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Menubar.css';

import { MdMenu, MdClose } from 'react-icons/md';
import { NavItems } from '../../Constants/NavLinks';

const Menubar = ({ backgroundClr }) => {
    let navigate = useNavigate();
    const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
    return (
        <nav className='app__menubar' style={{backgroundColor: backgroundClr}}>
            <ul>
                {NavItems.map((items, index) => {
                    return (
                        <li key={index} className="app__menubar-pagelinks" onClick={() => (navigate(items.route))}>{items.display}</li>
                    )
                })}
            </ul>
            <div className="app__menubar-mobileScreen">
                {(!toggleMobileMenu) && (
                    <span className="mobileMenu-open-container">
                        <MdMenu cursor={'pointer'} onClick={() => setToggleMobileMenu(!toggleMobileMenu)} className='mobileMenu-open' />
                    </span>
                )}
                {(toggleMobileMenu) && (
                    <div className="app__menubar-mobileScreen-slideBar slide-right">
                        <MdClose cursor={'pointer'} onClick={() => setToggleMobileMenu(!toggleMobileMenu)} className='mobileMenu-close' />
                        <ul>
                            {NavItems.map((items, index) => {
                                return (
                                    <li key={index} className="app__menubar-pagelinks" onClick={() => (navigate(items.route))}>{items.display}</li>
                                )
                            })}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Menubar