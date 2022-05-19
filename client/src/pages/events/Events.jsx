import react from 'react';
import './Events.css';
import IEEE_WHITE from '../../Assets/IEEE_white 1logo.PNG';

const Events = () => {
    return (
        <div className="events__page">
            <nav>
                <div className="organisation">
                    <a href='' rel='noreferer'>&nbsp; IEEE.org &nbsp; |</a>
                    <a href='' rel='noreferer'>&nbsp; IEEE Xplore Digital Library &nbsp; |</a>
                    <a href='' rel='noreferer'>&nbsp; IEEE Standards &nbsp; |</a>
                    <a href='' rel='noreferer'>&nbsp;  IEEE Spectrum</a>
                </div>

                <div className="navlogo">
                    <img src={IEEE_WHITE} />
                </div>
            </nav>

            <div className="section">
                <div className="expand">
                    <i className="fa fa-align-justify"></i>
                </div>  

                <div className="hyplinks">
                    <div><a href="#"> Home</a></div>
                    <div><a href="#"> About Us</a></div>
                    <div> <a href="#"> Events</a></div>
                    <div><a href="#"> Executive Board</a></div>
                </div>
            </div>

            <div className="heading">
                <h2>Events From IEEE This Tenure</h2>
                <hr/>
            </div>

            <div className="event-container">
            
                <div className="event">
                    <div className="event-left">
                        <img src="" alt="" />
                    </div>
            
                    <div className="event-right">
                        <h3 className="event-title">Some Title Here</h3>
            
                        <div className="event-description">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus,
                            ratione.
                        </div>
            
                        <div className="event-timing">
                            <img src="" alt="" /> 10:30 am
                        </div>
                    </div>
                </div>
            
                <div className="event">
                    <div className="event-left">
                        <img src="" alt="" />
                    </div>
            
                    <div className="event-right">
                        <h3 className="event-title">Some Title Here</h3>
            
                        <div className="event-description">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus,
                            ratione.
                        </div>
            
                        <div className="event-timing">
                            <img src="" alt="" /> 10:30 am
                        </div>
                    </div>
                </div>
            </div>

            <footer>
                <p>Join IEEE | Contact us | Maharaja Surajmal Institute of Technology | Copyright &#169; 2022, IEEE MSIT</p>
            </footer>

        </div>
    )
}

export default Events;