import React from "react";

import Login from "../components/Login";

class LoginPage extends React.Component {

  componentDidMount() {
    window.scrollTo(0,0)
  }

  render() {
    return (
      <>
          <Login />
      </>
    );
  }
}

export default LoginPage;
