import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Bay City General Glass",
  description:
    "Glass company in the Bay Area that specializes in glass railings, showers, mirrors, Insulated Glass, Store Fronts",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased flex flex-col min-h-screen mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto text-black">
        <Navbar />
        <div className="mt-10 md:mt-12 lg:mt-1 px-2 md:px-0">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
