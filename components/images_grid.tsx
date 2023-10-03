"use client";

import Image from "next/image";
import * as images from "../images/index";

export default function Gallery() {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-4 p-4">
      {Object.values(images).map((img, index) => (
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
  );
}
