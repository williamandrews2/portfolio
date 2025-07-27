import "./App.css";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Header />
      <div className="main-container">
        <Hero />
        <Skills />
      </div>
    </>
  );
}

export default App;
