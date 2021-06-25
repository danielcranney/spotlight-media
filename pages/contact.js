import Head from "next/head";
import React, { useState, useRef, useEffect } from "react";

const Contact = () => {
  const nameElement = useRef();
  const emailElement = useRef();
  const messageElement = useRef();

  const [status, setStatus] = useState("Submit");
  const [success, setSuccess] = useState(null);

  async function handleOnSubmit(e) {
    
    e.preventDefault();
    
    const formData = {}
    Array.from(e.currentTarget.elements).forEach(field => {
      if (!field.name) return;
      formData[field.name] = field.value
    })
    await fetch('/api/mail', {
      method: 'post',
      body: JSON.stringify(formData)
    })
    console.log('Testing build');
    console.log(formData)
    
  }

 

  return (
    <>
      <Head>
        <title>Contact | Spotlight Media</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      {/* Full Screen Header */}
      <div className="relative z-0 w-full pt-24 text-white bg-cover bg-home-header">
        {/* Overlay */}
        <div className="absolute z-0 w-full bg-black opacity-50 h-36 md:h-60"></div>

        {/* Hero Text Wrapper */}
        <div className="z-20 flex flex-col items-start justify-center h-36 md:h-60">
          <div className="container z-20 mx-auto motion-safe:animate-fadeSlideUp">
            <h6 className="z-20 font-normal tracking-wider text-left text-gray-500 uppercase">
              Let's discuss your project
            </h6>

            <h1 className="z-20 w-4/5 leading-tight text-left text-white">
              Contact
            </h1>
          </div>
        </div>
      </div>

      {/* Contact Form */}

      <div className="relative w-full bg-white">
        <div className="container py-16 mx-auto text-left">
          <div className="flex flex-col items-start md:flex-row">
            <div className="flex flex-col w-full mr-8 text-left md:w-2/3">
              <h3 className="mb-8">Send us a Message</h3>

              {success ? (
                <div className="p-4 mb-8 bg-gray-100 border-2 border-gray-200">
                  Thanks for the message! We'll get back to you as soon as
                  possible (usually within 12 hours!).
                </div>
              ) : (
                <></>
              )}

              {/* Form */}
              <div>
                <form method="post" onSubmit={handleOnSubmit}>
                  <label htmlFor="name" className="flex mb-2">
                    <div className="mr-2">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                    <div className="flex-grow">
                      <label htmlFor="name">Name:</label>
                    </div>
                  </label>

                  <input
                    type="text"
                    placeholder="John Smith"
                    ref={nameElement}
                    className="mt-2 mb-8"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    required
                    name="name"
                  />

                  <label className="flex mb-2">
                    <div className="mr-2">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                        />
                      </svg>
                    </div>
                    <div className="flex-grow">
                      <label htmlFor="email">Email:</label>
                    </div>
                  </label>

                  <input
                    type="email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    name="email"
                    placeholder="john@smith.com"
                    ref={emailElement}
                    className="mt-2 mb-8"
                    required
                  />

                  <label className="flex mb-2">
                    <div className="mr-2">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                    </div>
                    <div className="flex-grow">
                      <label htmlFor="message">Message:</label>
                    </div>
                  </label>

                  <textarea
                    type="text"
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                    name="message"
                    className="mt-2 h-36"
                    ref={messageElement}
                    required
                  />

                  <button
                    type="submit"
                    // onClick={(e) => {
                    //   handleSubmit(e);
                    // }}
                    className="mt-4 btn-yellow-2"
                  >
                    {status}
                  </button>
                </form>
              </div>

              
              
            </div>

            <div className="w-full mt-16 md:w-1/3 md:mt-0">
              <h3 className="mb-8">Our Details</h3>

              <div className="flex mb-4">
                <div className="mr-2 text-gray-600">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                    />
                  </svg>
                </div>
                <p className="mb-4 text-gray-600">
                  <a
                    href={`mailto:info@wearespotlight.co.uk`}
                    className="mb-4 text-gray-600 transition-colors duration-500 hover:text-black"
                  >
                    info@wearespotlight.co.uk
                  </a>
                </p>
              </div>

              <div className="flex mb-4">
                <div className="mr-2 text-gray-600">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <p className="mb-4 text-gray-600">
                  <a
                    href={`tel:+447717131511`}
                    className="mb-4 text-gray-600 transition-colors duration-500 hover:text-black"
                  >
                    07717 131 511
                  </a>
                </p>
              </div>

              <div className="flex mb-4">
                <div className="mr-2 text-gray-600">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <p className="mb-2">104 Wrington Close,</p>
                  <p className="mb-2">Little Stoke,</p>
                  <p className="mb-2">Bristol</p>
                  <p className="mb-2">BS34 6ET</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
