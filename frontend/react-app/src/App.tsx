import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

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

      <Routes>

        <Route element={<Layout />}>

          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/training" element={<Training />} />
          <Route path="/club" element={<Club />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;