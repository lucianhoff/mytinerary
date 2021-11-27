import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../sass/Button2.scss";
import "../style.css"
class City extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: {},
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/api/cities/" + this.props.params.city)
      .then((response) => this.setState(response.data.response));
  }

  componentDidUpdate() {
    // console.log(this.props.params.city)
  }

  render() {
    console.log(this.state.cityName);

    return (
      <>
        <div
          className="cityHero rubik"
          style={{
            backgroundImage: `url(/assets/cities/city${this.state.image}.jpg)`,
          }}
        >
          <h1 className="text-center">{this.state.cityName}</h1>
        </div>
        <div className="img-city-group flex justify-center align-center items-center">
            <div className="flex flex-col justify-center items-center">
                <img src="/assets/city/country.png" className="img-city d-flex"/>
                <h3 className="font-bold text-3xl rubik text-purple-600">Country: {this.state.countryName}</h3>
            </div>
            <div className="flex flex-col justify-center items-center">
                <img src="/assets/city/languages.png" className="img-city d-flex"/>
                <h3 className="font-bold text-3xl rubik text-purple-600">Language: {this.state.language}</h3>
            </div>
            <div className="flex flex-col justify-center items-center">
                <img src="/assets/city/divisa.png" className="img-city d-flex"/>
                <h3 className="font-bold text-3xl rubik text-purple-600">Divisa: {this.state.divisa}</h3>
            </div>
        </div>
        <div className="flex flex-col justify-center items-center"> 
            <div className="flex justify-center items-center align-center w-1/4 my-5">
                <img src="/assets/city/under-construction.png"/>
            </div>
            <h3 className="text-3xl rubik text-purple-600 font-bold">Under Construction</h3>
        </div>
        <div className="element mt-36 flex align-center justify-center my-5">
          <Link className="learn-more button2" to="/cities">
            <span className="circle" aria-hidden="true">
              <span className="icon arrow pr-3"></span>
            </span>
            <span className="button-text text-md mukta"> Back to Cities</span>
          </Link>
        </div>
      </>
    );
  }
}

export default City;
