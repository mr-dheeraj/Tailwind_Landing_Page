import React from 'react'
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex justify-between"> 
        <div  className="flex items-center justify-center gap-2">
            <img src="./assets/Logo.svg" alt="logo" />
            <button className="bg-gradient-to-r from-orange-400 to-red-400 text-xs text-white px-2.5 py-1.5 rounded-2xl">Hoster is Hiring</button>

        </div>

        <ul style={{ fontFamily: 'Lato, sans-serif' }}  className="hidden lg:flex justify-between items-center text-gray-400 gap-6">
            <li><a href="#">Plans</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Why Hoster</a></li>

        </ul>

        <div style={{ fontFamily: 'Lato, sans-serif' }} className="hidden lg:flex justify-center items-center gap-6">
            <a href="#" className="text-gray-400">Sign In</a>
            <button className="rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white">Join Waitlist</button>
        </div>

        <div className="lg:hidden">
        <FaBars/>


        </div>
    </div>
  )
}

export default Header