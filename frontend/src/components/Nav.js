/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import "animate.css";
import "../style.css";

const navigation = [
  { name: "Home", href: "#", component: "Home" },
  { name: "Cities", href: "#" },
];

export default function Example() {
  return (
    <div className="relative bg-purple-300 overflow-hidden">
      <div>
        <div className="relative z-10 pb-8 bg-purple-300 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-purple-300 transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <Popover>
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav
                className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                aria-label="Global"
              >
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <a href="#">
                      <span className="sr-only">Workflow</span>
                      <img
                        className="h-8 w-auto font-2xl sm:h-10"
                        src="./assets/logo.png"
                      />
                    </a>
                    <div className="-mr-2 flex items-center md:hidden">
                      <Popover.Button className="rounded-md p-3 inline-flex items-center justify-center text-purple-900 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 sticky">
                        <span className="sr-only">Open main menu</span>
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="w-full hidden md:flex md:justify-between md:ml-10 md:pr-4 md:space-x-8">
                  <div className="inline">
                    {navigation.map((item) => (
                      <a
                        exact
                        path={item.href}
                        key={item.name}
                        href={item.href}
                        className="text-purple-900 text-xl font-bold hover:text-gray-900 pl-5"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="inline ">
                    <a
                      href="#"
                      className="text-purple-900 text-xl font-bold hover:text-purple-500 pl-5"
                    >
                      Log In
                    </a>
                    <a
                      href="#"
                      className="text-purple-900 text-xl font-bold hover:text-purple-500 pl-5"
                    >
                      Sing Up
                    </a>
                  </div>
                </div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-md bg-purple-500 ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="px-4 pt-4 flex items-center justify-between">
                    <div className="">
                      <img className="h-8" src="./assets/logo-sm.png" alt="" />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-purple-500 rounded-md p-2 inline-flex items-center justify-center text-white hover:text-gray-500 hover:bg-purple-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500">
                        <span className="sr-only">Close main menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-purple-900 hover:bg-purple-400"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <a
                    href="#"
                    className="block w-full px-5 py-3 text-center font-medium text-white bg-purple-400  hover:text-purple-900 hover:bg-purple-700 hover:font-bold"
                  >
                    Log In
                  </a>
                  <a
                    href="#"
                    className="block w-full px-5 py-3 text-center font-medium text-white bg-purple-400 hover:bg-purple-700 hover:text-purple-900 hover:font-bold"
                  >
                    Sing Up
                  </a>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="text-center sm:text-center lg:text-left">
              <h1 className="animate__animated animate__rubberBand text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl hover:animate__rubberBand">
                <span className="block text-purple-900 xl:inline">My</span>{" "}
                <span className="block text-purple-600 xl:inline">
                  Tinerary
                </span>
              </h1>
              <p className="animate__animated animate__backInLeft mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Find your perfect trip
                <br /> designed by insiders who know and love their cities!
              </p>
              <div className="mt-5 flex justify-center items-center sm:mt-8 sm:flex sm:justify-center lg:justify-center">
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 md:py-4 md:text-lg md:px-10"
                  >
                    Cities
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      <div className="animate__animated animate__jello lg:absolute lg:inset-y-0 lg:right-0 ">
        <img
          className="airplane-main h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full "
          src="./assets/airplane.png"
          alt=""
        />
        {/* <img
          className="airplane h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="./assets/airplane-sm.png"
          alt=""
        /> */}
      </div>
    </div>
  );
}
