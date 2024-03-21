import React from "react";
import photo from "../data/Photo.jpg";
import linkdinICO from "../data/10-102671_linkedin-white-png-download-linkedin-icon-white-circle.png";
import gitICO from "../data/PngItem_1280311.png";
import { ArrowDownIcon, ArrowDownTrayIcon, CloudArrowDownIcon, DocumentArrowDownIcon } from "@heroicons/react/24/outline";

const Home = () => {
  return (
    <div id="Home" className="m-4 mb-24 max-w-full mx-auto flex justify-center">
      <div className="mt-44 ">
        <div className="flex justify-center max-w-2xl sm:ml-9 flex-col ">
          <div className="flex  mx-5 sm:animate-FadeInLeft">
            <img
              className="block h-24 rounded-full mx-0 shrink-0"
              src={photo}
              alt="My Photo"
            />
          </div>
          <div className="py-8 ">
            <div className="uppercase tracking-wide text-3xl sm:text-4xl text-white font-semibold opacity-0 animate-[TextAppear_2s_.2s_normal_forwards]">
              LUCIANO GONZÁLEZ
            </div>
            <p
              href="#"
              className="block mt-1 text-3xl leading-tight font-medium  bg-gradient-to-r from-blue-500 via-orange-500 to-yellow-300 text-transparent bg-clip-text opacity-0 animate-[TextAppear_2s_.5s_normal_forwards]"
            >
              Software Developer and Passionate Learner
            </p>
            <p className="text-pretty mt-2 text-lg stext-slate-100 opacity-0 animate-[TextAppear_2s_.7s_normal_forwards]">
              Enthusiastic about my pursuits, I eagerly welcome challenges and
              relish the opportunity to expand my knowledge. My key quality?
              Adaptability: It's the cornerstone of my evolution.
            </p>
          </div>
          <div className="flex flex-wrap sm:flex-row sm:flex-nowrap items-center justify-center">
            <div className="hover:scale-125 ease-out duration-300 mr-20">
              <a
                href="https://www.linkedin.com/in/luciano-gonzález-590350294"
                target="_blank"
                rel="noreferrer"
              >
                <div className="mx-auto w-10 sm:mx-0 sm:shrink-0 sm:w-12 xl:w-16">
                  <img
                    src={linkdinICO}
                    alt="Linkedin White Png Download - Linkedin Icon White Circle@pngkey.com"
                  />
                </div>
              </a>
            </div>
            <div className="hover:scale-125 ease-out duration-300 mr-20">
              <a
                href="https://github.com/TuKK2"
                target="_blank"
                rel="noreferrer"
              >
                <div className="mx-auto w-10 sm:mx-0 sm:shrink-0 sm:w-12 xl:w-16">
                  <img className=" " src={gitICO} alt="GitHub Image" />
                </div>
              </a>
            </div>
            <button className="rounded-3xl border-2 border-blue-600 p-2 hover:text-white hover:bg-blue-600  ease-out duration-300 mr-20 mt-5 sm:mt-0">
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
        </div>
      </div>
    </div>
  );
};

export default Home;
