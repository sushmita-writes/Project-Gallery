
import {  Music2 } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#494443] text-gray-300 px-4 py-3 rounded-b-2xl h-20">

      <div className="flex justify-between items-center text-s">
        <p> &copy;Gallery 2026 All Rights Reserved</p>

        <div className="flex items-center gap-3">
          <Music2 className="w-7"/>
         
        </div>
      </div>

      <div className="flex justify-between items-center mt-3 text-s">
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
