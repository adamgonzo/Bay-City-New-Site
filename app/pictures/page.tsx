import Gallery from '@/components/images_grid'
import '../../public/styles/styleForGalleryPage.css'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    absolute:
      'Gallery for Commercial and Residential Glass | Bay City General Glass'
  },
  metadataBase: new URL('https://www.baycitygeneralglass.com'),
  description:
    'Gallery displaying commerical jobs done and residential glass jobs done. Showing showers, glass railings, stair glass railings, and store fronts',
  openGraph: {
    title: 'Commercial Glass Services | Bay City General Glass',
    description: 'Gallery displaying work done residential and commercial',
    url: 'https://www.baycitygeneralglass.com/pictures',
    siteName: 'Bay City General Glass',
    locale: 'en-US',
    type: 'website'
  },
  keywords:
    'commercial glass services, storefront glass, glass mirrors, commercial doors, emergency board-up services, expert glass solutions, Bay City General Glass'
}

export default function Pictures() {
  return (
    <section className="py-12 text-center mt-5">
      <div className="mb-8">
        <h1 className="banner flex justify-center p-3 sm:p-5 mt-2 font-bold lg:p-6">
          Gallery
        </h1>
      </div>
      <hr className="border-t-2 border-gray-400 mb-8" />
      <div className="container mx-auto">
        <Gallery />
      </div>
    </section>
  )
}
