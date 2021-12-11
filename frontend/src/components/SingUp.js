import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

import { Formik } from "formik";
import * as yup from "yup";

const SingUp = ({ submit }) => {
  const [countries, setCountries] = useState(["Choose your country"]);

  const [country, setCountry] = useState();

  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all?fields=name")
      .then((res) => setCountries(res.data));
  }, []);

  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const password = useRef();
  const photoURL = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    submit(
      firstName.current.value,
      lastName.current.value,
      email.current.value,
      password.current.value,
      photoURL.current.value,
      country
    );

    firstName.current.value = "";
    lastName.current.value = "";
    email.current.value = "";
    password.current.value = "";
    photoURL.current.value = "";
  };

  const SignUpSchema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required("this field is required"),
    password: yup.string().required(),
    photoURL: yup.string().required(),
  });

  return (
    <>
      <div className="rubik mt-32">
        <div className="container mx-auto">
          <div className="flex justify-center px-6 my-12">
            <div className="w-full xl:w-3/4 lg:w-11/12 flex">
              {/* <img
                className="w-full h-autohidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
                src="./assets/loginHero3.jpg"
                alt="heroSingUp"
              /> */}

              <div className="w-full lg:w-1/2  bg-purple-600 rounded-lg lg:rounded-l-none">
                <h3 className="pt-4 text-3xl text-center text-white font-black rubik">
                  Welcome!
                </h3>
                <Formik
                  initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: "",
                    photoURL: "",
                  }}
                  validationSchema={SignUpSchema}
                >
                  {({
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    values,
                    errors,
                    touched,
                  }) => (
                    <>
                      <form className="form__container" onSubmit={handleSubmit}>

                        <div className="mb-2 firstName">
                          <label className="form__label">Name</label>
                          <div className="flex">
                            <input
                              className="form__input"
                              id="username"
                              type="text"
                              placeholder="Name"
                              ref={firstName}
                              onChange={handleChange("firstName")}
                              value={values.firstName}
                            />
                            <div className="flex items-center justify-center px-1">
                              {values.firstName.length === 0 ? null : values
                                  .firstName.length < 3 ? (
                                <FaTimesCircle className="text-white text-md" />
                              ) : (
                                values.firstName.length >= 3 && (
                                  <FaCheckCircle className="text-white text-md" />
                                )
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="mb-2 lastName">
                          <label className="form__label">Last name</label>
                          <div className="flex">
                            <input
                              className="form__input"
                              type="text"
                              placeholder="Last name"
                              ref={lastName}
                              onChange={handleChange("lastName")}
                              value={values.lastName}
                            />
                            <div className="flex items-center justify-center px-1">
                              {values.lastName.length === 0 ? null : values
                                  .lastName.length < 3 ? (
                                <FaTimesCircle className="text-white text-md" />
                              ) : (
                                values.lastName.length >= 3 && (
                                  <FaCheckCircle className="text-white text-md" />
                                )
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="mb-2 email">
                          <label className="form__label">Email</label>
                          <div className="flex items-center">
                            <input
                              name="email"
                              className="w-11/12 px-3 py-2 text-sm leading-tight rubik font-black text-purple-600 border rounded appearance-none focus:outline-none"
                              id="username"
                              type="email"
                              placeholder="Email"
                              ref={email}
                              onChange={handleChange("email")}
                              value={values.mail}
                            />
                            <div className="flex items-center justify-center px-1">
                              {values.email.length ==
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

                        <div className="mb-2 password">
                          <label className="form__label" htmlFor="password">
                            Password
                          </label>
                          <input
                            className="form__input"
                            id="password"
                            type="password"
                            placeholder="Password"
                            ref={password}
                            value={values.password}
                          />
                          <div className="flex items-center justify-center px-1">
                              {values.password.length === 0 ? null : values.password.length < 7 ? (
                                <FaTimesCircle className="text-white text-md" />
                              ) : (
                                values.password.length >= 8 && (
                                  <FaCheckCircle className="text-white text-md" />
                                )
                              )}
                            </div>
                        </div>

                        <div className="mb-2 photoURL">
                          <label className="form__label">URL Photo</label>
                          <input
                            className="form__input"
                            type="text"
                            placeholder="URL"
                            ref={photoURL}
                          />
                        </div>

                        <div className="mb-4 country">
                          <label className="form__label">Country</label>
                          <select
                            className="form__input"
                            placeholder="Choose your country"
                            onChange={(e) => setCountry(e.target.value)}
                            defaultValue="ChooseYourCountry"
                          >
                            <option value="ChooseYourCountry" disabled required>
                              Choose your country
                            </option>
                            {countries.map((country) => (
                              <option value={country.name}>
                                {country.name}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="mb-6 text-center">
                          <button
                            className="createButton focus:shadow-outline hover:bg-purple-700"
                            type="submit"
                          >
                            Create account
                          </button>
                          <button
                            className="createGoogle focus:shadow-outline hover:bg-purple-700"
                            type="button"
                          >
                            Create account with Google
                          </button>
                        </div>
                      </form>
                    </>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingUp;

// <>
//   <div className="test  ">
//     <h1 className="text-3xl font-bold uppercase">Crear usuario</h1>
//   </div>
//   <form
//     className="flex flex-col align-center items-center justify-center"
//     onSubmit={handleSubmit}
//   >
//     <label className="my-2 flex flex-col">
//       Nombre
//       <input type="text" ref={firstName} required />
//     </label>

//     <label className="my-2 flex flex-col">
//       Apellido
//       <input type="text" ref={lastName} required />
//     </label>

//     <label className="my-2 flex flex-col">
//       email
//       <input type="email" ref={email} required />
//     </label>

//     <label className="my-2 flex flex-col">
//       Contrasenia
//       <input type="password" ref={password} required />
//     </label>

//     <label className="my-2 ref={} flex flex-col">
//       URL FOTO
//       <input type="url" ref={photoURL} required />
//     </label>

//     <select
//       className=""
//       onChange={(e) => setCountry(e.target.value)}
//       placeholder="Choose your country"
//     >
//       <option defaultValue="Choose your country" required>
//         Choose your country
//       </option>

//       {countries.map((country) => (
//         <option key={country.name} value={country.name}>
//           {country.name}
//         </option>
//       ))}
//     </select>

//     <button type="submit" className="bg-gray-900 text-white px-5 my-2">
//       {" "}
//       crear usuario{" "}
//     </button>
//   </form>
// </>
