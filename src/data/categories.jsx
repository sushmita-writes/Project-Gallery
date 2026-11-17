import art1 from "../assets/images/art1.jpeg";
import art2 from "../assets/images/art2.jpeg";
import art3 from "../assets/images/atr3.jpeg";
import art4 from "../assets/images/art4.jpeg";
import art5 from "../assets/images/art5.jpeg";
import art6 from "../assets/images/art6.jpeg";
import art7 from "../assets/images/art7.jpeg";
import art8 from "../assets/images/art8.jpeg";

export const categories = [
  {
    id: 1,
    name: "Paintings",
    products: [
      { id: 10, name: "sample name", image: art5, price: 1000, artist: "artist name" },
      { id: 11, name: "checking a longer name", image: art6, price: 1000, artist: "artist name" },
      { id: 12, name: "name yz", image: art7, price: 1000, artist: "artist name" },
      { id: 13, name: "name ab", image: art8, price: 1000, artist: "artist name" },
    ],
  },
  {
    id: 2,
    name: "Sculptures",
    products: [
      { id: 20, name: "sample name gh", image: art1, price: 1000, artist: "artist name" },
      { id: 21, name: "checking a longer name kl", image: art2, price: 2000, artist: "artist name" },
      { id: 22, name: "name po", image: art3, price: 2000, artist: "artist name" },
      { id: 23, name: "name pp", image: art4, price: 2000, artist: "artist name" },
    ],
  },
];
