import React, { useEffect, useState } from 'react';
import "./Card.style.scss";

const Card = ({ data }) => {
    const [clickedElement, setClickedElement] = useState(false);
    const [showImage, setShowImage] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowImage(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, [showImage]);

    const findClickedRowHandler = (e) => {
        setClickedElement(e);
        setShowImage(e);
    }

    return (
        data.map(dat => <div className={`card-container d-flex flex-column flex-sm-column flex-md-row align-items-center fade-in ${clickedElement === dat.id ? 'clickedRow' : ''}`}
            onClick={(e) => findClickedRowHandler(dat.id)} key={dat.id}  >
            <img src={dat.owner.avatar_url} className="profile-image position-relative" alt={dat.description} />
            <p className="file-name ml-3">{Object.keys(dat.files)[0]}</p>
            {showImage === dat.id ? <img className="fadeImg" src={dat.owner.avatar_url} alt={dat.description} /> : null}
        </div>)


    )
};

export default Card;