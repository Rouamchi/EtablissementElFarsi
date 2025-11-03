import BackToTop from "../Components/BackToTop";
import { Link } from "react-router-dom";
import Sec1 from "../Images/Sec1.png"
import Sec2 from "../Images/Sec2.png"
import Sec3 from "../Images/Sec3.png"
import Sec4 from "../Images/Sec4.png"
import Sec5 from "../Images/Sec5.png"
import Sec6 from "../Images/Sec6.png"
import Sec7 from "../Images/Sec8.png"
import Sec8 from "../Images/Sec7.png"
import Sec9 from "../Images/Sec9.png"
import Sec10 from "../Images/Sec10.png"
import Sec11 from "../Images/Sec11.png"
import Sec12 from "../Images/Sec12.png"
import Sec13 from "../Images/Sec13.png"
import Sec14 from "../Images/Sec14.png"
import Vie1 from "../Images/Vie1.png"
import Vie2 from "../Images/Vie2.png"
import AboutUs1 from "../Images/aboutUs1.png"
import SecMobile7 from "../Images/SecMobile7.png"
import SecMobile8 from "../Images/SecMobile8.png"
// import Me1 from "../Images/Me1.png"
import Abdelhaq from "../Images/Abdelhaq.jpeg"
import Radio from "../Images/Radio.png"
import Nadia from "../Images/Nadia.jpg"
import TransportScolaire from "../Images/TransportScolaire.png"
import Cantine from "../Images/Cantine.jpeg"
import React, { useState } from "react";
import './Home.css';

