import { Toaster } from "react-hot-toast";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Services from "./components/Services";

const App = () => {
  return (
    <>
      <div>
        <NavBar />
        <Home />
        <Contact />
        <About />
        <Services />

        <Footer />
      </div>
      <Toaster />
    </>
  );
};
export default App;
