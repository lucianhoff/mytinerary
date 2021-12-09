import React, { useRef } from "react";
import { Link } from "react-router-dom";

const SingIn = (props) => {
  
  const email = useRef()
  const password = useRef()

  const singIn = (e) => {
    e.preventDefault()
    props.accessAccount(email.current.value , password.current.value) 

    email.current.value = ""
    password.current.value = ""
  } 

  console.log(props);
  
  return (

    <>
      <div className="mt-28 flex flex-col align-center items-center  ">
        <h1 className="text-3xl font-bold uppercase">iniciar sesion</h1>
      </div>
      <form className="flex flex-col align-center items-center" onSubmit={singIn}>
        <label className="my-2 flex flex-col">
          email de usuario
          <input type="text" ref={email}/>
        </label>
        <label className="my-2 flex flex-col">
          Contrasenia
          <input type="password" ref={password} />
        </label>

        <button type="submit" className="bg-gray-900 text-white px-5 my-2">
          {" "}
          iniciar sesion{" "}
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
    //             alt="heroLogin"
    //           />

    //           <div className="w-full lg:w-1/2  bg-purple-600 p-5 rounded-lg lg:rounded-l-none">
    //             <h3 className="pt-4 text-3xl text-center text-white font-black rubik">
    //               Welcome Back!
    //             </h3>
    //             <form className="px-8 pt-6 pb-8 mb-4 bg-purple-600 rounded">
    //               <div className="mb-4">
    //                 <label
    //                   className="block mb-2 text-sm font-black text-white"
    //                   htmlFor="username"
    //                 >
    //                   Username
    //                 </label>
    //                 <input
    //                   className="w-full px-3 py-2 text-sm leading-tight rubik font-black text-purple-600 border rounded appearance-none focus:outline-none"
    //                   id="username"
    //                   type="text"
    //                   placeholder="Username"
    //                 />
    //               </div>
    //               <div className="mb-4">
    //                 <label className="block mb-2 text-sm font-black text-white" htmlFor="password" >
    //                   Password
    //                 </label>
    //                 <input
    //                   className="w-full px-3 py-2 mb-3 text-sm leading-tight text-purple-500 border border-red-500 rounded appearance-none focus:outline-none"
    //                   id="password"
    //                   type="password"
    //                   placeholder="********"
    //                 />
    //               </div>
    //               <div className="mb-4">
    //                 <label className="inline-flex items-center">
    //                   <input
    //                     type="checkbox"
    //                     className="form-checkbox bg-pink-600"
    //                   />
    //                   <div className="flex justify-center align-center">
    //                   <span className="ml-2 text-white">Remember me</span>
    //                   </div>
    //                 </label>
    //               </div>
    //               <div className="mb-6 text-center">
    //                 <button
    //                   className="w-full px-4 py-2 font-bold text-white bg-purple-500 rounded-full hover:bg-purple-700 focus:outline-none focus:shadow-outline"
    //                   type="submit"
    //                 >
    //                   Sign In
    //                 </button>
    //                 <button
    //                   className="w-full mt-2 px-4 py-2 font-bold text-white bg-purple-500 rounded-full hover:bg-purple-700 focus:outline-none focus:shadow-outline"
    //                   type="submit"
    //                 >
    //                    Sign In with Google
    //                 </button>
    //               </div>
    //               <hr className="mb-6 border-t bg-white" />
    //               <div className="text-center">
    //                 <Link
    //                   className="inline-block text-sm text-white align-baseline hover:text-blue-800"
    //                   to="/singup"
    //                 >
    //                   Create an Account!
    //                 </Link>
    //               </div>
    //               <div className="text-center">
    //                 <a
    //                   className="inline-block text-sm text-white align-baseline hover:text-blue-800"
    //                   href="#"
    //                 >
    //                   Forgot Password?
    //                 </a>
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

export default SingIn;
