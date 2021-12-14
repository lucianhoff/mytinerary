import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function Avatar() {

  let [isOpen, setIsOpen] = useState(false);

  const [avatar, setAvatar] = useState("");
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div>
        <button
          type="button"
          onClick={openModal}
          className="px-2 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          <ImgIcon />
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-purple-200 shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg text-center font-medium leading-6 text-purple-600"
                >
                  Choose your avatar!
                </Dialog.Title>
                <div className="mt-2 flex flex-col justify-center items-center">
                  {/* FILA 1 */}
                  <div className="flex mb-2">
                    <div
                      className="w-20 h-20 mx-2 hover:shadow-lg transition-all duration-200 ease-in-out transform hover:scale-110 cursor-pointer"
                      style={{
                        backgroundImage:
                          "url(https://image.freepik.com/vector-gratis/avatar-hombre-retrato-hombre-minimalista-plano-ilustracion_186332-435.jpg)",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}
                    onClick={ () => setAvatar("https://image.freepik.com/vector-gratis/avatar-hombre-retrato-hombre-minimalista-plano-ilustracion_186332-435.jpg")}
                    ></div>
                    <div
                      className="w-20 h-20 mx-2 hover:shadow-lg transition-all duration-200 ease-in-out transform hover:scale-110"
                      style={{
                        backgroundImage:
                          "url(https://image.freepik.com/vector-gratis/avatar-hombre-retrato-hombre-minimalista-plano-ilustracion_186332-435.jpg)",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                      }}
                    ></div>
                    <div
                      className="w-20 h-20 mx-2 hover:shadow-lg transition-all duration-200 ease-in-out transform hover:scale-110"
                      style={{
                        backgroundImage:
                          "url(https://image.freepik.com/vector-gratis/avatar-hombre-retrato-hombre-minimalista-plano-ilustracion_186332-435.jpg)",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                      }}
                    ></div>
                  </div>

                  {/* FILA 2 */}
                  <div className="flex">
                    <div
                      className="w-20 h-20 mx-2 hover:shadow-lg transition-all duration-200 ease-in-out transform hover:scale-110"
                      style={{
                        backgroundImage:
                          "url(https://image.freepik.com/vector-gratis/avatar-hombre-retrato-hombre-minimalista-plano-ilustracion_186332-435.jpg)",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                      }}
                    ></div>
                    <div
                      className="w-20 h-20 mx-2 hover:shadow-lg transition-all duration-200 ease-in-out transform hover:scale-110"
                      style={{
                        backgroundImage:
                          "url(https://image.freepik.com/vector-gratis/avatar-hombre-retrato-hombre-minimalista-plano-ilustracion_186332-435.jpg)",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                      }}
                    ></div>
                    <div
                      className="w-20 h-20 mx-2 hover:shadow-lg transition-all duration-200 ease-in-out transform hover:scale-110"
                      style={{
                        backgroundImage:
                          "url(https://image.freepik.com/vector-gratis/avatar-hombre-retrato-hombre-minimalista-plano-ilustracion_186332-435.jpg)",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                      }}
                    ></div>
                  </div>
                </div>

                <div className="mt-4 flex justify-center items-center">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-purple-900 bg-purple-300 border border-transparent rounded-md hover:bg-purple-600 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-purple-500"
                    onClick={closeModal}
                  >
                    No, thanks!
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

function ImgIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  );
}
