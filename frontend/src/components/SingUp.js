import React, { useEffect, useState } from "react";
import axios from "axios";

import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

import { Formik } from "formik";
import * as yup from "yup";

import GoogleLogin from "react-google-login";

const SingUp = ({ submit, responseGoogle }) => {
  const [countries, setCountries] = useState(["Choose your country"]);

  const [country, setCountry] = useState();

  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all?fields=name")
      .then((res) => setCountries(res.data));
  }, []);

  const SignUpSchema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required("this field is required"),
    password: yup.string().required(),
    photoURL: yup.string().required(),
  });

  return (
    <>
      <div className="test mt-52 ">
        <h1 className="text-3xl font-bold uppercase">Crear usuario</h1>
      </div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          photoURL: "",
          country: ""
        }}
        
        validationSchema={SignUpSchema}
        onSubmit={(values, {resetForm}) => {
          submit(values)
          resetForm({values: ""})
          console.log(values)
        }}
      >
        {({ handleSubmit, handleChange, values, errors, touched }) => (
          <form
            className="flex flex-col align-center items-center justify-center"
            onSubmit={handleSubmit}
           
          >
            <label className="my-2 flex flex-col">
              Nombre
              <input type="text" value={values.firstName} onChange={handleChange("firstName")} name="firstName" />
            </label>

            <label className="my-2 flex flex-col" >
              Apellido
              <input type="text" value={values.lastName} onChange={handleChange("lastName")} name="lastName" />
            </label>

            <label className="my-2 flex flex-col">
              email
              <input type="email" value={ values.email } onChange={handleChange("email")}  name="email"/>
            </label>

            <label className="my-2 flex flex-col">
              Contrasenia
              <input type="password" value={values.password} onChange={handleChange("password")}  name="password" />
            </label>

            <label className="my-2 ex-col">
              URL FOTO
              <input type="url" value={values.photoURL} onChange={handleChange("photoURL")}  name="photoURL" />
            </label>

            <select
              className=""
              onChange={handleChange("country")}
              placeholder="Choose your country"
              name="country"
              value={values.country}
            >
              <option defaultValue="Choose your country">
                Choose your country
              </option>

              {countries.map((country) => (
                <option key={country.name} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>

            <button type="submit" className="bg-gray-900 text-white px-5 my-2">
              {" "}
              crear usuario{" "}
            </button>
            <GoogleLogin
              clientId="36260654393-jruugt14707a8pcdlf33skgor98eth8c.apps.googleusercontent.com"
              buttonText="Create account with Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
              className="rounded-full w-full mt-2 px-4 rubik black text-purple-900 bg-purple-500 hover:bg-purple-700 focus:outline-none focus:shadow-outline"
            />
          </form>
        )}
      </Formik>
    </>

    // <>
    //   <div className="rubik mt-32">
    //     <div className="container mx-auto">
    //       <div className="flex justify-center px-6 my-12">
    //         <div className="w-full xl:w-3/4 lg:w-11/12 flex">
    //           <img
    //             className="w-full h-autohidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
    //             src="./assets/loginHero3.jpg"
    //             alt="heroSingUp"
    //           />

    //           <div className="w-full lg:w-1/2  bg-purple-600 rounded-lg lg:rounded-l-none">
    //             <h3 className="pt-4 text-3xl text-center text-white font-black rubik">
    //               Welcome!
    //             </h3>
    //             <Formik
    //               initialValues={{
    //                 firstName: "",
    //                 lastName: "",
    //                 email: "",
    //                 password: "",
    //                 photoURL: "",
    //                 country: ""
    //               }}
    //               validationSchema={SignUpSchema}
    //             >
    //               {({
    //                 handleSubmit,
    //                 handleChange,
    //                 values,
    //                 errors,
    //                 touched,
    //               }) => (
    //                 <>
    //                   <form className="form__container" onSubmit={handleSubmit}>

    //                     <div className="mb-2 firstName">
    //                       <label className="form__label">Name</label>
    //                       <div className="flex">
    //                         <input
    //                           className="form__input"
    //                           id="username"
    //                           type="text"
    //                           placeholder="Name"
    //                           onChange={handleChange("firstName")}
    //                           value={values.firstName}
    //                         />
    //                         <div className="flex items-center justify-center px-1">
    //                           {values.firstName.length === 0 ? null : values
    //                               .firstName.length < 3 ? (
    //                             <FaTimesCircle className="text-white text-md" />
    //                           ) : (
    //                             values.firstName.length >= 3 && (
    //                               <FaCheckCircle className="text-white text-md" />
    //                             )
    //                           )}
    //                         </div>
    //                       </div>
    //                     </div>

    //                     <div className="mb-2 lastName">
    //                       <label className="form__label">Last name</label>
    //                       <div className="flex">
    //                         <input
    //                           className="form__input"
    //                           type="text"
    //                           placeholder="Last name"

    //                           onChange={handleChange("lastName")}
    //                           value={values.lastName}
    //                         />
    //                         <div className="flex items-center justify-center px-1">
    //                           {values.lastName.length === 0 ? null : values
    //                               .lastName.length < 3 ? (
    //                             <FaTimesCircle className="text-white text-md" />
    //                           ) : (
    //                             values.lastName.length >= 3 && (
    //                               <FaCheckCircle className="text-white text-md" />
    //                             )
    //                           )}
    //                         </div>
    //                       </div>
    //                     </div>

    //                     <div className="mb-2 email">
    //                       <label className="form__label">Email</label>
    //                       <div className="flex items-center">
    //                         <input
    //                           name="email"
    //                           className="w-11/12 px-3 py-2 text-sm leading-tight rubik font-black text-purple-600 border rounded appearance-none focus:outline-none"
    //                           id="username"
    //                           type="email"
    //                           placeholder="Email"
    //                           onChange={handleChange("email")}
    //                           value={values.email}
    //                         />
    //                         <div className="flex items-center justify-center px-1">
    //                           {values.email.length ===
    //                           0 ? null : errors.email ? (
    //                             <FaTimesCircle className="text-white text-md" />
    //                           ) : (
    //                             values.email.length > 1 && (
    //                               <FaCheckCircle className="text-white text-md" />
    //                             )
    //                           )}
    //                         </div>
    //                       </div>
    //                     </div>

    //                     <div className="mb-2 password">
    //                       <label className="form__label" htmlFor="password">
    //                         Password
    //                       </label>
    //                       <input
    //                         className="form__input"
    //                         id="password"
    //                         type="password"
    //                         placeholder="Password"
    //                         value={values.password}
    //                       />
    //                       {/* <div className="flex items-center justify-center px-1">
    //                           {values.password.length === 0 ? null : values.password.length < 7 ? (
    //                             <FaTimesCircle className="text-white text-md" />
    //                           ) : (
    //                             values.password.length >= 8 && (
    //                               <FaCheckCircle className="text-white text-md" />
    //                             )
    //                           )}
    //                         </div> */}
    //                     </div>

    //                     <div className="mb-2 photoURL">
    //                       <label className="form__label">URL Photo</label>
    //                       <input
    //                         className="form__input"
    //                         type="url"
    //                         placeholder="URL"
    //                         value={values.photoURL}
    //                       />
    //                       <div className="flex items-center justify-center px-1">
    //                           {values.photoURL.length === 0 ? null : values
    //                               .photoURL.length < 3 ? (
    //                             <FaTimesCircle className="text-white text-md" />
    //                           ) : (
    //                             values.photoURL.length >= 3 && (
    //                               <FaCheckCircle className="text-white text-md" />
    //                             )
    //                           )}
    //                         </div>
    //                     </div>

    //                     <div className="mb-4 country">
    //                       <label className="form__label">Country</label>
    //                       <select
    //                         className="form__input"
    //                         placeholder="Choose your country"
    //                         onChange={(e) => setCountry(e.target.value)}
    //                         defaultValue="ChooseYourCountry"
    //                         key="hola"
    //                       >
    //                         <option value="ChooseYourCountry" disabled required>
    //                           Choose your country
    //                         </option>
    //                         {countries.map((country) => (
    //                           <option key={country.name} value={country.name}>
    //                             {country.name}
    //                           </option>
    //                         ))}
    //                       </select>
    //                     </div>

    //                     <div className="mb-6 text-center">
    //                       <button
    //                         className="createButton focus:shadow-outline hover:bg-purple-700"
    //                         type="submit"
    //                       >
    //                         Create account
    //                       </button>
    //                       <GoogleLogin
    //                         clientId="36260654393-jruugt14707a8pcdlf33skgor98eth8c.apps.googleusercontent.com"
    //                         buttonText="Create account with Google"
    //                         onSuccess={responseGoogle}
    //                         onFailure={responseGoogle}
    //                         cookiePolicy={"single_host_origin"}
    //                         className="rounded-full w-full mt-2 px-4 rubik black text-purple-900 bg-purple-500 hover:bg-purple-700 focus:outline-none focus:shadow-outline"
    //                       />
    //                     </div>
    //                   </form>
    //                 </>
    //               )}
    //             </Formik>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>
  );
};

export default SingUp;
