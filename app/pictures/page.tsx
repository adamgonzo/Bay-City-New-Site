import Gallery from "@/components/images_grid";
import "../../public/styles/styleForGalleryPage.css"

export default function Pictures() {
  return (
    <section className="py-12 text-center">
      <div className="mb-8">
        <h1 className="banner flex justify-center p-3 sm:p-5 mt-2 font-bold lg:p-6">
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
