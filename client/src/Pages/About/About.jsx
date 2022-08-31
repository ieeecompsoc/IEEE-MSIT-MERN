import React from 'react'
import './About.css'
import Menubar from '../../Components/Navbar/Menubar'
import aboutMain from '../../Assets/aboutMain.png';
import ieeeLogo from '../../Assets/ieeeLogo.png';


const About = () => {
    return (
        <header className='app__About'>
            <Menubar backgroundClr="#00629B" />
            <div>
                <figure className='app__About-mainImg'>
                    <img src={aboutMain} alt="" title='IEEE' />
                    <img src={ieeeLogo} alt="IEEE" title='IEEE' className="app__About-mainImg-ieeeLogo" />
                </figure>

                <div className="app__About-messageContainer">
                    <div className="app__About-headerContainer">
                        <h1 className="app__About-header">About the Student Branch</h1>
                        <div className="hr-blue"></div>
                    </div>
                    <div className="app__About-messageWrapper">
                        <p className="app__About-messageContainer-message">
                            IEEE MSIT has a pivitol role to play in advancing technological pursuits and social networking of MSIT. Since it's inception in 2009, it has played a forward role in providing it's members a platform to interact, collaborate and work towards a building a technically sound ecosystem. IEEE MSIT WIE, PES, MTTS, CS chapters have worked in cohesion to explore and bring forth various engineering avenues and opportunities such as hackathons, seminars, hands-on workshops, industrial visits, women empowerment seminars, technical project exhibitions, STEP programmes and a lot more.
                        </p>
                        <p className="app__About-messageContainer-message">
                            The latest IEEE MSIT advent is it's AWP-PCB lab which is a project centric lab aiming at finding hardware solutions to real world glitches faced by the institution as a whole.
                        </p>
                        <p className="app__About-messageContainer-message">
                            IEEE MSIT plans to keep growing, directing, mentoring and spontaneously nurturing the budding technologists of the institution.
                        </p>
                        <p className="app__About-messageContainer-message">
                            With TPE as it's major project exhibitory event, IEEE MSIT focusses on hardware and software solutions and provides a ready platform for the budding engineers across the country to exhibit their engineering prowess and put their skills to a judicious use. The exhibits are judged by a panel of experienced judges who serve as able mentors to the students.
                        </p>
                        <p className="app__About-messageContainer-message">
                            With it's wide reach, IEEE MSIT serves as an ideal platform for the students to network, co-learn and develop.
                        </p>
                        <br />
                        <div className='contact__container'>
                            <iframe frameborder="0" height="450" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.293356837104!2d77.09041795012958!3d28.620968691269987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM3JzE1LjUiTiA3N8KwMDUnMzMuNCJF!5e0!3m2!1sen!2sin!4v1453149363403" width="600"></iframe>
                            <div className="contact-info">
                                <h2 className='contact-heading'>Contact Us</h2>
                                <p className='contact-phone'>
                                    <strong>Phone: </strong>
                                    +91 97113 83658, +91 95401 23048</p>
                                <p className='contact-address'>
                                    <strong>Address: </strong>
                                    C-4 Janak Puri, New Delhi, Delhi 110058, India
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default About