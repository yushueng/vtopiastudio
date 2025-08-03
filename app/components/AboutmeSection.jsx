export default function AboutUsSection() {
  return (
    <section
      id="about-me"
      className="bg-gray-100 py-16 px-6 sm:px-12 md:px-20 lg:px-32">
      <div className="max-w-7xl mx-auto text-gray-900">
        {/* Titolo e descrizione */}
        <div className="md:flex md:justify-between md:items-start mb-12 gap-12">
          <h2 className=" text-center text-5xl md:text-6xl font-extrabold max-w-md mb-10">
            About Me
          </h2>
          <p className="text-lg sm:text-xl max-w-xl leading-relaxed">
            <span className="text-purple-700 font-semibold">Yu Shueng</span>{" "}
            appassionato di programmazione e web design. Sto costruendo il mio
            percorso, unendo logica e creatività per sviluppare progetti
            moderni, funzionali e curati nei dettagli. Ogni giorno imparo
            qualcosa di nuovo per crescere e offrire esperienze sempre migliori.
          </p>
        </div>

        {/* Call to action */}
        <div className="mb-10">
          <button className="border border-gray-700 rounded-full px-5 py-2 text-sm font-semibold hover:bg-purple-700 hover:text-white transition">
            I miei servizi
          </button>
          <h3 className="mt-4 text-4xl sm:text-5xl font-extrabold max-w-lg leading-tight">
            Guarda cosa posso
            <br /> fare per te
          </h3>
        </div>

        {/* Servizi */}
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {/* Card 1 */}
          {/* UI/UX Design */}
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-start gap-4 md:min-w-90">
            <img src="design.png" alt="UI/UX Design" className="w-12 h-12" />
            <h4 className="font-semibold text-lg">Design</h4>
            <p className="text-gray-700 text-sm">
              Design su misura, pensato per rispecchiare il tuo stile e
              valorizzare la tua professione
            </p>
          </div>

          {/* Web Development */}
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-start gap-4 md:min-w-90">
            <img src="web.png" alt="Web Development" className="w-12 h-12" />
            <h4 className="font-semibold text-lg">Sviluppo web</h4>
            <p className="text-gray-700 text-sm">
              Creo siti web moderni, veloci e responsive, costruiti su misura
              per rappresentare al meglio la tua identità online e raggiungere i
              tuoi obiettivi.
            </p>
          </div>

          {/* ECOMMERCE */}
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-start gap-4 md:min-w-90">
            <img
              src="ecommerce.png"
              alt="Apps Development"
              className="w-12 h-12"
            />
            <h4 className="font-semibold text-lg">Ecommerce</h4>
            <p className="text-gray-700 text-sm">
              Realizzo e-commerce professionali con Shopify, facili da usare e
              ottimizzati per vendere. Design su misura, gestione intuitiva e
              funzionalità pensate per far crescere il tuo business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
