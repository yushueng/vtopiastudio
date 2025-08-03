import { FaArrowRight } from "react-icons/fa";

export default function FooterSection() {
  return (
    <footer className="bg-gray-100 text-white px-6 sm:px-12 md:px-20 lg:px-32 pb-12">
      <div className="mb-12 border-t border-gray-300 pt-6"></div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6">
        {/* Colonna 1: Logo + indirizzo */}
        <div className="flex flex-col gap-4 max-w-xs">
          <div className="flex items-center gap-2 mb-2">
            {/* Logo semplice, sostituisci con il tuo SVG o immagine */}
            <div className="flex items-center space-x-2 font-semibold text-lg">
              <img
                src="logo.png"
                alt="VTOPIA STUDIO Logo"
                className="w-20 h-20 sm:w-20 sm:h-20 object-contain"
              />
            </div>
            <span className="font-semibold text-black text-lg">
              VTOPIA STUDIO
            </span>
          </div>
        </div>
        {/* Colonna 2: Contatti */}
        <div className="flex flex-col gap-2 max-w-xs">
          <h4 className="text-black text-xl mb-2">Contatti</h4>
          <a href="wuyushueng@gmail.com" className="hover:underline text-black">
            wuyushueng@gmail.com
          </a>
          <a href="tel:+393778496523" className="hover:underline text-black">
            +39 3778496523
          </a>
        </div>

        {/* Colonna 3: Social */}
        {/* <div className="flex flex-col gap-2 max-w-xs">
          <h4 className="text-gray-400 text-sm mb-2">Social</h4>
          <nav className="flex flex-col gap-1">
            <a href="#" className="hover:underline">
              Instagram
            </a>
            <a href="#" className="hover:underline">
              Dribbble
            </a>
            <a href="#" className="hover:underline">
              Behance
            </a>
            <a href="#" className="hover:underline">
              LinkedIn
            </a>
          </nav>
        </div> */}
      </div>

      {/* Call to action */}

      {/* Copyright */}
      <div className="mt-12 border-t border-gray-300 pt-6 text-center text-black text-sm">
        © Vtopia Studio 2025 All Rights Reserved
      </div>
    </footer>
  );
}
