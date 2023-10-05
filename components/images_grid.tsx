"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  stairRailing1,
  stairRailing2,
  stairRailing3,
  stairRailing4,
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
  storefront4,
} from "../images/index";

const categories = ["Shower", "Storefront", "Stair Railing"];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const filteredPictures = () => {
    switch (selectedCategory.toLowerCase()) {
      case "shower":
        return [shower1, shower2, shower3, shower4, shower5, shower6, shower7];
      case "storefront":
        return [storefront1, storefront2, storefront3, storefront4];
      case "stair railing":
        return [stairRailing1, stairRailing2, stairRailing3, stairRailing4];
      default:
        return [];
    }
  };

  return (
    <div className="p-4">
      <div className="mb-4 flex items-center">
        <label htmlFor="category" className="mr-2 text-gray-700 font-semibold">
          Choose a Category:
        </label>
        <select
          id="category"
          onChange={(e) => setSelectedCategory(e.target.value)}
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
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
        {filteredPictures().map((img, index) => (
          <div
            className="h-80 relative rounded-lg overflow-hidden hover:shadow-lg transition duration-300"
            key={index}
          >
            <Image
              className="h-full w-full object-cover"
              src={img}
              alt={`Gallery Image ${index}`}
              layout="fill"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
