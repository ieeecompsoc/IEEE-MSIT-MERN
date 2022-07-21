import React, { useEffect, useState } from 'react';
import './Events.css';
import Menubar from '../../Components/Navbar/Menubar';
import axios from 'axios';

const Events = () => {
    const [events, setEvents] = useState([])

    async function fetchApp() {
        // 'https://stormy-earth-49041.herokuapp.com/events/get'
        try {
            const { data } = await axios('http://localhost:8000/events/get')
            setEvents(data)
        } catch { }
    }

    useEffect(() => { fetchApp() }, [])

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
                            <img className='event-image' src={`http://localhost:8000/images/${image}`} alt="event_image" />
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