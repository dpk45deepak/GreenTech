import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-green-700">KRISHIBANDHU 🍃</h3>
            <p className="text-gray-400">Revolutionizing agriculture with sustainable solutions.</p>
          </div>
          <div className="hidden md:block">
            <h4 className="font-semibold mb-4">COMPANY</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">Features</a></li>
              <li><a href="#" className="hover:text-white">Pricing</a></li>
            </ul>
          </div>
          <div className="hidden md:block">
            <h4 className="font-semibold mb-4">RESOURCE</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Information</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Customer Stories</a></li>
              <li><a href="#" className="hover:text-white">Payments</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">HELP</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Support</a></li>
              <li><a href="#" className="hover:text-white">FAQ</a></li>
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">© Copyright 2024, Arigatou All Rights Reserved</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">Term of Service</a>
              <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;