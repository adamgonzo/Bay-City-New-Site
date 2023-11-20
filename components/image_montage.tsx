'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import {
  shower1,
  shower2,
  shower3,
  shower4,
  shower5,
  shower6,
  shower7,
  stairRailing1,
  stairRailing2,
  storefront1,
  storefront2,
  storefront3,
  storefront4
} from '../images'

const images = [
  shower1,
  shower2,
  shower3,
  shower4,
  shower5,
  shower6,
  shower7,
  stairRailing1,
  stairRailing2,
  storefront1,
  storefront2,
  storefront3,
  storefront4
]

export default function ImageMontage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length)
    }, 3000) // Change image every 3 seconds (adjust the interval as needed)

    return () => clearInterval(interval) // Cleanup the interval on component unmount
  }, []) // Empty dependency array means this effect will run once after the initial render

  return (
    <div className="image-montage">
      <Image
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex}`}
        width={500}
        height={300}
      />
    </div>
  )
}
