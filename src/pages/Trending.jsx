import { categories } from "../data/categories";
import ProductCard from "../components/ProductCard";

function Trending() {
  // Get all trending products
  const trendingProducts = categories
    .flatMap((category) => category.products)
    .filter((product) => product.trending);

  return (
    <section className="page">
      <h2 className="!text-pink-800 mb-6 md:mb-8 px-3">Trending</h2>
      
      {trendingProducts.length === 0 ? (
        <div className="px-3 py-8 text-center">
          <p className="text-lg md:text-xl text-pink-800">
            No trending products at the moment. Check back soon!
          </p>
        </div>
      ) : (
        <div className="px-3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-3 md:gap-y-5">
          {trendingProducts.map((art, index) => (
            <div key={art.id} className="relative">
              <div className="absolute top-0 left-0 z-10 bg-pink-800 text-pink-100 rounded-br-lg rounded-tl-lg px-2 py-1 text-xs sm:text-sm font-bold">
                #{index + 1}
              </div>
              <ProductCard art={art} cardWidthForFlex="" />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Trending;