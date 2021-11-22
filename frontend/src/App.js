import React from "react";

import NavMain from "./components/Nav";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Cities from "./pages/Cities";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavMain />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cities" element={<Cities />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
