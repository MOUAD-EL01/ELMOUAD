import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Service from "./components/Service";
import Portfolio from "./components/Portfolio";
import Tech from "./components/Tech";
import Footer from "./components/Footer";
import Contact from "./components/contact";

function App() {
  return (
    <div className=" bg-grid-black/[0.08] w-full h-full">
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Tech />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
