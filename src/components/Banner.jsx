import useState from 'react';
import { ChevronLe, CircleChevronLeft } from 'lucide-react';
import I3 from '../assets/images/i3.png';
import I4 from '../assets/images/i4.png';
import I5 from '../assets/images/i5.png';
import I6 from '../assets/images/i6.png';

const banners = [
    { image: I3, alt: "slide 1", excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
    { image: I4, alt: "slide 2", excerpt: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    { image: I5, alt: "slide 3", excerpt: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."},
    { image: I6, alt: "slide 4", excerpt: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum."},
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
        <section className="flex flex-col items-center">
            {/* Banner : < + image + excerpt + >  */}
            <div className="relative w-full h-50 overflow-hidden">
                {/* image and excerpt */}
                {banners.map((banner, index) => (
                    <div key={index} className={index === current ? 'block' : 'hidden'}>
                        <img src={banner.image} alt={banner.alt} className="absolute inset-0 w-full h-full object-cover" />
                        <p className="absolute bottom-0 left-0 right-0 bg-black/60 text-pink-100 p-4">{banner.excerpt}</p>
                    </div>
                ))}

                {/* arrows */}
                <CircleChevronLeft onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2" />
                <CircleChevronRight onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2" />
            </div>

            {/* Pagination dots */}
            <div>
                {banners.map((_, index) => (
                    <Heart fill={index === current ? 'currentColor' : 'none'} className="w-4 h-4" />
                ))}
            </div>
        </section>
    );
};

export default Banner;