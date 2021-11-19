import React from "react";

import Login from "../components/Login";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

class LoginPage extends React.Component {
  render() {
    return (
      <>
        <header className="">
          <Nav />
        </header>
        <div>
          <Login />
        </div>
        <div className="flex justify-center items-center bg-purple-600 py-5">
          <Footer />
        </div>
      </>
    );
  }
}

export default LoginPage;
