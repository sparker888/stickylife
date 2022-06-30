import * as React from "react"

export default function Hero() {
  return (
    <div className="lg:flex bg-yellow-200">
      <div className="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2">
        <div
          className="w-full h-full bg-cover
          bg-[url('https://res.cloudinary.com/gravital-digital/image/upload/v1656594861/Screen_Shot_2022-06-30_at_9.13.56_AM_whzufp.png')]"
        >
          <div className="w-full h-full"></div>
        </div>
      </div>

      <div className="w-full h-64 lg:w-1/2 lg:h-auto">
        <div className="max-w-xl">
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl md:text-4xl lg:text-6xl xl:text-6xl 2xl:text-7xl">
            <span className="mt-48 block leading-tight text-cyan-500">
              Custom Automotive
            </span>
            <span className="mt-0 block text-cyan-500 font-black leading-tight">
              Magnet Bundles
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
              className="block px-3 py-2 text-sm font-semibold text-center text-white transition-colors duration-200 transform bg-pink-400 rounded-md hover:bg-pink-700"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
