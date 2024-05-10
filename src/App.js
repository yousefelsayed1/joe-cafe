import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";
import Menu from "./pages/Menu";
import ChooseUs from "./pages/ChooseUs";
import Records from "./pages/Records";
import Gallery from "./pages/Gallery";
import Chefs from "./pages/Chefs";
import ContactUs from "./pages/ContactUs";
import Testimonial from "./pages/Testimonial";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Features />
      <Menu />
      <ChooseUs />
      <Records />
      <Gallery />
      <Chefs />
      <ContactUs />
      <Testimonial />
      <Footer />
    </>
  );
};

export default App;
