import React from 'react'
import BackToTop from "../Components/BackToTop";

const Voyages = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <div className='bg-gray-100'>
        <div className="flex justify-center items-center">
          <div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
            <div role="main" className="flex flex-col items-center justify-center">
              <h1 className="mt-14 text-4xl font-semibold leading-9 text-center text-gray-800 dark:text-gray-50">
                VOYAGES
              </h1>
              <p className="text-base leading-normal text-center text-gray-600 dark:text-white mt-4 lg:w-1/2 md:w-10/12 w-11/12">
                If you're looking for random paragraphs, you've come to the right
                place. When a random word or a random sentence isn't quite enough
              </p>
            </div>
          </div>
        </div>
      </div>
      <BackToTop />
    </>
  )
}

export default Voyages