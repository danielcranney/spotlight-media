import React from 'react';
import Image from 'next/image';

const DesignServices = () => {
    return (
        <div className="w-full flex mt-4 flex-col md:flex-row">

            {/* Brand Identity */}
            <div className="w-full md:w-1/3 p-4 flex flex-col">
                
            <div className="w-1/6 md:w-1/3 xl:w-1/5 mr-auto flex transition duration-500 ease-in-out transform hover:scale-125">
            <Image
                src="/service-icon-04.svg"
                alt="Service"
                width={1426}
                height={1198}
            />
            </div>

            <h5 className="my-4">Brand Identity</h5>

            <p className="mb-4">Upgrade your corporate branding, or develop a whole new identity for your business. Our designers will meet with you to discuss your brief, share ideas and develop a brand to suit your business.</p>
            </div>

            {/* Digital & Print Graphics */}
            <div className="w-full md:w-1/3 p-4 flex flex-col">
                
            <div className="w-1/6 md:w-1/3 xl:w-1/5 mr-auto flex transition duration-500 ease-in-out transform hover:scale-125">
            <Image
                src="/service-icon-05.svg"
                alt="Service"
                width={1426}
                height={1198}
            />
            </div>

            <h5 className="my-4">Digital & Print Graphics</h5>

            <p className="mb-4">Our design team can produce promotional materials for digital platforms, or print to help enhance your brand and increase exposure. All content is designed in-line with branding guidelines for consistency.</p>
                
            </div>

            {/* Signage, Stationery & Apparel */}
            <div className="w-full md:w-1/3 p-4 flex flex-col">
                
            <div className="w-1/6 md:w-1/3 xl:w-1/5 mr-auto flex transition duration-500 ease-in-out transform hover:scale-125">
            <Image
                src="/service-icon-06.svg"
                alt="Service"
                width={1426}
                height={1198}
            />
            </div>

            <h5 className="my-4">Signage, Stationery & Apparel</h5>

            <p className="mb-4">Complete your brand package with bespoke signage for your property, and branded stationery and apparel for your team.</p>

            </div>

        </div>
    )
}

export default DesignServices;