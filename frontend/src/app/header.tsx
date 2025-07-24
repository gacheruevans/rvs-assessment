"use client";
import React from 'react'
import Container from './container'
import Link from 'next/link';
const Header = () => {
  return (
    <header className="bg-slate-100">
        <Container classNames="flex justify-between items-center py-4">
          <div className="flex justify-between items-center gap-52 ">
            <Link href="/" className="text-4xl font-bold text-slate-900">
              FA
            </Link>
            <nav >
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
          </div>
          <div>
            <Link href="/dashboard/profile" className="p-2 text-gray-700 hover:text-blue-600">Profile</Link>
            <Link href="/#login" className="p-2 text-gray-700 hover:text-blue-600">Login</Link>
            <Link href="/#register" className=" font-semibold p-2 rounded-sm hover:bg-slate-200 border ml-4 text-gray-700 hover:text-blue-600">Register</Link>
          </div>
        </Container>
    </header>
  )
}

export default Header