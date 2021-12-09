import React from "react";

import SingIn from "../components/SingIn";

import { connect } from "react-redux"
import authActions from "../redux/actions/authAction";

class SingInPage extends React.Component {

  componentDidMount() {
    window.scrollTo(0,0)
  }

  render() {
    
    console.log(this.props)

    const handleSubmit = async (email, password) => {
      this.props.accessAccount(email, password)
    }

    return (
      <>
          <SingIn accessAccount={handleSubmit} />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.authReducer.user
  }
}

const mapDispatchToProps = {
  accessAccount: authActions.accessAccount
}


export default connect(mapStateToProps, mapDispatchToProps)(SingInPage);
