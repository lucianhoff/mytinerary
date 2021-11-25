import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import "animate.css";
import "../style.css";
import {Link} from "react-router-dom";

function NavMain() {
  return (
    <header className="fixed z-50 w-full top-0 left-0">
    <div className="w-full overflow-hidden">
      <div className="w-full bg-purple-600 py-4">
        <Popover>
          <div className="relative px-4 sm:px-6 lg:px-8">
            <nav
              className="relative flex items-center justify-between sm:h-10 lg:justify-start"
              aria-label="Global"
            >
              <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <Link to="/">
                    <span className="sr-only">Workflow</span>
                    <img
                      className="h-8 w-auto font-2xl sm:h-10"
                      src="./assets/logo.png"
                      alt="Workflow"
                    />
                  </Link>
                  <div className="-mr-2 flex items-center md:hidden">
                    <Popover.Button className="rounded-md p-3 inline-flex items-center justify-center text-gray-50 hover:text-purple-900 hover:bg-purple-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 sticky">
                      <span className="sr-only">Open main menu</span>
                      <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="w-full hidden md:flex md:justify-between md:ml-10 md:pr-4 md:space-x-8">
                <div className="inline">
                  <Link to="/" className="text-gray-50 text-xl font-bold hover:text-purple-900 pl-5">Home</Link>
                  <Link to="/cities" className="text-gray-50 text-xl font-bold hover:text-purple-900 pl-5">Cities</Link>
                </div>
                <div className="inline ">
                  <Link
                    to="/login"
                    className="text-gray-50 text-xl font-bold hover:text-purple-900 pl-5"
                  >
                    Log In
                  </Link>
                  <Link
                    to="/"
                    className="text-gray-50 text-xl font-bold hover:text-purple-900 pl-5"
                  >
                    Sing Up
                  </Link>
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
                      <XIcon className="h-6 w-6 " aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="px-2 pt-2 pb-3 space-y-1">
                <Link to="/" className="text-gray-50 text-xl font-bold hover:text-purple-900 pl-5">Home</Link>
                  <Link to="/cities" className="text-gray-50 text-xl font-bold hover:text-purple-900 pl-5">Cities</Link>
                </div>
                <Link
                  to="/login"
                  className="block w-full px-5 py-3 text-center font-medium text-white bg-purple-400  hover:text-purple-900 hover:bg-purple-700 hover:font-bold"
                >
                  Log In
                </Link>
                <Link
                  to="/"
                  className="block w-full px-5 py-3 text-center font-medium text-white bg-purple-400 hover:bg-purple-700 hover:text-purple-900 hover:font-bold"
                >
                  Sing Up
                </Link>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
    </div>
    </header>
  );
}

export default NavMain;