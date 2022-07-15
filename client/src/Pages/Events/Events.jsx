import React, { useEffect, useState } from 'react';
import './Events.css';
import Menubar from '../../Components/Navbar/Menubar';

const Events = () => {
    const [events, setEvents] = useState([])

    useEffect(() => {
        fetch('https://stormy-earth-49041.herokuapp.com/events/get').then(res => res.json()).then(data => setEvents(data))
    }, [])

    return (
        <div className="events__page">
            <Menubar backgroundClr="#78BE20" />
            <div className="heading">
                <h2 className="heading2">Events From IEEE This Tenure</h2>
                <hr className="headingHr" />
            </div>

            <div className="event-container">
                {events.map(({ _id, event_title, event_description, event_date, image }) =>
                    <div key={_id} className="event">
                        <div className="event-left">
                            <img className='event-image' src={image} alt="event_image" />
                        </div>

                        <div className="event-right">
                            <div>
                                <h3 className="event-title">{event_title}</h3>
                                <div className="event-description">
                                    <p className='event-describe'>{event_description.substring(0, 200)}</p>
                                </div>
                            </div>

                            <div>
                                <span className="event-timing">
                                    {new Date(event_date).toLocaleString()}
                                </span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Events;