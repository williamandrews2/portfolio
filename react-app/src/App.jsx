import "./App.css";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Header />
      <div className="main-container">
        <Hero />
        <AboutMe />
        <Projects />
      </div>
    </>
  );
}

export default App;
