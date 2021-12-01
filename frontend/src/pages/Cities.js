import React from "react";
import axios from "axios";
import CardAndFilter from "../components/CardAndFilter";

export default class Cities extends React.Component {

  
  state = {}
  
  componentDidMount() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })

    axios
      .get("http://localhost:4000/api/cities")
      .then((res) => this.setState({ cities: res.data.response }));
  }

  render() {

    const { cities } = this.state

    return (
      <>
        <div className="cities">
          <div
            className="cityHero rubik"
            style={{ backgroundImage: "url(./assets/cityHero.jpg)" }}
          >
            <h1 className="text-center">The best cities in the world!</h1>
          </div>
            {cities && <CardAndFilter arrayCities={ cities } />}
        </div>
      </>
    );
  }
}

