import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Post( { children, frontMatter }) {

    const { title, date, img, excerpt, author, profilePicture } = frontMatter;
    return (
        <>
            <Head>
                <title>
                    {title} | Spotlight Media
                </title>
            </Head>

            {/* Full Screen Header */}
            <div className="relative bg-home-header bg-cover text-white w-full z-0 pt-24">
                 
                {/* Overlay */}
                <div className="absolute w-full h-36 md:h-60 bg-black opacity-50 z-0">
                </div>

                {/* Hero Text Wrapper */}
                <div className="flex flex-col items-start z-20 py-12 justify-center">

                    <div className="container mx-auto z-20 motion-safe:animate-fadeSlideUp">
                        
                        <h1 className="w-4/5 leading-tight text-white text-left z-20 mb-6">
                        { title }
                        </h1>
                        
                        <div className="flex items-center">
                            <div className="mr-4">
                                <Image
                                    src={profilePicture}
                                    width={60}
                                    height={60}
                                />
                            </div>
                            <p className="text-white text-xl">Posted by <strong>{author}</strong> on <strong>{date}</strong></p>
                        </div>
                        
                    </div>

                </div>

            </div> 

            {/* Blog Post */}
        
            <div className="relative bg-white w-full">
                <div className="container mx-auto py-16 text-left">   
                    {/* <p className="font-bold"> { date } </p>         */}
                { children }
                </div>
            </div>
            
        </>
    )
}
