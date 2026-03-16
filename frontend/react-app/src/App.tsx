import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import News from "./pages/News";
import Training from "./pages/Training";
import Club from "./pages/Club";
import Photos from "./pages/Fotos";
import Contact from "./pages/Contact";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/training" element={<Training />} />
        <Route path="/club" element={<Club />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;