import { about } from "@/lib/info";
import type { Metadata } from "next";
import glass from "../images/bayCityGeneral.jpg";
import companyname from "../images/companyName.png";
import Image from "next/image";
import ImageMontage from "@/components/image_montage";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.baycitygeneralglass.net"),
  description:
    "Glass Installer, Windows, Showers, Glass Railings, Glass Stair Cases, Insulated Glass Units",
  openGraph: {
    title: "Bay City General Glass",
    description:
      "Glass Installer, Windows, Showers, Glass Railings, Glass Stair Cases, Insulated Glass Units",
    url: "https://baycitygeneralglass.net",
    siteName: "Bay City General Glass",
    locale: "en-Us",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen w-full max-w-screen-lg mx-auto pt-20 md:pt-28 lg:pt-32">
      <div className="grid lg:grid-cols-3 auto-cols-fr gap-20 items-center m-auto">
        <div className="flex flex-col justify-center items-center bg-gray-200 p-4 rounded-lg border-black border-3">
          <div id="Services">
            <h2 className="text-xl font-semibold mb-4">Services</h2>
            <ul className="list-disc ml-6 mb-4">
              <li>Mirrors</li>
              <li>Showers</li>
              <li>Insulated Glass</li>
              <li>Custom Glass Railings</li>
              <li>Stair Glass Railings</li>
              <li>Balcony Glass Railings</li>
              <li>Entry Doors</li>
              <li>Interior Doors</li>
              <li>Store Fronts</li>
              <li>Store Front Glass Replacements</li>
              <li>Architectural Interior Glass Walls</li>
            </ul>
            <a
              href="/contact"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold no-underline rounded-full py-3 px-6 text-lg transition duration-300 ease-in-out flex items-center justify-center mt-4"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <Image
            alt="Bay City General Glass"
            src={glass}
            width={300}
            height={300}
            priority
            className="rounded-lg mix-blend-multiply"
            style={{ width: "auto", height: "auto" }}
          />
        </div>
        <div className="flex justify-center items-center bg-gray-200 p-1 rounded-lg border-black border-3">
          <ImageMontage />
        </div>
      </div>

      <div className="mt-6 items-center mx-auto">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 relative flex justify-center">
          <span className="text-transparent text-shadow-gray-500 font-bold">
            <Image alt="Bay City General Glass" src={companyname} priority />
          </span>
        </h1>
        <hr className="border-black border-3" />
        <p className="text-md md:text-lg text-black mb-4 pt-5" id="About">
          {about()}
        </p>
      </div>
    </section>
  );
}
