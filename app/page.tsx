import { about } from "@/lib/info";
import type { Metadata } from "next";
import glass from "../images/bayCityGeneral.jpg";
import Image from "next/image";

export const metadata: Metadata = {
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
    <section className="flex flex-col items-center justify-center text-white">
      <div className="mb-2 md:mb-12 relative">
        <Image
          alt="Bay City General Glass"
          src={glass}
          width={400}
          height={300}
          priority
          className="rounded-lg mix-blend-multiply"
        />
      </div>
      <div className="text-center mb-4">
        <h1 className="text-3xl md:text-4xl font-extrabold text-black mb-2 relative flex justify-center">
          Bay City General Glass
        </h1>
        <hr className="border-black p-3" />
        <p className="text-md md:text-lg text-black mb-2 pt-5">{about()}</p>
      </div>
    </section>
  );
}
