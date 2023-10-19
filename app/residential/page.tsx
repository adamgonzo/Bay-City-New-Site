import React from "react";
import ResidentialGlass from "@/components/residentialGlassComponent/residentialGlass";

export default function Residential() {
  return (
    <section className="py-12 text-center">
      <div className="mb-8 shadow-xl">
          <div className="bg-gray-500 text-white py-20 text-center">
              <div className="container mx-auto">
                  <h1 className="text-5xl font-bold mb-4">Elevate Your Home with Premium Residential Glass</h1>
                  <p className="text-lg">Discover unparalleled quality and sophistication with our residential glass solutions. We are your dedicated partner, committed to enhancing your living space with exquisite glass craftsmanship. Experience the perfect blend of style and durability, tailored just for you.</p>

              </div>
          </div>

      </div>
      <hr className="border-t-2 border-gray-400 mb-8" />
      <div className="container mx-auto">
        <ResidentialGlass />
      </div>
    </section>
  );
}
