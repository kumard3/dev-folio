import About from "./components/About";
import Carousel from "./components/Carousel";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HeroComponent from "./components/Hero";
import NavComponent from "./components/NavComponent";

export default function Portfolio1() {
  return (
    <div className="	">
      <NavComponent />
      <HeroComponent name={""} image={""} summary={""} />
      <Carousel />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
