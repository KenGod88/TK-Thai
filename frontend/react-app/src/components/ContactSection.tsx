import ContactForm from "./ContactForm";

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="bg-zinc-950 text-white py-24 px-6">

      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-3xl font-bold mb-10 tracking-widest">
          CONTACT
        </h2>

        <div className="space-y-4 text-gray-300">

          <p>📍 T.K. Gym</p>
          <p>📍 Lievegem, België</p>



          <p>✉ timkastouri@gmail.com</p>

        </div>

        <ContactForm />

      </div>

    </section>
  );
};

export default ContactSection;