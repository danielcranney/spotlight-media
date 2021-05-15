import Image from 'next/image';
import Link from 'next/link'

const Header = () => {
    return (
 
    <div className="z-20 absolute w-full bg-black">

      <div className="flex container mx-auto h-24 items-center">
        
        {/* Logo */}
        <div className="object-scale-down flex-shrink-0 w-40 mr-auto z-20 motion-safe:animate-fadeSlideDown">
          <Image
          src="/logo.svg"
          width={1550}
          height={421} />
        </div>

        {/* Navigation */}
        <nav className="
        flex items-center
        transition-colors duration-500 z-20 delay-1000 motion-safe:animate-fadeSlideDown">
            <div className="mx-4">
              <Link href="/">
                <a className="v-nav">Home</a>
              </Link>
            </div>
            <div className="mx-4">
              <Link href="/who-we-are">
                <a className="v-nav">Who We Are</a>
              </Link>
            </div>
            <div className="mx-4">
              <Link href="/what-we-do">
                <a className="v-nav">What We Do</a>
              </Link>
            </div>
            <div className="mx-4">
              <Link href="/clients">
                <a className="v-nav">Clients</a>
              </Link>
            </div>
            <div className="mx-4">
              <Link href="/blog">
                <a className="v-nav">Blog</a>
              </Link>
            </div>
            <div className="mx-4">
              <Link href="/contact">
                <a className="v-nav">Contact</a>
              </Link>
            </div>
        </nav>

      </div>

    </div>

    )
}

export default Header;
