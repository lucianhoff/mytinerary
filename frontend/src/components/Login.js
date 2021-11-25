import React from "react";

const Login = () => {
  return (
    <>
      <div className="rubik mt-32">
        <div className="container mx-auto">
          <div className="flex justify-center px-6 my-12">
            <div className="w-full xl:w-3/4 lg:w-11/12 flex">
              <img
                className="w-full h-autohidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
                src="./assets/loginHero3.jpg"
              />

              <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
                <h3 className="pt-4 text-2xl text-center text-purple-500">
                  Welcome Back!
                </h3>
                <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                  <div className="mb-4">
                    <label
                      className="block mb-2 text-sm font-bold text-purple-500"
                      for="username"
                    >
                      Username
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-purple-500 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="username"
                      type="text"
                      placeholder="Username"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block mb-2 text-sm font-bold text-purple-500"
                      for="password"
                    >
                      Password
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-purple-500 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="password"
                      type="password"
                      placeholder="********"
                    />
                    <p className="text-xs italic text-red-500">
                      Please choose a password.
                    </p>
                  </div>
                  <div className="mb-4">
                    <label class="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox bg-pink-600"
                      />
                      <div className="flex justify-center align-center">
                      <span className="ml-2 text-purple-600">Remember me</span>
                      </div>
                    </label>
                  </div>
                  <div className="mb-6 text-center">
                    <button
                      className="w-full px-4 py-2 font-bold text-white bg-purple-500 rounded-full hover:bg-purple-700 focus:outline-none focus:shadow-outline"
                      type="button"
                    >
                      Log In
                    </button>
                    <button
                      className="w-full mt-2 px-4 py-2 font-bold text-white bg-purple-500 rounded-full hover:bg-purple-700 focus:outline-none focus:shadow-outline"
                      type="button"
                    >
                      Log In with Google
                    </button>
                  </div>
                  <hr className="mb-6 border-t" />
                  <div className="text-center">
                    <a
                      className="inline-block text-sm text-purple-500 align-baseline hover:text-blue-800"
                      to="./register.html"
                    >
                      Create an Account!
                    </a>
                  </div>
                  <div className="text-center">
                    <a
                      className="inline-block text-sm text-purple-500 align-baseline hover:text-blue-800"
                      to="./forgot-password.html"
                    >
                      Forgot Password?
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
