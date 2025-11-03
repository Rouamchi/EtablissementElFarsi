import React from 'react'
import BackToTop from "../Components/BackToTop";
// import Me22 from "../Images/Me2.png"
import Radio from "../Images/Radio.png"

const RadioScolaire = () => {
  return (
    <>
    <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl md:mt-24 xl:max-w-6xl">
              <div className="w-full h-64 lg:w-1/2 lg:h-auto">
                <img
                  className="h-full w-full object-cover mb-10"
                  // src="https://picsum.photos/id/1018/2000"
                  src={Radio}
                  alt="Winding mountain road"
                />
              </div>
              <div className="max-w-lg bg-white md:max-w-xl md:z-10 md:mb-10 md:shadow-lg md:absolute lg:w-3/5 lg:left-0 lg:ml-20  xl:ml-12">
                <div className="flex flex-col p-12 md:px-16">
                  <h2 className="text-2xl font-medium uppercase text-blue-600 lg:text-4xl">
                    Radio Scolaire EFP
                  </h2>
                  <p className="mt-4 text-gray-600">
                    Au sein d'tablissement ELFARSI, nous avons mis en place une station radio. Cette initiative vise à diffuser toutes les actualités et à sensibiliser nos camarades élèves aux sujets les plus importants.
                  </p>
                  <div className="mt-8">
                    <a
                      href="/"
                      className="inline-block w-full text-center text-lg font-medium text-gray-100 bg-blue-900 border-solid border-2 border-gray-600 py-4 px-10 hover:bg-green-800 hover:shadow-md md:w-48"
                    >
                      Afficher Plus
                    </a>
                  </div>
                </div>
              </div>
            </div>
  <BackToTop />
  </>
  )
}

export default RadioScolaire