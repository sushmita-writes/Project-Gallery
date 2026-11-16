import { categories } from "../data/categories";  
import ProductCard from "../components/ProductCard";
import { useState  } from "react";

function AllProducts() {
  const [showOptions, setShowOptions] = useState(false);

  const allProducts = categories
    .flatMap((category) => category.products)
    .sort((p1, p2) => p1.name.localeCompare(p2.name));

  return (
    <section class="page">
      <div className="flex justify-between py-4">
        <h2 className="!text-pink-800">n Art Prints</h2>
        <button onClick={() => setShowOptions(!showOptions)}
        className="relative bg-pink-800 text-xl text-pink-100 rounded-lg py-2 px-3">
        Filter by Price
        {showOptions && (
          <div className="absolute top-full right-0 bg-pink-800 text-pink-100 rounded-lg mt-1">
            <button className="w-full hover:bg-pink-200 hover:text-pink-800 pt-2 pb-1 rounded-lg">
              &lt; Rs.10,000 
            </button>
            <button className="w-full hover:bg-pink-200 hover:text-pink-800 py-1 rounded-lg">
              &lt; Rs.50,000 
            </button>
            <button className="w-full hover:bg-pink-200 hover:text-pink-800 pt-1 pb-2 rounded-lg">
              &gt; Rs.50,000 
            </button>
          </div>
        )}
      </button>
      </div>

      <div className=" px-3 grid grid-cols-4 gap-4">
        {allProducts.map((art) => (
          <ProductCard key={art.id} art={art} />
        ))}
      </div>
    </section>
  );
}

export default AllProducts;