import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>

      <Hero />

      <section style={{ padding: "40px" }}>
        <h2>Laatste nieuws</h2>

        <p>🥊 Nieuwe jeugdtraining gestart</p>
        <p>🏆 Wedstrijd overwinning afgelopen weekend</p>
        <p>🔥 Club BBQ binnenkort</p>
      </section>

      <section style={{ padding: "40px" }}>
        <h2>Training schema</h2>

        <p>Maandag — 19:00 jeugd / 20:30 volwassenen</p>
        <p>Woensdag — 19:00 jeugd / 20:30 volwassenen</p>
        <p>Vrijdag — 20:00 sparring</p>
      </section>

    </div>
  );
}