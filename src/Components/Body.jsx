import React from 'react'
import '../index.css'

const Body = () => {
  return (
    <div className="space-y-4 lg:flex" >
        <div className="flex items-center justify-center lg:flex-1  lg:order-2 lg:justify-end">
            <img src="./assets/Blue-Shape.svg" alt="1st" className="-rotate-[45deg] h-64 md:h-72 lg:h-[400px]"/>
            <img src="./assets/Pink-Shape.svg" alt="2nd" className="absolute -rotate-[30deg] h-64 md:h-72 lg:h-[400px]"/>
            <img src="./assets/Purple-Shape.svg" alt="third" className="absolute -rotate-[15deg] h-64 md:h-72 lg:h-[400px]" />
            <img src="./assets/Hero-Model.png" alt="hero" className="absolute h-64 lg:h-[400px]"/>

        </div>
        <div className="lg:flex-1 lg:order-1">
            <h1 style={{ fontFamily: 'Playfair Display, sans-serif' }} className="text-5xl font-bold leading-tight">Host your website in less than 5 minutes</h1>
            <p style={{ fontFamily: 'Lato, sans-serif' }} className="text-gray-400">With Hoster , get your website running in less than 5 minutes at competitive pricing packages</p>

            <form action="" className="flex flex-col gap-4 md:flex-row">
                <input className="rounded-md px-4 py-3 text-gray-900 bg-white placeholder:text-gray-500 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder='Enter Your Email'/>
                <button className="rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white">Join waitlist</button>
            </form>

            <div className="flex gap-2">
                <img src="./assets/Checkmark.svg" alt="chck" />
                <p style={{ fontFamily: 'Lato, sans-serif' }} className="text-gray-400">No spam ever , Unsubscribe anytime</p>
            </div>
        </div>
    </div>
  )
}

export default Body