import React from 'react'

const Hero = () => {
  return (
    <section className="text-white bg-blue-400 h-screen font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <div className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <h1 className="text-4xl font-bold">Welcome to RVS Volunteer Assignment System</h1>
          <p className="text-lg">
            This is a simple application built with Next.js and TypeScript.
          </p>
        </div>
    </section>
  )
}

export default Hero