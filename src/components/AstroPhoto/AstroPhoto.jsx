import React, { Component } from "react";
import Photo from "./Photo";
import DateInput from "./DateInput";
import '../AstroPhoto/photoStyle.scss';


const API_KEY = 'V3So8Qu3NHWIE20l3VCTlXhyZscIKTZK7W1vhJS8';
// const API_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;


class AstroPhoto extends Component {

  // const [photo, setPhoto] = useState('')
  // const [date, setDate] = useState(new Date())

  state = {
		date: new Date(),
		photo: ''
	}

	formatDate = (date) => {
		// converts date to yyyy-mm-dd
		return date.toISOString().split('T')[0]
	  }


	changeDate = dateFromInput => {
		this.setState({ date: dateFromInput });
		this.getPhotoByDate(this.formatDate(dateFromInput)); 
	}

	getPhotoByDate = date => {
		fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=${API_KEY}`)
		.then((response) => {
		  return response.json()
		})
		.then((photoData) => {
		  this.setState({ photo: photoData })
		})
	};

  componentDidMount() {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        this.setState({ photo: json })
      })
  };

	render() {
    return (
      <>
        <main id="main">

          {/* <DateInput 
            date={this.state.date}
            changeDate={this.changeDate}
            handleClick={this.handleClick} 
          /> */}
          <Photo photo={this.state.photo} />
        </main>
      </>
    )
	};
};
export default AstroPhoto;