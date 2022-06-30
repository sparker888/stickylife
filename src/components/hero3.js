import * as React from "react"

export default function Hero() {
  return (
    <div className="lg:flex bg-cyan-500">
      <div className="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2">
        <div className="max-w-xl">
          <h2 className="bg-gradient-to-br from-pink-400 via-pink-600 to-pink-800 bg-clip-text text-3xl font-black tracking-tight text-transparent sm:text-4xl md:text-4xl lg:text-6xl xl:text-6xl 2xl:text-7xl">
            <span className="mt-12 block leading-tight bg-gradient-to-br from-pink-400 via-pink-600 to-pink-800 bg-clip-text">
              Some Promotional
            </span>
            <span className="mt-0 block bg-gradient-to-br from-pink-400 via-pink-600 to-pink-800 bg-clip-text leading-tight text-transparent">
              Headline here
            </span>
          </h2>

          <p className="mt-2 lg:text-xl text-black text-base">
            Put some selling copy here
            <br />
            that entices people to click
          </p>

          <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
            <a
              href="#"
              className="block px-3 py-2 text-sm font-semibold text-center text-white transition-colors duration-200 transform bg-purple-500 rounded-md hover:bg-purple-700"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>

      <div className="w-full h-64 lg:w-1/2 lg:h-auto">
        <div
          className="w-full h-full bg-cover
          bg-[url('https://res.cloudinary.com/gravital-digital/image/upload/v1656594977/Screen_Shot_2022-06-30_at_9.15.48_AM_lmeqm7.png')]"
        >
          <div className="w-full h-full"></div>
        </div>
      </div>
    </div>
  )
}
