import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6
];

const Gallery: React.FC = () => {
  return (
    <section className="bg-black py-24 px-6">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold text-center text-white mb-16 tracking-widest">
          GALLERY
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

          {images.map((img, i) => (
            <div key={i} className="overflow-hidden rounded-lg">

              <img
                src={img}
                className="hover:scale-110 transition duration-500 object-cover object-center w-full h-72"
              />

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Gallery;