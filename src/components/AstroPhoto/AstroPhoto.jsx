import React, { useState, useEffect } from "react";
import Photo from "./Photo";
import DateInput from "./DateInput";
import { CircleLoader } from "react-spinners";
import '../AstroPhoto/photoStyle.scss';

const API_KEY = 'V3So8Qu3NHWIE20l3VCTlXhyZscIKTZK7W1vhJS8';

const AstroPhoto = () => {
  const [loading, setLoading] = useState(true);
  const [photo, setPhoto] = useState('');
  const [date, setDate] = useState(new Date());

  const formatDate = (date) => {
    return date.toISOString().split('T')[0];
  };

  const changeDate = (dateFromInput) => {
    setDate(dateFromInput);
    getPhotoByDate(formatDate(dateFromInput));
  };

  const getPhotoByDate = (date) => {
    fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=${API_KEY}`)
    .then((response) => response.json())
    .then((photoData) => {
    setPhoto(photoData);
    });
  };

  useEffect(() => {
    setLoading(true)
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
    .then((response) => response.json())
    .then((json) => {
    setPhoto(json);
    setLoading(false)
    })
    // .catch(error => {
    //   console.log('Sorry! There seems to be an error with the API :(')
    // });
  }, []);


  return (
    <>
      <main id="main" style={{ overflow: 'scroll', height: '100vh' }}>
        <DateInput
          date={date}
          changeDate={changeDate}
        />
        <hr className="d-sm-none" style={{ borderTop: '1px solid #bbb', margin: '0' }}></hr>
        
        {loading ? (
          <CircleLoader
            color="#36d7b7"
            cssOverride={{
              margin: 'auto'
            }}
            loading
            size={150}
            speedMultiplier={1}
          />
            ) : ( 
              <Photo photo={photo} /> 
            )}
      {/* <CircleLoader color="#36d7b7" /> */}
      </main>
    </>
  );
}
export default AstroPhoto;