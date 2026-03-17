const news = [
  {
    title: "Nieuwe Muay Thai Training",
    date: "April 2026",
    text: "Vanaf april starten we met een extra Muay Thai training."
  },
  {
    title: "Interclub Sparring",
    date: "Maart 2026",
    text: "Onze fighters nemen deel aan een interclub sparring event."
  }
];

const NewsPreview: React.FC = () => {
  return (
    <section className="bg-black text-white py-24 px-6">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold text-center mb-16 tracking-widest">
          LATEST NEWS
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {news.map((n, i) => (
            <div
              key={i}
              className="border border-zinc-800 p-8 rounded-lg hover:border-orange-500 transition"
            >
              <p className="text-orange-400 text-sm mb-2">{n.date}</p>

              <h3 className="text-xl font-semibold mb-4">{n.title}</h3>

              <p className="text-gray-400">{n.text}</p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default NewsPreview;