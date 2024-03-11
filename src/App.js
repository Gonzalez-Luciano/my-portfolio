import logo from "./logo.svg";
import BgImage from "./data/BackgroundImage.jpg"
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <main className="text-gray-400 bg-gray-900 body-font">
        <div className="bg-repeat" style={{ backgroundImage: `url(${BgImage})`}}>
          <Navbar />
          <About />
          <Education  />
          <Skills />
        </div>
      </main>
    </>
  );
}

export default App;
