import react from 'react';
import './events.css';

const Events = () => {
    return (
        <div className="events__page">
            <nav>
                <div class="organisation">
                    <a href='' rel='noreferer'>&nbsp; IEEE.org &nbsp; |</a>
                    <a href='' rel='noreferer'>&nbsp; IEEE Xplore Digital Library &nbsp; |</a>
                    <a href='' rel='noreferer'>&nbsp; IEEE Standards &nbsp; |</a>
                    <a href='' rel='noreferer'>&nbsp;  IEEE Spectrum</a>
                </div>

                <div class="navlogo">
                    <img src="assets/src/IEEE_white 1logo.png" />
                </div>
            </nav>

            <div class="section">
                <div class="expand">
                    <i class="fa fa-align-justify"></i>
                </div>  

                <div class="hyplinks">
                    <div><a href="#"> Home</a></div>
                    <div><a href="#"> About Us</a></div>
                    <div> <a href="#"> Events</a></div>
                    <div><a href="#"> Executive Board</a></div>
                </div>
            </div>

            <div class="heading">
                <h2>Events From IEEE This Tenure</h2>
                <hr/>
            </div>

            <div class="event-container">
            
                <div class="event">
                    <div class="event-left">
                        <img src="" alt="" />
                    </div>
            
                    <div class="event-right">
                        <h3 class="event-title">Some Title Here</h3>
            
                        <div class="event-description">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus,
                            ratione.
                        </div>
            
                        <div class="event-timing">
                            <img src="" alt="" /> 10:30 am
                        </div>
                    </div>
                </div>
            
                <div class="event">
                    <div class="event-left">
                        <img src="" alt="" />
                    </div>
            
                    <div class="event-right">
                        <h3 class="event-title">Some Title Here</h3>
            
                        <div class="event-description">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus,
                            ratione.
                        </div>
            
                        <div class="event-timing">
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