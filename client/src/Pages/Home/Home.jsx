import React from 'react'
import './Home.css'
import Menubar from '../../Components/Navbar/Menubar'
import Images from '../../Constants/Images'
import logoImages from '../../Constants/HomeImageLogo'

const Home = () => {
    return (
        <header className='app__home'>
            <Menubar backgroundClr="transparent" />
            <div>
                <figure className='app__home-mainImg'>
                    <img src={Images.ieeeMainImg} alt="" title='IEEE'/>
                    <img src={Images.logoMainWhite} alt="IEEE" title='IEEE' className="app__home-mainImg-ieeeLogo" />
                </figure>
                <div className='app__home-logoContainer'>
                    {(logoImages).map((image, index) => {
                        return (
                            <figure key={index}>
                                <img src={image.source} alt={image.name} title={image.name} />
                            </figure>
                        )
                    })}
                </div>
                <div className="app__home-messageContainer">
                    <div className="app__home-headerContainer">
                        <h1 className="app__home-header">Message From The Branch</h1>
                        <div className="hr-blue"></div>
                    </div>
                    <div className="app__home-messageWrapper">
                        <p className="app__home-messageContainer-message">
                            IEEE MSIT SB is an initiative to bring exposure to the members about the advancements in the technical field, build confidence and interaction with experts. It envisions to "Lead a wave of change" through its technical advents for the betterment of society.
                        </p>
                        <p className="app__home-messageContainer-message">
                            Since it's inception in 2009, a team of conscientious and zealous IEEE volunteers, holding various positions of responsibility, work with utmost dedication to make each event a huge success.
                        </p>
                        <p className="app__home-messageContainer-message">
                            IEEE MSIT SB works into building the college's biggest technical society for engineering, computing, and technology information.
                        </p>
                        <p className="app__home-messageContainer-message">
                            It has served as an effective networking channel bringing together the the past and present members together who complement the other in collectively contributing to ideas and projects.
                        </p>
                        <p className="app__home-messageContainer-message">
                            IEEE MSIT SB has been subject to several upgrades and with each new development, it has striven to reach closer to it's goals.
                        </p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Home