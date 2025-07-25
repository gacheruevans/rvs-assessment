"use client";
import React, { useState } from 'react'
import Container from './container'
import Link from 'next/link';
const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-slate-100">
      <Container classNames="flex justify-between items-center py-4">
      <div className="flex justify-between items-center w-full">
        {/* Logo */}
        <Link href="/" className="text-4xl font-bold text-slate-900">
        FA
        </Link>
        {/* Desktop Nav */}
        <nav className="hidden md:block">
        <ul className="flex gap-10 items-center justify-start">
          <li>
          <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          </li>
          <li>
          <Link href="/#reports" className="text-gray-700 hover:text-blue-600">Reports</Link>
          </li>
          <li>
          <Link href="/#about" className="text-gray-700 hover:text-blue-600">About</Link>
          </li>
          <li>
          <Link href="/#contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
          </li>
        </ul>
        </nav>
        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center">
        <button
          type="button"
          className="text-gray-700 hover:text-blue-600 focus:outline-none"
          aria-label="Open menu"
          onClick={() => setOpen(!open)}
        >
          <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
        </div>
      </div>
      {/* Desktop Profile/Actions */}
      <div className="hidden md:flex items-center">
        <Link href="/dashboard/profile" className="p-2 text-gray-700 hover:text-blue-600">Profile</Link>
        <Link href="/#login" className="p-2 text-gray-700 hover:text-blue-600">Login</Link>
        <Link href="/#register" className="font-semibold p-2 rounded-sm hover:bg-slate-200 border ml-4 text-gray-700 hover:text-blue-600">Register</Link>
      </div>
      </Container>
      {/* Mobile Menu */}
      {open && (
      <div className="md:hidden bg-slate-100 border-t">
        <nav>
        <ul className="flex flex-col gap-4 p-4">
          <li>
          <Link href="/" className="text-gray-700 hover:text-blue-600" onClick={() => setOpen(false)}>Home</Link>
          </li>
          <li>
          <Link href="/#reports" className="text-gray-700 hover:text-blue-600" onClick={() => setOpen(false)}>Reports</Link>
          </li>
          <li>
          <Link href="/#about" className="text-gray-700 hover:text-blue-600" onClick={() => setOpen(false)}>About</Link>
          </li>
          <li>
          <Link href="/#contact" className="text-gray-700 hover:text-blue-600" onClick={() => setOpen(false)}>Contact</Link>
          </li>
          <li>
          <Link href="/dashboard/profile" className="p-2 text-gray-700 hover:text-blue-600" onClick={() => setOpen(false)}>Profile</Link>
          </li>
          <li>
          <Link href="/#login" className="p-2 text-gray-700 hover:text-blue-600" onClick={() => setOpen(false)}>Login</Link>
          </li>
          <li>
          <Link href="/#register" className="font-semibold p-2 rounded-sm hover:bg-slate-200 border text-gray-700 hover:text-blue-600" onClick={() => setOpen(false)}>Register</Link>
          </li>
        </ul>
        </nav>
      </div>
      )}
    </header>
  )
}

export default Header