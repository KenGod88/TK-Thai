import Hero from "../components/Hero";
import Schedule from "../components/Schedule";
import TrainingTypes from "../components/Trainings";
import Coaches from "../components/Coaches";
import Gallery from "../components/Gallery";
import Membership from "../components/Membership";
import NewsPreview from "../components/NewsPreview";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <TrainingTypes />
      <Schedule />
      <Coaches />
      <Gallery />
      <Membership />
      <NewsPreview />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Home;