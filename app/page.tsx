import { about } from '@/lib/info'
import type { Metadata } from 'next'
import ImageMontage from '@/components/image_montage'
import {
  Money,
  Professional,
  Calendar,
  FastService,
  Certificate,
  CustomWork
} from '@/images/icons'
import '../public/styles/appPageStyle.css'
import Link from 'next/link'
import YelpInformation from '@/components/yelpComponent'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.baycitygeneralglass.net'),
  title: {
    absolute:
      'Bay City General Glass | Expert Residential and Commercial Glass Installations'
  },
  description:
    'Bay City General Glass specializes in expert glass installations for residential and commercial spaces. Our services include mirrors, showers, insulated glass, custom glass railings, entry doors, and more. Contact us for a free estimate today!',
  openGraph: {
    title:
      'Bay City General Glass | Expert Residential and Commercial Glass Installations',
    description:
      'Bay City General Glass specializes in expert glass installations for residential and commercial spaces. Our services include mirrors, showers, insulated glass, custom glass railings, entry doors, and more. Contact us for a free estimate today!',
    url: 'https://www.baycitygeneralglass.net',
    siteName: 'Bay City General Glass',
    locale: 'en-US',
    type: 'website',
    images: [
      {
        url: 'https://www.baycitygeneralglass.net/images/homepage-banner.jpg',
        alt: 'Bay City General Glass'
      }
    ]
  },
  keywords:
    'glass installer, residential glass, commercial glass, mirrors, showers, insulated glass, glass railings, entry doors, expert glass installations'
}

