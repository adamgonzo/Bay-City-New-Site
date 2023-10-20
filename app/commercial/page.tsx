import React from "react";
import CommercialGlass from "@/components/commercialGlassComponent/commercialGlass";

export default function Commercial() {
  return (
    <section className="py-12 mt-5 text-center">
      <div className="bg-gray-500 text-white py-14 md:py-20 lg:py-12 xl:py-10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Discover Exceptional Commercial Glass Solutions
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed">
            Elevate your business environment with our meticulously crafted
            commercial glass solutions, designed to meet the unique demands of
            modern enterprises. Our offerings blend aesthetic sophistication,
            unwavering durability, and energy efficiency, ensuring your space
            stands out while being environmentally conscious. Whether you
            require striking storefront glass, elegant office partitions, or
            tailor-made glass installations, consider it done with our expert
            team at your service.
          </p>
        </div>
      </div>
      <hr className="border-t-2 border-gray-400 mb-8" />
      <div className="container mx-auto">
        <CommercialGlass />
      </div>
    </section>
  );
}
