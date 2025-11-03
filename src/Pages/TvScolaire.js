import React from 'react'
import BackToTop from "../Components/BackToTop";
const TvScolaire = () => {
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
                <iframe width="560" height="315" src="https://www.youtube.com/embed/QwodMbJBoI8?si=3br7DoM6cjxnDMUR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                </iframe>
              </div>
            </div>
          </div>
        </section>
      </div>
      <BackToTop />
    </>
  )
}

export default TvScolaire