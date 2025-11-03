import React, { useState } from 'react';
import BackToTop from "../../Components/BackToTop";

const SportEspritEquipe = () => {
  window.scrollTo(0, 0);
  const [showMore, setShowMore] = useState(false);

  const toggleText = () => {
    setShowMore(!showMore);
  };
  return (
    <>
      <div className='bg-gray-100'>
        <main className="container mx-auto mt-0">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-8/12 px-4 mb-0">
              <div className="relative p-4">
                <div className="max-w-3xl mx-auto">
                  <div className="mt-20 bg-gray-100 rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                    <div className="">
                      <a
                        href="/"
                        className="text-gray-800 hover:text-gray-700 transition duration-500 ease-in-out text-sm"
                      >
                        Article
                      </a>
                      <h1 href="/" className="text-gray-900 font-bold text-4xl">
                        Sport et Esprit d'Équipe
                      </h1>
                      <div className="py-5 text-sm font-regular text-gray-900 flex">
                        <span className="mr-3 flex flex-row items-center">
                          <svg
                            className="text-gray-800"
                            fill="currentColor"
                            height="13px"
                            width="13px"
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 512 512"
                            style={{ enableBackground: "new 0 0 512 512" }}
                            xmlSpace="preserve"
                          >
                            <g>
                              <g>
                                <path
                                  d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"
                                />
                              </g>
                            </g>
                          </svg>
                          <span className="ml-1">6 mins ago</span>
                        </span>
                        <a
                          href="/"
                          className="flex flex-row items-center hover:text-gray-800  mr-3"
                        >
                          <svg
                            className="text-gray-800"
                            fill="currentColor"
                            height="16px"
                            aria-hidden="true"
                            role="img"
                            focusable="false"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill="currentColor"
                              d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                            ></path>
                            <path d="M0 0h24v24H0z" fill="none" />
                          </svg>
                          <span className="ml-1">AliSher Azimi</span>
                        </a>
                        <a
                          href="/"
                          className="flex flex-row items-center hover:text-gray-800"
                        >
                          <svg
                            className="text-gray-800"
                            fill="currentColor"
                            height="16px"
                            aria-hidden="true"
                            role="img"
                            focusable="false"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 18 18"
                          >
                            <path
                              fill=""
                              d="M15.4496399,8.42490555 L8.66109799,1.63636364 L1.63636364,1.63636364 L1.63636364,8.66081885 L8.42522727,15.44178 C8.57869221,15.5954158 8.78693789,15.6817418 9.00409091,15.6817418 C9.22124393,15.6817418 9.42948961,15.5954158 9.58327627,15.4414581 L15.4486339,9.57610048 C15.7651495,9.25692435 15.7649133,8.74206554 15.4496399,8.42490555 Z M16.6084423,10.7304545 L10.7406818,16.59822 C10.280287,17.0591273 9.65554997,17.3181054 9.00409091,17.3181054 C8.35263185,17.3181054 7.72789481,17.0591273 7.26815877,16.5988788 L0.239976954,9.57887876 C0.0863319284,9.4254126 0,9.21716044 0,9 L0,0.818181818 C0,0.366312477 0.366312477,0 0.818181818,0 L9,0 C9.21699531,0 9.42510306,0.0862010512 9.57854191,0.239639906 L16.6084423,7.26954545 C17.5601275,8.22691012 17.5601275,9.77308988 16.6084423,10.7304545 Z M5,6 C4.44771525,6 4,5.55228475 4,5 C4,4.44771525 4.44771525,4 5,4 C5.55228475,4 6,4.44771525 6,5 C6,5.55228475 5.55228475,6 5,6 Z"
                            ></path>
                          </svg>
                          <span className="ml-1">activewear</span>
                        </a>
                      </div>
                      {/* <img alt=""
                        src="https://via.placeholder.com/1200x600"
                        className="w-full h-96 object-cover rounded mt-8"
                       /> */}
                      <iframe
                        className="w-full h-48 lg:h-96 m-0 lg:m-1 mt-2 object-cover rounded-lg shadow-md"
                        src="https://www.youtube.com/embed/QwodMbJBoI8?si=3br7DoM6cjxnDMUR"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      ></iframe>
                      <h1 className="py-2 font-bold text-xl">Article Heading</h1>
                      <p className="leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non ipsum vel
                        nunc commodo hendrerit sit amet vel nisi. Donec sodales maximus justo, nec
                        dictum lectus malesuada non. Sed auctor ultrices tellus non varius.
                      </p>
                      <span className={showMore ? "" : "hidden"} id="more-text">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text...
                      </span>
                      <blockquote
                        className={`text-md italic leading-8 mt-5 text-amber-400 font-semibold ${showMore ? "" : "hidden"
                          }`}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text...
                      </blockquote>
                      <button onClick={toggleText} className="mt-1 text-gray-800 focus:outline-none">
                        {showMore ? "Hide" : "Read More"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-4/12 lg:w-4/12 mt-0 md:mt-28 px-4 mb-8">
              <div className="bg-gray-50 ml-4 lg:ml-10 lg:pl-10 px-4 py-6 rounded-lg sticky top-4 border-2 border-gray-300 border-dashed w-11/12">
                <h3 className="text-xl font-bold mb-3 ml-8 text-amber-300 border-b-2 border-amber-300 w-1/2">RUBRIQUES</h3>
                <ul className="list-none list-inside">
                  <li>
                    <a href="/lechoQuotidiene" className="text-md ml-6 font-semibold text-gray-500 hover:text-amber-400">
                      L'écho du Quotidiene
                    </a>
                    <div className='border-b-2 border-dashed w-11/12 border-gray-300 mt-2 lg:mt-3 mb-2 lg:mb-3'></div>
                  </li>
                  <li>
                    <a href="/projetsQuiChangentTout" className="text-md ml-6 font-semibold text-gray-500 hover:text-amber-400">
                      Projets qui Changent Tout
                    </a>
                    <div className='border-b-2 border-dashed w-11/12 border-gray-300 mt-2 lg:mt-3 mb-2 lg:mb-3'></div>
                  </li>
                  <li>
                    <a href="/laSceneParascolaire" className="text-md ml-6 font-semibold text-gray-500 hover:text-amber-400">
                      La Scène Parascolaire
                    </a>
                    <div className='border-b-2 border-dashed w-11/12 border-gray-300 mt-2 lg:mt-3 mb-2 lg:mb-3'></div>
                  </li>
                  <li>
                    <a href="/atableCestActu" className="text-md ml-6 font-semibold text-gray-500 hover:text-amber-400">
                      À Table, C'est l'Actu !
                    </a>
                    <div className='border-b-2 border-dashed w-11/12 border-gray-300 mt-2 lg:mt-3 mb-2 lg:mb-3'></div>
                  </li>
                  <li>
                    <a href="/planeteEcole" className="text-md ml-6 font-semibold text-gray-500 hover:text-amber-400">
                      Planète École
                    </a>
                    <div className='border-b-2 border-dashed w-11/12 border-gray-300 mt-2 lg:mt-3 mb-2 lg:mb-3'></div>
                  </li>
                  <li>
                    <a href="/lesVoixDeLecole" className="text-md ml-6 font-semibold text-gray-500 hover:text-amber-400">
                      Les Voix de l'École
                    </a>
                    <div className='border-b-2 border-dashed w-11/12 border-gray-300 mt-2 lg:mt-3 mb-2 lg:mb-3'></div>
                  </li>
                  <li>
                    <a href="/ecoleCitoyenne" className="text-md ml-6 font-semibold text-gray-500 hover:text-amber-400">
                      École Citoyenne
                    </a>
                    <div className='border-b-2 border-dashed w-11/12 border-gray-300 mt-2 lg:mt-3 mb-2 lg:mb-3'></div>
                  </li>
                  <li>
                    <a href="/creationsEcolieres" className="text-md ml-6 font-semibold text-gray-500 hover:text-amber-400">
                      Créations Écolières
                    </a>
                    <div className='border-b-2 border-dashed w-11/12 border-gray-300 mt-2 lg:mt-3 mb-2 lg:mb-3'></div>
                  </li>
                  <li>
                    <a href="/lecoleFutur" className="text-md ml-6 font-semibold text-gray-500 hover:text-amber-400">
                      L'École du Futur
                    </a>
                    <div className='border-b-2 border-dashed w-11/12 border-gray-300 mt-2 lg:mt-3 mb-2 lg:mb-3'></div>
                  </li>
                  <li>
                    <a href="/bienEtreLecole" className="text-md ml-6 font-semibold text-gray-500 hover:text-amber-400">
                      Bien-Être à l'École
                    </a>
                    <div className='border-b-2 border-dashed w-11/12 border-gray-300 mt-2 lg:mt-3 mb-2 lg:mb-3'></div>
                  </li>
                  <li>
                    <a href="/leMondePerspective" className="text-md ml-6 font-semibold text-gray-500 hover:text-amber-400">
                      Le Monde en Perspective
                    </a>
                    <div className='border-b-2 border-dashed w-11/12 border-gray-300 mt-2 lg:mt-3 mb-2 lg:mb-3'></div>
                  </li>
                  <li>
                    <a href="/lesEtoilesNotreEcole" className="text-md ml-6 font-semibold text-gray-500 hover:text-amber-400">
                      Les Étoiles de Notre École
                    </a>
                    <div className='border-b-2 border-dashed w-11/12 border-gray-300 mt-2 lg:mt-3 mb-2 lg:mb-3'></div>
                  </li>
                  <li>
                    <a href="/sportEspritEquipe" className="text-md ml-6 font-semibold text-gray-500 hover:text-amber-400">
                      Sport et Esprit d'Équipe
                    </a>
                    <div className='border-b-2 border-dashed w-11/12 border-gray-300 mt-2 lg:mt-3 mb-2 lg:mb-3'></div>
                  </li>
                  <li>
                    <a href="/cultureDecouvertes" className="text-md ml-6 font-semibold text-gray-500 hover:text-amber-400">
                      Culture et Découvertes
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
      <BackToTop />
    </>
  )
}

export default SportEspritEquipe