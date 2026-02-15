'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import sitelogo from '../public/asset/image/logo.png'
import { BsTelephone } from 'react-icons/bs'
import { AiOutlineMail, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className='sticky top-0 bg-white z-50 shadow-md'>
      {/* Top Contact Bar - Desktop Only */}
      <div className='hidden lg:block bg-blue-900 text-white'>
        <div className='max-w-7xl mx-auto px-4 py-2'>
          <div className='flex items-center gap-6 text-sm'>
            <a href="tel:+94762304197" className='flex items-center gap-2 hover:text-blue-200 transition-colors'>
              <BsTelephone className='text-base' />
              <span>+94 76 230 4197</span>
            </a>
            <a href="mailto:tourszeelan@gmail.com" className='flex items-center gap-2 hover:text-blue-200 transition-colors'>
              <AiOutlineMail className='text-base' />
              <span>tourszeelan@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className='max-w-7xl mx-auto px-4'>
        <div className='flex items-center justify-between py-4'>
          {/* Logo */}
          <Link href="/">
            <div className="flex">
              <Image
                className='p-2'
                src={sitelogo}
                alt="site logo"
                height={20}
                width={190}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4">
            <ul className="flex space-x-8 font-semibold font-Roboto text-base">
              <li className='hover:text-blue-600 transition-colors'>
                <Link href="/">Home</Link>
              </li>
              <li className='hover:text-blue-600 transition-colors'>
                <Link href="/alltours">All Tours</Link>
              </li>
              <li className='hover:text-blue-600 transition-colors'>
                <Link href="/destination">Destination</Link>
              </li>
              <li className='hover:text-blue-600 transition-colors'>
                <Link href="/blogs">Blogs</Link>
              </li>
              <li className='hover:text-blue-600 transition-colors'>
                <Link href="/about">About Us</Link>
              </li>
              <li className='hover:text-blue-600 transition-colors'>
                <Link href="/contact-us">Contact</Link>
              </li>
            </ul>
            <Link href="/contact-us">
              <button className='px-6 py-2.5 bg-gradient-to-r from-blue-900 to-blue-950 hover:from-blue-800 hover:to-blue-900 text-white rounded-md font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg'>
                Book Now
              </button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className='lg:hidden flex'>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className='text-3xl p-2 hover:bg-gray-100 rounded-lg transition-colors'
            >
              {mobileMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className='lg:hidden pb-4 border-t'>
            <ul className="flex flex-col space-y-2 pt-4 font-semibold font-Roboto">
              <li className='hover:bg-gray-100 rounded-lg transition-colors'>
                <Link href="/" className='block px-4 py-3' onClick={() => setMobileMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li className='hover:bg-gray-100 rounded-lg transition-colors'>
                <Link href="/alltours" className='block px-4 py-3' onClick={() => setMobileMenuOpen(false)}>
                  All Tours
                </Link>
              </li>
              <li className='hover:bg-gray-100 rounded-lg transition-colors'>
                <Link href="/destination" className='block px-4 py-3' onClick={() => setMobileMenuOpen(false)}>
                  Destination
                </Link>
              </li>
              <li className='hover:bg-gray-100 rounded-lg transition-colors'>
                <Link href="/blogs" className='block px-4 py-3' onClick={() => setMobileMenuOpen(false)}>
                  Blogs
                </Link>
              </li>
              <li className='hover:bg-gray-100 rounded-lg transition-colors'>
                <Link href="/about" className='block px-4 py-3' onClick={() => setMobileMenuOpen(false)}>
                  About Us
                </Link>
              </li>
              <li className='hover:bg-gray-100 rounded-lg transition-colors'>
                <Link href="/contact-us" className='block px-4 py-3' onClick={() => setMobileMenuOpen(false)}>
                  Contact
                </Link>
              </li>
            </ul>
            
            {/* Mobile Contact Buttons */}
            <div className='flex flex-col gap-3 mt-4 px-4 pb-2'>
              <Link href="/contact-us" onClick={() => setMobileMenuOpen(false)}>
                <button className='w-full px-6 py-3 bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-600 hover:to-blue-800 text-white rounded-md font-semibold text-base transition-all duration-200'>
                  Book Now
                </button>
              </Link>
              <div className='flex gap-2'>
                <a href="tel:+917976693878" className='flex-1'>
                  <button className='w-full flex items-center justify-center gap-2 px-3 py-2.5 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-all'>
                    <BsTelephone className='text-base' />
                    <span className='text-sm'>+94 76 230 4197</span>
                  </button>
                </a>
                <a href="mailto:tourszeelan@gmail.com" className='flex-1'>
                  <button className='w-full flex items-center justify-center gap-2 px-3 py-2.5 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-all'>
                    <AiOutlineMail className='text-base' />
                    <span className='text-sm'>tourszeelan@gmail.com</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Header