import React from "react";

import Nav from "../components/Nav";
import Slider from "../components/Slider";
import CardInfo from "../components/CardInfo";
import Title from "../components/Title";
import Footer from "../components/Footer";

import "../style.css";

class Home extends React.Component {
  render() {
    return (
      <>
        <header className="">
          <Nav />
        </header>
        <div className="flex justify-center items-center py-20">
          <Title title="Trips that our users prefer" />
        </div>
        <div className="flex items-center justify-center">
          <CardInfo />
        </div>
        <div className="flex justify-center items-center py-20">
          <Title title="Popular MyTineraries" />
        </div>
        <div className="flex justify-center align-center w-full carousel-padding pt-5">
          <Slider />
        </div>
        <div className="flex justify-center items-center bg-purple-600 py-5">
          <Footer />
        </div>
      </>
    );
  }
}

export default Home;
