import { Link } from "react-router-dom";
import CartButton from "./CartButton";

function ProductCard({ art, cardWidthForFlex = "w-1/3 sm:w-1/4 lg:w-1/5" }) {  // <-- default width for flex, should pass "" for grid
  return (
    <Link to={`/products/${art.id}`} className={`py-2 ${cardWidthForFlex} flex-shrink-0 flex flex-col justify-between`}>
      <div>
        <img src={art.image} alt={art.name}
          className="w-full h-30 sm:h-40 md:h-45 lg:h-50 border-[1.75px] sm:border-3 border-pink-800 rounded-lg object-fill"
        />
        <h3 className="text-sm sm:text-xl lg:text-2xl text-left font-bold text-pink-800 line-clamp-2">{art.name}</h3>
        <h4 className="text-[10px] sm:text-[18px] lg:text-[20px] text-left font-semibold text-pink-800 truncate">{art.artist}</h4>
        <p className="text-left text-[8px] sm:text-[14px] lg:text-[16px] text-pink-800 leading-none">Rs. {art.price}/-</p>
      </div>
      <CartButton />
    </Link>
  );
}

export default ProductCard;