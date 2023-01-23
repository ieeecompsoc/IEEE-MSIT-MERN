import React from "react";

import Menubar from "../../Components/Navbar/Menubar";
import GalleryImages from '../../Constants/GalleryImages';

import './Gallery.css';

const Gallery = () => {
    return (
        <>
            <section className="gallery-section">
                <Menubar backgroundClr="#78BE20" />
                <div className="heading">
                    <h2 className="heading2">Glimpses From IEEE-MSIT</h2>
                    <hr className="headingHr" />
                </div>
                <br />
                <div className="gallery__container">
                    {GalleryImages.map((item, idx) => {
                        return (
                            <div key={idx} className="gallery__image">
                                <img src={item} alt='gallery-image' />
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
};

export default Gallery;