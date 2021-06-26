import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Header = () => {

    const [navbarOpen, setNavbarOpen] = useState(false);

    return (

    <>
      <nav className={"flex flex-wrap items-center justify-between z-20 fixed w-full bg-black" +
              (navbarOpen ? " border-b-2 border-gray-700" : " border-b-0")}>
        <div className="container flex flex-wrap items-center justify-between mx-auto my-6">
          <div className="relative flex justify-between w-full lg:w-auto lg:static lg:block lg:justify-start">

            {/* Logo */}
            <div className="z-20 flex-shrink-0 object-scale-down w-40 mr-auto motion-safe:animate-fadeSlideDown">
              <Link href="/">
                <a>
                  <Image
                  src="/logo.svg"
                  width={1550}
                  height={421} />
                </a>
              </Link>
            </div>

            <button
              className="block px-3 py-1 text-xl leading-none text-white bg-transparent border border-transparent border-solid rounded outline-none cursor-pointer lg:hidden focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
            <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
          <div
            className={
              "motion-safe:animate-fadeSlideDown lg:flex flex-grow items-center transition duration-500 ease-in-out mt-4 lg:mt-0" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="navbar"
          >
            <ul className="flex flex-col list-none lg:flex-row lg:ml-auto">
              <li className="mx-0 nav-item lg:mx-4">
                <Link href="/">
                  <a className="v-nav">Home</a>
                </Link>
              </li>
              <li className="mx-0 nav-item lg:mx-4">
                <Link href="/who-we-are">
                  <a className="v-nav">Who We Are</a>
                </Link>
              </li>
              <li className="mx-0 nav-item lg:mx-4">
                <Link href="/what-we-do">
                  <a className="v-nav">What We Do</a>
                </Link>
              </li>
              <li className="mx-0 nav-item lg:mx-4">
                <Link href="/clients">
                  <a className="v-nav">Clients</a>
                </Link>
              </li>
              <li className="mx-0 nav-item lg:mx-4">
                <Link href="/blog">
                  <a className="v-nav">Blog</a>
                </Link>
              </li>
              <li className="mx-0 nav-item lg:mx-4">
                <Link href="/contact">
                  <a className="v-nav">Contact</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>

    )
}

export default Header;
