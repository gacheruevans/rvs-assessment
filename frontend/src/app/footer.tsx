import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-slate-950  text-white p-32 row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        © {currentYear} {" "}Evans Gacheru Munene. All rights reserved.
    </footer>
  )
}

export default Footer