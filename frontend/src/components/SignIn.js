import React from "react";
import { Link } from "react-router-dom";

import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

import { Formik } from "formik";
import * as yup from "yup";

import GoogleLogin from "react-google-login";

const SignIn = (props) => {
  const SignInSchema = yup.object().shape({
    email: yup.string().email().required("this field is required"),
    password: yup.string().required("this field is required"),
  });

  console.log(props.responseGoogle);
  console.log(localStorage);

  return (
    <>
      <div className="rubik mt-24 flex flex-col justify-center">
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
                    console.log(values);
                  }}
                >
                  {({
                    handleSubmit,
                    handleChange,
                    values,
                    errors,
                    touched,
                  }) => (
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
                              name="email"
                              className="w-11/12 px-3 py-2 text-sm leading-tight rubik font-black text-purple-600 border rounded appearance-none focus:outline-none"
                              type="email"
                              placeholder="Email"
                              onChange={handleChange("email")}
                              value={values.email}
                            />
                            <div className="flex items-center justify-center px-1">
                              {values.email.length ===
                              0 ? null : errors.email ? (
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
                            name="password"
                            className="w-11/12 px-3 py-2 mb-3 text-sm leading-tight text-purple-500 border border-red-500 rounded appearance-none focus:outline-none"
                            onChange={handleChange("password")}
                            type="password"
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
                            className="inline-block text-sm text-white align-baseline hover:text-blue-800"
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
      </div>
    </>
  );
};

export default SignIn;
