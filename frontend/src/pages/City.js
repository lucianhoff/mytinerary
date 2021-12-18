import React from "react";
import { Link } from "react-router-dom";
import "../sass/Button2.scss";
import "../style.css";
import Loader from "../components/Loader";
import Itenirary from "../components/Itinirary";
import { connect } from "react-redux";
import citiesAction from "../redux/actions/citiesAction";
import authActions from "../redux/actions/authAction";
import itineraryAction from "../redux/actions/itinerariesAction";

class City extends React.Component {
  
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.getAllUsers();
    this.props.getItineraryByCity(this.props.params.city);
    this.props.cities > 0
      ? this.props.findCity(this.props.params.city)
      : this.props.fetchCities();
    console.log(this.props.params);
  }

  state = {
    itinerary: [],
  };

  componentDidUpdate(prevProps) {
    if (prevProps.itinerary !== this.props.itinerary) {
      this.setState({ itinerary: this.props.itinerary });
    }

    prevProps.cities !== this.props.cities &&
      this.props.findCity(this.props.params.city);
  }

  render() {
    return (
      <>
        {this.props.city ? (
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
                  <img
                    src="/assets/city/country.png"
                    className="img-city d-flex"
                    alt="country"
                  />
                  <h3 className="font-bold text-3xl rubik text-purple-600">
                    Country: {this.props.city.countryName}
                  </h3>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <img
                    src="/assets/city/languages.png"
                    className="img-city d-flex"
                    alt="languages"
                  />
                  <h3 className="font-bold text-3xl rubik text-purple-600">
                    Language: {this.props.city.language}
                  </h3>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <img
                    src="/assets/city/divisa.png"
                    className="img-city d-flex"
                    alt="currency"
                  />
                  <h3 className="font-bold text-3xl rubik text-purple-600">
                    Currency: {this.props.city.currency}
                  </h3>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center my-24">
              {this.state.itinerary.length > 0 ? (
                this.state.itinerary.map((itinerary, index) => {
                  // this.props.getItineraryByCity(this.props.params.city)
                  return <Itenirary 
                  itinerary={itinerary} 
                  key={index} 
                  users={this.props.users} 
                  fetch={this.props.getItineraryByCity}
                  idCity={this.props.params.city}
                  />;
                })
              ) : (
                <div className="flex justify-center align-center items-center flex-col">
                  <img src="/assets/city/no-itinerary.png" className="w-1/4" alt="No itinerary"/>
                  <h2 className="text-3xl text-purple-600 font-bold" >We still do not have guides in this city, we are looking for!</h2>
                </div>
              )}
            </div>
          </>
        ) : (
          <Loader />
        )}
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
    itinerary: state.itinerariesReducer.itineraryListByCity,
    cities: state.citiesReducer.cities,
    users: state.authReducer.users,
  };
};

const mapDispatchToProps = {
  fetchCities: citiesAction.fetchCities,
  findCity: citiesAction.findCity,
  getItineraryByCity: itineraryAction.getItineraryByCity,
  getAllUsers: authActions.getAllUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(City);
