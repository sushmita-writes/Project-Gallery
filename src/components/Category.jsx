import { ArrowRight } from "lucide-react";
import ProductCard from "./ProductCard"

function Category({ category, list }) {
  return (
    <div className="my-5">

      <div className="mb-2 flex justify-between items-center text-pink-800">
        <h2 className="text-xl font-bold !text-pink-800">{category}</h2>

        <h3 className="flex items-center">
          Explore <ArrowRight className="w-5" />
        </h3>
      </div>

      <div className="flex gap-3 sm:gap-5 flex-nowrap overflow-x-auto">
        {list.map((art) => (
          <ProductCard key={art.id} art={art} />
        ))}
      </div>

    </div>
  );
}

export default Category;