import React from "react";
import SingUp from "../components/SingUp";

import authActions from "../redux/actions/authAction"
import { connect } from "react-redux"

class SingInPage extends React.Component {

  componentDidMount() {
    window.scrollTo(0,0)
  }

  
  render() {
    console.log(this.props);

    const handleSubmit = async (firstName, lastName, email, password, photoURL, country) => {
      const error = await this.props.submit(firstName, lastName, email, password, photoURL, country)
      console.log(error)
    }
    
    return (
      <>
          <SingUp submit={handleSubmit}/>
      </>
    );
  }
}

const mapDispatchToProps = {
  submit: authActions.newUser
}

export default connect(null, mapDispatchToProps)(SingInPage);
