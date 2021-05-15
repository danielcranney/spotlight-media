import React from 'react';
import Image from 'next/image';

const VideoServices = () => {
    return (
        <div className="w-full flex mt-4 flex-col md:flex-row">

            {/* Promotional videos */}
            <div className="w-full md:w-1/3 p-4 flex flex-col">
                
            <div className="w-1/6 md:w-1/4 xl:w-1/6 mr-auto flex">
            <Image
                src="/service-icon-01.svg"
                alt="Service"
                width={1426}
                height={1198}
                className="transition duration-500 ease-in-out transform hover:scale-110"
            />
            </div>

            <h5 className="my-4">Promotional Videos</h5>

            <p className="mb-4">Our promotional video service will not only show your company or business in the best light, but also helps build brand awareness. We make sure the concept behind your video will captivate your audience, drive leads and boost sales.</p>
            </div>

            {/* Corporate communications */}
            <div className="w-full md:w-1/3 p-4 flex flex-col">
                
            <div className="w-1/6 md:w-1/4 xl:w-1/6 mr-auto flex">
            <Image
                src="/service-icon-02.svg"
                alt="Service"
                width={1426}
                height={1198}
                className="transition duration-500 ease-in-out transform hover:scale-110"
            />
            </div>

            <h5 className="my-4">Corporate Communications</h5>

            <p className="mb-4">Our communications videos make it simple for you to communicate with your staff - or send important messages - in a consistent manner. We ensure all content is in-fitting with brand guidelines and expectations.</p>
                
            </div>

            {/* Customer testimonials */}
            <div className="w-full md:w-1/3 p-4 flex flex-col">
                
            <div className="w-1/6 md:w-1/4 xl:w-1/6 mr-auto flex">
            <Image
                src="/service-icon-03.svg"
                alt="Service"
                width={1426}
                height={1198}
                className="transition duration-500 ease-in-out transform hover:scale-110"
            />
            </div>

            <h5 className="my-4">Customer Testimonials</h5>

            <p className="mb-4">Let your happy customers sell your services with customer testimonial videos. These help you stand out from your competitors, give your company character, and build long-lasting relationships with your customer base.</p>

            </div>

        </div>
    )
}

export default VideoServices;