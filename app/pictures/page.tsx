import Gallery from "@/components/images_grid";

export default function Pictures() {
  return (
    <section className="py-12 text-center">
      <div className="mb-8">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-600">
          Discover Our Stunning Glass Artworks
        </h1>
      </div>
      <hr className="border-t-2 border-gray-400 mb-8" />
      <div className="container mx-auto">
        <Gallery />
      </div>
    </section>
  );
}
