import React from "react";
import axios from "axios";
import CardCities from "../components/CardCities";

export default class Cities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/api/cities")
      .then((res) => this.setState({ cities: res.data.response }));
  }

  componentDidUpdate() {
    console.log(this.state.cities);
  }

  render() {
    return (
      <>
        <div
          className="cityHero rubik"
          style={{ backgroundImage: "url(./assets/cityHero.jpg)" }}
        >
          <h1 className="text-center">The best cities in the world!</h1>
        </div>

        <div className="flex items-center justify-center mt-12 ">
          {this.state.cities && <CardCities citiesArray={this.state.cities} />}
        </div>
      </>
    );
  }
}
