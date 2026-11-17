
import { Palette, ShoppingBag, Heart, Sparkles } from "lucide-react";
import artabout from "../assets/images/artabout.jpeg";

function About() {
  return (
    <div className="text-pink-800" class="page">
      <section className="bg-pink-200  text-center py-14 px-5">
        <h1 className="text-3xl md:text-4xl font-bold !text-pink-800 mb-4">
          Discover Art. Feel Creativity.
        </h1>

        <p className=" text-center  text-pink-500 ">
          Welcome to our Art Gallery, where creativity meets passion!
          Explore beautiful paintings and unique sculptures that bring
          life, color, and inspiration to every space.
        </p>
      </section>

   
      <section className="w-full mx-auto px-3 py-5">
          <div className="grid md:grid-cols-2 gap-10 items-center">

          <img
            src={artabout}
            alt="Art Gallery"
            className="w-full h-64 md:h-80 object-fill rounded-2xl"
          />

          <div>
            <h2 className="text-2xl font-bold !text-pink-800 mb-4">
              Our Story
            </h2>

            <p className="text-pink-500">
              We believe every artwork tells a story. Our platform
              brings art lovers closer to beautiful creations,
              making it easy to explore and shop for art.
            </p>
          </div>

        </div>
      </section>

      <section className="bg-pink-200 py-12 px-5">
        <h2 className="text-2xl font-bold !text-pink-800 text-center mb-10">
          What Makes Us Special?
        </h2>

        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">

          <div className="bg-white p-5 rounded-xl text-center shadow-sm">
            <Palette  className="mx-auto text-pink-700 mb-3" />
            <h3 className="font-semibold mb-2">Unique Artworks</h3>
            <p className="text-sm text-pink-500">
              Discover creative and beautiful collections.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl text-center shadow-sm">
            <ShoppingBag  className="mx-auto text-pink-700 mb-3" />
            <h3 className="font-semibold mb-2">Easy Shopping</h3>
            <p className="text-sm text-pink-500">
              Find your favorite art with ease.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl text-center shadow-sm">
            <Heart  className="mx-auto text-pink-700 mb-3" />
            <h3 className="font-semibold mb-2">Made with Passion</h3>
            <p className="text-sm text-pink-500">
              Celebrating creativity and imagination.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl text-center shadow-sm">
            <Sparkles  className="mx-auto text-pink-700 mb-3" />
            <h3 className="font-semibold mb-2">Art for Everyone</h3>
            <p className="text-sm text-pink-500">
              Bringing beauty into everyday life.
            </p>
          </div>

        </div>
      </section>

      <section className="text-center py-12 px-5">
        <h2 className="text-2xl font-bold !text-pink-800 mb-3">
          Let's Make Your Space Beautiful!
        </h2>

        <p className="text-pink-500 mb-6">
          Find the artwork that speaks to you.
        </p>

        
      </section>

    </div>
  );
}

export default About;
