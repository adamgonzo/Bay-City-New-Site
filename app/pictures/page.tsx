import Gallary from "@/components/images_grid";

export default function Pictures() {
  return (
    <section>
      <div className="flex justify-center">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center pb-2">
          Stunning Glass Jobs Done
        </h1>
      </div>
      <hr className="solid pb-3" />
      <div>
        <Gallary />
      </div>
    </section>
  );
}
