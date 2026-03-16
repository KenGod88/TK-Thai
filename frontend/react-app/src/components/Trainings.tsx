const trainings = [
  {
    title: "Muay Thai",
    desc: "Leer de kunst van acht ledematen met pads, techniek en sparring."
  },
  {
    title: "Kickboxing",
    desc: "Werk aan snelheid, combinaties en krachtige trappen."
  },
  {
    title: "Conditioning",
    desc: "Verbeter je kracht, uithouding en explosiviteit."
  }
];

const Trainings: React.FC = () => {
  return (
    <section className="bg-black text-white py-24 px-6">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold text-center mb-16 tracking-widest">
          TRAINING
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {trainings.map((t, i) => (
            <div
              key={i}
              className="bg-zinc-900 border border-zinc-800 p-8 rounded-lg hover:border-orange-500 transition"
            >
              <h3 className="text-xl font-semibold mb-4">{t.title}</h3>

              <p className="text-gray-400">{t.desc}</p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Trainings;