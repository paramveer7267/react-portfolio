import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Skillset from "./sections/Skillset";
import Qualification from "./sections/Qualification";
import Portfolio from "./sections/Portfolio";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import StickyFooter from "./components/StickyFooter";
function App() {
  return (
    <>
      <Navbar />
      <StickyFooter/>
      <Home />
      <About />
      <Skillset />
      <Qualification />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

// #FBFBFE
