import React, { useState } from "react";
import '../AstroPhoto/photoStyle.scss';

const Photo = (props) => {
  const isVideo = props.photo.media_type === "video";

  if (isVideo) {
    return (
      <>
        <div className="video-container">
          <iframe
            src={props.photo.url}
            title={props.photo.title}
            className="video"
            allow="autoplay"
            allowFullScreen
          ></iframe>
          {/* <caption>This is a caption for the video</caption> */}
        </div>

        <div className="info-container">
          <h1 className="info-title">{props.photo.title}</h1>
          <h3 className="date">{props.photo.date}</h3>
          <p className="description">{props.photo.explanation}</p>
        </div>
      </>
    );
  } 
    return (
      <>
        <div className="photo-container">
          <a
            className="photo-anchor"
            href={props.photo.hdurl}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={props.photo.url}
              className="img"
              alt="APOD"
            />
          </a>
        </div>

        <div className="info-container">
          <h1 className="info-title">{props.photo.title}</h1>
          <h3 className="date">{props.photo.date}</h3>
          <p className="description">{props.photo.explanation}</p>
        </div>
      </>
    );
};

export default Photo;