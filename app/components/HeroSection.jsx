export default function HeroSection() {
  return (
    <section className="relative bg-gray-100  min-h-screen flex flex-col px-6 sm:px-12 sm:py-10 overflow-hidden">
      {/* Navbar */}
      <nav className="flex items-center justify-between mb-8 sm:mb-12">
        <div className="flex items-center space-x-2 font-semibold text-lg">
          <img
            src="logo.png"
            alt="VTOPIA STUDIO Logo"
            className="w-40 h-30 md:w-20 md:h-20 object-contain"
          />
          <span className="text-black hidden md:block text-md sm:text-lg">
            VTOPIA STUDIO
          </span>
        </div>

        <ul className="hidden md:flex space-x-8 lg:space-x-10 text-gray-800 font-medium text-sm lg:text-base">
          <li className="cursor-pointer hover:text-purple-700 transition">
            <a
              href="#home"
              className="cursor-pointer hover:text-purple-700 transition">
              Home
            </a>
          </li>
          <li className="cursor-pointer hover:text-purple-700 transition">
            <a
              href="#about-me"
              className="cursor-pointer hover:text-purple-700 transition">
              About Me
            </a>
          </li>
          <li className="cursor-pointer hover:text-purple-700 transition">
            <a
              href="#about-me"
              className="cursor-pointer hover:text-purple-700 transition">
              I miei servizi
            </a>
          </li>
          <li className="cursor-pointer hover:text-purple-700 transition">
            <a
              href="#progetti"
              className="cursor-pointer hover:text-purple-700 transition">
              Progetti
            </a>
          </li>
        </ul>

        <a
          href="https://wa.me/393778496523"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-purple-700 text-white font-semibold text-sm sm:text-base px-5 py-2 rounded-lg border-2 border-purple-700 hover:bg-purple-800 hover:border-purple-800 transition cursor-pointer">
          Contattami!
        </a>
      </nav>

      {/* Main content */}
      <div className="flex flex-col md:flex-row items-center md:items-start max-w-7xl mx-auto gap-8 md:gap-12">
        {/* Left text block */}
        <div className="flex-1 w-full max-w-lg">
          <button className=" text-black border border-gray-400 rounded-full px-4 py-1 text-xs sm:text-sm mb-5 sm:mb-6 hover:bg-gray-200 transition">
            Sono qui per aiutarti!
          </button>

          <h1 className="text-black text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight relative max-w-full">
            <span className="inline-flex items-center space-x-2">
              <di>Immaginalo</di>
            </span>
            <span className="flex gap-4 items-center flex-start">
              <img
                src="/iphone.png"
                alt="Mockup"
                className="w-20 h-10 sm:w-24 sm:h-12 object-cover rounded-md shadow-md"
              />
              al resto
            </span>
            ci penso io
          </h1>
        </div>

        {/* Right text block */}
        <div className="flex-1 max-w-md text-gray-800 text-base sm:text-lg font-normal px-2 sm:px-0">
          Sono Yu Shueng, web developer freelance. Ti aiuto a trasformare la tua
          idea in un mondo digitale su misura per te <br />
          <strong>
            Che si tratti di Design, sviluppo web, io sono qui per aiutarti a
            darle vita
          </strong>
        </div>
      </div>

      {/* Bottom black section */}
      <div className="relative mt-16 sm:mt-20 bg-white rounded-[60px] pt-16 sm:pt-15 pb-10 sm:pb-12 px-6 sm:px-12 flex flex-col items-center">
        <div className="absolute top-0 left-0 w-full h-1.5  rounded-t-3xl"></div>
        {/* Bottone inclinato */}
        <button
          className="absolute -top-10 sm:-top-12 right-6 sm:right-12 bg-purple-700 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-semibold transform rotate-12 shadow-lg hover:bg-purple-800 transition"
          style={{ boxShadow: "0 10px 20px rgba(128, 90, 213, 0.5)" }}>
          Collabora con me!
        </button>

        {/* Loghi */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-x-8 gap-y-6 max-w-5xl w-full ">
          <div className="flex gap-x-10 md:gap-x-15 items-center">
            <img
              src="javascript.png"
              alt="JavaScript"
              className="h-10 sm:h-13"
            />
            <img src="next.svg" alt="Next.js" className="h-6 md:h-10 " />
            <img src="html.png" alt="HTML" className="h-10 md:h-13" />
          </div>
          <div className="flex gap-x-10 md:gap-x-15">
            <img src="css.png" alt="CSS" className="h-10 md:h-13" />
            <img src="react.png" alt="React" className="h-10 md:h-13" />
            <img
              src="tailwindcss.svg"
              alt="Tailwind CSS"
              className="h-10 md:h-13"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
