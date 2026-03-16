import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "20px", background: "#111", color: "white" }}>
      <Link to="/" style={{ marginRight: 15 }}>Home</Link>
      <Link to="/news" style={{ marginRight: 15 }}>Nieuws</Link>
      <Link to="/training" style={{ marginRight: 15 }}>Training</Link>
      <Link to="/club" style={{ marginRight: 15 }}>Club</Link>
      <Link to="/photos" style={{ marginRight: 15 }}>Foto's</Link>
      <Link to="/contact" style={{ marginRight: 15 }}>Contact</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
}