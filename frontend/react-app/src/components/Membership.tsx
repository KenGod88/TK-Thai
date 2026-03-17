const Membership: React.FC = () => {
  return (
    <section className="bg-zinc-950 text-white py-24 px-6">

      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-3xl font-bold mb-6 tracking-widest">
          START TRAINING TODAY
        </h2>

        <p className="text-gray-400 max-w-xl mx-auto mb-10">
          Kom langs voor een gratis proefles en ontdek Muay Thai en Kickboxing
          bij T.K. Gym.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">

          <button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-md font-semibold transition">
            Gratis Proefles
          </button>

          <button className="border border-white px-8 py-3 rounded-md hover:bg-white hover:text-black transition">
            Contacteer Ons
          </button>

        </div>

      </div>

    </section>
  );
};

export default Membership;