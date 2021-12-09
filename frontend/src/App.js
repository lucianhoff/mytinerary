import React from "react";
import NavMain from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cities from "./pages/Cities";
import SingInPage from "./pages/SingInPage";
import SingUpPage from "./pages/SingUpPage";
import City from "./pages/City";
import { withRouter } from "./utils/withRouter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "./pages/Error404";

const Element = withRouter(City);

function App() {
  return (
    <>
      <BrowserRouter>
        <NavMain />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/cities" element={<Cities />} />

          <Route path="/cities/:city" element={<Element />} />

          <Route path="/singin" element={<SingInPage />} />
          <Route path="/singup" element={<SingUpPage />} />

          <Route path="*" element={<Error404/>}/>

        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