export default function HomePage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen w-full max-w-screen-lg mx-auto pt-20 md:pt-28 lg:pt-32">
      <div className="flex justify-center items-center p-1 rounded-lg border-black border-3">
        <ImageMontage />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14 mb-6 mx-auto p-6 border-3 border-transparent shadow-2xl rounded-lg w-full justify-center ">
        <div className="flex items-center p-2 rounded-lg bg-[#d5edf6]">
          <div className="w-10 h-10 mr-3 rounded-full flex items-center justify-center  text-white ">
            <Money />
          </div>
          <span className="text-lg font-medium">Free Estimate</span>
        </div>
        <div className="flex items-center p-2 rounded-lg bg-[#d5edf6]">
          <div className="w-10 h-10 mr-3 rounded-full flex items-center justify-center text-white">
            <Calendar />
          </div>
          <span className="text-lg font-medium">Open Monday-Friday</span>
        </div>
        <div className="flex items-center p-2 rounded-lg bg-[#d5edf6]">
          <div className="w-10 h-10 mr-3 rounded-full flex items-center justify-center  text-white">
            <FastService />
          </div>
          <span className="text-lg font-medium">Fast Service</span>
        </div>
        <div className="flex items-center p-2 rounded-lg bg-[#d5edf6]">
          <div className="w-10 h-10 mr-3 rounded-full flex items-center justify-center text-white">
            <Certificate />
          </div>
          <span className="text-lg font-medium">Licensed</span>
        </div>
        <div className="flex items-center p-2 rounded-lg bg-[#d5edf6]">
          <div className="w-10 h-10 mr-3 rounded-full flex items-center justify-center text-white">
            <CustomWork />
          </div>
          <span className="text-lg font-medium">Custom Glazing Solutions</span>
        </div>
        <div className="flex items-center p-2 rounded-lg bg-[#d5edf6]">
          <div className="w-10 h-10 mr-3 rounded-full flex items-center justify-center text-white">
            <Professional />
          </div>
          <span className="text-lg font-medium">
            Experienced Glazing Experts
          </span>
        </div>
      </div>

      <div className="p-6 mt-6 rounded-lg  shadow-lg text-center">
        <h1 className=" text-3xl font-bold mb-4 ">Get A Free Estimate Today</h1>
        <div className="mb-6 text-lg">
          At Bay City General Glass, we believe in transparent and hassle-free
          services. Take the first step towards enhancing your space with our
          high-quality glass products. Whether you&apos;re a homeowner looking
          to revamp your windows or a business owner in need of custom glass
          solutions, we&apos;re here to help. Contact us today for a free
          estimate. Our expert team will assess your needs, discuss your vision,
          and provide you with a detailed quote, ensuring you have a clear
          understanding of the possibilities that lie ahead. Let&apos;s bring
          your glass project to life without any upfront costs – because
          transforming your space should be as effortless as enjoying the final
          result.
        </div>
        <div className="flex justify-center ">
          <a href="/contact" className="button-74 mx-auto w-full text-center">
            <button
              className="mx-auto text-center flex justify-center"
              role="button"
            >
              CONTACT US
            </button>
          </a>
        </div>
      </div>

      <div className="p-6 mt-5 mb-3 rounded-lg shadow-lg ">
        <div className="flex flex-col items-center mb-4">
          <h1 className="font-semibold text-2xl mb-2">
            What You Will Get Working With Bay City General Glass
          </h1>
          <p className="text-gray-600">
            Residential & Commercial Glass is our Specialty!
          </p>
        </div>

        <hr className="border-b border-3 border-gray-400 mb-4" />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 items-center">
          <div className="flex justify-center text-lg text-gray-700">
            {about()}
          </div>

          <div className="bg-gray-100 p-4 rounded-lg border-2 border-black md:h-[620px] lg:h-full">
            <h2 className="text-xl font-semibold mb-4 text-center">
              Our Services
            </h2>
            <ul className="list-disc list-inside text-lg flex flex-col gap-2 items-start">
              <li>Mirrors</li>
              <li>Showers</li>
              <li>Insulated Glass</li>
              <li>Custom Glass Railings</li>
              <li>Stair Glass Railings</li>
              <li>Balcony Glass Railings</li>
              <li>Entry Doors</li>
              <li>Interior Doors</li>
              <li>Store Fronts</li>
              <li>Store Front Glass Replacements</li>
              <li>Architectural Interior Glass Walls</li>
            </ul>
            <div className="mt-4">
              <Link
                href="/contact"
                className="no-underline text-black font-bold"
              >
                <button
                  className="button-74 w-full mx-auto text-center"
                  role="button"
                >
                  CONTACT US
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="grid auto-cols-fr mt-5 lg:grid-cols-2 gap-4 mb-5">
        <div className="rounded-xl shadow-xl flex flex-col p-10">
          <h1 className="flex justify-center text-2xl font-semibold mb-4">
            Residential Glass
          </h1>
          <p className="text-center">
            Residential glass solutions are designed to enhance the beauty and
            functionality of your home. From elegant mirrors that reflect your
            style to custom-designed shower enclosures offering both luxury and
            privacy, our residential glass services transform living spaces. Our
            insulated glass solutions provide energy efficiency, ensuring your
            home remains comfortable year-round. Explore our range of glass
            options for windows, doors, and interior spaces, tailored to elevate
            your home&apos;s ambiance.
          </p>
          <a href="/residential" className="no-underline text-black font-bold">
            <button
              className="button-74 w-full mt-3 mx-auto text-center"
              role="button"
            >
              Residential Glass Information
            </button>
          </a>
        </div>
        <div className="rounded-xl shadow-xl flex flex-col p-10">
          <h1 className="flex justify-center text-2xl font-semibold mb-4">
            Commercial Glass
          </h1>
          <p className="text-center ">
            Commercial glass installations offer businesses innovative solutions
            for modern spaces. Our custom glass designs cater to storefronts,
            office partitions, and architectural glass walls, creating an open
            and inviting atmosphere. Durable and stylish, our glass products
            provide functionality while adding a touch of sophistication.
            Discover our range of glass options tailored for commercial
            applications, designed to leave a lasting impression on your clients
            and customers.
          </p>
          <a href="/commercial" className="no-underline text-black mt-auto">
            <button
              className="button-74 w-full mx-auto text-center"
              role="button"
            >
              Commercial Glass Information
            </button>
          </a>
        </div>
      </div>
      <div className="rounded-xl shadow-xl mb-4 mt-auto p-4 bg-gray-100">
        <YelpInformation />
      </div>
    </section>
  )
}
