import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Services from "./components/Services";
import NavBar from "./components/NavBar";

const All = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <Contact />
      <About />
      <Services />
      <Footer />
    </div>
  );
};
export default All;
