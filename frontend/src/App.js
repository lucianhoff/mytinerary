import React, { useEffect } from "react";
import NavMain from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cities from "./pages/Cities";
import SingInPage from "./pages/SignInPage";
import SingUpPage from "./pages/SignUpPage";
import City from "./pages/City";
import { withRouter } from "./utils/withRouter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Error404 from "./pages/Error404";
import Settings from "./pages/Settings";
import { connect } from "react-redux";
import authAction from "./redux/actions/authAction";

const Element = withRouter(City);

function App(props) {
  useEffect(() => {
    async function fetchData() {
      const user = await props.accessWithToken();
      return user
    }
    localStorage.getItem("token") && fetchData();
  }, []);

  return (
    <>
      <BrowserRouter>
        <NavMain />

        <Routes>
          <Route path="/" element={<Home />} />
          {!props.user.lastName ? (
            <>
              <Route path="/signin" element={<SingInPage />} />
              <Route path="/signup" element={<SingUpPage />} />
            </>
          ) : (
            <Route path="settings" element={<Settings />} />
          )}

          <Route path="/cities" element={<Cities />} />
          <Route path="/cities/:city" element={<Element />} />

          {/* <Route path="*" element={<Error404/>}/> */}
          <Route path="*" element={<Home />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.authReducer.user,
  };
};

const mapDispatchToProps = {
  accessWithToken: authAction.accessWithToken,
  accessAccount: authAction.accessAccount,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
