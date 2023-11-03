'use client'

import React from 'react'
import Image from 'next/image'
import yelp from '@/images/yelpLogo.png'
import stars from '@/images/yelpStars.png'
import '@/public/styles/yelpSlide.css'
import { useEffect, useState } from 'react'

const customers = [
  {
    customerName: 'Alberta L.',
    paragraphOfReview:
      ' We worked with Adam and his son to help make and install the glass for our walk-in showers. They were professional, quick, and responsive to all my questions. We were installing a walk-in shower for my grandma and Adam patiently walked us through the process of which sliding glass door to install that was safe/ easy for my grandma to use, while also looking modern and sleek.\n' +
      '\n' +
      "I'd definitely work with him again! The process from quoting to assembly was quick and easy!",
    location: 'Millbrae, CA'
  },
  {
    customerName: 'Jessie C.',
    paragraphOfReview:
      "We started remodeling our stairs and required new stainless steel stairs railing. I found Adam through inline design, at first I thought Adam only does glass work. After talking to him, he is also an expert in installing the hardware. Now, we have a gorgeous railing system in our house and we use it every single day. We love Adam's work and his professional service! Thank you!",
    location: 'San Francisco, CA'
  },
  {
    customerName: 'Luyao J.',
    paragraphOfReview:
      "Adam is great! I contacted him asking for a window glass replacement for my mom's house. He was patient and nice explaining what type of glass we would need and gave us a reasonable quote. He came over to measure the glass and set up an appointment for installation right away. The job looks great!",
    location: 'University, Las Vegas, NV'
  },
  {
    customerName: 'Barry N.',
    paragraphOfReview:
      "Adam has always been reliable including his staff. He updated three bathrooms with mirrors and shower glass. Our home is in Blackhawk. He did a sensational job for us. I would highly recommend him. He also updated a bathroom for our son and daughter-in-law's home and they loved him. Their bathroom looked terrific. Again, Adam was on time and kept his delivery and installation schedules. You can't please everybody all the time but Adam sure makes an effort to do just that.",
    location: 'Danville, CA'
  }
]

export default function YelpInformation() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setActiveSlide(prevSlide => (prevSlide + 1) % customers.length)
    }, 5000) // Change slide every 5 seconds (adjust this as needed)

    return () => {
      clearInterval(slideInterval)
    }
  }, [])

  return (
    <div className="mb-5">
      <div className="flex flex-col items-center gap-5 justify-center">
        <h1 className="flex justify-center ">
          We appreciate feedback from our customers!
        </h1>
        <Image src={yelp} alt="yelp" height={60} />
      </div>
      <div className="review-container overflow-hidden">
        <div className="flex mt-5">
          {customers.map((customer, index) => (
            <div
              key={index}
              className={`flex flex-col review-slide ${
                activeSlide === index ? 'active' : ''
              }`}
            >
              <div className="flex justify-center">
                <Image
                  src={stars}
                  alt="stars"
                  height={30}
                  className="flex justify-center"
                />
              </div>
              <div className="mt-4">
                <q>
                  <i>{customer.paragraphOfReview}</i>
                </q>
              </div>
              <div className="flex flex-col items-center justify-center mt-3">
                <h5 className="text-md">{customer.customerName}</h5>
                <span className="font-light">{customer.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
