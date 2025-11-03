import React from 'react'
import BackToTop from "../Components/BackToTop";
import Me22 from "../Images/Me2.png"

const Media = () => {
  return (
    <>
      <div className="flex items-center justify-center m-2 mt-24 md:mt-28 mb-10 bg-amber-400">
        <section className="bg-amber-400">
          <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-14">
              <div className="max-w-lg lg:mr-12">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  TV SCOLAIRE EFP
                </h2>
                <p className="mt-4 text-white text-lg">
                  Une chaîne télévisée dans le but d’informer, sensibiliser et partager avec nos camarades élèves toutes les actualités pertinentes.
                </p>
                <div className="mt-8">
                  <a href="/" className="text-gray-900 hover:text-blue-600 font-medium">
                    Afficher Plus
                    <span className="ml-2">→</span>
                  </a>
                </div>
              </div>
              <div className="mt-12 md:mt-0">
                <iframe
                  className="w-full h-48 lg:h-80 object-cover rounded-lg shadow-md"
                  src="https://www.youtube.com/embed/yqRRtPrbF5o?si=VkoUfDIJcGykYe0Y"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </div>


      <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl md:mt-10 xl:max-w-6xl">
        <div className="w-full h-64 lg:w-1/2 lg:h-auto">
          <img
            className="h-full w-full object-cover mb-10"
            // src="https://picsum.photos/id/1018/2000"
            src={Me22}
            alt="Winding mountain road"
          />
        </div>
        <div className="max-w-lg bg-white md:max-w-2xl md:z-10 md:mb-10 md:shadow-lg md:absolute lg:w-3/5 lg:left-0 lg:ml-20  xl:ml-12">
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

export default Media