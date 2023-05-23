import React from "react";

const Photo = ( props ) => {
  return (
    <>
      <div className="photo-container">
        <a href={props.photo.hdurl} target="_blank" rel="noreferrer"><img src={props.photo.url} className="photo" alt="APOD" /></a>
      </div>

      <div className="info-container">
        <h1 className='info-title'>{props.photo.title}</h1>
        <h3 className="date">{props.photo.date}</h3>
        <p className="description">{props.photo.explanation}</p>
      </div>
      </>
    )
}

export default Photo;