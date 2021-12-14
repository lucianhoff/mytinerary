import React, { useEffect, useState } from "react";
import axios from "axios";

import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

import { Formik, Field } from "formik";
import * as yup from "yup";

import GoogleLogin from "react-google-login";

import Avatar from "./Avatar";

const SignUp = ({ submit, responseGoogle }) => {
  const [countries, setCountries] = useState(["Choose your country"]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all?fields=name")
      .then((res) => setCountries(res.data));
  }, []);

  const SignUpSchema = yup.object().shape({
    firstName: yup
      .string()
      .required("First Name is required")
      .matches(/^[a-zA-Z]+$/, "First Name must be alphabetic")
      .min(3, "Too short, minimum 3 characters"),
    lastName: yup
      .string()
      .required("Last Name is required")
      .min(3, "The Last Name is very short"),
    email: yup
      .string()
      .email("Invalid email")
      .matches(/(\W|^)[\w.-]@(yahoo|hotmail|gmail|outlook).com(\W|$)/, "Incorrect email")
      .required("The email is required"),
    password: yup
      .string()
      .min(8, "The Password is very short, minimum 8 characters")
      .required("The Password is required"),
    photoURL: yup
      .string()
      .url("Invalid URL")
      .required("The profile picture is required"),
  });

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-32 mb-14">
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            photoURL: "",
            country: "",
          }}
          validationSchema={SignUpSchema}
          onSubmit={(values, { resetForm }) => {
            submit(values);
            resetForm({ values: "" });
          }}
        >
          {({ handleSubmit, handleChange, values, errors, touched }) => (
            <div className="flex justify-center items-center lg:w-4/12 md:w-8/12 sm:12/12">
              <form className="form__container" onSubmit={handleSubmit}>

                <div className="flex flex-col">
                  <label className="form__label">First Name</label>
                  <div className="flex items-center">
                    <Field
                      type="text"
                      value={values.firstName}
                      onChange={handleChange("firstName")}
                      name="firstName"
                      className="form__input"
                    />
                    {errors.firstName && touched.firstName ? (
                      <FaTimesCircle className="mx-2 text-white" />
                    ) : touched.firstName ? (
                      <FaCheckCircle className="mx-2 text-white" />
                    ) : null}
                  </div>
                  <div className="text-white rubik text-sm w-11/12 pt-1 mb-1">
                    {errors.firstName && touched.firstName ? (
                      <p>{errors.firstName}</p>
                    ) : (
                      <p className="invisible">solo aprovecho el bug</p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col">
                  <label className="form__label">Last Name</label>
                  <div className="flex items-center">
                    <Field
                      type="text"
                      value={values.lastName}
                      onChange={handleChange("lastName")}
                      name="lastName"
                      className="form__input"
                    />
                    {errors.lastName && touched.lastName ? (
                      <FaTimesCircle className="mx-2 text-white" />
                    ) : touched.lastName ? (
                      <FaCheckCircle className="mx-2 text-white" />
                    ) : null}
                  </div>
                  <div className="text-white rubik text-sm w-11/12 pt-1 mb-1">
                    {errors.lastName && touched.lastName ? (
                      <p>{errors.lastName}</p>
                    ) : (
                      <p className="invisible">solo aprovecho el bug</p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col">
                  <label className="form__label">Email</label>
                  <div className="flex items-center">
                    <Field
                      type="email"
                      value={values.email}
                      onChange={handleChange("email")}
                      name="email"
                      className="form__input"
                    />
                    {errors.email && touched.email ? (
                      <FaTimesCircle className="mx-2 text-white" />
                    ) : touched.email ? (
                      <FaCheckCircle className="mx-2 text-white" />
                    ) : null}
                  </div>
                  <div className="text-white rubik text-sm w-11/12 pt-1 mb-1">
                    {errors.email && touched.email ? (
                      <p>{errors.email}</p>
                    ) : (
                      <p className="invisible">solo aprovecho el bug</p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col">
                  <label className="form__label">Password</label>
                  <div className="flex items-center">
                    <Field
                      type="password"
                      value={values.password}
                      onChange={handleChange("password")}
                      name="password"
                      className="form__input"
                    />
                    {errors.password && touched.password ? (
                      <FaTimesCircle className="mx-2 text-white" />
                    ) : touched.password ? (
                      <FaCheckCircle className="mx-2 text-white" />
                    ) : null}
                  </div>
                  <div className="text-white rubik text-sm w-11/12 pt-1 mb-1">
                    {errors.password && touched.password ? (
                      <p>{errors.password}</p>
                    ) : (
                      <p className="invisible">solo aprovecho el bug</p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col">
                  <label className="form__label">URL FOTO</label>
                  <div className="flex items-center">
                    <Field
                      type="url"
                      value={values.photoURL}
                      onChange={handleChange("photoURL")}
                      name="photoURL"
                      className="form__input"
                    />
                    {/* {<Avatar className="mx-2 text-white" />} */}
                    {errors.photoURL && touched.photoURL ? (
                      <FaTimesCircle className="mx-2 text-white" />
                    ) : touched.photoURL ? (
                      <FaCheckCircle className="mx-2 text-white" />
                    ) : null}
                  </div>
                  <div className="text-white rubik text-sm w-11/12 pt-1 mb-1">
                    {errors.photoURL && touched.photoURL ? (
                      <p>{errors.photoURL}</p>
                    ) : (
                      <p className="invisible">solo aprovecho el bug</p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col">
                  <label className="form__label">Country</label>
                  <select
                    className="form__input"
                    onChange={handleChange("country")}
                    placeholder="Choose your country"
                    name="country"
                    value={values.country}
                  >
                    <option defaultValue="Choose your country">
                      Choose your country
                    </option>

                    {countries.map((country, index) => (
                      <option key={index} value={country.name}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="w-full flex flex-col justify-center items-center mt-5">
                  <div className="flex flex-col justify-center items-center w-6/12">
                    <button
                      type="submit"
                      className="createButton focus:shadow-outline hover:bg-purple-700"
                    >
                      {" "}
                      Sign Up!{" "}
                    </button>
                    <p className="rubik fw-bold text-white my-3">Or</p>
                    <GoogleLogin
                      clientId="36260654393-jruugt14707a8pcdlf33skgor98eth8c.apps.googleusercontent.com"
                      render={(renderProps) => (
                        <button
                          onClick={renderProps.onClick}
                          disabled={renderProps.disabled}
                          className="createButton focus:shadow-outline hover:bg-purple-700"
                        >
                          Sign Up with Google!
                        </button>
                      )}
                      onSuccess={responseGoogle}
                      onFailure={responseGoogle}
                      cookiePolicy={"single_host_origin"}
                    />
                  </div>
                </div>
              </form>
            </div>
          )}
        </Formik>
      </div>
    </>
  );
};

export default SignUp;
