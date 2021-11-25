import React from "react";
import CardCities from "../components/CardCities";

export default class Cities extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      cities: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:4000/api/cities")
      .then((res) => res.json())
      .then((data) => this.setState({ cities: data.response.cities }))
      .catch((error) => console.log(error));
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
          <CardCities />
        </div>

      </>
    );
  }
}
