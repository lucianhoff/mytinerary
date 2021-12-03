import React from "react";
import { Link } from "react-router-dom";
import "../sass/Button2.scss";
import "../style.css";
import Loader from "../components/Loader";
import Itenirary from "../components/Itinirary";

import { connect } from "react-redux";
import citiesAction from "../redux/actions/citiesAction";
import itineraryAction from "../redux/actions/itinerariesAction";

class City extends React.Component {

  componentDidMount() {

    window.scrollTo(0, 0);

    this.props.findCity(this.props.params.city); // action

    this.props.getItineraryByCity(this.props.params.id); // action
  }


  render() {
    if (!this.props.city) {
      return <Loader />;
    }

    return (
      <>
        <div>
          <div
            className="cityHero rubik"
            style={{
              backgroundImage: `url(/assets/cities/city${this.props.city.image}.jpg)`,
            }}
          >
            <div className="bg-purple-600 rounded-lg py-0.5 px-1.5">
              <h1 className="text-center">{this.props.city.cityName}</h1>
            </div>
          </div>
          <div className="img-city-group flex justify-center align-center items-center">
            <div className="flex flex-col justify-center items-center">
              <img src="/assets/city/country.png" className="img-city d-flex" />
              <h3 className="font-bold text-3xl rubik text-purple-600">
                Country: {this.props.city.countryName}
              </h3>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src="/assets/city/languages.png"
                className="img-city d-flex"
              />
              <h3 className="font-bold text-3xl rubik text-purple-600">
                Language: {this.props.city.language}
              </h3>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img src="/assets/city/divisa.png" className="img-city d-flex" />
              <h3 className="font-bold text-3xl rubik text-purple-600">
                Currency: {this.props.city.currency}
              </h3>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center my-24">
          {/* {this.props.id ? <Itenirary itinerary={this.props.id} /> : <h1>no hay nada</h1>} */}
        </div>
        <div className="element mt-36 flex align-center justify-center my-5">
          <Link className="learn-more button2" to="/cities">
            <span className="circle" aria-hidden="true">
              <span className="icon arrow pr-3"></span>
            </span>
            <span className="button-text text-md mukta">Back to Cities</span>
          </Link>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    city: state.citiesReducer.city,
    itinerary: state.itineraryReducer.itineraryListByCity
  };
};

const mapDispatchToProps = {
  findCity: citiesAction.findCity,
  getItineraryByCity: itineraryAction.getItineraryByCity
};

export default connect(mapStateToProps, mapDispatchToProps)(City);
