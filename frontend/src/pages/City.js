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
import activitiesAction from "../redux/actions/activitiesAction";

class City extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.getAllUsers();
    this.props.getItineraryByCity(this.props.params.city);
    this.props.cities > 0
      ? this.props.findCity(this.props.params.city)
      : this.props.fetchCities().then(() => this.setState({ isLoading: false }));
  }

  state = {
    itinerary: [],
    isLoading: true,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.itinerary !== this.props.itinerary) {
      this.setState({ itinerary: this.props.itinerary });
    }

    prevProps.cities !== this.props.cities &&
      this.props.findCity(this.props.params.city);
  }

  render() {
    if (this.state.isLoading) {
      <Loader />;
    }

    return (
      <>
        {this.props.city ? (
          <>
            <div>
              <div
                className="cityHero rubik"
                style={{
                  backgroundImage: `url(${this.props.city.image})`,
                }}
              >
                <div className="bg-purple-600 rounded-lg py-0.5 px-1.5">
                  <h1 className="text-center">{this.props.city.cityName}</h1>
                </div>
              </div>
              <div className="img-city-group flex flex-col md:flex-row justify-center align-center items-center">
                <div className="flex flex-col justify-center items-center">
                  <img
                    src="https://by3301files.storage.live.com/y4mlbXKSD8za4raoDAgQvnSHjA8uvdfIfz1LO9GcnSDETxZASHaMqIVw-KLtZAOnjzIy5-pjL9J0r-3Z6ihxxHYEAVhpMFVYI8y0TrcmFnXrsaFQp3ahhN8mhJmxrSHyw7PixJfhNzEpdHd39Aiq9fE-oNKh8ClQz-CjGzo04rb-chpoXptIQn3eUKyeuz76hwZ?width=2000&height=2000&cropmode=none"
                    className="img-city d-flex"
                    alt="country"
                  />
                  <h3 className="font-bold text-2xl md:text-3xl xlrubik text-purple-600">
                    Country: {this.props.city.countryName}
                  </h3>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <img
                    src="https://by3301files.storage.live.com/y4m5E23f0DCLa2Wp86vAoFAieA_4Nf6-AUXmGUzfN6Db2tKiTk-Myh2sHMhD0b2CgYp2lBwWmLHVFGBQBhfu5AlGa1x8qTxHSROwZ3COFyq4uqdd7433mANgeOELVne7KPVHQFYp9hsZNYk5Rdjwl2ZSuh-njTEhxBwTmMDTOU7HPuu2_IcQmH6MHeCTZNp2VB-?width=2000&height=2000&cropmode=none"
                    className="img-city d-flex"
                    alt="languages"
                  />
                  <h3 className="font-bold text-2xl rubik md:text-3xl text-purple-600">
                    Language: {this.props.city.language}
                  </h3>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <img
                    src="https://by3301files.storage.live.com/y4mRZv6SRqh1rKpiMGsvFhoCA-eR1qk0XgJCnArJOUUsQoSzEtmw4rsbu4fSqvzY3QmEWm__Qxix1vT7RHZWa-m6771qKAbT3SY7cFeNkcoiOAXsRZN2B7eVOFbccajBCHwoF_HOtZo7uRqieI5yeD1gCa1mwuhW6_YLEshvqU1kOVWN_vDE-jSpnAc736LNT8C?width=2000&height=2000&cropmode=none"
                    className="img-city d-flex"
                    alt="currency"
                  />
                  <h3 className="font-bold text-2xl rubik md:text-3xl text-purple-600">
                    Currency: {this.props.city.currency}
                  </h3>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center my-24 ">
              {(this.state.itinerary.length > 0 ? (
                this.state.itinerary.map((itinerary, index) => {
                  return (
                    <Itenirary
                      itinerary={itinerary}
                      key={index}
                      users={this.props.users}
                      fetch={this.props.getItineraryByCity}
                      idCity={this.props.params.city}
                      likes={this.props.LikeAndDislike}
                      activityOfItinerary={this.props.activityOfItinerary}
                    />
                  );
                })
              ) :  (
              <div className="flex justify-center align-center items-center flex-col">
                <img
                  src="https://by3301files.storage.live.com/y4mPJwm5tL4PgNxTFmJis0vJQaPxSPxeXrsoh28ewAqfZUNIFCZn23fAOUqz3bMjxw3TsHDZxE-RFJb_vMebvDPPMn5DOQutIWKmmJE1aCbgdsgURprC3Pn6YFexCDhI2BX_IQ_cDqkd9hkpaZbmBpcDm5a2i8ZqNgx3qosMLa6xHtQfJ1DHauhH_UHdm4ZRZZc?width=2000&height=2000&cropmode=none"
                  className="w-1/4"
                  alt="No itinerary"
                />
                <h2 className="text-2xl text-center px-3 md:text-3xl md:px-0 text-purple-600 font-bold">
                  We still do not have guides in this city, we are looking
                  for!
                </h2>
              </div>
              )   ) 
              
              }
            </div>
            {/* <Loader />  */}
          </>
        ) : (
          <h1> no hay city</h1>
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
  LikeAndDislike: itineraryAction.LikeAndDislike,
  activityOfItinerary: activitiesAction.activityOfItinerary,
};

export default connect(mapStateToProps, mapDispatchToProps)(City);
