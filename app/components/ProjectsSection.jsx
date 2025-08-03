export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Marina Ungurean",
      description: "E-commerce di prodotti per unghie, realizzato con Shopify.",
      image: "marinaungurean.jpg", // sostituisci con il percorso reale
      tags: ["UI/UX Design", "Ecommerce"],
      url: "https://marinaungurean.it", // URL del progetto
    },
    {
      id: 2,
      title: "NailBloom Experience",
      description:
        "Landing & shop per congresso unghie, realizzato con Shopify.",
      image: "nailbloom.jpg",
      tags: ["UI/UX Design", "Ecommerce"],
      url: "https://nailbloomexperience.it", // URL del progetto
    },
    {
      id: 3,
      title: "Janina Bazavan",
      description: "Sito accademia di formazione, realizzato con Shopify.",
      image: "janinabazavan.jpg",
      tags: ["UI/UX Design", "Sviluppo Web"],
      url: "https://janinabazavanacademy.it", // URL del progetto
    },
  ];

  return (
    <section
      id="progetti"
      className="bg-gray-100 pt-6 pb-15 md:py-15 px-6 sm:px-12 md:px-20 lg:px-32">
      <div className="max-w-7xl mx-auto text-gray-900">
        {/* Titolo sezione */}
        <div className="mb-12 text-center">
          <p className="inline-block border border-gray-400 rounded-full px-4 py-1 text-sm mb-4">
            Il mio portfolio
          </p>
          <h2 className="text-4xl font-extrabold">
            I miei progetti professionali
          </h2>
        </div>

        {/* Griglia progetti */}
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {projects.map(({ id, title, description, image, tags, url }) => (
            <div
              key={id}
              className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
              <img
                src={image}
                alt={title}
                className="w-full h-55 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow ">
                <h3 className="font-semibold text-lg mb-2">{title}</h3>
                <p className="text-gray-600 text-sm flex-grow">{description}</p>
                <div className="mt-4 flex flex-wrap gap-2 items-end">
                  {tags.map((tag, i) => (
                    <span
                      key={i}
                      className="border border-gray-400 rounded-full px-3 py-1 text-xs">
                      {tag}
                    </span>
                  ))}
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm underline text-gray-500 hover:text-blue-800 ml-2">
                    Visita il sito
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottone More Project
        <div className="mt-12 flex justify-center">
          <button className="bg-black text-white rounded-full px-8 py-3 font-semibold hover:bg-gray-800 transition">
            More Project
          </button>
        </div> */}
      </div>
    </section>
  );
}
