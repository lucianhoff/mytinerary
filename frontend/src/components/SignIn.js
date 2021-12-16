import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

import { Formik } from "formik";
import * as yup from "yup";

import GoogleLogin from "react-google-login";

const SignIn = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePassword = () => {
    setShowPassword(!showPassword);
  };

  const SignInSchema = yup.object().shape({
    email: yup.string().email().required("this field is required"),
    password: yup.string().required("this field is required"),
  });

  return (
    <>
      <div
        className="flex mt-32 mx-5 mb-8 bg-purple-600"
        style={{ backgroundImage: "url(../assets/signin-travel.png)" }}
      >
        <div className="flex items-center justify-center h-100 w-100  md:w-100 sm:w-100">
          <div className="flex-col flex ml-auto mr-auto items-center w-full">
            <h1 className="font-bold rubik text-4xl my-16 text-white mb-16">
              {" "}
              Welcome Back!{" "}
            </h1>
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={SignInSchema}
              onSubmit={(values, { resetForm }) => {
                props.accessAccount(values);
                resetForm({ values: "" });
              }}
            >
              {({ handleSubmit, handleChange, values, errors, touched }) => (
                <>
                  <form className="mt-2 flex flex-col" onSubmit={handleSubmit}>
                    <div className="flex flex-wrap items-stretch w-full mb-4 relative bg-white rounded pr-10">
                      <div className="flex -mr-px justify-center w-15 p-2">
                        <span className="flex items-center leading-normal  border-0 rounded rounded-r-none text-4xl text-gray-600">
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="#9333ea"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            ></path>
                          </svg>
                        </span>
                      </div>
                      <input
                        type="text"
                        className="flex-shrink flex-grow text-purple-600 rubik leading-normal w-px  border-0 h-10 border-grey-light rounded rounded-l-none px-3 self-center relative  font-roboto text-base outline-none"
                        name="email"
                        type="email"
                        placeholder="Email"
                        onChange={handleChange("email")}
                        value={values.email}
                      />
                    </div>
                    
                    <div className="flex flex-wrap items-stretch w-full relative h-15 bg-white  rounded mb-4">
                      <div className="flex -mr-px justify-center w-15 p-2">
                        <span className="flex items-center leading-normal bg-white rounded rounded-r-none text-xl whitespace-no-wrap text-gray-600">
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="#9333ea"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                            ></path>
                          </svg>
                        </span>
                      </div>
                      <input
                        type={showPassword ? "text" : "password"}
                        className="flex-shrink flex-grow text-purple-600 rubik leading-normal w-px  border-0 h-10 border-grey-light rounded rounded-l-none px-3 self-center relative  font-roboto text-base outline-none"
                        name="password"
                        onChange={handleChange("password")}
                        placeholder="********"
                        value={values.password}
                      />
                      <div className="flex -mr-px">
                        <span className="flex items-center leading-normal bg-white rounded rounded-l-none border-0 px-3 whitespace-no-wrap text-gray-600">
                          {!showPassword ? (
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="#9333ea"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                              onClick={() => handlePassword()}
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                              ></path>
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="#9333ea"
                              onClick={() => handlePassword()}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              />
                            </svg>
                          )}
                        </span>
                      </div>
                    </div>

                    <button
                      className="w-full px-4 py-2 font-bold  transition text-purple-800 bg-purple-300 rounded-full hover:bg-purple-800  hover:text-white focus:outline-none focus:shadow-outline"
                      type="submit"
                    >
                      Sign In
                    </button>
                    <GoogleLogin
                      clientId="36260654393-jruugt14707a8pcdlf33skgor98eth8c.apps.googleusercontent.com"
                      render={(renderProps) => (
                        <button
                          onClick={renderProps.onClick}
                          disabled={renderProps.disabled}
                          className="w-full px-4 py-2 font-bold transition text-purple-800 bg-purple-300 rounded-full hover:bg-purple-800  hover:text-white focus:outline-none focus:shadow-outline mt-2 mb-5"
                        >
                          Sign In with Google
                        </button>
                      )}
                      onSuccess={props.responseGoogle}
                      onFailure={props.responseGoogle}
                      cookiePolicy={"single_host_origin"}
                    />
                    <a
                      href="#"
                      className="text-3xl fw-bold text-white font-roboto text-center leading-normal hover:text-purple-900 mb-7"
                    >
                      Don't have an account yet?
                    </a>
                  </form>
                </>
              )}
            </Formik>
          </div>
        </div>
      </div>

      {/* <div className="rubik mt-24 flex flex-col justify-center">
        <div className="container">
          <div className="flex justify-center px-6 my-12">
            <div className="lg:w-4/12 md:w-8/12 sm:12/12 bg-purple-600 p-5 rounded-lg">
              <h3 className="pt-4 text-3xl text-center text-white font-black rubik">
                Welcome Back!
              </h3>
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                }}
                validationSchema={SignInSchema}
                onSubmit={(values, { resetForm }) => {
                  props.accessAccount(values);
                  resetForm({ values: "" });
                }}
              >
                {({ handleSubmit, handleChange, values, errors, touched }) => (
                  <>
                    <form
                      className="px-8 pt-6 pb-8 mb-4 bg-purple-600 rounded"
                      onSubmit={handleSubmit}
                    >
                      <div className="mb-4">
                        <label
                          className="block mb-2 text-sm font-black text-white"
                          htmlFor="username"
                        >
                          Email
                        </label>
                        <div className="flex items-center">
                          <input
                          className="w-11/12 px-3 py-2 text-sm leading-tight rubik font-black text-white border rounded appearance-none focus:outline-none"
                          name="email"
                            type="email"
                            placeholder="Email"
                            onChange={handleChange("email")}
                            value={values.email}
                          />
                          <div className="flex items-center justify-center px-1">
                            {values.email.length === 0 ? null : errors.email ? (
                              <FaTimesCircle className="text-white text-md" />
                            ) : (
                              values.email.length > 1 && (
                                <FaCheckCircle className="text-white text-md" />
                              )
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="mb-4">
                        <label className="block mb-2 text-sm font-black text-white">
                          Password
                        </label>
                        <input
                        className="w-11/12 px-3 py-2 mb-3 text-sm leading-tight text-purple-500 border border-red-500 rounded appearance-none focus:outline-none"
                        type="password"
                        name="password"
                          onChange={handleChange("password")}
                          placeholder="********"
                          value={values.password}
                        />
                      </div>
                      <div className="mb-6 text-center">
                        <button
                          className="w-full px-4 py-2 font-bold text-white bg-purple-500 rounded-full hover:bg-purple-700 focus:outline-none focus:shadow-outline"
                          type="submit"
                        >
                          Sign In
                        </button>

                        <GoogleLogin
                          clientId="36260654393-jruugt14707a8pcdlf33skgor98eth8c.apps.googleusercontent.com"
                          render={(renderProps) => (
                            <button
                              onClick={renderProps.onClick}
                              disabled={renderProps.disabled}
                              className="createButton focus:shadow-outline hover:bg-purple-700 mt-2"
                            >
                              Sign In with Google
                            </button>
                          )}
                          onSuccess={props.responseGoogle}
                          onFailure={props.responseGoogle}
                          cookiePolicy={"single_host_origin"}
                        />
                      </div>
                      <hr className="mb-6 border-t bg-white" />
                      <div className="text-center">
                        <Link
                          className="inline-block rubik fw-bold text-lg text-white align-baseline hover:text-blue-800"
                          to="/signup"
                        >
                          Create an Account!
                        </Link>
                      </div>
                    </form>
                  </>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default SignIn;
