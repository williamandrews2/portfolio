import "./App.css";
import AboutMe from "./components/AboutMe";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="main-container">
        <AboutMe />
      </div>
    </>
  );
}

export default App;
