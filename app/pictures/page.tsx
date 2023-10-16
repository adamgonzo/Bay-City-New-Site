import Gallery from "@/components/images_grid";

export default function Pictures() {
  return (
    <section className="py-12 text-center">
      <div className="mb-8">
        <h1 className="text-5xl font-extrabold border-4 border-black rounded-lg bg-cyan-700 text-white p-4 md:mt-5 sm:md-5 mt-5 lg:mt-0">
          Gallery
        </h1>
      </div>
      <hr className="border-t-2 border-gray-400 mb-8" />
      <div className="container mx-auto">
        <Gallery />
      </div>
    </section>
  );
}
