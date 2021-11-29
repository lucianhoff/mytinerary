import React from "react";
import Slider from "../components/Slider";
import CardInfo from "../components/CardInfo";
import Title from "../components/Title";
import Hero from "../components/Hero";

import "../style.css";

class Home extends React.Component {

  componentDidMount() {
    window.scrollTo(0,0)
  }

  render() {
    return (
      <>
        <Hero />
        <Title title="Trips that our users prefer" />
        <CardInfo />
        <Title title="Popular MyTineraries" />
        <Slider />
      </>
    );
  }
}

export default Home;
