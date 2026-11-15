import { HeartMinus } from "lucide-react";
import { Search, User, ShoppingCart, HouseHeart, LibraryBig, Palette, BookHeart, ChartBarDecreasing } from 'lucide-react';
import { NavLink } from "react-router-dom";
// check
function NavBar() {
    return (
        <nav className="flex bg-pink-900 p-2  gap-6 flex-col justify-between">
            <div className="flex justify-between items-center">
                <NavLink to="/" className="flex gap-2 items-center">
                    <img src="src/assets/images/sample.png" alt="logo" className="h-10 w-10 rounded-full"></img>
                    <h1 className="text-small">GALLERY</h1>
                </NavLink>

                <div className="flex gap-2">
                    <Search className="nav-icon "/>
                    <ShoppingCart className="nav-icon "/>
                    <User className="nav-icon "/>   
                </div>
            </div>
            
            <div className="flex gap-2 items-center justify-start">

                <NavLink to="/" className="nav-link">
                    <HouseHeart className="nav-link-icon" />
                    <span>Home</span>
                </NavLink>
                
                <NavLink to="/about" className="nav-link">
                    <BookHeart className="nav-link-icon"/>
                    <span>About Us</span>
                </NavLink>

                <NavLink to="/all-products" className="nav-link">
                    <LibraryBig className="nav-link-icon" />
                    <span>All Products</span>
                </NavLink>

                <NavLink to="/artists" className="nav-link">
                    <Palette className="nav-link-icon" />
                    <span>Our Artists</span>
                </NavLink>

                <NavLink to="/trending" className="nav-link">
                    <ChartBarDecreasing className="nav-link-icon" />
                    <span>Trending</span>
                </NavLink>
            </div>
        </nav>
    );
}

export default NavBar;