"use client";

import Image from "next/image";
import * as images from "../images/index";

export default function Gallary() {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-3 ">
      {Object.values(images).map((img) => (
        <div className="h-96 relative" key="glass">
          {" "}
          <Image
            className="hover:scale-125 h-full w-full object-cover"
            src={img}
            alt=""
            key="windows"
          />
        </div>
      ))}
    </div>
  );
}
