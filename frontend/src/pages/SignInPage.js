import React from "react";
import SingIn from "../components/SignIn";
import { connect } from "react-redux"
import authActions from "../redux/actions/authAction";

class SignInPage extends React.Component {

  componentDidMount() {
    window.scrollTo(0,0)
  }

  render() {
    const handleSubmit = async (values) => {
      this.props.accessAccount(values)
    }

    const responseGoogle = (res) => {
      let google = {
        email: res.profileObj.email,
        password: res.profileObj.googleId,
        googleUser: true
      };
      
      handleSubmit(google)  
    
    }
    
    return (
      <>
          <SingIn accessAccount={handleSubmit} responseGoogle={responseGoogle} />
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


export default connect(mapStateToProps, mapDispatchToProps)(SignInPage);
