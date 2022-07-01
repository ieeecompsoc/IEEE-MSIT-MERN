import './addEvent.css'
import React, { useState, useEffect } from 'react';

import Menubar from '../Navbar/Menubar';
import { useRef } from 'react';

const AddEvent = () => {
    const [titleRef, setTitleRef] = useState(false);
    const [descriptionRef, setDescriptionRef] = useState(false);
    const [dateRef, setDateRef] = useState(false);

    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [image, setImage] = useState()
    const [date, setDate] = useState()

    function submitEvent() {
        fetch('http://localhost:8000/events/add', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ event_title: title, event_description: description, event_date: date, image })
        }).then(res => res.json()).then(data => { if (!data.error) console.log('Successfully added the event!') })
    }

    function showUploadWidget() {
        window.cloudinary.openUploadWidget({
            cloudName: "dbl20ma8s",
            uploadPreset: "qdlgnwlt",
            sources: [
                "local",
                "camera",
                "url",
                "image_search"
            ],
            googleApiKey: "<image_search_google_api_key>",
            showAdvancedOptions: false,
            cropping: true,
            multiple: false,
            defaultSource: "local",
            styles: {
                palette: {
                    window: "#FFFFFF",
                    windowBorder: "#90A0B3",
                    tabIcon: "#0078FF",
                    menuIcons: "#5A616A",
                    textDark: "#000000",
                    textLight: "#FFFFFF",
                    link: "#0078FF",
                    action: "#FF620C",
                    inactiveTabIcon: "#0E2F5A",
                    error: "#F44235",
                    inProgress: "#0078FF",
                    complete: "#20B832",
                    sourceBg: "#E4EBF1"
                },
                fonts: {
                    default: null,
                    "'Fira Sans', sans-serif": {
                        url: "https://fonts.googleapis.com/css?family=Fira+Sans",
                        active: true
                    }
                }
            }
        }, (err, result) => {
            if (!err && result?.event === 'success') {
                setImage(result.info.secure_url)
            }
        });
    }

    useEffect(() => {
        if (image) submitEvent()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [image])

    return (
        <div className='addEvent'>
            <Menubar backgroundClr="#305B98" />
            <div className='addEvent__container'>
                <h1 className="addEvent_heading">Add Event Form</h1>
                <form className='event_form'>
                    <div className="eventForm_inputContainer input_container">
                        <label htmlFor='title' className={(titleRef) ? ("activeTitle") : ("")}>Event Title</label>
                        <input name='title' id='title' type='text' placeholder='Enter Event Title' required={true} onChange={event => setTitle(event.target.value)} onFocus={() => (setTitleRef(true))} onBlur={() => (setTitleRef(false))} />
                    </div>
                    <div className="eventForm_inputContainer textarea_container">
                        <label htmlFor='description' className={(descriptionRef) ? ("activeDescription") : ("")}>Event Description</label>
                        <textarea name='description' id='description' type='text' placeholder='Enter Event Description' required={true} onChange={event => setDescription(event.target.value)}onFocus={() => (setDescriptionRef(true))} onBlur={() => (setDescriptionRef(false))} />
                    </div>
                    <div className="eventForm_inputContainer input_container">
                        <label htmlFor='date' className={(dateRef) ? ("activeDate") : ("")}>Date & Time</label>
                        <input name='date' id='date' type='datetime-local' required={true} onChange={event => setDate(event.target.value)} onFocus={() => (setDateRef(true))} onBlur={() => (setDateRef(false))} />
                    </div>
                    
                    <div className="eventForm_inputContainer">
                        <label htmlFor='image' style={{"color": "#305B96", "borderBlockEnd": "1px solid #305B96"}}>Event Image</label>
                        <button type='button' id='image' onClick={showUploadWidget} className="addEvent__button" disabled={!title || !description || !date}>{'Upload & Submit'}</button>
                    </div>
                    
                </form>
            </div>
        </div>
    )
}

export default AddEvent;