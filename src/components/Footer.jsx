import { Music2 } from "lucide-react";
import { FaInstagram, FaTiktok, FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 px-4 py-2 text-sm sm:text-lg text-left">
      <div className="flex justify-between items-center">
        <p className="text-left">
          &copy; Gallery 2026 All Rights Reserved
        </p>

        <div className="flex gap-1 sm:gap-4">
          <FaInstagram className="w-4 h-4 sm:w-6 sm:h-6" />
          <FaTiktok className="w-4 h-4 sm:w-6 sm:h-6" />
          <FaFacebook className="w-4 h-4 sm:w-6 sm:h-6" /> 
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row justify-between items-center mt-4 sm:mt-0 gap-1">
        <a href="mailto:project.gallery.03@gmail.com">
          project.gallery.03@gmail.com
        </a>
        <a href="tel:+977XXXXXXXXXX">
          +977 XXXXXXXXXX
        </a>
      </div>
    </footer>
  );
}

export default Footer;
