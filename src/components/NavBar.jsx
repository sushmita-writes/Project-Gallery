import { HeartMinus } from "lucide-react";
import { Search, User, HouseHeart, LibraryBig, Palette, BookHeart, ChartBarDecreasing } from 'lucide-react';

function NavBar() {
    return (
        <nav className="flex bg-pink-900 p-4  gap-4 text-pink-100 flex-col justify-between">
            <div className="flex justify-between items-center">
                <div className="flex gap-4 items-center">
                    <img src="src/assets/images/sample.png" alt="logo" className="h-12 w-12 rounded-full"></img>
                    <h1 className="text-small">GALLERY</h1>
                </div>

                <div className="flex gap-4">
                    <Search className="nav-icon "/>
                    <User className="nav-icon "/>
                </div>
            </div>

            <div className="flex gap-4 items-center justify-start">
                <div className="nav-link">
                    <HouseHeart className="nav-link-icon" />
                    <a href="#">Home</a>
                </div>
                <div className="nav-link">
                    <BookHeart className="nav-link-icon"/>
                    <a href="#">About Us</a>
                </div>
                <div className="nav-link">
                    <LibraryBig className="nav-link-icon" />
                    <a href="#">All Products</a>
                </div>
                <div className="nav-link">
                    <Palette className="nav-link-icon" />
                    <a href="#">Our Artists</a>
                </div>
                <div className="nav-link">
                    <ChartBarDecreasing className="nav-link-icon" />
                    <a href="#">Trending</a>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;