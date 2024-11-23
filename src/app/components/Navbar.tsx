'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-green-700 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
            <Link href="./" className="flex items-center py-4 px-2">
              <img src="/image/logo.png" alt="logo.png" width={80} height={80}/>
                <div>
                  <span className="font-semibold text-blue-800 text-lg">Tech Meets Trend</span>
                  <p className="text-xs text-black">Speed, Style, and Smart Features Laptops That Do More</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <Link href="/" className="py-4 px-2 text-white font-semibold hover:text-blue-500 transition duration-300">Home</Link>
            <Link href="/gallery" className="py-4 px-2 text-white font-semibold hover:text-blue-500 transition duration-300">Gallery</Link>
            <Link href="/about" className="py-4 px-2 text-white font-semibold hover:text-blue-500 transition duration-300">About</Link>
            <Link href="/contact" className="py-4 px-2 text-white font-semibold hover:text-blue-500 transition duration-300">Contact</Link>
          </div>
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button" onClick={() => setIsOpen(!isOpen)}>
              <svg
                className="w-6 h-6 text-blue-800 hover:text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <Link href="/" className="block py-2 px-4 text-sm hover:bg-blue-500 hover:text-white transition duration-300">Home</Link>
        <Link href="/gallery" className="block py-2 px-4 text-sm hover:bg-blue-500 hover:text-white transition duration-300">Gallery</Link>
        <Link href="/about" className="block py-2 px-4 text-sm hover:bg-blue-500 hover:text-white transition duration-300">About</Link>
        <Link href="/contact" className="block py-2 px-4 text-sm hover:bg-blue-500 hover:text-white transition duration-300">Contact</Link>
      </div>
    </nav>
  )
}

