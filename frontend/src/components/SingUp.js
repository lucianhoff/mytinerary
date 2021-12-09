import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
const SingUp = ( { submit } ) => {
  const [countries, setCountries] = useState(["Choose your country"]);

  const [country, setCountry] = useState();

  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all?fields=name")
      .then((res) => setCountries(res.data));

    axios.get("https://api.pexels.com/v1/search?query=cities");
  }, []);

  const firstName = useRef()
  const lastName = useRef()
  const email = useRef()
  const password = useRef()
  const photoURL = useRef()

  const handleSubmit = (e) => {
    
    e.preventDefault();

    submit (
      firstName.current.value,
      lastName.current.value,
      email.current.value,
      password.current.value,
      photoURL.current.value,
      country
    )

    firstName.current.value = ""
    lastName.current.value = ""
    email.current.value = ""
    password.current.value = ""
    photoURL.current.value = ""
  }

  return (
    <>
      <div className="mt-28 flex flex-col align-center items-center  ">
        <h1 className="text-3xl font-bold uppercase">Crear usuario</h1>
      </div>
      <form
        className="flex flex-col align-center items-center justify-center"
        onSubmit={handleSubmit}
      >
        <label className="my-2 flex flex-col">
          Nombre
          <input type="text" ref={firstName} required />
        </label>

        <label className="my-2 flex flex-col">
          Apellido
          <input type="text" ref={lastName} required />
        </label>

        <label className="my-2 flex flex-col">
          email
          <input type="email" ref={email} required />
        </label>

        <label className="my-2 flex flex-col">
          Contrasenia
          <input type="password" ref={password} required />
        </label>

        <label className="my-2 ref={} flex flex-col">
          URL FOTO
          <input type="url" ref={photoURL} required />
        </label>

        <select
          className=""
          onChange={(e) => setCountry(e.target.value)}
          placeholder="Choose your country"
        >
          <option defaultValue="Choose your country" required>
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
      </form>
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
    //             <form className="px-8 pt-6 pb-8 bg-purple-600 rounded">
    //               {/* NAME */}
    //               <div className="mb-2">
    //                 <label className="block mb-2 text-sm font-black text-white">
    //                   Name
    //                 </label>
    //                 <input
    //                   className="w-full px-3 py-2 text-sm leading-tight rubik font-black text-purple-600 border rounded appearance-none focus:outline-none"
    //                   id="username"
    //                   type="text"
    //                   placeholder="Name"
    //                 />
    //               </div>
    //               {/* LAST NAME */}
    //               <div className="mb-2">
    //                 <label className="block mb-2 text-sm font-black text-white">
    //                   Last name
    //                 </label>
    //                 <input
    //                   className="w-full px-3 py-2 text-sm leading-tight rubik font-black text-purple-600 border rounded appearance-none focus:outline-none"
    //                   type="text"
    //                   placeholder="Last name"
    //                 />
    //               </div>
    //               {/* EMAIL */}
    //               <div className="mb-2">
    //                 <label className="block mb-2 text-sm font-black text-white">
    //                   Email
    //                 </label>
    //                 <input
    //                   className="w-full px-3 py-2 text-sm leading-tight rubik font-black text-purple-600 border rounded appearance-none focus:outline-none"
    //                   type="email"
    //                   placeholder="Email"
    //                 />
    //               </div>

    //               {/* PASSWORD */}
    //               <div className="mb-2">
    //                 <label
    //                   className="block mb-2 text-sm font-black text-white"
    //                   htmlFor="password"
    //                 >
    //                   Password
    //                 </label>
    //                 <input
    //                   className="w-full px-3 py-2 mb-3 text-sm leading-tight text-purple-500 border border-red-500 rounded appearance-none focus:outline-none"
    //                   id="password"
    //                   type="password"
    //                   placeholder="********"
    //                 />
    //               </div>

    //               {/* URL DE LA FOTO */}

    //               <div className="mb-2">
    //                 <label className="block mb-2 text-sm font-black text-white">
    //                   URL Photo
    //                 </label>
    //                 <input
    //                   className="w-full px-3 py-2 text-sm leading-tight rubik font-black text-purple-600 border rounded appearance-none focus:outline-none"
    //                   type="text"
    //                   placeholder="URL"
    //                 />
    //               </div>
    //               {/* Country */}
    //               <div className="mb-4">
    //                 <label className="block mb-2 text-sm font-black text-white">
    //                   Country
    //                 </label>
    //                 <select
    //                   className="w-full px-3 py-2 text-sm leading-tight rubik font-black text-purple-600 border rounded appearance-none focus:outline-none"
    //                   placeholder="Choose your country"
    //                 >
    //                   <option defaultValue="Choose your country" required>
    //                     Choose your country
    //                   </option>
    //                   {countries.map((country) => (
    //                     <option key={country.name} value={country.name}>
    //                       {country.name}
    //                     </option>
    //                   ))}
    //                 </select>
    //               </div>
    //               <div className="mb-6 text-center">
    //                 <button
    //                   className="w-full px-4 py-2 font-bold text-white bg-purple-500 rounded-full hover:bg-purple-700 focus:outline-none focus:shadow-outline"
    //                   type="button"
    //                 >
    //                   Create account
    //                 </button>
    //                 <button
    //                   className="w-full mt-2 px-4 py-2 font-bold text-white bg-purple-500 rounded-full hover:bg-purple-700 focus:outline-none focus:shadow-outline"
    //                   type="button"
    //                 >
    //                   Create account with Google
    //                 </button>
    //               </div>
    //             </form>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>
  );
};

export default SingUp;
