import logo from "../assets/TKlogo.svg";

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen bg-black flex items-center justify-center overflow-hidden text-white pt-24">

      {/* spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,white_0%,rgba(255,115,0,0.35)_25%,transparent_65%)]" />

      {/* smoke texture */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="relative z-10 text-center px-6 max-w-3xl">

        <img
          src={logo}
          alt="TK Gym"
          className="mx-auto mb-10 w-[420px] max-w-[85%] drop-shadow-[0_0_30px_rgba(255,80,0,0.5)]"
        />

        <h1 className="text-xl md:text-2xl tracking-[0.35em] font-semibold mb-6">
          MUAY THAI • KICKBOXING • CONDITIONING
        </h1>

        <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto">
          Train techniek, kracht en discipline bij T.K. Gym.
        </p>

        <div className="flex justify-center gap-5 flex-wrap">

          <button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-md font-semibold transition shadow-lg">
            Start Training
          </button>

          <button className="border-2 border-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-black transition">
            Gratis Proefles
          </button>

        </div>

      </div>

    </section>
  );
};

export default Hero;