import { useState } from "react";

const ContactForm: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("http://localhost:8000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });

    if (response.ok) {
      alert("Bericht verstuurd!");
      setForm({ name: "", email: "", message: "" });
    } else {
      alert("Er ging iets mis.");
    }
  };

  return (
    <section className="bg-zinc-950 py-10 px-6">

    <div className="max-w-xl mx-auto">

      <form onSubmit={handleSubmit} className="space-y-6">

        <input
          name="name"
          placeholder="Naam"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full bg-zinc-900 border border-zinc-800 p-3 rounded-md"
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full bg-zinc-900 border border-zinc-800 p-3 rounded-md"
        />

        <textarea
          name="message"
          placeholder="Bericht"
          value={form.message}
          onChange={handleChange}
          required
          className="w-full bg-zinc-900 border border-zinc-800 p-3 rounded-md"
        />

        <button className="bg-orange-500 px-6 py-3 rounded-md w-full hover:bg-orange-600 transition">
          Verstuur
        </button>

      </form>

    </div>

  </section>
  );
};

export default ContactForm;