import { artists } from "../data/artists";
import { categories } from "../data/categories";
import ArtistSection from "../components/ArtistSection";

function Artists() {
  // Get all products grouped by artist
  const getArtistProducts = (artistId) => {
    return categories
      .flatMap((category) => category.products)
      .filter((product) => product.artistId === artistId);
  };

  return (
    <section className="page">
      <h2 className="!text-pink-800 mb-6 md:mb-8 px-3">Our Artists</h2>
      
      <div className="px-3">
        {artists.map((artist) => {
          const products = getArtistProducts(artist.id);
          if (products.length === 0) return null;
          
          return (
            <ArtistSection 
              key={artist.id} 
              artist={artist} 
              products={products} 
            />
          );
        })}
      </div>
    </section>
  );
}

export default Artists;