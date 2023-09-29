import Image from "next/image";
import { about, name } from "@/lib/info";
import glass from "../images/glass1.png";

export const metadata = {
  description: "Developer, writer, and creator.",
  openGraph: {
    title: "Adam Gonzalez",
    description: "Developer, writer, and creator",
    url: "https://adamgonz.io",
    siteName: "Adam Gonzalez",
    images: [
      {
        url: "https://adamgonz.io/orig.jpeg",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-Us",
    type: "website",
  },
};

export default async function HomePage() {
  return (
    <section className="flex flex-col">
      <h1 className="font-serif text-3xl font-bold flex justify-center">
        {name}
      </h1>
      <p className="my-5 text-neutral-800 dark:text-neutral-200 flex items-center font-medium ">
        {about()}
      </p>
      <div className="flex justify-center my-8 flex-row ">
        {<Image alt={name} src={glass} width={400} height={100} priority />}
      </div>
      <p className="my-5 text-neutral-800 dark:text-neutral-200 font-shantel font-medium">
        {about()}
      </p>
    </section>
  );
}
