import { useState } from 'react';
import { CircleChevronLeft, CircleChevronRight, Heart } from 'lucide-react';
import I1 from '../assets/images/i1.jpg';
import I2 from '../assets/images/i2.jpg';
import I3 from '../assets/images/i3.jpg';
import I4 from '../assets/images/i4.jpg';
import I5 from '../assets/images/i5.jpg';

const banners = [
    { image: I1, alt: "slide 1", excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", author: "Person 1" },
    { image: I2, alt: "slide 2", excerpt: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", author: "Person 2" },
    { image: I3, alt: "slide 3", excerpt: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.", author: "Person 3" },
    { image: I4, alt: "slide 4", excerpt: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.", author: "Person 4"},
    { image: I5, alt: "slide 5", excerpt: "Excepteur sint occaecat cupidatat non proident, sunt in culpa.", author: "Person 5" },
];

function Banner() {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent(current === banners.length - 1 ? 0 : current + 1);
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? banners.length - 1 : current - 1);
    }

    return (
        // Banner + pagination dots --> column
        <section className="flex flex-col items-center m-3 md:m-5 lg:m-5">
            {/* Banner : < + image + excerpt + >  */}
            <div className="relative w-full h-35 md:h-45 lg:h-55 overflow-hidden bg-pink-100 rounded-lg">
                {/* image and excerpt */}
                {banners.map((banner, index) => (
                    <div key={index} className={index === current ? 'block' : 'hidden'}>
                        <img src={banner.image} alt={banner.alt} className="absolute inset-0 w-full h-full object-cover md:object-fill lg:object-fill" />
                        <p className="absolute bottom-0 left-0 right-0 bg-pink-900/60 text-pink-50 p-1 text-xs md:text-sm lg:text-base">"{banner.excerpt}" — {banner.author}</p>
                    </div>
                ))}

                {/* arrows */}
                <CircleChevronLeft onClick={prevSlide} className="absolute left-1 top-1/2 transform -translate-y-1/2 text-pink-100 bg-pink-900/60 p-1 h-6 w-6 lg:h-8 lg:w-8 rounded-full" />
                <CircleChevronRight onClick={nextSlide} className="absolute right-1 top-1/2 transform -translate-y-1/2 text-pink-100 bg-pink-900/60 p-1 h-6 w-6 lg:h-8 lg:w-8 rounded-full" />
            </div>

            {/* Pagination dots */}
            <div className="flex justify-center gap-1 text-pink-700 pt-1">
                {banners.map((_, index) => (
                    <Heart fill={index === current ? 'currentColor' : 'none'} className="w-3 h-3 lg:w-4 lg:h-4" />
                ))}
            </div>
        </section>
    );
};

export default Banner;