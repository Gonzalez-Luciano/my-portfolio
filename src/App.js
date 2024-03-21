import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Education from "./components/Education";
import Skills from "./components/Skills";
import About from "./components/About";

function App() {
  return (
    <>
      <main className="text-gray-400 body-font">
        <div className="fixed left-0 top-0 -z-10 h-full w-full">
          <div class="relative h-full w-full bg-slate-950">
            <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          </div>
        </div>
        <Navbar />
        <div className="relative mx-auto w-full max-w-7xl px-6 md:px-8 lg:px-12">
          <Home />
          <Education />
          <About />
          <Skills />
          
        </div>
      </main>
    </>
  );
}

export default App;
