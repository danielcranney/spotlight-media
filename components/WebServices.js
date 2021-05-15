import React from 'react';
import Image from 'next/image';

const WebServices = () => {
    return (
        <div className="w-full flex mt-4 flex-col md:flex-row">

            {/* Responsive Website Design */}
            <div className="w-full md:w-1/3 p-4 flex flex-col">
                
            <div className="w-1/6 md:w-1/3 xl:w-1/5 mr-auto flex transition duration-500 ease-in-out transform hover:scale-125">
            <Image
                src="/service-icon-07.svg"
                alt="Service"
                width={1426}
                height={1198}
            />
            </div>

            <h5 className="my-4">Responsive Website Design</h5>

            <p className="mb-4">Our websites are 100% responsive, and are optimised for a range of desktop, tablet and mobile devices to make sure your website is on top form for your customers.</p>
            </div>

            {/* Social Media Management */}
            <div className="w-full md:w-1/3 p-4 flex flex-col">
                
            <div className="w-1/6 md:w-1/3 xl:w-1/5 mr-auto flex transition duration-500 ease-in-out transform hover:scale-125">
            <Image
                src="/service-icon-08.svg"
                alt="Service"
                width={1426}
                height={1198}
            />
            </div>

            <h5 className="my-4">Social Media Management</h5>

            <p className="mb-4">Our team offer a number of valuable social media management services, from advice and consultancy, to a complete and comprehensive social media management service.</p>
                
            </div>

            {/* Search Engine Optimisation */}
            <div className="w-full md:w-1/3 p-4 flex flex-col">
                
            <div className="w-1/6 md:w-1/3 xl:w-1/5 mr-auto flex transition duration-500 ease-in-out transform hover:scale-125">
            <Image
                src="/service-icon-09.svg"
                alt="Service"
                width={1426}
                height={1198}
            />
            </div>

            <h5 className="my-4">Search Engine Optimisation</h5>

            <p className="mb-4">Boost your search engine ranking but our flexible SEO service. From a simple code clean-up, to a comprehensive optimisation, we’ll help you to get the most our of your website.</p>

            </div>

        </div>
    )
}

export default WebServices;