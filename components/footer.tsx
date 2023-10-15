"use client";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 w-screen">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex space-x-8 mb-4">
          <a href="/" className="text-white no-underline">
            Home
          </a>
          <a href="/pictures" className=" text-white no-underline ">
            Gallery
          </a>
          <a href="/#Services" className="text-white no-underline ">
            Services
          </a>
          <a href="/contact" className="text-white no-underline">
            Contact
          </a>
        </div>
        <div className="text-sm mb-2">
          &copy; 2023 Bay City General Glass. All rights reserved.
        </div>
        <div className="text-xs">San Francisco, CA | Phone: (510) 258-7839</div>
      </div>
    </footer>
  );
}
