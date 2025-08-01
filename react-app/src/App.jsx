import "./App.css";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  return (
    <>
      <Header />
      <div className="main-container">
        <Hero />
        <AboutMe />
        <Projects />
        <Contact />
        <Footer />
        <ScrollToTopButton />
      </div>
    </>
  );
}

export default App;
