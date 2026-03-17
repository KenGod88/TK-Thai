import Hero from "../components/Hero";
import Schedule from "../components/Schedule";
import TrainingTypes from "../components/Trainings";
import Coaches from "../components/Coaches";
import Gallery from "../components/Gallery";
import Membership from "../components/Membership";
import NewsPreview from "../components/NewsPreview";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
// import ContactForm from "../components/ContactForm";

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
      {/* <ContactForm /> */}
      <Footer />
    </>
  );
};

export default Home;