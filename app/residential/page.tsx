import React from 'react'
import ResidentialGlass from '@/components/residentialGlassComponent/residentialGlass'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    absolute: 'Commercial Glass Services | Bay City General Glass'
  },
  metadataBase: new URL('https://www.baycitygeneralglass.net'),
  description:
    'Bay City General Glass specializes in commercial glass installations, including storefront glass, glass mirrors, commercial doors, and 24/7 emergency board-up services. Contact us for expert glass solutions for your business.',
  openGraph: {
    title: 'Commercial Glass Services | Bay City General Glass',
    description:
      'Bay City General Glass specializes in commercial glass installations, including storefront glass, glass mirrors, commercial doors, and 24/7 emergency board-up services. Contact us for expert glass solutions for your business.',
    url: 'https://www.baycitygeneralglass.net/residential',
    siteName: 'Bay City General Glass',
    locale: 'en-US',
    type: 'website'
  },
  keywords:
    'commercial glass services, storefront glass, glass mirrors, commercial doors, emergency board-up services, expert glass solutions, Bay City General Glass'
}

export default function Residential() {
  return (
    <section className="py-12 mt-5 text-center">
      <div className="mb-8 shadow-xl">
        <div className="bg-gray-500 text-white py-20 text-center">
          <div className="container mx-auto">
            <h1 className="text-5xl font-bold mb-4">
              Elevate Your Home with Premium Residential Glass
            </h1>
            <p className="text-lg">
              Discover unparalleled quality and sophistication with our
              residential glass solutions. We are your dedicated partner,
              committed to enhancing your living space with exquisite glass
              craftsmanship. Experience the perfect blend of style and
              durability, tailored just for you.
            </p>
          </div>
        </div>
      </div>
      <hr className="border-t-2 border-gray-400 mb-8" />
      <div className="container mx-auto">
        <ResidentialGlass />
      </div>
    </section>
  )
}
