
import { ShoppingCart } from "lucide-react";

function Artworks({ art }) {
  return (
    <div>
      <img
        src={art.image}
        alt={art.name}
        className="w-full h-40 border-2 border-pink-500 rounded-lg object-fill"
      />

      <h3 className="mt-2 text-sm text-left text-pink-800">
        {art.name}
      </h3>

      <h3 className="text-left text-pink-800">
        Rs {art.price}/-
      </h3>

      <button className="mt-2 w-full flex justify-center items-center gap-1 bg-pink-800 border border-pink-500 rounded-md py-2 text-pink-300 hover:bg-violet-200">
        <ShoppingCart className="w-6" />
      </button>
    </div>
  );
}

export default Artworks;