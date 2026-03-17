import tim from "../assets/foto_Tim.jpg";

const coaches = [
  {
    name: "Tim Kastouri",
    role: "Head Coach",
    img: tim
  }
];

const Coaches: React.FC = () => {
  return (
    <section id="coach" className="bg-zinc-950 text-white  px-6">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold text-center mb-16 tracking-widest">
          COACHES
        </h2>

        <div className="flex justify-center">

          {coaches.map((c, i) => (
            <div
              key={i}
              className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 hover:border-orange-500 transition max-w-sm w-full"
            >

              <img
                src={c.img}
                alt={c.name}
                className="h-96 w-full object-cover grayscale hover:grayscale-0 transition duration-500"
              />

              <div className="p-6 text-center">

                <h3 className="text-xl font-semibold">{c.name}</h3>

                <p className="text-orange-400">{c.role}</p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Coaches;