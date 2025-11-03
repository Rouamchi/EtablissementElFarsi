import React, { useState } from 'react';
import BackToTop from "../Components/BackToTop";
import { Link } from 'react-router-dom'
// import Bags from "../Images/bags.jpg"
// import Accessoire from "../Images/accessoires.png"

const ContactUs = () => {
  window.scrollTo(0, 0);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Validate the form fields
  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName) {
      newErrors.fullName = 'Nom et prénom est requis';
    }
    if (!formData.email) {
      newErrors.email = 'Adresse email est requise';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Adresse email invalide';
    }
    if (!formData.message) {
      newErrors.message = 'Message est requis';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form data:', formData);
      // Submit the form (e.g., send data to an API)
    }
  };
  return (
    <>
      <div className="bg-gray-100">
        {/* ------------- */}
        <section className="bg-gray-100 dark:bg-gray-900">
          <div className="container px-6 py-12 mx-auto">
            <div className="text-center mt-10 lg:mt-20">
              <p className="font-medium text-amber-400 dark:text-yellow-200">Contactez-nous</p>
              <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-gray-100">
                Etablissement El FARSI Privé
              </h1>
              <p className="mt-3 text-gray-500 dark:text-gray-400">
                {/* Our friendly team is always here to chat. */}
                Notre équipe est toujours là pour discuter.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center justify-center text-center">
                <span className="p-3 text-amber-400 rounded-full bg-yellow-200 dark:bg-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </span>
                <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-gray-100">
                  Email
                </h2>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  {/* Our friendly team is here to help. */}
                  Notre équipe est toujours là pour vous aider.
                </p>
                <p className="mt-2 text-amber-400 dark:text-yellow-200">
                  elfarsietablissement@gmail.com
                </p>
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <span className="p-3 text-amber-400 rounded-full bg-yellow-200/80 dark:bg-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </span>
                <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-gray-100">
                  Adresse
                </h2>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Trouvez notre emplacement facilement
                </p>
                <p className="mt-2 text-amber-400 dark:text-yellow-200">
                  Avenue ALMASSIRA (Route Lgharbia) OUALIDIA
                </p>
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <span className="p-3 text-amber-400 rounded-full bg-yellow-200 dark:bg-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </span>
                <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-gray-100">
                  Phone
                </h2>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Appelez-nous
                </p>
                <p className="mt-2 text-amber-400 dark:text-yellow-200">
                  +212808625166
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* ------------- */}

        <section className="min-h-screen bg-gray-100 dark:bg-gray-900">
          <div className="container px-6 py-10 mx-auto">
            <div className="lg:flex lg:items-center lg:-mx-10">
              <div className="lg:w-1/2 lg:mx-10">
                <h1 className="text-2xl font-semibold text-gray-800 capitalize dark:text-gray-100 lg:text-3xl">
                  Parlons-En
                </h1>
                <p className="mt-4 text-gray-500 dark:text-gray-400">
                  Posez-nous toutes vos questions et nous serons ravis de vous entendre !
                </p>
                <form className="mt-12" onSubmit={handleSubmit}>
                  <div className="-mx-2 md:items-center md:flex">
                    <div className="flex-1 px-2">
                      <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                        Nom et prénom
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Nom et prénom"
                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-gray-100 border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                      {errors.fullName && (
                        <p className="text-red-500 text-sm mt-2">{errors.fullName}</p>
                      )}
                    </div>
                    <div className="flex-1 px-2 mt-4 md:mt-0">
                      <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                        Email adresse
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="@gmail.com"
                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-gray-100 border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-2">{errors.email}</p>
                      )}
                    </div>
                  </div>
                  <div className="w-full mt-4">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-gray-100 border border-gray-200 rounded-md md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      placeholder="Message"
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-2">{errors.message}</p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-gray-100 capitalize transition-colors duration-300 transform bg-amber-400 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                  >
                    Envoyer
                  </button>
                </form>
              </div>
              <div className="mt-12 lg:flex lg:mt-0 lg:flex-col lg:items-center lg:w-1/2 lg:mx-10">
                <img
                  className="hidden object-cover mx-auto rounded-full lg:block shrink-0 w-96 h-96"
                  src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />
                <div className="mt-6 space-y-8 md:mt-8">
                  <p className="flex items-start -mx-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 mx-2 text-amber-400 dark:text-yellow-200"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                      Av. almassira (Route lgharbia) Oualidia
                    </span>
                  </p>
                  <p className="flex items-start -mx-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 mx-2 text-amber-400 dark:text-yellow-200"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                      +212808625166
                    </span>
                  </p>
                  <p className="flex items-start -mx-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 mx-2 text-amber-400 dark:text-yellow-200"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                      elfarsietablissement@gmail.com
                    </span>
                  </p>
                </div>
                <div className="mt-6 w-80 md:mt-8">
                  <h3 className="text-gray-600 dark:text-gray-300 ">Suivez-nous</h3>
                  <div className="flex mt-4 -mx-1.5 ">
                    <Link
                      className="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-amber-400"
                      to="https://twitter.com/i/flow/login" target='_blank'
                    >
                      <svg
                        className="w-10 h-10 fill-current"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M18.6668 6.67334C18.0002 7.00001 17.3468 7.13268 16.6668 7.33334C15.9195 6.49001 14.8115 6.44334 13.7468 6.84201C12.6822 7.24068 11.9848 8.21534 12.0002 9.33334V10C9.83683 10.0553 7.91016 9.07001 6.66683 7.33334C6.66683 7.33334 3.87883 12.2887 9.3335 14.6667C8.0855 15.498 6.84083 16.0587 5.3335 16C7.53883 17.202 9.94216 17.6153 12.0228 17.0113C14.4095 16.318 16.3708 14.5293 17.1235 11.85C17.348 11.0351 17.4595 10.1932 17.4548 9.34801C17.4535 9.18201 18.4615 7.50001 18.6668 6.67268V6.67334Z" />
                      </svg>
                    </Link>
                    <Link
                      className="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-amber-400"
                      to="https://www.linkedin.com/" target='_blank'
                    >
                      <svg
                        className="w-8 h-8"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.2 8.80005C16.4731 8.80005 17.694 9.30576 18.5941 10.2059C19.4943 11.1061 20 12.327 20 13.6V19.2H16.8V13.6C16.8 13.1757 16.6315 12.7687 16.3314 12.4687C16.0313 12.1686 15.6244 12 15.2 12C14.7757 12 14.3687 12.1686 14.0687 12.4687C13.7686 12.7687 13.6 13.1757 13.6 13.6V19.2H10.4V13.6C10.4 12.327 10.9057 11.1061 11.8059 10.2059C12.7061 9.30576 13.927 8.80005 15.2 8.80005Z"
                          fill="currentColor"
                        />
                        <path
                          d="M7.2 9.6001H4V19.2001H7.2V9.6001Z"
                          fill="currentColor"
                        />
                        <path
                          d="M5.6 7.2C6.48366 7.2 7.2 6.48366 7.2 5.6C7.2 4.71634 6.48366 4 5.6 4C4.71634 4 4 4.71634 4 5.6C4 6.48366 4.71634 7.2 5.6 7.2Z"
                          fill="currentColor"
                        />
                      </svg>
                    </Link>
                    <Link target='_blank'
                      className="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-amber-400"
                      to="https://www.facebook.com/people/Etablissement-El-Farsi/61554007875440/?locale=fr_FR"
                    >
                      <svg
                        className="w-8 h-8"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 10.2222V13.7778H9.66667V20H13.2222V13.7778H15.8889L16.7778 10.2222H13.2222V8.44444C13.2222 8.2087 13.3159 7.9826 13.4826 7.81591C13.6493 7.64921 13.8754 7.55556 14.1111 7.55556H16.7778V4H14.1111C12.9324 4 11.8019 4.46825 10.9684 5.30175C10.1349 6.13524 9.66667 7.2657 9.66667 8.44444V10.2222H7Z"
                          fill="currentColor"
                        />
                      </svg>
                    </Link>
                    <Link target='_blank'
                      className="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-amber-400"
                      to="https://www.instagram.com/elfar_si?igsh=cjh2bjlzZGQyMG0y"
                    >
                      <svg
                        className="w-8 h-8"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.9294 7.72275C9.65868 7.72275 7.82715 9.55428 7.82715 11.825C7.82715 14.0956 9.65868 15.9271 11.9294 15.9271C14.2 15.9271 16.0316 14.0956 16.0316 11.825C16.0316 9.55428 14.2 7.72275 11.9294 7.72275ZM11.9294 14.4919C10.462 14.4919 9.26239 13.2959 9.26239 11.825C9.26239 10.354 10.4584 9.15799 11.9294 9.15799C13.4003 9.15799 14.5963 10.354 14.5963 11.825C14.5963 13.2959 13.3967 14.4919 11.9294 14.4919ZM17.1562 7.55495C17.1562 8.08692 16.7277 8.51178 16.1994 8.51178C15.6674 8.51178 15.2425 8.08335 15.2425 7.55495C15.2425 7.02656 15.671 6.59813 16.1994 6.59813C16.7277 6.59813 17.1562 7.02656 17.1562 7.55495ZM19.8731 8.52606C19.8124 7.24434 19.5197 6.10901 18.5807 5.17361C17.6453 4.23821 16.51 3.94545 15.2282 3.88118C13.9073 3.80621 9.94787 3.80621 8.62689 3.88118C7.34874 3.94188 6.21341 4.23464 5.27444 5.17004C4.33547 6.10544 4.04628 7.24077 3.98201 8.52249C3.90704 9.84347 3.90704 13.8029 3.98201 15.1238C4.04271 16.4056 4.33547 17.5409 5.27444 18.4763C6.21341 19.4117 7.34517 19.7045 8.62689 19.7687C9.94787 19.8437 13.9073 19.8437 15.2282 19.7687C16.51 19.708 17.6453 19.4153 18.5807 18.4763C19.5161 17.5409 19.8089 16.4056 19.8731 15.1238C19.9481 13.8029 19.9481 9.84704 19.8731 8.52606ZM18.1665 16.5412C17.8881 17.241 17.349 17.7801 16.6456 18.0621C15.5924 18.4799 13.0932 18.3835 11.9294 18.3835C10.7655 18.3835 8.26272 18.4763 7.21307 18.0621C6.51331 17.7837 5.9742 17.2446 5.69215 16.5412C5.27444 15.488 5.37083 12.9888 5.37083 11.825C5.37083 10.6611 5.27801 8.15832 5.69215 7.10867C5.97063 6.40891 6.50974 5.8698 7.21307 5.58775C8.26629 5.17004 10.7655 5.26643 11.9294 5.26643C13.0932 5.26643 15.596 5.17361 16.6456 5.58775C17.3454 5.86623 17.8845 6.40534 18.1665 7.10867C18.5843 8.16189 18.4879 10.6611 18.4879 11.825C18.4879 12.9888 18.5843 15.4916 18.1665 16.5412Z"
                          fill="currentColor"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ------------- */}
        {/* <div className="container px-6 py-10 mx-auto md:py-16">
          <div className="flex flex-col space-y-6 md:flex-row md:items-center md:space-x-6">
            <div className="w-full md:w-1/2">
              <div className="max-w-lg">
                <h1 className="text-2xl font-medium tracking-wide text-amber-400 md:text-4xl">
                  Find your premium Bags & Accessories
                </h1>
                <p className="mt-6 text-gray-600">
                  ELEGANCY LADY offer you Link collection of clothing and accessories
                  By the latest trends and 100% authenti.
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
                    <span>Premium selection</span>
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
                    <span>High Quality</span>
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
                    <span>Fast Communication</span>
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
                    <span>Quick Answer</span>
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
                    <span>Payment Security</span>
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
                    <span>Fast shipping </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center w-full md:w-1/2">
              <img
                src={Bags}
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
                src={Accessoire}
                alt="sac"
                className="w-full h-52 md:h-96 max-w-2xl rounded"
              />
            </div>
            <div className="w-full md:w-1/2">
              <div className="max-w-md mx-auto">
                <h1 className="text-2xl font-medium tracking-wide text-amber-400 md:text-4xl">
                  Why Us?
                </h1>
                <p className="mt-5 leading-7 text-gray-600">
                  With us you will quickly get everything you want. Link collection
                  which is constantly renewed to satisfy you, and which
                  is intended to be accessible to all! Authentic, original & Luxe!. <br />
                  Our logistics partners enable Link fast delivery. We also offer the
                  option of International Shipping .

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
                    <span>Fast Shipping</span>
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
                    <span>Secure process</span>
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
                    <span>Exclusive selection</span>
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
                    <span>Premium service</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <hr className="border border-amber-400 mt-5 lg:mt-10" />
        <div className=''>
          <iframe title='map' className='w-full h-96 mb-0'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9292.018304251787!2d-9.036554523127267!3d32.73218888306281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdaeadb1af564d43%3A0x4b5981f7350c10e5!2z2YXYpNiz2LPYqSDYp9mE2YHYp9ix2LPZig!5e0!3m2!1sen!2sma!4v1733151925848!5m2!1sen!2sma"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
        <hr className="border border-amber-400" />
      </div>
      <BackToTop />
    </>
  )
}

export default ContactUs 
