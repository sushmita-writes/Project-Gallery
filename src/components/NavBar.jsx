import { Search, User } from 'lucide-react';

function NavBar() {
    return (
        <nav className="bg-pink-900 p-4  gap-4 text-pink-100 flex-col justify-between">
            <div className="flex justify-between items-center">
                <div className="flex gap-4 items-center">
                    <img src="src/assets/images/sample.png" alt="logo" className="h-12 w-12 rounded-full"></img>
                    <h1 className="text-small">GALLERY</h1>
                </div>

                <div className="flex gap-4">
                    <Search />
                    <User />
                </div>
            </div>

            <div className="flex gap-4">
                <a href="#" className="hover:text-pink-300">Home</a>
                <a href="#" className="hover:text-pink-300">About Us</a>
                <a href="#" className="hover:text-pink-300">Contact</a>
            </div>
        </nav>
    );
}

export default NavBar;