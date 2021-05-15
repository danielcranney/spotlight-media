import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Header = () => {

    const [navbarOpen, setNavbarOpen] = useState(false);

    return (

    <>
      <nav className="flex flex-wrap items-center justify-between z-20 absolute w-full bg-black">
        <div className="container mx-auto flex flex-wrap items-center justify-between my-6">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">

            {/* Logo */}
            <div className="object-scale-down flex-shrink-0 w-40 mr-auto z-20 motion-safe:animate-fadeSlideDown">
              <Image
              src="/logo.svg"
              width={1550}
              height={421} />
            </div>

            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
            <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center transition duration-500 ease-in-out mt-4 lg:mt-0" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item lg:mx-4 mx-0">
                <Link href="/">
                  <a className="v-nav">Home</a>
                </Link>
              </li>
              <li className="nav-item lg:mx-4 mx-0">
                <Link href="/who-we-are">
                  <a className="v-nav">Who We Are</a>
                </Link>
              </li>
              <li className="nav-item lg:mx-4 mx-0">
                <Link href="/what-we-do">
                  <a className="v-nav">What We Do</a>
                </Link>
              </li>
              <li className="nav-item lg:mx-4 mx-0">
                <Link href="/clients">
                  <a className="v-nav">Clients</a>
                </Link>
              </li>
              <li className="nav-item lg:mx-4 mx-0">
                <Link href="/blog">
                  <a className="v-nav">Blog</a>
                </Link>
              </li>
              <li className="nav-item lg:mx-4 mx-0">
                <Link href="/contact">
                  <a className="v-nav">Contact</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
 
    // <nav className="z-20 absolute w-full bg-black">

    //   <div className="flex container mx-auto h-24 items-center">
        
        // {/* Logo */}
        // <div className="object-scale-down flex-shrink-0 w-40 mr-auto z-20 motion-safe:animate-fadeSlideDown">
        //   <Image
        //   src="/logo.svg"
        //   width={1550}
        //   height={421} />
        // </div>

    //     {/* Navigation */}
    //     <nav className="
    //     flex items-center
    //     transition-colors duration-500 z-20 delay-1000 motion-safe:animate-fadeSlideDown">
    //         <div className="mx-4">
    //           <Link href="/">
    //             <a className="v-nav">Home</a>
    //           </Link>
    //         </div>
    //         <div className="mx-4">
              // <Link href="/who-we-are">
              //   <a className="v-nav">Who We Are</a>
              // </Link>
    //         </div>
    //         <div className="mx-4">
              // <Link href="/what-we-do">
              //   <a className="v-nav">What We Do</a>
              // </Link>
    //         </div>
    //         <div className="mx-4">
              // <Link href="/clients">
              //   <a className="v-nav">Clients</a>
              // </Link>
    //         </div>
    //         <div className="mx-4">
              // <Link href="/blog">
              //   <a className="v-nav">Blog</a>
              // </Link>
    //         </div>
            // <div className="mx-4">
    //           <Link href="/contact">
    //             <a className="v-nav">Contact</a>
    //           </Link>
    //         </div>
    //     </nav>

    //   </div>

    // </nav>

    )
}

export default Header;
