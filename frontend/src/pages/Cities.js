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
            style={{ backgroundImage: "url(./assets/cityHero.jpg)" }}
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