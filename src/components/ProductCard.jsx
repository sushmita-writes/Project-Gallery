
import { ShoppingCart } from "lucide-react";

function ProductCard({ art }) {
  return (
    <div className="flex flex-col justify-between">
      <div>
        <img src={art.image} alt={art.name}
          className="w-full h-20 sm:h-40 md:h-50 lg:h-60 border-[1.75px] sm:border-3 border-pink-800 rounded-lg object-fill"
        />
        <h3 className="text-sm sm:text-xl lg:text-2xl text-left font-bold text-pink-800 line-clamp-2">{art.name}</h3>
        <h4 className="my-1 text-[10px] sm:text-[18px] lg:text-[20px] text-left font-semibold text-pink-800 truncate leading-none">{art.artist}</h4>
        <p className="text-left text-[8px] sm:text-[14px] lg:text-[16px] text-pink-800 leading-none">Rs. {art.price}/-</p>
      </div>
      <button className="mt-2 py-1 w-full bg-pink-900 rounded-sm text-pink-200 flex gap-2 items-center justify-center">
        <ShoppingCart className="h-4 sm:h-6 md:h-8 lg:h-10" />
      </button>
    </div>
  );
}

export default ProductCard;