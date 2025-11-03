

import React, { Fragment, useState, useEffect } from "react";
import Logo from "../Images/farsiLogo.png";
import { Dialog, Transition } from "@headlessui/react";
import { Bars3Icon, MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import "../Pages/Home.css";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mockData = [
    "Accueil",
    "Établissement",
    "Nos Classes",
    "EFP MÉDIA",
    "Nos Activités",
    "Contact",
    "Notre Pédagogie",
    "Galerie",
    "Nos Services",
  ];

  const handleSearch = () => {
    if (searchTerm.trim()) {
      const results = mockData.filter((item) =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
      );
      console.log("Search Results:", results);
      alert(`Found: ${results.join(", ")}`);
    }
  };

  return (
    <div>
      {/* Mobile Menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 md:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-1/2 max-w-xs flex-col overflow-y-auto bg-gray-300 pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="relative mt-14 -m-3 mb-0 inline-flex items-center justify-center rounded-md p-2 text-amber-400"
                    onClick={() => setOpen(false)}
                  >
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    <p className="ml-8 text-lg">Hide</p>
                  </button>
                </div>
                <div className="space-y-6 border-t border-amber-400 px-4 py-6">
                  <Link to="/" className="-m-2 block p-2 text-md text-center text-blue-600">
                    ACCUEIL
                  </Link>
                  <Link to="/etablissement" className="-m-2 block p-2 text-md text-center text-blue-600">
                    ÉTABLISSEMENT
                  </Link>
                  <Link to="/classes" className="-m-2 block p-2 text-md text-center text-blue-600">
                    NOS CLASSES
                  </Link>
                  <Link to="/media" className="-m-2 block p-2 text-md text-center text-blue-600">
                    EFP MÉDIA
                  </Link>
                  <Link to="/activites" className="-m-2 block p-2 text-md text-center text-blue-600">
                    NOS ACTIVITÉS
                  </Link>
                  <Link to="/contactUs" className="-m-2 block p-2 text-md text-center text-blue-600">
                    CONTACT
                  </Link>
                </div>
                <img className="ml-4 w-36 mt-6" src={Logo} alt="" />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Desktop Menu */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 shadow-md ${scrolling ? "bg-gray-900" : "bg-transparent"
          }`}
      >
        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="border-b-2 border-amber-400">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="relative rounded-md bg-transparant p-2 text-amber-400 md:hidden"
                onClick={() => setOpen(true)}
              >
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              <div className="ml-12 flex md:ml-6">
                <Link to="/">
                  <img className="h-12 w-48 md:w-44 md:mr-14" src={Logo} alt="Logo" />
                </Link>
              </div>

              <div className="hidden md:ml-8 md:block md:self-stretch">
                <div className="flex h-full space-x-8">
                  <Link
                    to="/"
                    className="flex items-center text-md font-medium text-amber-400 hover:text-amber-300"
                  >
                    ACCUEIL
                  </Link>
                  <div className="relative group flex">
                    <Link
                      to="/etablissement"
                      className="flex items-center text-md font-medium text-amber-400 hover:text-amber-300"
                    >
                      ÉTABLISSEMENT
                      <svg
                        className="ml-1 h-5 w-5 text-amber-400 hover:text-amber-300"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 7.22a.75.75 0 0 1 1.06 0L10 10.94l3.72-3.72a.75.75 0 0 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 8.28a.75.75 0 0 1 0-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                    <div className="absolute hidden group-hover:block bg-gray-900 shadow-lg lg:-right-6 z-10 lg:mt-16 lg:text-md lg:w-48 origin-top-right divide-y divide-gray-600 rounded-md bg-transparant focus:outline-none">
                      <Link
                        to="/galerie"
                        className="block px-4 py-2 text-sm font-semibold text-amber-300 hover:bg-gray-400"
                      >
                        GALERIE
                      </Link>
                      <Link
                        to="/pedagogie"
                        className="block px-4 py-2 text-sm font-semibold text-amber-300 hover:bg-gray-400"
                      >
                        NOTRE PÉDAGOGIE
                      </Link>
                      <Link
                        to="/NosServices"
                        className="block px-4 py-2 text-sm font-semibold text-amber-300 hover:bg-gray-400"
                      >
                        NOS SERVICES
                      </Link>
                    </div>
                  </div>

                  {/* Dropdown for NOS CLASSES */}
                  <div className="relative group flex">
                    <Link
                      to="/classes"
                      className="flex items-center text-md font-medium text-amber-400 hover:text-amber-300"
                    >
                      NOS CLASSES
                      <svg
                        className="ml-1 h-5 w-5 text-amber-400 hover:text-amber-300"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 7.22a.75.75 0 0 1 1.06 0L10 10.94l3.72-3.72a.75.75 0 0 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 8.28a.75.75 0 0 1 0-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                    <div className="absolute hidden group-hover:block bg-gray-900 shadow-lg lg:-right-6 z-10 lg:mt-16 lg:text-md lg:w-48 origin-top-right divide-y divide-gray-600 rounded-md bg-transparant focus:outline-none">
                      <Link
                        to="/prescolaire"
                        className="block px-4 py-2 text-sm font-semibold text-amber-300 hover:bg-gray-400"
                      >
                        PRÉSCOLAIRE
                      </Link>
                      <Link
                        to="/primaire"
                        className="block px-4 py-2 text-sm font-semibold text-amber-300 hover:bg-gray-400"
                      >
                        PRIMAIRE
                      </Link>
                      <Link
                        to="/college"
                        className="block px-4 py-2 text-sm font-semibold text-amber-300 hover:bg-gray-400"
                      >
                        COLLÈGE
                      </Link>
                      <Link
                        to="/lycee"
                        className="block px-4 py-2 text-sm font-semibold text-amber-300 hover:bg-gray-400"
                      >
                        LYCÉE
                      </Link>
                    </div>
                  </div>
                  {/* MEDIA */}
                  <div className="relative group flex">
                    <Link
                      to="/media"
                      className="flex items-center text-md font-medium text-amber-400 hover:text-amber-300"
                    >
                      EFP MÉDIA
                      <svg
                        className="ml-1 h-5 w-5 text-amber-400 hover:text-amber-300"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 7.22a.75.75 0 0 1 1.06 0L10 10.94l3.72-3.72a.75.75 0 0 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 8.28a.75.75 0 0 1 0-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                    <div className="absolute hidden group-hover:block bg-gray-900 shadow-lg lg:-right-6 z-10 lg:mt-16 lg:text-md lg:w-48 origin-top-right divide-y divide-gray-600 rounded-md bg-transparant focus:outline-none">
                      <Link
                        to="/tvScolaire"
                        className="block px-4 py-2 text-sm font-semibold text-amber-300 hover:bg-gray-400"
                      >
                        TV Scolaire
                      </Link>
                      <Link
                        to="/radioScolaire"
                        className="block px-4 py-2 text-sm font-semibold text-amber-300 hover:bg-gray-400"
                      >
                        Radio Scolaire
                      </Link>
                    </div>
                  </div>
                  {/* Activités */}
                  {/* <Link
                    to="/Activites"
                    className="flex items-center text-md font-medium text-amber-400 hover:text-amber-300"
                  >
                    NOS ACTIVITÉS
                  </Link> */}
                  <div className="relative group flex">
                    <Link
                      to="/Activites"
                      className="flex items-center text-md font-medium text-amber-400 hover:text-amber-300"
                    >
                      NOS ACTIVITÉS
                      <svg
                        className="ml-1 h-5 w-5 text-amber-400 hover:text-amber-300"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 7.22a.75.75 0 0 1 1.06 0L10 10.94l3.72-3.72a.75.75 0 0 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 8.28a.75.75 0 0 1 0-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                    <div className="absolute hidden group-hover:block bg-gray-900 shadow-lg lg:-right-6 z-10 lg:mt-16 lg:text-md lg:w-48 origin-top-right divide-y divide-gray-600 rounded-md bg-transparant focus:outline-none">
                      <Link
                        to="/clubs"
                        className="block px-4 py-2 text-sm font-semibold text-amber-300 hover:bg-gray-400"
                      >
                        Les Clubs
                      </Link>
                      <Link
                        to="/concerts"
                        className="block px-4 py-2 text-sm font-semibold text-amber-300 hover:bg-gray-400"
                      >
                        Les Concerts
                      </Link>
                      <Link
                        to="/voyages"
                        className="block px-4 py-2 text-sm font-semibold text-amber-300 hover:bg-gray-400"
                      >
                        Les Voyages
                      </Link>
                    </div>
                  </div>
                  {/* Contact */}
                  <Link
                    to="/ContactUs"
                    className="flex items-center text-md font-medium text-amber-400 hover:text-amber-300"
                  >
                    CONTACT
                  </Link>
                </div>
              </div>

              <div className="ml-auto flex items-center">
                <div className="relative">
                  <button
                    onClick={() => setSearchOpen(!searchOpen)}
                    className="p-2 text-amber-400 lg:text-amber-400 hover:text-amber-300"
                  >
                    <MagnifyingGlassIcon className="h-6 w-24" aria-hidden="true" />
                  </button>
                  {searchOpen && (
                    <div className="absolute right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg">
                      <input
                        type="text"
                        className="block w-full p-2 bg-gray-200 text-gray-800 placeholder-gray-500 focus:outline-none"
                        placeholder="Rechercher..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
