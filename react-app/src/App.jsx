import "./App.css";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="main-container">
        <Hero />
        <AboutMe />
      </div>
    </>
  );
}

export default App;
