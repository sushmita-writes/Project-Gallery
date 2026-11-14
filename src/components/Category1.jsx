import { ArrowRight, ShoppingCart } from "lucide-react";

// Import images
import art1 from "../assets/images/art1.jpeg";
import art2 from "../assets/images/art2.jpeg";
import art3 from "../assets/images/atr3.jpeg";
import art4 from "../assets/images/art4.jpeg";
import art5 from "../assets/images/art5.jpeg";
import art6 from "../assets/images/art6.jpeg";
import art7 from "../assets/images/art7.jpeg";
import art8 from "../assets/images/art8.jpeg";

const categories = [
  {
    id: 1,
    name: "Paintings",
    arts: [
      { id: 1, name: "abc", image: art5, price:1000},
      { id: 2, name: "xy", image: art6, price:1000},
      { id: 3, name: "yz", image: art7,price:1000 },
      { id: 4, name: "ab", image: art8,  price:1000},
    ],
  },
  {
    id: 2,
    name: "Sculptures",
    arts: [
      { id: 5, name: "gh", image: art1,price:1000 },
      { id: 6, name: "kl", image: art2, price:2000 },
      { id: 7, name: "po", image: art3, price:2000 },
      { id: 8, name: "pp", image: art4, price:2000 },
    ],
  },
];

function Category() {
  return (
    <section className="px-3  font-sans">

      {categories.map((category) => (
        <div key={category.id} className="mb-10">

          {/* Category Heading */}
          <div className="mb-2 flex justify-between items-center  text-pink-800">
            <h2 className=" text-xl font-bold">
              {category.name}
            </h2>
            <h3 className="flex "> Explore <ArrowRight className="w-5"/>
            </h3>
          
          </div>

          {/* Art Grid */}
          <div className="grid grid-cols-4 gap-4">

            {category.arts.map((art) => (
              <div key={art.id} >

                {/* Art Image */}
                <img
                  src={art.image}
                  alt={art.name}
                  className="w-full h-40 border-2 border-pink-500 rounded-lg object-fill"
                />

                {/* Art Name */}
                <h3 className="mt-2  text-sm text-left text-pink-800">
                  {art.name}
                 
                </h3>
                <h3 className="text-left text-pink-800">
                 Rs {art.price}/-
                </h3>

                {/* Cart Button */}
                <button className="  mt-2 w-1 flex w-full justify-center items-center gap-1  bg-pink-800 border border-pink-500 rounded-md py-2 text-pink-300 hover:bg-violet-200">
                  <ShoppingCart className="w-6" />
               
                </button>

              </div>
            ))}

          </div>
        </div>
      ))}

    </section>
  );
}

export default Category;
