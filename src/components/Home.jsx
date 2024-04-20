import React from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

const Home = () => {
  return (
    <div id="Home" className="m-4 mb-24 max-w-full mx-auto flex justify-center">
      <div className="mt-44 ">
        <div className="flex justify-center max-w-2xl sm:ml-9 flex-col ">
          <div className="flex  mx-5 opacity-0 animate-ObjectAppear">
            <img
              className="block h-24 rounded-full mx-0 shrink-0"
              src={process.env.PUBLIC_URL + "/images/Home/Luciano.webp"}
              alt="LUCIANO GONZÁLEZ"
            />
          </div>
          <div className="my-8">
            <div className=" uppercase tracking-wide text-3xl sm:text-4xl text-white font-semibold opacity-0 animate-[TextAppear_2s_.2s_normal_forwards]">
              LUCIANO GONZÁLEZ
            </div>
            <p
              href="#"
              className="block mt-1 text-3xl leading-tight font-medium  bg-gradient-to-r from-blue-500 via-orange-500 to-yellow-300 text-transparent bg-clip-text opacity-0 animate-[TextAppear_2s_.5s_normal_forwards]"
            >
              Software Developer and Passionate Learner
            </p>
            <p className="text-pretty mt-2 text-lg text-slate-100 opacity-0 animate-[TextAppear_2s_.7s_normal_forwards]">
              Enthusiastic about my pursuits, I eagerly welcome{" "}
              <span className=" text-white underline decoration-2 decoration-cyan-500">
                challenges
              </span>{" "}
              and relish the opportunity to expand my knowledge. My key quality?{" "}
              <span className=" text-white underline decoration-2 decoration-lime-500">
                Adaptability
              </span>
              : It's the cornerstone of my{" "}
              <span className=" text-white underline decoration-2 decoration-orange-500">
                evolution
              </span>
              .
            </p>
          </div>
          <div className="flex flex-wrap sm:flex-row sm:flex-nowrap items-center justify-center">
            <div className="hover:scale-125 ease-out duration-300 mx-auto sm:mr-20 sm:ml-0">
              <a
                href="https://www.linkedin.com/in/luciano-gonzález-590350294"
                target="_blank"
                rel="noreferrer"
              >
                <div className="opacity-0 mx-auto w-10 sm:mx-0 sm:shrink-0 sm:w-12 xl:w-16 animate-ObjectAppear">
                  <img
                    src={process.env.PUBLIC_URL + "/images/Home/linkedin.webp"}
                    alt="Linkedin White Png Download - Linkedin Icon White Circle@pngkey.com"
                  />
                </div>
              </a>
            </div>
            <div className="hover:scale-125 ease-out duration-300 mx-auto sm:mr-20  sm:ml-0">
              <a
                href="https://github.com/Gonzalez-Luciano"
                target="_blank"
                rel="noreferrer"
              >
                <div className="opacity-0 mx-auto w-10 sm:mx-0 sm:shrink-0 sm:w-12 xl:w-16 animate-ObjectAppear">
                  <img className=" " src={process.env.PUBLIC_URL + "/images/Home/github.webp"} alt="GitHub" />
                </div>
              </a>
            </div>
            <button className="opacity-0 rounded-3xl border-2 border-blue-600 p-2 hover:text-white hover:bg-blue-600  ease-out duration-300 mt-5 sm:mt-0 animate-ObjectAppear">
              <a
                className="flex items-center"
                href={require("../docs/LucianoGonzalezCV.pdf")}
                target="_blank"
                rel="noopener noreferrer"
                download="LucianoGonzalez.pdf"
              >
                <ArrowDownTrayIcon
                  className="inline w-10 sm:mx-0 sm:shrink-0 sm:w-12 xl:w-16 mr-2"
                  aria-hidden="true"
                />

                <p className="">Download my CV</p>
              </a>
            </button>
          </div>
          <div className="flex opacity-0 mt-4 text-lg animate-ObjectAppear">
            <p>Mar del Plata - Argentina</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
