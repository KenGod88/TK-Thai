const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-400 py-10 text-center">

      <p>© {new Date().getFullYear()} T.K. Gym</p>

      <p className="text-sm mt-2">
        Muay Thai • Kickboxing • Conditioning
      </p>

    </footer>
  );
};

export default Footer;