import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';


const Footer = () => {
  return (
    <div className="flex flex-col gap-12 md:flex-row md:justify-between">
        <ul style={{ fontFamily: 'Lato, sans-serif' }} className="flex gap-6 text-gray-400 items-center">
  <li className="flex items-center gap-2 hover:text-blue-600 transition">
    <FaFacebookF />
    <a href="#">Facebook</a>
  </li>
  <li className="flex items-center gap-2 hover:text-pink-500 transition">
    <FaInstagram />
    <a href="#">Instagram</a>
  </li>
  <li className="flex items-center gap-2 hover:text-blue-400 transition">
    <FaTwitter />
    <a href="#">Twitter</a>
  </li>
</ul>


        <div className="flex gap-2">
            <img src="./assets/Help-Avatar.svg" alt="help" />
            <div>
                <p style={{ fontFamily: 'Playfair Display, sans-serif' }} className='font-thin'>Have any questions?

                </p>
                <a href="#" style={{ fontFamily: 'Lato, sans-serif' }} className='font-medium'>Talk to specialist</a>
            </div>
        </div>
    </div>
  )
}

export default Footer