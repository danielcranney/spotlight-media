import Head from 'next/head';
import { blogPosts } from '../../lib/data';

export default function BlogPost ({title, date, content }) {
    return (
        <>
            <Head>
                <title>
                    {title}
                </title>
            </Head>

            {/* Full Screen Header */}
            <div className="relative bg-home-header bg-cover text-white w-full z-0 pt-24">
                
                {/* Overlay */}
                <div className="absolute w-full h-96 bg-black opacity-50 z-0">
                </div>

                {/* Hero Text Wrapper */}
                <div className="flex flex-col items-start z-20 h-96 justify-end pb-16">

                    <div className="container mx-auto z-20 motion-safe:animate-fadeSlideUp">
                        <h6 className="tracking-wider text-yellow text-left uppercase font-normal z-20">
                        Let's discuss your project
                        </h6>

                        <h1 className="w-4/5 leading-tight text-white text-left z-20">
                        { title }
                        </h1>
                    </div>

                </div>

            </div> 

            {/* Contact Form */}
        
            <div className="relative bg-white w-full">
                <div className="container mx-auto py-16 text-left">           
                    <p> { content } </p>
                </div>
            </div>
            
        </>
    )
}

export async function getStaticProps(context) {

    console.log(context);
    const { params } = context;

    return {
      props: blogPosts.find(item => item.slug === params.slug)
    }
  }

  export async function getStaticPaths() {

    return {
      paths: blogPosts.map((item) => ({
        params: {
            slug: item.slug
        },
    })),
    fallback: false,
    };
  }