'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import {
  stairRailing1,
  stairRailing2,
  shower1,
  shower2,
  shower3,
  shower4,
  shower5,
  shower6,
  shower7,
  storefront1,
  storefront2,
  storefront3,
  storefront4
} from '../images'

const categories = ['All', 'Shower', 'Storefront', 'Stair Railing']

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0])

  const allPictures = [
    {
      img: shower1,
      title: 'Corner Shower',
      description:
        'Corner glass shower with header in matte black in the upstairs bathroom'
    },
    {
      img: shower2,
      title: '90 Degree Frameless Shower Unit',
      description:
        'Frameless shower unit with chrome hardware two notched panels and one stationary panel with door in middle.'
    },
    {
      img: shower3,
      title: 'Another Angle Of The 90 Degree Shower Unit',
      description: 'Frameless shower unit with chrome hardware from the front'
    },
    {
      img: shower4,
      title: 'Corner Shower',
      description:
        'Corner shower with matte black header at the downstairs bathroom'
    },
    {
      img: shower5,
      title: 'Serenity Shower Slider',
      description: 'Installed serenity shower on a bathtub with towel bars'
    },
    {
      img: shower6,
      title: 'Shower Slider',
      description:
        'Installed shower slider with stationary panel in tile enclosed shower unit with handle on left'
    },
    {
      img: shower7,
      title: '90 Degree Serenity Shower',
      description:
        '90 Degree serenity shower with chrome hardware slider closing into 90 degree panel '
    },
    {
      img: storefront1,
      title: 'Green store front with grid pattern',
      description: 'Store front installed with aluminum material'
    },
    {
      img: storefront2,
      title: 'Commercial Store Front',
      description:
        'Store front installed with aluminum hardware, and also installed double doors for entrance with panic hardware.'
    },
    {
      img: storefront3,
      title: 'Store Front',
      description:
        'Store front with grid pattern for top windows and store front windows'
    },
    {
      img: storefront4,
      title: 'Store front door',
      description: 'Store front door with panic hardware and top window'
    },
    {
      img: stairRailing1,
      title: 'Glass stair railing',
      description: 'Curved glass stair railing with posts and a top rail'
    },
    {
      img: stairRailing2,
      title: 'Glass Stairs',
      description: 'Glass stairs with standoffs'
    }
  ]

  const filteredPictures = () => {
    switch (selectedCategory.toLowerCase()) {
      case 'all':
        return allPictures
      case 'shower':
        return allPictures.slice(0, 7)
      case 'storefront':
        return allPictures.slice(7, 11)
      case 'stair railing':
        return allPictures.slice(11)
      default:
        return []
    }
  }

  return (
    <div className="p-4">
      <div className="mb-4 flex items-center">
        <label htmlFor="category" className="mr-2 text-gray-700 font-semibold">
          Choose a Category:
        </label>
        <select
          id="category"
          onChange={e => setSelectedCategory(e.target.value)}
          value={selectedCategory}
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 auto-cols-fr gap-3">
        {filteredPictures().map((photo, index) => (
          <div
            className="h-full  rounded-lg overflow-hidden shadow-lg transition duration-300 dark:shadow-gray-300 shadow-black "
            key={index}
          >
            <div className="p-3 flex flex-col h-full justify-between">
              <Image
                className="h-fit w-full object-contain mb-4 rounded-lg"
                src={photo.img}
                alt={`Gallery Image ${index}`}
              />
              <div className="mb-auto mt-auto">
                <h2 className="text-xl font-semibold mt-auto">{photo.title}</h2>
              </div>
              <div className="mb-auto mt-auto">
                <hr className="border dark:border-gray-200 border-black" />
              </div>
              <div className="mb-auto mt-auto">
                <p className="text-sm">{photo.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
