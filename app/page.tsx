import { about } from "@/lib/info";

import type { Metadata } from "next";
import glass from "../images/glass1.png";
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
    <section className="flex flex-col items-center justify-center py-4 text-white">
      <div className="mb-2 md:mb-12 w-3/4">
        <Image
          alt="Bay City General Glass"
          src={glass}
          width={800}
          height={300}
          priority
          className="rounded-lg"
        />
      </div>
      <div className="text-center mb-4">
        <p className="text-sm md:text-lg text-white mb-2">{about()}</p>
      </div>
    </section>
  );
}
