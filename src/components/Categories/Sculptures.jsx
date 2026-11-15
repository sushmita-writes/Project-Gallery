import { ArrowRight } from "lucide-react";
import Artworks from "../Artworks";

import art1 from "../../assets/images/art1.jpeg";
import art2 from "../../assets/images/art2.jpeg";
import art3 from "../../assets/images/atr3.jpeg";
import art4 from "../../assets/images/art4.jpeg";

const sculptures = [
  { id: 5, name: "gh", image: art1, price: 1000 },
  { id: 6, name: "kl", image: art2, price: 2000 },
  { id: 7, name: "po", image: art3, price: 2000 },
  { id: 8, name: "pp", image: art4, price: 2000 },
];

function Sculptures() {
  return (
    <div className="mb-10">

      <div className="mb-2 flex justify-between items-center text-pink-800">
        <h2 className="text-xl font-bold">Sculptures</h2>

        <h3 className="flex items-center">
          Explore <ArrowRight className="w-5" />
        </h3>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {sculptures.map((art) => (
          <Artworks key={art.id} art={art} />
        ))}
      </div>

    </div>
  );
}

export default Sculptures;