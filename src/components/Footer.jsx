

import { Music2 } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#494443] text-gray-300 px-4 py-5 rounded-b-2xl">

    
      <div className="flex justify-between items-center">
  <p className="text-sm sm:text-base text-left">
    &copy; Gallery 2026 All Rights Reserved
  </p>

  <Music2 className="w-7 h-7 shrink-0" />
</div>

     
      <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mt-4 text-sm sm:text-base">

        <a
          href="mailto:project.gallery.03@gmail.com"
          className="break-all text-center"
        >
          project.gallery.03@gmail.com
        </a>

        <a
          href="tel:+977XXXXXXXXXX"
          className="text-center"
        >
          +977 XXXXXXXXXX
        </a>

      </div>

    </footer>
  );
}

export default Footer;
