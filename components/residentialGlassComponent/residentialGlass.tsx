"use client";
import React from "react";
import {
  showerGlass,
  mirrorGlass,
  glassTable,
  glassDoor,
  cabinetGlass,
  brokenGlass,
} from "../../images/ResidentialPageImages";
import Image from "next/image";
import "./index.css";

const services = [
  {
    title: "SHOWER DOORS",
    description:
      "Upgrade your bathroom with our expert shower door installations and repairs. Whether you need a new glass door or fixes for leaks, count on us for top-notch service.",
    image: showerGlass,
  },
  {
    title: "GLASS MIRRORS",
    description:
      "Enhance your home decor with custom mirrors tailored to your style. We offer bespoke mirror designs, allowing you to choose the size and shape that perfectly fits your space.",
    image: mirrorGlass,
  },
  {
    title: "GLASS REPLACEMENT",
    description:
      "Broken glass? We've got you covered. From windows to mirrors, sliding glass doors to cabinet glass, we specialize in seamless replacements to restore your home's beauty.",
    image: brokenGlass,
  },
  {
    title: "DOOR GLASS",
    description:
      "Create a stunning entrance with our custom door glass solutions. Impress your guests with unique designs that perfectly fit your door frame, adding elegance to your home.",
    image: glassDoor,
  },
  {
    title: "GLASS TABLETOPS",
    description:
      "Make a style statement with durable glass tabletops. Our high-quality glass adds sophistication to your furniture. Easily replaceable if needed, ensuring your investment lasts.",
    image: glassTable,
  },
  {
    title: "CABINET GLASS",
    description:
      "Elevate your cabinets with our premium glass options. Whether replacing broken glass or upgrading for aesthetics, choose from clear, frosted, or textured glass tailored to your taste.",
    image: cabinetGlass,
  },
];

export default function ResidentialGlass() {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="rounded-xl bg-white shadow-xl p-4 md:p-6 flex flex-col items-center"
          >
            <div className="w-full h-48 md:h-72 overflow-hidden mb-4">
              <Image
                src={service.image}
                alt="Service"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2 text-center">
              {service.title}
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-gray-600 text-center mb-4">
              {service.description}
            </p>
            <div className="w-full mt-auto">
              <a
                className="no-underline text-white text-sm md:text-md lg:text-lg xl:text-lg"
                href="/contact"
              >
                <button className="button-50 mx-auto" role="button">
                  Free Estimate
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
