import React, { Fragment } from 'react'
import './Footer.css'

import { FooterLinks } from '../../Constants/NavLinks'

const Footer = () => {
    return (
        <footer className='app__footer'>
            <ul>
                {(FooterLinks).map((links, index) => {
                    return (
                        <Fragment  key={index}>
                            {(index !== 0) && (
                                <div className="app__navbar-ieeeLinks-verticalDiv"></div>
                            )}
                            <li key={index}>
                                <a href={links.url} target="_blank" rel='noreferrer'>{links.display}</a>
                            </li>
                        </Fragment>
                    )
                })}
                <div className="app__navbar-ieeeLinks-verticalDiv"></div>
                <li>Copyright &copy; 2022, IEEE MSIT</li>
            </ul>
        </footer>
    )
}

export default Footer