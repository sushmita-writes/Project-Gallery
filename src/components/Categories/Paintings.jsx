import { ArrowRight } from "lucide-react";
import ProductCard from "../ProductCard";

import art5 from "../../assets/images/art5.jpeg";
import art6 from "../../assets/images/art6.jpeg";
import art7 from "../../assets/images/art7.jpeg";
import art8 from "../../assets/images/art8.jpeg";

export const paintings = [
  { id: 1, name: "abc", image: art5, price: 1000 },
  { id: 2, name: "xy", image: art6, price: 1000 },
  { id: 3, name: "yz", image: art7, price: 1000 },
  { id: 4, name: "ab", image: art8, price: 1000 },
];



function Paintings() {
  return (
    <div className="mb-10">

      <div className="mb-2 flex justify-between items-center text-pink-800">
        <h2 className="text-xl font-bold">Paintings</h2>

        <h3 className="flex items-center">
          Explore <ArrowRight className="w-5" />
        </h3>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {paintings.map((art) => (
          <ProductCard key={art.id} art={art} />
        ))}
      </div>

    </div>
  );
}

export default Paintings;