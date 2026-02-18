import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import sitelogo from '../public/asset/image/logo.png'
import { AiOutlineMail} from 'react-icons/ai'
import { BsTelephone } from 'react-icons/bs'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaFacebookF, FaInstagram, FaTiktok, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
    <div className="grid lg:grid-cols-5 max-lg:grid-cols-1 justify-between p-4 ">
   <div className="flex flex-col col-span-2 gap-1 px-11">
    <ul className='p-2 leading-8'>
    <Link href="/"> <li>  <Image className=''
    src={sitelogo}
    alt="site logo"
    width={300}
    height={130}
  /></li></Link><div className="mt-3 space-y-2 text-base font-medium text-gray-900">
   <li>Journey through paradise with Zeelan Tours. The island. The culture. The experience.</li> </div>
    </ul>
    </div>
   
<div className="flex flex-col col-span-1">
  <div className="font-bold text-2xl">Quick Links</div>

  <ul className="mt-3 space-y-2 text-base font-medium text-gray-900">
    <li>
      <Link href="/about" className="hover:text-blue-900 transition-colors">
        About Us
      </Link>
    </li>
    <li>
      <Link href="/" className="hover:text-blue-900 transition-colors">
        Tours
      </Link>
    </li>
    <li>
      <Link href="/destination" className="hover:text-blue-900 transition-colors">
        Destinations
      </Link>
    </li>
    <li>
      <Link href="/blogs" className="hover:text-blue-900 transition-colors">
        Blogs
      </Link>
    </li>
    <li>
      <Link href="/contact-us" className="hover:text-blue-900 transition-colors">
        Contact
      </Link>
    </li>
  </ul>
</div>


        <div className="flex flex-col col-span-1">
  <div className="flex flex-col gap-6">
    {/* Phone */}
    <div>
      <div className="flex items-center gap-2">
        <BsTelephone className="text-lg text-orange-500" />
        <p className='font-bold text-2xl'>More Inquiry</p>
      </div>
      <div className="mt-3">
      <div className="space-y-2">
        <a
          href="tel:+94762304197"
          className="text-base font-medium text-gray-900 hover:text-blue-900 transition-colors"
        >
          +94 76 230 4197
        </a>
        <span className="text-base font-medium text-gray-900"> / </span>
        <a
          href="tel:+393312953653"
          className="text-base font-medium text-gray-900 hover:text-blue-900 transition-colors"
        >
          +39 331 295 3653
        </a>
      </div></div>
    </div>

    {/* Mail */}
    <div>
      <div className="flex items-center gap-2">
      <AiOutlineMail className="text-lg text-orange-500" />
      <p className='font-bold text-2xl'>Send Mail</p>
      </div>
      <div className="mt-3">
      <a
        href="mailto:tourszeelan@gmail.com"
        className="text-base font-medium text-gray-900 hover:text-blue-900 transition-colors"
      >
        tourszeelan@gmail.com
      </a>
      </div>
    </div>

    {/* Address */}
    <div>
      <div className="flex items-center gap-2">
        <HiOutlineLocationMarker className="text-lg text-orange-500" />
        <p className='font-bold text-2xl'>Address</p>
      </div>
      <p className="mt-3 space-y-2 text-base font-medium text-gray-900">
        No. 316/A, Bolawatta, Waikkala.
      </p>
    </div>
  </div>
</div>

<div className="flex flex-col col-span-1 ">
    <div className='font-bold text-2xl'>We are Here</div>
    <p className="mt-3 text-base font-medium text-gray-900 mb-4">
      Connect with us and join our journey across paradise!
    </p>
    <div className="flex gap-4 mt-4">
  <a
    href="https://facebook.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-2xl text-gray-700 hover:text-blue-600 transition-colors"
    aria-label="Facebook"
  >
    <FaFacebookF />
  </a>

  <a
    href="https://instagram.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-2xl text-gray-700 hover:text-pink-600 transition-colors"
    aria-label="Instagram"
  >
    <FaInstagram />
  </a>

  <a
    href="https://tiktok.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-2xl text-gray-700 hover:text-black transition-colors"
    aria-label="TikTok"
  >
    <FaTiktok />
  </a>

  <a
    href="https://linkedin.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-2xl text-gray-700 hover:text-blue-700 transition-colors"
    aria-label="LinkedIn"
  >
    <FaLinkedinIn />
  </a>
</div>

    </div>

  </div>
  {/* <div className="flex flex-row"><div><Image
  src="/asset/image/footerbg.png"
  alt="Picture of the author"
  width={1900}
  height={200} /></div></div> */}

  <div className="relative w-full">
  <Image
    src="/asset/image/footerbg.png"
    alt="Footer background"
    width={1900}
    height={200}
    className="w-full object-cover"
  />

  <div className="absolute inset-0 flex items-end justify-between px-6 lg:px-12 py-4 text-white">
    <p className="text-sm">
      © 2026 Zeelan Tours. All rights reserved
    </p>

    <div className="flex gap-6 text-sm">
      <Link href="/privacy-policy" className="hover:underline">
        Privacy Policy
      </Link>
      <Link href="/terms-and-condition" className="hover:underline">
        Terms and Conditions
      </Link>
    </div>
  </div>
</div>


   </footer>
  )
}

export default Footer