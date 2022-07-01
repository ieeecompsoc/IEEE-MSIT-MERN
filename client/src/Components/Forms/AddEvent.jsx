import './addEvent.css'
import React, { useState, useEffect } from 'react';

const AddEvent = () => {
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
        <div className='addEvent__container'>
            <form className='event_form'>
                <label for='title'>Title</label>
                <input name='title' type='text' placeholder='Enter event title' required={true} onChange={event => setTitle(event.target.value)} />

                <label for='description'>Description</label>
                <input name='description' type='text' placeholder='Enter event description' required={true} onChange={event => setDescription(event.target.value)} />
                
                <label for='date'>Description</label>
                <input name='date' type='datetime-local' required={true} onChange={event => setDate(event.target.value)} />
                {/* className="cloudinary-button" has defined styles */}
                
                <label htmlFor='image'>Image:</label>
                <button type='button' id='image' onClick={showUploadWidget} className="addEvent__button" disabled={!title || !description || !date}>{'Upload & Submit'}</button>
            </form>
        </div>
    )
}

export default AddEvent;