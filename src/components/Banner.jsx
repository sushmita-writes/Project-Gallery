import { CircleChevronLeft, CircleChevronRight, Heart } from "lucide-react";
import Pink from "../assets/images/pink.png";

function Banner() {
    return (
        <section className="flex flex-col items-center gap-2 m-4">
            <div>
                <div className="banner">
                    <img src={Pink} alt="Banner"></img>
                    <p className="absolute bottom-0 right-0 text-xs text-pink-100 bg-black/50">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                {/* <div className="banner" >
                    <img></img>
                    <p></p>
                </div>
                <div className="banner">
                    <img></img>
                    <p></p>
                </div> */}

                <CircleChevronLeft className="absolute left-4 top-2/5 w-6 h-6 p-1 text-pink-100 -translate-y-1/2 bg-black/60" />
                <CircleChevronRight className="absolute right-4 top-2/5 w-6 h-6 p-1 text-pink-100 -translate-y-1/2 bg-black/60" />
            </div>
            <div className="flex gap-2 text-pink-800">
                <Heart className="w-3 h-3" fill="currentColor" />
                <Heart className="w-3 h-3" />
                <Heart className="w-3 h-3" />
            </div>
        </section>
    );
}

export default Banner;