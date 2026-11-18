import { categories } from "../data/categories";  
import ProductCard from "../components/ProductCard";
import { useState  } from "react";

function AllProducts() {
  const [showOptions, setShowOptions] = useState(false);
  const [filter, setFilter] = useState(0);

  const allProducts = categories
    .flatMap((category) => category.products)
    .sort((p1, p2) => p1.name.localeCompare(p2.name))
    .filter((product) => {
      const price = parseInt(product.price.replace(/,/g, ""), 10);
      if (filter == 1) return price < 10000;
      if (filter == 2) return (price < 50000 && price > 10000);
      if (filter == 3) return price > 50000;
      return true;
    });

  return (
    <section class="page">
      <div className="flex justify-between pb-4 pt-2 px-3 items-center">
        <h2 className="!text-pink-800">{allProducts.length} Art Prints</h2>
        <button onClick={() => setShowOptions(!showOptions)}
        className="relative bg-pink-800 text-pink-100 text-sm sm:text-xl md:text-2xl rounded-lg py-2 px-3">
        {filter == 0 && "Filter by Price"}
        {filter == 1 && "< Rs. 10,000"}
        {filter == 2 && "< Rs. 50,000"}
        {filter == 3 && "> Rs. 50,000"}
        {showOptions && (
          <div className="absolute top-full right-0 bg-pink-800 text-pink-100 rounded-lg mt-1">
            <button className={`w-full pt-2 pb-1 border-b-pink-100 rounded-t-lg ${filter == 1 ? 'bg-pink-100 text-pink-800' : ''}`}
              onClick={() => setFilter(1)}>
              &lt; Rs. 10,000 
            </button>
            <button className={`w-full py-1 border-b-pink-100 ${filter == 2 ? 'bg-pink-100 text-pink-800' : ''}`}
              onClick={() => setFilter(2)}>
              &lt; Rs. 50,000 
            </button>
            <button className={`w-full py-1 border-b-pink-100 ${filter == 3 ? 'bg-pink-100 text-pink-800' : ''}`}
              onClick={() => setFilter(3)}>
              &lt; Rs. 50,000 
            </button>
            <button className={`w-full pt-1 pb-2 rounded-b-lg ${filter == 0 ? 'bg-pink-100 text-pink-800' : ''}`}
              onClick={() => setFilter(0)}>
              No Filter
            </button>
          </div>
        )}
      </button>
      </div>

      <div className="px-3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-3 md:gap-y-5">
        {allProducts.map((art) => (
          <ProductCard key={art.id} art={art} cardWidthForFlex="" />
        ))}
      </div>
    </section>
  );
}

export default AllProducts;