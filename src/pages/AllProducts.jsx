import { paintings } from "../components/Categories/Paintings";
import {sculptures} from "../components/Categories/Sculptures";   
import ProductCard from "../components/ProductCard";
import { Filter}  from "lucide-react";




function AllProducts() {
  return (
    <>
      <div className="flex justify-between items-center px-3 mb-2 text-pink-800">
        <h3 className="text-lg font-bold">All Products</h3>
       <h5 className="flex"> <Filter className="w-5"/>Filter</h5> 
      </div>

      <div className=" px-3 grid grid-cols-4 gap-4 ">
        {paintings.map((art) => (
          <ProductCard key={art.id} art={art} />
        ))}
      
        {paintings.map((art) => (
          <ProductCard key={art.id} art={art} />
        ))}

        {sculptures.map((art) => (
          <ProductCard key={art.id} art={art} />
        ))}
      </div>
    </>
  );
}

export default AllProducts;