import React from 'react'
import BackToTop from "../Components/BackToTop";
// import Bags from "../Images/bags.jpg"
// import Accessoire from "../Images/accessoires.png"
import TransportScolaire from "../Images/TransportScolaire.png"
import Cantine from "../Images/Cantine.jpeg"

const NosServices = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <div className='bg-gray-100'>
        <div className="flex justify-center items-center">
          <div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-2 px-4 w-96 sm:w-auto">
            <div role="main" className="flex flex-col items-center justify-center">
              <h1 className="mt:24 md:mt-14 text-4xl font-semibold leading-9 text-center text-gray-800 dark:text-gray-50">
                NOS SERVICES
              </h1>
              {/* <p className="text-base leading-normal text-center text-gray-600 dark:text-white mt-4 lg:w-1/2 md:w-10/12 w-11/12">
                If you're looking for random paragraphs, you've come to the right
                place. When a random word or a random sentence isn't quite enough
              </p> */}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container px-6 py-2 mx-auto md:py-0">
          <div className="flex flex-col space-y-6 md:flex-row md:items-center md:space-x-6">
            <div className="w-full md:w-1/2">
              <div className="max-w-lg">
                <h1 className="text-2xl font-medium tracking-wide text-amber-400 md:text-4xl">
                  Transport Scolaire
                </h1>
                <p className="mt-6 text-gray-600">
                  Vous avez choisi la meilleure qualité d’enseignement pour votre enfant, offrez-lui également le meilleur choix en matière de transport scolaire !
                </p>
                <div className="grid gap-2 mt-6 sm:grid-cols-2">
                  <div className="flex items-center space-x-6 text-gray-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Transport Scolaire 1</span>
                  </div>
                  <div className="flex items-center space-x-6 text-gray-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Transport Scolaire 2</span>
                  </div>
                  <div className="flex items-center space-x-6 text-gray-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Transport Scolaire 3</span>
                  </div>
                  <div className="flex items-center space-x-6 text-gray-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Transport Scolaire 4</span>
                  </div>
                  <div className="flex items-center space-x-6 text-gray-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Transport Scolaire 5</span>
                  </div>
                  <div className="flex items-center space-x-6 text-gray-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Transport Scolaire 6</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center w-full md:w-1/2">
              <img
                src={TransportScolaire}
                alt="sac"
                className="w-full h-52 md:h-96 max-w-2xl rounded"
              />
            </div>
          </div>
        </div>
        <div className="container px-6 py-1 mx-auto md:py-1">
          <div className="flex flex-col space-y-6 md:flex-row md:items-center md:space-x-6">
            <div className="flex items-center justify-center w-full md:w-1/2">
              <img
                src={Cantine}
                alt="sac"
                className="w-full h-52 md:h-96 max-w-2xl rounded"
              />
            </div>
            <div className="w-full md:w-1/2">
              <div className="max-w-md mx-auto">
                <h1 className="text-2xl font-medium tracking-wide text-amber-400 md:text-4xl">
                  Cantine
                </h1>
                <p className="mt-5 leading-7 text-gray-600">
                  Les enfants ont besoin d’une alimentation équilibrée, notre école
                  en a tenu compte et propose un service de cantine de qualité.
                  Nos repas sont élaborés par notre nutritionniste et soumis à l’approbation de la direction.

                </p>
                <div className="grid gap-3 mt-6 sm:grid-cols-2">
                  <div className="flex items-center space-x-6 text-gray-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Cantine 1</span>
                  </div>
                  <div className="flex items-center space-x-6 text-gray-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Cantine 2</span>
                  </div>
                  <div className="flex items-center space-x-6 text-gray-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Cantine 3</span>
                  </div>
                  <div className="flex items-center space-x-6 text-gray-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Cantine 4</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="border border-amber-400 mt-10" />
      </div>
      <BackToTop />
    </>
  )
}

export default NosServices