
import Image from "next/image"
import Link from "next/link"

export const Header = () => {
    return (
        <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 ">
        <div className="container flex h-20 items-center px-4 md:px-6">
          <Link href="/">
            <Image height={10} width={10} alt="Logo" className="h-16 w-16 mr-4" src="/surdet-high-resolution-logo-transparent.svg" />
          </Link>
          <nav className="flex-1 hidden items-center space-x-4 text-sm font-semibold lg:space-x-6 lg:flex">
            <Link className="font-bold tracking-wider uppercase text-xs sp-1.25" href="/">
              Home
            </Link>
            <Link className="font-bold tracking-wider uppercase text-xs sp-1.25" href="/about">
              About
            </Link>
            <Link className="font-bold tracking-wider uppercase text-xs sp-1.25" href="/services">
              Services
            </Link>
            <Link className="font-bold tracking-wider uppercase text-xs sp-1.25" href="/contact">
              Contact
            </Link>
            <Link className="font-bold tracking-wider uppercase text-xs sp-1.25" href="/report">
              Report Phising
            </Link>
          </nav>
          <div className="hidden lg:flex space-x-4">
            <Link className="font-bold tracking-wider uppercase text-xs sp-1.25" href="#">
              Login
            </Link>
            <Link className="font-bold tracking-wider uppercase text-xs sp-1.25" href="#">
              Sign Up
            </Link>
          </div>
        </div>
      </header>
    )
}