const Home = () => {
  const [showMore, setShowMore] = useState(false);
  window.scrollTo(0, 0);
  return (
    <>
      <div className="text-center bg-gray-100">
        <section className="">
          <div className="relative overflow-hidden bg-cover bg-no-repeat">
            <div className="bgImage hide-when-mobile"></div>
            <div className="bgImageMobile show-when-mobile"></div>
            <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.50)] bg-fixed">
              <div className="flex h-full items-center justify-left">
                <div className="px-6 text-left text-amber-400 md:px-12">
                  <h1 className="mt-16 xl:mt-6 -mb-1 xl:mb-4 text-xl font-bold tracking-tight md:text-3xl xl:text-4xl">
                    ÉTABLISSEMENT EL FARSI PRIVÉ
                  </h1>
                  <h3 className="mt-0 -mb-1 xl:mb-10 text-base font-medium tracking-tight md:text-3xl xl:text-4xl">
                    Bienvenue sur notre site officiel !
                  </h3>
                  <p className="text-md md:text-2xl text-white font-normal md:font-semibold mt-4 md:-mt-4 mb-4 md:mb-10">
                    Établissement El Farsi Privé <br /> MATERNELLE, PRIMAIRE, COLLÈGE & LYCÉE.
                  </p>
                  <Link
                    to="AboutUs" spy={true} smooth={true} offset={-100} duration={500}
                    className="rounded border-2 border-neutral-50 px-[16px] xl:px-[46px] pt-[4px] pb-[6px] xl:pt-[10px] xl:pb-[10px] text-xs md:text-sm font-normal md:font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-amber-400 hover:bg-amber-400 hover:bg-opacity-10 hover:text-amber-400 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
                    data-te-ripple-init=""
                    data-te-ripple-color="light">
                    Afficher Plus
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr className="border-2 border-amber-400" />
        {/* sections */}
        <div className="flex justify-center items-center">
          <div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
            <div role="main" className="flex flex-col items-center justify-center">
              <h1 className="text-4xl font-semibold leading-9 text-center text-gray-800 dark:text-gray-50">
                ÉTABLISSEMENT EL FARSI PRIVÉ
              </h1>
              <p className="text-base leading-normal text-center text-gray-600 dark:text-white mt-4 lg:w-1/2 md:w-10/12 w-11/12">
                Bienvenue sur notre site officiel ! <br />
                MATERNELLE, PRIMAIRE, COLLÈGE & LYCÉE.
              </p>
            </div>
            <div className="lg:flex items-stretch md:mt-12 mt-8">
              <div className="lg:w-1/2">
                <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
                  <Link to='/lechoQuotidiene' className="sm:w-1/2 relative group mb-5 md:mb-6">
                    <div className="relative transform transition-transform duration-500 ease-in-out group-hover:scale-105">
                      <div className="absolute inset-0 bg-[hsla(0,0%,0%,0.50)] z-10"></div>
                      <p className="absolute top-0 right-0 p-6 text-xs font-medium leading-3 text-white z-20">
                        12 Janvier 2025
                      </p>
                      <div className="absolute bottom-0 left-0 z-20 p-6">
                        <h2 className="text-xl font-semibold bg-red-600 pl-2 pr-2 pb-0 text-white">L'écho du Quotidiene</h2>
                        {/* <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p> */}
                        <a
                          href="/lechoQuotidiene"
                          className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                        >
                          <p className="pr-2 text-sm font-medium leading-none">Voir Plus</p>
                          <svg
                            className="fill-stroke"
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.75 12.5L10.25 8L5.75 3.5"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </a>
                      </div>
                      <img
                        src={Sec1}
                        className="w-full h-full object-cover"
                        alt="chair"
                      />
                    </div>
                  </Link>
                  <Link to='/atableCestActu' className="sm:w-1/2 relative group mb-5 md:mb-6">
                    <div className="relative transform transition-transform duration-500 ease-in-out group-hover:scale-105">
                      <div className="absolute inset-0 bg-[hsla(0,0%,0%,0.50)] z-10"></div>
                      <p className="absolute top-0 right-0 p-6 text-xs font-medium leading-3 text-white z-20">
                        12 Janvier 2025
                      </p>
                      <div className="absolute bottom-0 left-0 z-20 p-6">
                        <h2 className="text-xl font-semibold bg-green-600 pl-2 pr-2 pb-0 text-white">À Table, C'est l'Actu !</h2>
                        {/* <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p> */}
                        <a
                          href="/atableCestActu"
                          className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                        >
                          <p className="pr-2 text-sm font-medium leading-none">Voir Plus</p>
                          <svg
                            className="fill-stroke"
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.75 12.5L10.25 8L5.75 3.5"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </a>
                      </div>
                      <img
                        src={Sec2}
                        className="w-full h-full object-cover"
                        alt="chair"
                      />
                    </div>
                  </Link>
                </div>
                <Link to='/laSceneParascolaire' className="relative group mt-6">
                  <div className="relative transform transition-transform duration-500 ease-in-out group-hover:scale-105">
                    <div className="absolute inset-0 bg-[hsla(0,0%,0%,0.50)] z-10"></div>
                    <p className="absolute md:p-10 p-6 text-xs font-medium leading-3 text-white top-0 right-0 z-20">
                      12 Janvier 2025
                    </p>
                    <div className="absolute bottom-0 left-0 z-20 md:p-10 p-6">
                      <h2 className="text-xl font-semibold bg-sky-700 pl-2 pr-2 pb-0 text-white">La Scène Parascolaire</h2>
                      {/* <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p> */}
                      <a
                        href="/laSceneParascolaire"
                        className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                      >
                        <p className="pr-2 text-sm font-medium leading-none">Voir Plus</p>
                        <svg
                          className="fill-stroke"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.75 12.5L10.25 8L5.75 3.5"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                    <img
                      src={Sec3}
                      alt="sitting place"
                      className="w-full sm:block hidden object-cover"
                    />
                    <img
                      className="w-full sm:hidden object-cover"
                      // src="https://i.ibb.co/dpXStJk/Rectangle-29.png"
                      src={SecMobile7}
                      alt="sitting place"
                    />
                  </div>
                </Link>
              </div>
              <div className="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
                <Link to='/projetsQuiChangentTout' className="relative group">
                  <div className="relative transform transition-transform duration-500 ease-in-out group-hover:scale-105">
                    <div className="absolute inset-0 bg-[hsla(0,0%,0%,0.50)] z-10"></div>
                    <p className="absolute md:p-10 p-6 text-xs font-medium leading-3 text-white top-0 right-0 z-20">
                      12 Janvier 2025
                    </p>
                    <div className="absolute bottom-0 left-0 z-20 md:p-10 p-6">
                      <h2 className="text-xl font-semibold bg-yellow-600 pl-2 pr-2 pb-0 text-white">Projets qui Changent Tout</h2>
                      {/* <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p> */}
                      <a
                        href="/projetsQuiChangentTout"
                        className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                      >
                        <p className="pr-2 text-sm font-medium leading-none">Voir Plus</p>
                        <svg
                          className="fill-stroke"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.75 12.5L10.25 8L5.75 3.5"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                    <img
                      src={Sec4}
                      alt="sitting place"
                      className="w-full sm:block hidden object-cover"
                    />
                    <img
                      className="w-full sm:hidden object-cover"
                      // src="https://i.ibb.co/dpXStJk/Rectangle-29.png"
                      src={SecMobile8}
                      alt="sitting place"
                    />
                  </div>
                </Link>
                <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
                  <Link to='/planeteEcole' className="sm:w-1/2 relative group mb-5 md:mb-0">
                    <div className="relative transform transition-transform duration-500 ease-in-out group-hover:scale-105">
                      <div className="absolute inset-0 bg-[hsla(0,0%,0%,0.50)] z-10"></div>
                      <p className="absolute top-0 right-0 p-6 text-xs font-medium leading-3 text-white z-20">
                        12 Janvier 2025
                      </p>
                      <div className="absolute bottom-0 left-0 z-20 p-6">
                        <h2 className="text-xl font-semibold bg-orange-900 pl-2 pr-2 pb-0 text-white">Planète École</h2>
                        {/* <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p> */}
                        <a
                          href="/planeteEcole"
                          className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                        >
                          <p className="pr-2 text-sm font-medium leading-none">Voir Plus</p>
                          <svg
                            className="fill-stroke"
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.75 12.5L10.25 8L5.75 3.5"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </a>
                      </div>
                      <img
                        src={Sec5}
                        className="w-full h-full object-cover"
                        alt="chair"
                      />
                    </div>
                  </Link>
                  <Link to="/lesVoixDeLecole" className="sm:w-1/2 relative group">
                    <div className="relative transform transition-transform duration-500 ease-in-out group-hover:scale-105">
                      <div className="absolute inset-0 bg-[hsla(0,0%,0%,0.50)] z-10"></div>
                      <p className="absolute top-0 right-0 p-6 text-xs font-medium leading-3 text-white z-20">
                        12 Janvier 2025
                      </p>
                      <div className="absolute bottom-0 left-0 z-20 p-6">
                        <h2 className="text-xl font-semibold bg-purple-800 pl-2 pr-2 pb-0 text-white">Les Voix de l'École</h2>
                        {/* <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p> */}
                        <a
                          href="/lesVoixDeLecole"
                          className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                        >
                          <p className="pr-2 text-sm font-medium leading-none">Voir Plus</p>
                          <svg
                            className="fill-stroke"
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.75 12.5L10.25 8L5.75 3.5"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </a>
                      </div>
                      <img
                        src={Sec6}
                        className="w-full h-full object-cover"
                        alt="chair"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            {/* --------22-------- */}
            <Link to='/sportEspritEquipe' className="lg:flex items-stretch md:mt-12 mt-8 sm:flex justify-between xl:gap-x-8 gap-x-6">
              <div className="relative group">
                <div className="relative transform transition-transform duration-500 ease-in-out group-hover:scale-105">
                  <div className="absolute inset-0 bg-[hsla(0,0%,0%,0.50)] z-10"></div>
                  <p className="absolute md:p-10 p-6 text-xs font-medium leading-3 text-white top-0 right-0 z-20">
                    12 Janvier 2025
                  </p>
                  <div className="absolute bottom-0 left-0 z-20 md:p-10 p-6">
                    <h2 className="text-xl font-semibold bg-lime-500 pl-2 pr-2 pb-0 text-white">Sport et Esprit d'Équipe</h2>
                    {/* <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p> */}
                    <a
                      href="/sportEspritEquipe"
                      className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                    >
                      <p className="pr-2 text-sm font-medium leading-none">Voir Plus</p>
                      <svg
                        className="fill-stroke"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.75 12.5L10.25 8L5.75 3.5"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                  <img
                    src={Sec7}
                    alt="sitting place"
                    className="w-full sm:block hidden object-cover"
                  />
                  <img
                    className="w-full sm:hidden object-cover"
                    // src="https://i.ibb.co/dpXStJk/Rectangle-29.png"
                    src={SecMobile7}
                    alt="sitting place"
                  />
                </div>
              </div>
              <Link to='/lesEtoilesNotreEcole' className="relative group">
                <div className="relative transform transition-transform duration-500 ease-in-out group-hover:scale-105">
                  <div className="absolute inset-0 bg-[hsla(0,0%,0%,0.50)] z-10"></div>
                  <p className="absolute md:p-10 p-6 text-xs font-medium leading-3 text-white top-0 right-0 z-20">
                    12 Janvier 2025
                  </p>
                  <div className="absolute bottom-0 left-0 z-20 md:p-10 p-6">
                    <h2 className="text-xl font-semibold bg-teal-500 pl-2 pr-2 pb-0 text-white">Les Étoiles de Notre École</h2>
                    {/* <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p> */}
                    <a
              
                      className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                    >
                      <p className="pr-2 text-sm font-medium leading-none">Voir Plus</p>
                      <svg
                        className="fill-stroke"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.75 12.5L10.25 8L5.75 3.5"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                  <img
                    src={Sec8}
                    alt="sitting place"
                    className="w-full sm:block hidden object-cover"
                  />
                  <img
                    className="w-full sm:hidden object-cover"
                    // src="https://i.ibb.co/dpXStJk/Rectangle-29.png"
                    src={SecMobile8}
                    alt="sitting place"
                  />
                </div>
              </Link>
            </Link>
            {/* --------33-------- */}
            <div className="lg:flex items-stretch md:mt-12 mt-8">
              <div className="lg:w-1/2">
                <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
                  <Link to='/ecoleCitoyenne' className="sm:w-1/2 relative group mb-5 md:mb-6">
                    <div className="relative transform transition-transform duration-500 ease-in-out group-hover:scale-105">
                      <div className="absolute inset-0 bg-[hsla(0,0%,0%,0.50)] z-10"></div>
                      <p className="absolute top-0 right-0 p-6 text-xs font-medium leading-3 text-white z-20">
                        12 Janvier 2025
                      </p>
                      <div className="absolute bottom-0 left-0 z-20 p-6">
                        <h2 className="text-xl font-semibold bg-red-600 pl-2 pr-2 pb-0 text-white">École Citoyenne</h2>
                        {/* <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p> */}
                        <a
                          href="/ecoleCitoyenne"
                          className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                        >
                          <p className="pr-2 text-sm font-medium leading-none">Voir Plus</p>
                          <svg
                            className="fill-stroke"
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.75 12.5L10.25 8L5.75 3.5"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </a>
                      </div>
                      <img
                        src={Sec9}
                        className="w-full h-full object-cover"
                        alt="chair"
                      />
                    </div>
                  </Link>
                  <Link to='/creationsEcolieres' className="sm:w-1/2 relative group mb-5 md:mb-6">
                    <div className="relative transform transition-transform duration-500 ease-in-out group-hover:scale-105">
                      <div className="absolute inset-0 bg-[hsla(0,0%,0%,0.50)] z-10"></div>
                      <p className="absolute top-0 right-0 p-6 text-xs font-medium leading-3 text-white z-20">
                        12 Janvier 2025
                      </p>
                      <div className="absolute bottom-0 left-0 z-20 p-6">
                        <h2 className="text-xl font-semibold bg-green-600 pl-2 pr-2 pb-0 text-white">Créations Écolières</h2>
                        {/* <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p> */}
                        <a
                          href="/creationsEcolieres"
                          className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                        >
                          <p className="pr-2 text-sm font-medium leading-none">Voir Plus</p>
                          <svg
                            className="fill-stroke"
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.75 12.5L10.25 8L5.75 3.5"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </a>
                      </div>
                      <img
                        src={Sec10}
                        className="w-full h-full object-cover"
                        alt="chair"
                      />
                    </div>
                  </Link>
                </div>
                <Link to='/leMondePerspective' className="relative group mt-6">
                  <div className="relative transform transition-transform duration-500 ease-in-out group-hover:scale-105">
                    <div className="absolute inset-0 bg-[hsla(0,0%,0%,0.50)] z-10"></div>
                    <p className="absolute md:p-10 p-6 text-xs font-medium leading-3 text-white top-0 right-0 z-20">
                      12 Janvier 2025
                    </p>
                    <div className="absolute bottom-0 left-0 z-20 md:p-10 p-6">
                      <h2 className="text-xl font-semibold bg-sky-700 pl-2 pr-2 pb-0 text-white">Le Monde en Perspective</h2>
                      {/* <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p> */}
                      <a
                        href="/leMondePerspective"
                        className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                      >
                        <p className="pr-2 text-sm font-medium leading-none">Voir Plus</p>
                        <svg
                          className="fill-stroke"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.75 12.5L10.25 8L5.75 3.5"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                    <img
                      src={Sec12}
                      alt="sitting place"
                      className="w-full sm:block hidden object-cover"
                    />
                    <img
                      className="w-full sm:hidden object-cover"
                      // src="https://i.ibb.co/dpXStJk/Rectangle-29.png"
                      src={SecMobile7}
                      alt="sitting place"
                    />
                  </div>
                </Link>
              </div>
              <div className="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
                <Link to='/cultureDecouvertes' className="relative group">
                  <div className="relative transform transition-transform duration-500 ease-in-out group-hover:scale-105">
                    <div className="absolute inset-0 bg-[hsla(0,0%,0%,0.50)] z-10"></div>
                    <p className="absolute md:p-10 p-6 text-xs font-medium leading-3 text-white top-0 right-0 z-20">
                      12 Janvier 2025
                    </p>
                    <div className="absolute bottom-0 left-0 z-20 md:p-10 p-6">
                      <h2 className="text-xl font-semibold bg-yellow-600 pl-2 pr-2 pb-0 text-white">Culture et Découvertes</h2>
                      {/* <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p> */}
                      <a
                        href="/cultureDecouvertes"
                        className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                      >
                        <p className="pr-2 text-sm font-medium leading-none">Voir Plus</p>
                        <svg
                          className="fill-stroke"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.75 12.5L10.25 8L5.75 3.5"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                    <img
                      src={Sec11}
                      alt="sitting place"
                      className="w-full sm:block hidden object-cover"
                    />
                    <img
                      className="w-full sm:hidden object-cover"
                      // src="https://i.ibb.co/dpXStJk/Rectangle-29.png"
                      src={SecMobile8}
                      alt="sitting place"
                    />
                  </div>
                </Link>
                <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
                  <Link to='/lecoleFutur' className="sm:w-1/2 relative group mb-5 md:mb-0">
                    <div className="relative transform transition-transform duration-500 ease-in-out group-hover:scale-105">
                      <div className="absolute inset-0 bg-[hsla(0,0%,0%,0.50)] z-10"></div>
                      <p className="absolute top-0 right-0 p-6 text-xs font-medium leading-3 text-white z-20">
                        12 Janvier 2025
                      </p>
                      <div className="absolute bottom-0 left-0 z-20 p-6">
                        <h2 className="text-xl font-semibold bg-zinc-500 pl-2 pr-2 pb-0 text-white">L'École du Futur</h2>
                        {/* <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p> */}
                        <a
                          href="/lecoleFutur"
                          className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                        >
                          <p className="pr-2 text-sm font-medium leading-none">Voir Plus</p>
                          <svg
                            className="fill-stroke"
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.75 12.5L10.25 8L5.75 3.5"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </a>
                      </div>
                      <img
                        src={Sec13}
                        className="w-full h-full object-cover"
                        alt="chair"
                      />
                    </div>
                  </Link>
                  <Link to='/bienEtreLecole' className="sm:w-1/2 relative group">
                    <div className="relative transform transition-transform duration-500 ease-in-out group-hover:scale-105">
                      <div className="absolute inset-0 bg-[hsla(0,0%,0%,0.50)] z-10"></div>
                      <p className="absolute top-0 right-0 p-6 text-xs font-medium leading-3 text-white z-20">
                        12 Janvier 2025
                      </p>
                      <div className="absolute bottom-0 left-0 z-20 p-6">
                        <h2 className="text-xl font-semibold bg-purple-800 pl-2 pr-2 pb-0 text-white">Bien-Être à l'École</h2>
                        {/* <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p> */}
                        <a
                          href="/bienEtreLecole"
                          className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                        >
                          <p className="pr-2 text-sm font-medium leading-none">Voir Plus</p>
                          <svg
                            className="fill-stroke"
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.75 12.5L10.25 8L5.75 3.5"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </a>
                      </div>
                      <img
                        src={Sec14}
                        className="w-full h-full object-cover"
                        alt="chair"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* VIE SCOLAIRE ÉPANOUIE */}
        <hr className="border-2 border-amber-400 mb-0 w-8/12 " />
        <section className="bg-white dark:bg-gray-900">
          <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                UNE VIE SCOLAIRE ÉPANOUIE
              </h2>
              <p className="mb-4 mt-10">
                L’établissement ELFARSI Privé s’engage à offrir des infrastructures modernes et
                adaptées aux besoins des élèves tout en maintenant des tarifs abordables pour faciliter
                l’accès à l’éducation pour tous car l’excellence ne devrait pas appartenir à une classe
                sociale définie, elle doit être un droit pour Tout élève ambitieux et désireux d’un avenir
                meilleur.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <img
                className="w-full rounded-lg"
                // src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
                src={Vie2}
                alt="office content 1"
              />
              <img
                className="mt-4 w-full lg:mt-10 rounded-lg"
                // src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
                src={Vie1}
                alt="office content 2"
              />
            </div>
          </div>
        </section>
        {/* TV Scolaire */}
        <div className="flex items-center justify-center m-2 lg:m-1 bg-amber-400">
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
                    <a href="/tvScolaire" className="text-gray-900 hover:text-blue-600 font-medium">
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
        {/* Radio scolaire */}
        <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl md:mt-10 xl:max-w-6xl">
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
                  href="/radioScolaire"
                  className="inline-block w-full text-center text-lg font-medium text-gray-100 bg-blue-900 border-solid border-2 py-4 px-10 hover:bg-amber-400 hover:shadow-md md:w-48"
                >
                  Afficher Plus
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-2 border-amber-400 mb-0 w-8/12 " />
        {/* créativité */}
        <section className="bg-white" id="aboutus">
          <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
              <div className="max-w-lg">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                  Créer le sens de la créativité!
                </h2>
                <p className="mt-4 text-gray-600 text-lg text-left">
                  Puisque nous sommes convaincus
                  que la réussite scolaire ne se limite pas à l’acquisition de connaissances théoriques,
                  cette école sera l’école des passions.<br /> Nous accompagnerons votre enfant à la trouver
                  par le biais des arts et/ou du sport.<br />
                  Nous le guiderons vers son épanouissent et pourquoi pas vers son métier de demain.
                </p>
              </div>
              <div className="mt-12 md:mt-0">
                <img
                  // src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
                  src={AboutUs1}
                  alt=""
                  className="object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </section>
        {/* our services section */}
        <section className="py-10" id="services">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Nos Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  // src="https://image3.jdomni.in/banner/13062021/42/5C/B1/45AC18B7F8EE562BC3DDB95D34_1623559815667.png?output-format=webp"
                  src={Cantine}
                  alt="wheat flour grinding"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-medium text-amber-500 mb-2">
                    Cantine
                  </h3>
                  <p className="text-gray-700 text-base">
                    Les enfants ont besoin d’une alimentation équilibrée, notre école en a tenu compte et propose un service de cantine de qualité. Nos repas sont élaborés par notre nutritionniste et soumis à l’approbation de la direction.
                  </p>
                  <Link className="text-amber-400" to="/nosServices">Afficher Plus</Link>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  // src="https://images.unsplash.com/photo-1606854428728-5fe3eea23475?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JhbSUyMGZsb3VyfGVufDB8fDB8fHww"
                  src={TransportScolaire}
                  alt="Coffee"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-medium text-amber-500 mb-2">
                    Transport Scolaire
                  </h3>
                  <p className="text-gray-700 text-base">
                    Vous avez choisi la meilleure qualité d’enseignement pour votre enfant, offrez-lui également le meilleur choix en matière de transport scolaire !
                  </p>
                  <Link className="text-amber-400" to="/nosServices">Afficher Plus</Link>
                </div>
              </div>

              {/* <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  // src="https://image2.jdomni.in/banner/13062021/D2/99/0D/48D7F4AFC48C041DC8D80432E9_1623562146900.png?output-format=webp"
                  src={Sec3}
                  alt="Coffee"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-medium text-gray-800 mb-2">
                    La Scène Parascolaire
                  </h3>
                  <p className="text-gray-700 text-base">
                    Our jowar grinding service is a convenient and affordable way to
                    get fresh, high-quality jowar flour. We use state-of-the-art
                    equipment to grind jowar into a fine powder, which is perfect for
                    making roti, bread, and other dishes.
                  </p>
                  <Link className="text-amber-400" to="/laSceneParascolaire">Afficher Plus</Link>
                  <p />
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  // src="https://images.unsplash.com/photo-1607672632458-9eb56696346b?q=80&w=1914&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  src={Sec4}
                  alt="Coffee"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-medium text-gray-800 mb-2">
                    À Table, C'est l'Actu !
                  </h3>
                  <p className="text-gray-700 text-base">
                    We specializes in the production of high-quality chili powder. Our
                    chili powder is made from the finest, freshest chilies, and we use
                    traditional pounding methods to ensure that our chili powder
                    retains its full flavor and aroma.
                  </p>
                  <Link className="text-amber-400" to="/atableCestActu">Afficher Plus</Link>
                  <p />
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  // src="https://images.unsplash.com/photo-1556910110-a5a63dfd393c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmF3JTIwc3BhZ2hldHRpfGVufDB8fDB8fHww"
                  src={Sec5}
                  alt="Coffee"
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <div className="p-6 bg-white text-center rounded-b-lg md:min-h-full">
                  <h3 className="text-xl font-medium text-gray-800 mb-2">
                    Planète École
                  </h3>
                  <p className="text-gray-700 text-base">
                    <span className="font-medium underline">Our speciality is </span>
                    Bappa Flour Mill offers a variety of flavored spaghetti dishes
                    that are sure to tantalize your taste buds. Grind jowar into a fine powder, which is perfect for making roti, bread, and other dishes.
                  </p>
                  <Link className="text-amber-400" to="/planeteEcole">Afficher Plus</Link>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  // src="https://media.istockphoto.com/id/1265641298/photo/fried-papad.jpg?s=612x612&w=0&k=20&c=e_iEy4CTvU6Thn02zGgKt_TiSYAheCKmgfTF5j52ovU="
                  src={Sec6}
                  alt="papad"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-medium text-gray-800 mb-2">
                    Les Voix de l'École
                  </h3>
                  <p className="text-gray-700 text-base">
                    Our company produces high-quality rice papad that is made with the
                    finest ingredients. We use traditional methods to make our papad,
                    which gives it a unique flavor and texture. Our papad is also
                    gluten-free and vegan.
                  </p>
                  <Link className="text-amber-400" to="/lesVoixDeLecole">Afficher Plus</Link>
                  <p />
                </div>
              </div> */}

            </div>
          </div>
        </section>
        {/* Abdelhaq ELFARSI */}
        <div id="about" className="relative bg-white overflow-hidden mt-16 lg:mt-1">
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-14 xl:pb-14">
              <svg
                className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                fill="currentColor"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <polygon points="50,0 100,0 50,100 0,100" />
              </svg>
              <div className="pt-1" />
              <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-10">
                <div className="sm:text-center lg:text-left lg:w-11/12">
                  <h2 className="my-5 text-2xl tracking-tight font-extrabold md:text-center text-gray-900 sm:text-3xl md:text-4xl">
                    Abdelhaq EL FARSI
                  </h2>
                  <p className="text-gray-700 text-lg text-center mb-4">
                    Le fondateur de EFP
                  </p>
                  <div>
                    <p className="leading-relaxed">
                      Il était un fois un homme à oualidia, qui s’appelait ABDELHAQ il avait toujours rêvé de faire une différence dans la vie des gens de sa communauté. Un jour, alors qu’il prenait tranquillement son café du matin, il vit des enfants jouer dans la rue, faute d’école pour les accueillir. Il vit des parents lutter pour donner à leurs enfants l’éducation qu’ils méritaient. Et soudain, il eut une idée
                      construire une école.
                      ABDELHAQ était déterminé. Il travailla jour et nuit pour concrétiser son rêve. Il collecta des fonds, rencontra des donateurs, et mobilisa la communauté. Les obstacles étaient nombreux, mais il ne se laissa pas décourager.
                      Finalement, après des mois de travail acharné, l’école ouvrit ses portes les enfants étaient ravis, les parents étaient reconnaissants. ABDELHAQ avait réalisé son rêve : offrir une éducation de qualité à ceux qui en avaient...
                      {showMore && (
                        <span>
                          le plus besoin.
                          L’établissement devint l’école «espoir » une institution déterminée à combattre le décrochage scolaire et à offrir une éducation de qualité aux élèves issus de milieux divers. Située dans une zone rurale, elle accueille des élèves venant de très loin, souvent dans des conditions difficiles.
                          L’école propose un environnement d’apprentissage stimulant et personnalisé, avec des enseignants dévoués et des programmes adaptés aux besoins de chaque élève. Les élèves bénéficient également d’un soutien scolaire et psychologique pour les aider à surmonter les obstacles et à atteindre leurs objectifs.
                          Grâce à son approche holistique et son engagement envers les élèves, l’école « espoir » a réussi à réduire significativement le taux de décrochage scolaire et a augmenté l’activité économique en créant des opportunités d’emploi.
                          L’école a rapidement pris son essor ; ABDELHAQ a réalisé son rêve :
                          offrir une éducation de qualité à ceux qui en avaient le plus besoin l’école est devenue un lieu d’apprentissage, de croissance et de
                          développement pour les générations futures.
                          L’histoire de ABDELHAQ et de son école est un exemple inspirant de la façon dont une idée peut devenir réalité grâce à la détermination et à la collaboration.
                        </span>
                      )}
                    </p>
                    {!showMore ? (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          setShowMore(true);
                        }}
                        className="mt-4 text-blue-500 focus:outline-none"
                      >
                        Afficher Plus
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          setShowMore(false);
                        }}
                        className="mt-4 text-blue-500 focus:outline-none"
                      >
                        Masquer
                      </button>
                    )}
                  </div>
                </div>
              </main>
            </div>
          </div>
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
              className="h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full"
              // src="https://cdn.pixabay.com/photo/2016/03/23/04/01/woman-1274056_960_720.jpg"
              src={Abdelhaq}
              alt=""
            />
          </div>
        </div >
        {/* Mme nadia 3*/}
        <div div className="w-full h-auto bg-gray-100 px-4 md:px-10 pt-10 mb-0" >
          <div className="relative mt-16 mb-10 max-w-sm md:max-w-full mx-auto border-2">
            <div className="rounded overflow-hidden shadow-md bg-gray-600">
              <div className="absolute -mt-20 w-full flex justify-center">
                <div className="h-32 w-32">
                  <img alt=""
                    // src="https://randomuser.me/api/portraits/women/49.jpg"
                    src={Nadia}
                    className="rounded-full object-cover h-full w-full shadow-md"
                  />
                </div>
              </div>
              <div className="px-6 mt-16">
                <h1 className="text-amber-400 font-bold text-3xl text-center mb-1">Mme Nadia ZOUITINE</h1>
                <p className="text-amber-300 text-sm text-center">
                  Superviseur Générale
                </p>
                <p className="text-left text-gray-100 text-base pt-3 font-normal">
                  Je suis ravie de vous accueillir sur notre nouveau site internet et de vous présenter
                  notre projet éducatif pour vos enfants. Notre priorité est de garantir une éducation de
                  qualité pour tous sans distinction de quartier ou de niveau social.<br />
                  {/* L’établissement ELFARSI s’engage à offrir des infrastructures modernes et
                  adaptées aux besoins des élèves tout en maintenant des tarifs abordables pour faciliter
                  l’accès à l’éducation pour tous car l’excellence ne devrait pas appartenir à une classe
                  sociale définie, elle doit être un droit pour Tout élève ambitieux et désireux d’un avenir
                  meilleur.<br /> */}
                  Au sein de notre école, je veillerai personnellement à maintenir une communication
                  fluide entre la direction et les parents d’élèves.<br />
                  Nous serons toujours ravis de vous accueillir au sein de nos locaux pour vous
                  écouter et répondre à vos demandes. A vous rassurer s’il le faut. L’éducation de votre
                  enfant est un objectif commun sa réussite couronnera le fruit de notre travail et
                  témoignera d’un gage de qualité pour notre école.
                  {/* Et puisque nous sommes convaincus
                  que la réussite scolaire ne se limite pas à l’acquisition de connaissances théoriques,
                  cette école sera l’école des passions. Nous accompagnerons votre enfant à la trouver
                  par le biais des arts et/ou du sport. */}<br />
                  Nous le guiderons vers son épanouissent et pourquoi pas vers son métier de demain.
                  Tout ceci sera encadré par un système de valeurs qui nous est cher et sur lequel nous
                  serons intransigeants à tout point de vue.<br />
                  Nous voulons former pour notre pays un citoyen engagé. Un citoyen qui l’aime. Fier de
                  ses origines et respectueux de son environnement, il sera un ambassadeur digne de
                  représenter son pays ou qu’il soit dans le monde.
                </p>
                <div className="w-full flex justify-center pt-5 pb-5">
                  <a href="/" className="mx-5">
                    <div aria-label="Twitter">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#718096"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-twitter"
                      >
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                    </div>
                  </a>
                  <a href="/" className="mx-5">
                    <div aria-label="Instagram">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#718096"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-instagram"
                      >
                        <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div >
        {/* Sponsors */}
        {/* <div div className=" mx-auto px-2 mt-4 pb-6" >
          <div className="flex flex-col justify-center">
            <div className="text-center">
              <h2 className="font-semibold text-3xl text-amber-500">Nos Sponsors</h2>
              <p className="mx-auto mt-2 text-gray-600">
                Nous sommes reconnaissants à chaque entreprise qui a sponsorisé notre plugin et qui nous a aidés à continuer à travailler dessus.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-10 mt-2 md:justify-around">
              <div className="text-gray-400 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={120}
                  height={60}
                  fillRule="evenodd"
                >
                  <g
                    transform="matrix(.06928 0 0 .06928 7.367398 13.505331)"
                    fill="none"
                  >
                    <circle r="50.167" cy="237.628" cx="269.529" fill="#00d8ff" />
                    <g stroke="#00d8ff" strokeWidth={24}>
                      <path d="M269.53 135.628c67.356 0 129.928 9.665 177.107 25.907 56.844 19.57 91.794 49.233 91.794 76.093 0 27.99-37.04 59.503-98.083 79.728-46.15 15.29-106.88 23.272-170.818 23.272-65.554 0-127.63-7.492-174.3-23.44-59.046-20.182-94.61-52.103-94.61-79.56 0-26.642 33.37-56.076 89.415-75.616 47.355-16.51 111.472-26.384 179.486-26.384z"></path>
                      <path d="M180.736 186.922c33.65-58.348 73.28-107.724 110.92-140.48C337.006 6.976 380.163-8.48 403.43 4.937c24.248 13.983 33.042 61.814 20.067 124.796-9.8 47.618-33.234 104.212-65.176 159.6-32.75 56.788-70.25 106.82-107.377 139.272-46.98 41.068-92.4 55.93-116.185 42.213-23.08-13.3-31.906-56.92-20.834-115.233 9.355-49.27 32.832-109.745 66.8-168.664z"></path>
                      <path d="M180.82 289.482C147.075 231.2 124.1 172.195 114.51 123.227c-11.544-59-3.382-104.11 19.864-117.566 24.224-14.024 70.055 2.244 118.14 44.94 36.356 32.28 73.688 80.837 105.723 136.173 32.844 56.733 57.46 114.21 67.036 162.582 12.117 61.213 2.31 107.984-21.453 121.74-23.057 13.348-65.25-.784-110.24-39.5-38.013-32.71-78.682-83.253-112.76-142.115z"></path>
                    </g>
                  </g>
                  <path
                    d="M64.62 38.848l-4.26-6.436c2.153-.19 4.093-1.75 4.093-4.6 0-2.9-2.058-4.756-4.945-4.756h-6.34v15.78h1.964v-6.27h3.147l4.022 6.27zm-5.347-7.997h-4.14v-6.033h4.14c1.87 0 3.147 1.23 3.147 3.005s-1.278 3.03-3.147 3.03zm12.658 8.28c1.87 0 3.407-.615 4.543-1.75l-.852-1.16c-.9.923-2.224 1.443-3.525 1.443-2.46 0-3.975-1.798-4.117-3.95h9.25v-.45c0-3.43-2.035-6.128-5.49-6.128-3.265 0-5.63 2.674-5.63 5.986 0 3.573 2.437 6 5.82 6zm3.55-6.72h-7.5c.095-1.75 1.3-3.81 3.738-3.81 2.603 0 3.738 2.106 3.762 3.81zm13.534 6.436v-7.855c0-2.768-2.01-3.857-4.424-3.857-1.87 0-3.336.615-4.566 1.893l.828 1.23c1.017-1.088 2.13-1.585 3.502-1.585 1.656 0 2.887.875 2.887 2.413v2.058c-.923-1.065-2.224-1.562-3.786-1.562-1.94 0-4 1.207-4 3.762 0 2.484 2.058 3.786 4 3.786 1.538 0 2.84-.544 3.786-1.585v1.3zm-4.92-.994c-1.656 0-2.816-1.04-2.816-2.484 0-1.467 1.16-2.508 2.816-2.508 1.254 0 2.46.473 3.147 1.42v2.153c-.686.946-1.893 1.42-3.147 1.42zm13.5 1.278c2.082 0 3.312-.852 4.188-1.987l-1.183-1.088c-.757 1.017-1.727 1.49-2.9 1.49-2.437 0-3.95-1.893-3.95-4.424s1.514-4.4 3.95-4.4c1.183 0 2.153.45 2.9 1.49l1.183-1.088c-.875-1.136-2.106-1.987-4.188-1.987-3.407 0-5.702 2.603-5.702 5.986 0 3.407 2.295 6 5.702 6zm9.56 0c1.04 0 1.68-.308 2.13-.733l-.52-1.325c-.237.26-.7.473-1.207.473-.78 0-1.16-.615-1.16-1.467v-7.098h2.32V27.42h-2.32v-3.123h-1.775v3.123h-1.893v1.562h1.893v7.477c0 1.704.852 2.674 2.532 2.674z"
                    fill="#00d8ff"
                  />
                </svg>
              </div>
              <div className="text-gray-400 ">
                <svg
                  width={82}
                  height={40}
                  viewBox="0 0 148 90"
                  className="text-black "
                >
                  <path
                    d="M34.992 23.495h27.855v2.219H37.546v16.699h23.792v2.219H37.546v18.334h25.591v2.219H34.992v-41.69zm30.35 0h2.96l13.115 18.334 13.405-18.334L113.055.207 83.1 43.756l15.436 21.429H95.46L81.417 45.683 67.316 65.185h-3.018L79.85 43.756 65.343 23.495zm34.297 2.219v-2.219h31.742v2.219h-14.623v39.47h-2.554v-39.47H99.64zM.145 23.495h3.192l44.011 66.003L29.16 65.185 2.814 26.648l-.116 38.537H.145v-41.69zm130.98 38.801c-.523 0-.914-.405-.914-.928 0-.524.391-.929.913-.929.528 0 .913.405.913.929 0 .523-.385.928-.913.928zm2.508-2.443H135c.019.742.56 1.24 1.354 1.24.888 0 1.391-.535 1.391-1.539v-6.356h1.391v6.362c0 1.808-1.043 2.849-2.77 2.849-1.62 0-2.732-1.01-2.732-2.556zm7.322-.08h1.379c.118.853.95 1.395 2.149 1.395 1.117 0 1.937-.58 1.937-1.377 0-.685-.521-1.097-1.708-1.377l-1.155-.28c-1.62-.38-2.36-1.166-2.36-2.487 0-1.602 1.304-2.668 3.26-2.668 1.82 0 3.15 1.066 3.23 2.58h-1.354c-.13-.828-.85-1.346-1.894-1.346-1.1 0-1.832.53-1.832 1.34 0 .642.472 1.01 1.64 1.284l.987.243c1.838.43 2.596 1.178 2.596 2.53 0 1.72-1.33 2.799-3.453 2.799-1.987 0-3.323-1.029-3.422-2.637z"
                    fill="currentColor"
                    fillRule="nonzero"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div > */}

      </div >
      <BackToTop />
    </>
  );
};

export default Home;
