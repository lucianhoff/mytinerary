import React from "react";

import NavMain from "./components/Nav";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Cities from "./pages/Cities";
import LoginPage from "./pages/LoginPage";

import City from "./pages/City"

import {withRouter} from './utils/withRouter'

import { BrowserRouter, Routes, Route } from "react-router-dom";

const Element = withRouter(City)

function App() {
  return (
    <>
      <BrowserRouter>
        <NavMain />

        <Routes>
          
          <Route path="/" element={<Home />} />

          <Route path="/cities" element={<Cities />} />

          <Route path="/cities/:city" element={<Element />} />

          <Route path="/login" element={<LoginPage />} />

        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;


