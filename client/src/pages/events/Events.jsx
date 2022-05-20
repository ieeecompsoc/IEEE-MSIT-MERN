import react from 'react';
import './events.css';
import IEEE_WHITE from '../../assets/IEEE_white 1logo.PNG';
import Menubar from '../../Components/Navbar/Menubar';

const Events = () => {
    return (
        <div className="events__page">
            <Menubar backgroundClr="#78BE20" />
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
        </div>
    )
}

export default Events;