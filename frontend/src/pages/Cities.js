import React from "react";
import CardAndFilter from "../components/CardAndFilter";

import { connect } from "react-redux";
import citiesAction from "../redux/actions/citiesAction";

class Cities extends React.Component {
  state = {}
  componentDidMount() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
    this.props.fetchCities()
  }

  render() {
    return (
      <>
        <div className="cities">
          <div
            className="cityHero rubik"
            style={{ backgroundImage: "url(https://by3301files.storage.live.com/y4mwjAFCs0HE2h_jwVu7hpJ0B29FoFrgBKaapOcOtfLh777hO0MzH4zCx0KzesVXz_hNSEuKA9svhmvUB2FrYS6nk7b26bwiVt9VG_3eKTpGjjhXxXS9HHPhYoT29p-tlPvUOXnqy57OIW_sPEQoOkqi4MxmDSjRH--U5wlOqnBPy_RqKM1TmJtDoF2UZZGXOLU?width=4003&height=1900&cropmode=none)" }}
          >
            <h1 className="text-center">The best cities in the world!</h1>
          </div>
            {this.props.cities.length > 0 && <CardAndFilter arrayCities={ this.props.cities } />}
        </div>
      </>
    );
  }
}

const mapDispatchToProps = {
  fetchCities: citiesAction.fetchCities
  
}

const mapStateToProps = (state) => {
  return {
    cities: state.citiesReducer.cities
  }
}

export default connect( mapStateToProps, mapDispatchToProps)(Cities)