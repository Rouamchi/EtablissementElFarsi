import React from 'react'
import BackToTop from "../Components/BackToTop";
import Sec1 from "../Images/Sec1.png"
import Sec2 from "../Images/Sec2.png"
import Sec3 from "../Images/Sec3.png"
import Sec4 from "../Images/Sec4.png"
import Sec5 from "../Images/Sec5.png"
import Sec6 from "../Images/Sec6.png"
import Sec7 from "../Images/Sec7.png"
import Sec8 from "../Images/Sec8.png"
import Sec9 from "../Images/Sec9.png"
import Sec10 from "../Images/Sec10.png"
import Sec11 from "../Images/Sec11.png"
import Sec12 from "../Images/Sec12.png"
import Sec13 from "../Images/Sec13.png"
import Sec14 from "../Images/Sec14.png"
import CoverGalerie from "../Images/CoverGalerie.png"
import SecMobile3 from "../Images/SecMobile3.png"
import SecMobile4 from "../Images/SecMobile4.png"
import SecMobile7 from "../Images/SecMobile7.png"
import SecMobile8 from "../Images/SecMobile8.png"


const Galerie = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <div className='bg-gray-100'>
        <div className="relative h-96 w-11/12 mx-auto">
          <div className="absolute inset-0 bg-black bg-opacity-50 mt-24" />
          <img
            src={CoverGalerie}
            alt=""
            className="absolute inset-0 w-full h-full object-cover filter mt-24"
          />
          <div className='absolute inset-0 h-full bg-black bg-opacity-50 mt-24'>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h1 className="text-4xl text-white font-bold">GALERIE</h1>
              <p className="text-xl text-white mt-4">If you're looking for random paragraphs, you've come to the right
                place.</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-16">
          <div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
            <div role="main" className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-semibold leading-9 text-center text-gray-800 dark:text-gray-50">
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
                        src={Sec9}
                        className="w-full h-full object-cover"
                        alt="chair"
                      />
                    </div>
                  </div>
                  <div className="sm:w-1/2 relative group">
                    <div className="relative transform transition-transform duration-500 ease-in-out group-hover:scale-105">
                      <div className="absolute inset-0 bg-[hsla(0,0%,0%,0.50)] z-10"></div>
                      <img
                        src={Sec10}
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
                      src={Sec11}
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
                      src={Sec12}
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
                        src={Sec13}
                        className="w-full h-full object-cover"
                        alt="chair"
                      />
                    </div>
                  </div>
                  <div className="sm:w-1/2 relative group">
                    <div className="relative transform transition-transform duration-500 ease-in-out group-hover:scale-105">
                      <div className="absolute inset-0 bg-[hsla(0,0%,0%,0.50)] z-10"></div>
                      <img
                        src={Sec14}
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
              </div>
              <div className="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
                <div className="relative group">
                  <div className="relative transform transition-transform duration-500 ease-in-out group-hover:scale-105">
                    <div className="absolute inset-0 bg-[hsla(0,0%,0%,0.50)] z-10"></div>
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
      </div>
      <BackToTop />
    </>
  )
}

export default Galerie