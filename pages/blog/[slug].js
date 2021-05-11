import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import { getAllPosts } from '../../lib/data';

export default function BlogPost (props) {

    const { title, date, content, img, categories, author, profilePicture } = props;

    console.log(props)

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
                <div className="absolute w-full h-96 bg-black opacity-50 z-0">
                </div>

                {/* Hero Text Wrapper */}
                <div className="flex flex-col items-start z-20 py-12 justify-center">

                    <div className="container mx-auto z-20 motion-safe:animate-fadeSlideUp">

                        {/* { categories.map(category => (
                            <button className="btn-yellow-2-xs">{category}</button>
                        ))} */}
                        
                        <h1 className="w-4/5 leading-tight text-white text-left z-20 mb-6">
                        { title }
                        </h1>
                        
                        <div className="flex items-center">
                            <div className="mr-4">
                                {/* <Image
                                    src={profilePicture}
                                    width={40}
                                    height={40}
                                /> */}
                            </div>
                            <p className="text-white">Posted by {author} on {date}</p>
                        </div>

                    </div>

                </div>

            </div> 

            {/* Blog Post */}
        
            <div className="relative bg-white w-full">
                <div className="container mx-auto py-16 text-left">   
                    <p className="font-bold"> { date } </p>        
                    <p> { content } </p>
                </div>
            </div>
            
        </>
    )
}

export async function getStaticProps(context) {

    const { params } = context;
    const allPosts = getAllPosts()
    const { data, content } = allPosts.find(item => item.slug === params.slug);
    const mdxSource = await serialize(content)

    return {
      props: {
          ...data,
          content: mdxSource
      }
    }
  }

  export async function getStaticPaths() {
    return {
      paths: getAllPosts().map((post) => ({
        params: {
            slug: post.slug
        },
    })),
    fallback: false,
    };
  }