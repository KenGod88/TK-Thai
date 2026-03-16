import logo from "../assets/TKlogo.png";

export default function Hero() {
  return (
    <section style={styles.hero}>

      <img src={logo} alt="TK Gym Logo" style={styles.logo} />

      <h1 style={styles.title}>T.K. GYM LIEVEGEM</h1>

      <p style={styles.subtitle}>
        Muay Thai • Kickboxing • Discipline
      </p>

      <button onClick={() => window.location.href="/contact"}>
        Kom eens trainen
        </button>

    </section>
  );
}

const styles = {
  hero: {
    height: "80vh",
    background: "#111",
    color: "white",
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center" as const
  },

  logo: {
    width: "160px",
    marginBottom: "20px"
  },

  title: {
    fontSize: "3rem",
    marginBottom: "10px"
  },

  subtitle: {
    fontSize: "1.2rem",
    opacity: 0.8,
    marginBottom: "30px"
  },

  button: {
    padding: "14px 28px",
    fontSize: "1rem",
    background: "#e63946",
    border: "none",
    color: "white",
    cursor: "pointer",
    borderRadius: "4px"
  }
};