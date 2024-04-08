import React from "react";
import AnimatedSection from "../animations/AnimatedSeccion";
import cPng from "../data/Technologies/c.webp";
import pythonPng from "../data/Technologies/python.webp";
import boostrapPng from "../data/Technologies/boostrap.webp";
import reactPng from "../data/Technologies/react.webp";
import phpPng from "../data/Technologies/php.webp";
import htmlPng from "../data/Technologies/html.webp";
import cssPng from "../data/Technologies/css.webp";
import jsPng from "../data/Technologies/js.webp";
import tailwindPng from "../data/Technologies/tailwind.webp";

const Skills = () => {
  return (
    <AnimatedSection sectionId="ExampleSection">
      <div className="flex flex-col justify-center mx-auto max-w-2xl mt-10">
        <div className="mx-auto text-3xl sm:text-4xl text-white font-semibold">
          Technologies
        </div>
        <div className="p-8 grid grid-cols-3 gap-1 sm:gap-3 mt-7">
          <div className="mx-auto mb-5">
            <img
              src={cPng}
              alt=""
              className="h-10 sm:h-16 lg:h-20 drop-shadow-[0_13px_10px_rgba(0,102,255,0.5)]"
            />
          </div>
          <div className="mx-auto mb-5">
            <img
              src={pythonPng}
              alt=""
              className="h-10 sm:h-16 lg:h-20 drop-shadow-[0_10px_10px_rgba(255,255,51,0.35)]"
            />
          </div>
          <div className="mx-auto mb-5">
            <img
              src={phpPng}
              alt=""
              className="h-10 sm:h-16 lg:h-20 drop-shadow-[0_10px_10px_rgba(204,51,204,0.35)]"
            />
          </div>
          <div className="mx-auto mb-5">
            <img
              src={htmlPng}
              alt=""
              className="h-10 sm:h-16 lg:h-20 drop-shadow-[0_10px_10px_rgba(255,153,51,0.35)]"
            />
          </div>
          <div className="mx-auto mb-5">
            <img
              src={cssPng}
              alt=""
              className="h-10 sm:h-16 lg:h-20 drop-shadow-[0_10px_10px_rgba(51,153,255,0.35)]"
            />
          </div>
          <div className="mx-auto mb-5">
            <img
              src={jsPng}
              alt=""
              className="h-10 sm:h-16 lg:h-20 drop-shadow-[0_10px_10px_rgba(255,255,51,0.35)]"
            />
          </div>
          <div className="mx-auto mb-5">
            <img
              src={reactPng}
              alt=""
              className="h-10 sm:h-16 lg:h-20 drop-shadow-[0_10px_10px_rgba(51,153,255,0.35)]"
            />
          </div>
          <div className="mx-auto mb-5">
            <img
              src={boostrapPng}
              alt=""
              className="h-10 sm:h-16 lg:h-20 drop-shadow-[0_10px_10px_rgba(204,51,204,0.35)]"
            />
          </div>
          <div className="mx-auto mb-5">
            <img
              src={tailwindPng}
              alt=""
              className="h-10 sm:h-16 lg:h-20 drop-shadow-[0_10px_10px_rgba(51,153,255,0.35)]"
            />
          </div>  
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Skills;
