import './addEvent.css'
import React, { useState } from 'react';
import Menubar from '../Navbar/Menubar';
import axios from 'axios'

const AddEvent = () => {
    const [titleRef, setTitleRef] = useState(false);
    const [descriptionRef, setDescriptionRef] = useState(false);
    const [dateRef, setDateRef] = useState(false);

    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [image, setImage] = useState()
    const [date, setDate] = useState()

    async function submitEvent(event) {
        event.preventDefault()
        const data = new FormData();
        data.append('event_title', title)
        data.append('event_description', description)
        data.append('image', image)
        data.append('event_date', date)

        try {
            await axios({
                url: 'http://localhost:8000/events/add', method: 'post', data,
                headers: {
                    'Content-Type': 'multipart/form-data',
                    authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYzZiMDEwMGVhMGI3MWY3YzBiOWZjNSIsImlhdCI6MTY1ODQwMzk0MiwiZXhwIjoxNjYwOTk1OTQyfQ.Cw0cgG5zVmDg2t_97nqXArlfLZjaLo9whgZaL2YAfCk'
                }
            })
            console.log('Successfully added the event!')
        } catch { }
    }

    return (
        <div className='addEvent'>
            <Menubar backgroundClr="#305B98" />
            <div className='addEvent__container'>
                <h1 className="addEvent_heading">Add Event Form</h1>
                <form className='event_form' onSubmit={submitEvent}>
                    <div className="eventForm_inputContainer input_container">
                        <label htmlFor='title' className={(titleRef) ? ("activeTitle") : ("")}>Event Title</label>
                        <input name='title' id='title' type='text' placeholder='Enter Event Title' required={true} onChange={event => setTitle(event.target.value)} onFocus={() => (setTitleRef(true))} onBlur={() => (setTitleRef(false))} />
                    </div>
                    <div className="eventForm_inputContainer textarea_container">
                        <label htmlFor='description' className={(descriptionRef) ? ("activeDescription") : ("")}>Event Description</label>
                        <textarea name='description' id='description' type='text' placeholder='Enter Event Description' required={true} onChange={event => setDescription(event.target.value)} onFocus={() => (setDescriptionRef(true))} onBlur={() => (setDescriptionRef(false))} />
                    </div>
                    <div className="eventForm_inputContainer input_container">
                        <label htmlFor='date' className={(dateRef) ? ("activeDate") : ("")}>Date &amp; Time</label>
                        <input name='date' id='date' type='datetime-local' required={true} onChange={event => setDate(event.target.value)} onFocus={() => (setDateRef(true))} onBlur={() => (setDateRef(false))} />
                    </div>
                    <div className="eventForm_inputContainer">
                        <label htmlFor='image' style={{ "color": "#305B96", "borderBlockEnd": "1px solid #305B96" }}>Event Image</label>
                        <input type='file' required={true} accept='image/*' onChange={event => setImage(event.target.files[0])} />
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AddEvent;