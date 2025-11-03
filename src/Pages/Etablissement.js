import React from 'react'
import BackToTop from "../Components/BackToTop";
import Sec1 from "../Images/Sec1.png"
import Sec2 from "../Images/Sec2.png"
import Sec3 from "../Images/Sec3.png"
import Sec4 from "../Images/Sec4.png"
import Sec5 from "../Images/Sec5.png"
import Sec6 from "../Images/Sec6.png"
import SecMobile3 from "../Images/SecMobile3.png"
import SecMobile4 from "../Images/SecMobile4.png"
import TransportScolaire from "../Images/TransportScolaire.png"
import Cantine from "../Images/Cantine.jpeg"

const Etablissement = () => {
  window.scrollTo(0, 0);
  return (
    <>
    <div className='bg-gray-100'>
      {/* Galerie */}
      <div className='bg-gray-100'>
        <div className="relative h-96 w-11/12 mx-auto">
          <div className="absolute inset-0 bg-black bg-opacity-50 mt-24" />
          <img
            src="https://images.unsplash.com/photo-1494783367193-149034c05e8f"
            alt=""
            className="absolute inset-0 w-full h-full object-cover filter mt-24"
          />
          <div className='absolute inset-0 h-full bg-black bg-opacity-50 mt-24 '>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h1 className="text-4xl text-white font-bold">GALERIE</h1>
              <p className="text-center text-base lg:text-xl text-white mt-4">If you're looking for random paragraphs, you've come to the right
                place.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-16 bg-gray-100">
        <div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
          <div role="main" className="flex flex-col items-center justify-center">
            <h1 className=" mt-8 text-4xl font-semibold leading-9 text-center text-gray-800 dark:text-gray-50">
              PHOTOS
            </h1>
            <p className="text-base leading-normal text-center text-gray-600 dark:text-white mt-4 lg:w-1/2 md:w-10/12 w-11/12">
              If you're looking for random paragraphs, you've come to the right
              place. When a random word or a random sentence isn't quite enough
            </p>
          </div>
          <div className="lg:flex items-stretch md:mt-8 mt-8">
            <div className="lg:w-1/2">
              <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
                <div className="sm:w-1/2 relative group mb-5 md:mb-0">
                  <div className="relative transform transition-transform duration-500 ease-in-out group-hover:scale-105">
                    <div className="absolute inset-0 bg-[hsla(0,0%,0%,0.50)] z-10"></div>
                    <img
                      src={Sec1}
                      className="w-full h-full object-cover"
                      alt="chair"
                    />
                  </div>
                </div>
                <div className="sm:w-1/2 relative group">
                  <div className="relative transform transition-transform duration-500 ease-in-out group-hover:scale-105">
                    <div className="absolute inset-0 bg-[hsla(0,0%,0%,0.50)] z-10"></div>
                    <img
                      src={Sec2}
                      className="w-full h-full object-cover"
                      alt="chair"
                    />
                  </div>
                </div>
              </div>
              <div className="relative group mt-6">
                <div className="relative transform transition-transform duration-500 ease-in-out group-hover:scale-105">
                  <div className="absolute inset-0 bg-[hsla(0,0%,0%,0.50)] z-10"></div>
                  <img
                    src={Sec3}
                    alt="sitting place"
                    className="w-full sm:block hidden object-cover"
                  />
                  <img
                    className="w-full sm:hidden object-cover"
                    // src="https://i.ibb.co/dpXStJk/Rectangle-29.png"
                    src={SecMobile3}
                    alt="sitting place"
                  />
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
              <div className="relative group">
                <div className="relative transform transition-transform duration-500 ease-in-out group-hover:scale-105">
                  <div className="absolute inset-0 bg-[hsla(0,0%,0%,0.50)] z-10"></div>
                  <img
                    src={Sec4}
                    alt="sitting place"
                    className="w-full sm:block hidden object-cover"
                  />
                  <img
                    className="w-full sm:hidden object-cover"
                    // src="https://i.ibb.co/dpXStJk/Rectangle-29.png"
                    src={SecMobile4}
                    alt="sitting place"
                  />
                </div>
              </div>
              <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
                <div className="sm:w-1/2 relative group mb-5 md:mb-0">
                  <div className="relative transform transition-transform duration-500 ease-in-out group-hover:scale-105">
                    <div className="absolute inset-0 bg-[hsla(0,0%,0%,0.50)] z-10"></div>
                    <img
                      src={Sec5}
                      className="w-full h-full object-cover"
                      alt="chair"
                    />
                  </div>
                </div>
                <div className="sm:w-1/2 relative group">
                  <div className="relative transform transition-transform duration-500 ease-in-out group-hover:scale-105">
                    <div className="absolute inset-0 bg-[hsla(0,0%,0%,0.50)] z-10"></div>
                    <img
                      src={Sec6}
                      className="w-full h-full object-cover"
                      alt="chair"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:flex items-stretch md:mt-12 mt-8">
            <div className="lg:w-1/2">
              <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
                <div className="sm:w-1/2 relative group mb-5 md:mb-0">
                  <div className="relative transform transition-transform duration-500 ease-in-out group-hover:scale-105">
                    <div className="absolute inset-0 bg-[hsla(0,0%,0%,0.50)] z-10"></div>
                    <img
                      src={Sec1}
                      className="w-full h-full object-cover"
                      alt="chair"
                    />
                  </div>
                </div>
                <div className="sm:w-1/2 relative group">
                  <div className="relative transform transition-transform duration-500 ease-in-out group-hover:scale-105">
                    <div className="absolute inset-0 bg-[hsla(0,0%,0%,0.50)] z-10"></div>
                    <img
                      src={Sec2}
                      className="w-full h-full object-cover"
                      alt="chair"
                    />
                  </div>
                </div>
              </div>
              <div className="relative group mt-6">
                <div className="relative transform transition-transform duration-500 ease-in-out group-hover:scale-105">
                  <div className="absolute inset-0 bg-[hsla(0,0%,0%,0.50)] z-10"></div>
                  <img
                    src={Sec3}
                    alt="sitting place"
                    className="w-full sm:block hidden object-cover"
                  />
                  <img
                    className="w-full sm:hidden object-cover"
                    // src="https://i.ibb.co/dpXStJk/Rectangle-29.png"
                    src={SecMobile3}
                    alt="sitting place"
                  />
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
              <div className="relative group">
                <div className="relative transform transition-transform duration-500 ease-in-out group-hover:scale-105">
                  <div className="absolute inset-0 bg-[hsla(0,0%,0%,0.50)] z-10"></div>
                  <img
                    src={Sec4}
                    alt="sitting place"
                    className="w-full sm:block hidden object-cover"
                  />
                  <img
                    className="w-full sm:hidden object-cover"
                    // src="https://i.ibb.co/dpXStJk/Rectangle-29.png"
                    src={SecMobile4}
                    alt="sitting place"
                  />
                </div>
              </div>
              <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
                <div className="sm:w-1/2 relative group mb-5 md:mb-0">
                  <div className="relative transform transition-transform duration-500 ease-in-out group-hover:scale-105">
                    <div className="absolute inset-0 bg-[hsla(0,0%,0%,0.50)] z-10"></div>
                    <img
                      src={Sec5}
                      className="w-full h-full object-cover"
                      alt="chair"
                    />
                  </div>
                </div>
                <div className="sm:w-1/2 relative group">
                  <div className="relative transform transition-transform duration-500 ease-in-out group-hover:scale-105">
                    <div className="absolute inset-0 bg-[hsla(0,0%,0%,0.50)] z-10"></div>
                    <img
                      src={Sec6}
                      className="w-full h-full object-cover"
                      alt="chair"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:flex items-stretch md:mt-12 mt-8">
            <div className="lg:w-1/2">
              <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
                <div className="sm:w-1/2 relative group mb-5 md:mb-0">
                  <div className="relative transform transition-transform duration-500 ease-in-out group-hover:scale-105">
                    <div className="absolute inset-0 bg-[hsla(0,0%,0%,0.50)] z-10"></div>
                    <img
                      src={Sec1}
                      className="w-full h-full object-cover"
                      alt="chair"
                    />
                  </div>
                </div>
                <div className="sm:w-1/2 relative group">
                  <div className="relative transform transition-transform duration-500 ease-in-out group-hover:scale-105">
                    <div className="absolute inset-0 bg-[hsla(0,0%,0%,0.50)] z-10"></div>
                    <img
                      src={Sec2}
                      className="w-full h-full object-cover"
                      alt="chair"
                    />
                  </div>
                </div>
              </div>
              <div className="relative group mt-6">
                <div className="relative transform transition-transform duration-500 ease-in-out group-hover:scale-105">
                  <div className="absolute inset-0 bg-[hsla(0,0%,0%,0.50)] z-10"></div>
                  <img
                    src={Sec3}
                    alt="sitting place"
                    className="w-full sm:block hidden object-cover"
                  />
                  <img
                    className="w-full sm:hidden object-cover"
                    // src="https://i.ibb.co/dpXStJk/Rectangle-29.png"
                    src={SecMobile3}
                    alt="sitting place"
                  />
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
              <div className="relative group">
                <div className="relative transform transition-transform duration-500 ease-in-out group-hover:scale-105">
                  <div className="absolute inset-0 bg-[hsla(0,0%,0%,0.50)] z-10"></div>
                  <img
                    src={Sec4}
                    alt="sitting place"
                    className="w-full sm:block hidden object-cover"
                  />
                  <img
                    className="w-full sm:hidden object-cover"
                    // src="https://i.ibb.co/dpXStJk/Rectangle-29.png"
                    src={SecMobile4}
                    alt="sitting place"
                  />
                </div>
              </div>
              <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
                <div className="sm:w-1/2 relative group mb-5 md:mb-0">
                  <div className="relative transform transition-transform duration-500 ease-in-out group-hover:scale-105">
                    <div className="absolute inset-0 bg-[hsla(0,0%,0%,0.50)] z-10"></div>
                    <img
                      src={Sec5}
                      className="w-full h-full object-cover"
                      alt="chair"
                    />
                  </div>
                </div>
                <div className="sm:w-1/2 relative group">
                  <div className="relative transform transition-transform duration-500 ease-in-out group-hover:scale-105">
                    <div className="absolute inset-0 bg-[hsla(0,0%,0%,0.50)] z-10"></div>
                    <img
                      src={Sec6}
                      className="w-full h-full object-cover"
                      alt="chair"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* NOTRE PÉDAGOGIE */}
      <div className="bg-gray-100">
        <div className="container px-6 py-10 mx-auto md:py-16 mt-0">
          <div className="flex justify-center items-center mt-0">
            <div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
              <div role="main" className="flex flex-col items-center justify-center">
                <h1 className="text-4xl font-mono leading-9 text-center text-blue-900 dark:text-gray-50">
                  Une pédagogie unique axée sur l'épanouissement et la réussite !
                </h1>
              </div>

            </div>
          </div>
          {/* --------------------- */}
          <div className="flex flex-col space-y-6 md:flex-row md:items-center md:space-x-6">
            <div className="w-full md:w-1/2">
              {/* <div className="max-w-lg"> */}
              <div className="">
                <h1 className="text-xl font-medium tracking-wide text-amber-400 md:text-2xl">
                  Permettre aux enfants d'apprendre autrement
                </h1>
                <p className="mt-6 text-blue-700 text-lg">
                  Le plaisir d’apprendre !
                </p>
                <div className="grid gap-2 mt-6 sm:grid-cols-1 text-gray-600">
                  C’est la raison d'être de cet établissement. Nous avons voulu une pédagogie qui donne à chacun sa chance. Elle est unique car inspirée du meilleur des pédagogies connues aujourd’hui. Nous les avons personnellement étudiées avant de faire notre choix. C’est, au final, la pédagogie Gattegno qui a retenu toute notre attention.
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center w-full md:w-1/2">
              <img
                src={Sec1}
                alt="sac"
                className="w-full h-52 md:h-96 max-w-2xl rounded"
              />
            </div>
          </div>
        </div>
        {/* ------------------ */}
        <div className="container px-6 py-1 mx-auto md:py-1">
          <div className="flex flex-col space-y-6 md:flex-row md:items-center md:space-x-6">
            <div className="flex items-center justify-center w-full md:w-1/2">
              <img
                src={Sec2}
                alt="sac"
                className="w-full h-52 md:h-96 max-w-2xl rounded"
              />
            </div>
            <div className="w-full md:w-1/2">
              <div className="max-w-lg mx-auto">
                <h1 className="text-xl font-medium tracking-wide text-amber-400 md:text-2xl">
                  Je vois, je comprends, je sais faire, je pratique et enfin je maîtrise
                </h1>
                <p className="mt-5 leading-7 text-blue-700 text-lg">
                  Le plaisir d’apprendre
                </p>
                <div className="grid gap-3 mt-6 sm:grid-cols-1 text-gray-600">
                  Les enfants sont actifs dans leur progression. Ils acquièrent des connaissances solides sans avoir l’impression d’apprendre mais simplement parce qu’ils sont impliqués dans les activités proposées.
                  Nos pratiques développent la créativité de chacun ainsi que l’autonomie mais surtout la joie et le plaisir d’apprendre ! En effet, comme dans la pédagogie Gattegno, nous utilisons un matériel particulier qui rappelle le jeu. Tout en couleur, il donne envie d’apprendre et de connaître encore plus de choses.
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ------------------ */}
        <div className="container px-6 py-10 mx-auto md:py-16 mt-6">
          <div className="flex flex-col space-y-6 md:flex-row md:items-center md:space-x-6">
            <div className="w-full md:w-1/2">
              <div className="">
                <h1 className="text-xl font-medium tracking-wide text-amber-400 md:text-2xl">
                  Les enseignants choisis pour leur engagement
                </h1>
                <p className="mt-6 text-blue-700 text-lg">
                  Le plaisir d’enseigner
                </p>
                <div className="grid gap-2 mt-6 sm:grid-cols-1 text-gray-600">
                  Notre pédagogie nécessite des professeurs engagés dans la réussite des enfants. Plus que délivrer un savoir, ils sont à l’écoute de chacun, s’adaptent au rythme de chaque enfant pour lui permettre d’apprendre mais surtout de retenir.

                  La journée s’organise selon une alternance de travail individuel et collectif, avec des activités propres à chaque classe ou communes à deux classes. Des ateliers variés sont régulièrement mis en place. Développer la créativité, la confiance en soi et l’esprit d’initiative sont au coeur de notre projet éducatif.
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center w-full md:w-1/2">
              <img
                src={Sec5}
                alt="sac"
                className="w-full h-52 md:h-96 max-w-2xl rounded"
              />
            </div>
          </div>
        </div>
        {/* ------------------ */}
        <div className="container px-6 py-1 mx-auto md:py-1">
          <div className="flex flex-col space-y-6 md:flex-row md:items-center md:space-x-6">
            <div className="flex items-center justify-center w-full md:w-1/2">
              <img
                src={Sec6}
                alt="sac"
                className="w-full h-52 md:h-96 max-w-2xl rounded"
              />
            </div>
            <div className="w-full md:w-1/2">
              <div className="max-w-lg mx-auto">
                <h1 className="text-xl font-medium tracking-wide text-amber-400 md:text-2xl">
                  Ce que l’on apprend ici n’est pas uniquement scolaire
                </h1>
                <p className="mt-5 leading-7 text-blue-700 text-lg">
                  Un véritable mode de vie pour les enfants !
                </p>
                <div className="grid gap-3 mt-6 sm:grid-cols-1 text-gray-600">
                  Le cadre de vie, l’organisation du temps scolaire, l’importance accordée à la vie sociale, l’ouverture de l’école sur le monde : tous ces choix fondamentaux permettent de créer un climat de confiance qui favorise l’apprentissage de la vie sociale, la confiance en soi et l’épanouissement personnel.
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="border border-amber-400 mt-20" />
      </div>
      {/* Nos Services */}
      <div className='bg-gray-100'>
        <div className="flex justify-center items-center">
          <div className="2xl:mx-auto 2xl:container md:mt-20 md:mb-3 md:px-6 mt-10 mb-2 px-4 w-96 sm:w-auto">
            <div role="main" className="flex flex-col items-center justify-center">
              <h1 className="mt-0 text-4xl font-semibold leading-9 text-center text-gray-800 dark:text-gray-50">
              NOS SERVICES
              </h1>
              <p className="text-base leading-normal text-center text-gray-600 dark:text-white mt-4 lg:w-1/2 md:w-10/12 w-11/12">
                If you're looking for random paragraphs, you've come to the right
                place. When a random word or a random sentence isn't quite enough
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container px-6 py-2 mx-auto md:mb-2">
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
    </div>
      <BackToTop />
    </>
  )
}

export default Etablissement


