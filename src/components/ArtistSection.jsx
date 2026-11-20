import ProductCard from "./ProductCard";

function ArtistSection({ artist, products }) {
  return (
    <div className="mb-8 md:mb-12">
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 mb-4 items-start">
        <img 
          src={artist.image} 
          alt={artist.name}
          className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-lg border-2 border-pink-800 object-cover"
        />
        <div className="flex-1 text-left">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-pink-800 mb-1 md:mb-2">
            {artist.name}
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-pink-900 mb-2">
            {artist.bio}
          </p>
          <p className="text-xs sm:text-sm md:text-base text-pink-800 font-semibold">
            {products.length} {products.length === 1 ? 'work' : 'works'} available
          </p>
        </div>
      </div>
      
      <div className="flex gap-3 sm:gap-5 flex-nowrap overflow-x-auto">
        {products.map((art) => (
          <ProductCard key={art.id} art={art} />
        ))}
      </div>
    </div>
  );
}

export default ArtistSection;
