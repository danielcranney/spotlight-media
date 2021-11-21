import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const dateOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

export default function Post({ children, frontMatter }) {
  const { title, date, img, excerpt, author, profilePicture } = frontMatter;
  return (
    <>
      <Head>
        <title>{title} | Spotlight Media</title>
      </Head>

      {/* Full Screen Header */}
      <div className="relative z-0 w-full pt-24 text-white bg-cover bg-home-header">
        {/* Overlay */}
        <div className="absolute z-0 w-full bg-black opacity-50 h-36 md:h-60"></div>

        {/* Hero Text Wrapper */}
        <div className="z-20 flex flex-col items-start justify-center py-12">
          <div className="container z-20 mx-auto motion-safe:animate-fadeSlideUp">
            <h1 className="z-20 w-4/5 mb-6 leading-tight text-left text-white">
              {title}
            </h1>

            <div className="flex items-center">
              <div className="mr-4">
                <Image src={profilePicture} width={60} height={60} />
              </div>
              <p className="text-xl text-white">
                Posted by <strong>{author}</strong> on{" "}
                <strong>
                  {new Date(`${date}`).toLocaleDateString("en-GB", dateOptions)}
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Post */}

      <div className="relative w-full bg-white">
        <div className="container py-12 mx-auto text-left">{children}</div>
      </div>
    </>
  );
}
