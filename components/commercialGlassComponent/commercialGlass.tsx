'use client'
import Image from 'next/image'
import React from 'react'
import {
  commercialDoor,
  commercialMirror,
  storeFront
} from '../../images/CommercialPageImages/index'
import './index.css'

const services = [
  {
    title: 'STOREFRONT GLASS',
    description:
      'Has your business fallen victim to a break-in, leaving you in need of urgent window and storefront glass replacement? Perhaps your windows have worn over time and require a fresh installation. Count on us for swift solutions and seamless replacements to secure your business.',
    image: storeFront
  },
  {
    title: 'GLASS MIRRORS',
    description:
      'From bathroom mirrors to full-body and office mirrors, we specialize in expert installations and meticulous repairs. Super Mario Glass Inc. is your go-to partner for all your glass mirror needs in your business. Contact us today for exceptional service and flawless mirrors.',
    image: commercialMirror
  },
  {
    title: 'COMMERCIAL DOORS AND STOREFRONTS',
    description:
      'Our skilled technicians are dedicated to providing top-notch repair and installation services for your commercial doors. Whether you need custom doors or essential trimmings to ensure smooth functionality, we have you covered. Trust us for tailored solutions that enhance your business space.',
    image: commercialDoor
  }
]
export default function CommercialGlass() {
  return (
    <section className="container mx-auto px-4 py-8 grid gap-6 md:grid-cols-2 lg:grid-cols-2">
      {services.map((service, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-xl p-4 flex flex-col items-center"
        >
          <div className="w-full h-48 md:h-72 overflow-hidden mb-4">
            <Image
              src={service.image}
              alt="Service"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold mb-2 text-center">
            {service.title}
          </h2>
          <p className="text-sm md:text-base lg:text-lg xl:text-xl text-gray-600 text-center mb-4">
            {service.description}
          </p>
          <div className="w-full mt-auto">
            <a
              className="no-underline text-white text-sm md:text-md lg:text-lg xl:text-lg"
              href="/contact"
            >
              <button
                className="button-50 mx-auto text-black text-sm md:text-md lg:text-lg xl:text-xl"
                role="button"
              >
                Free Estimate
              </button>
            </a>
          </div>
        </div>
      ))}
    </section>
  )
}
