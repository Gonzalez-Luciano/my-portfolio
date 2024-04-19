import React from "react";
import AnimatedSection from "../animations/AnimatedSection";
import cWebp from "../data/Technologies/c.webp";
import pythonWebp from "../data/Technologies/python.webp";
import boostrapWebp from "../data/Technologies/boostrap.webp";
import reactWebp from "../data/Technologies/react.webp";
import phpWebp from "../data/Technologies/php.webp";
import htmlWebp from "../data/Technologies/html.webp";
import cssWebp from "../data/Technologies/css.webp";
import jsWebp from "../data/Technologies/js.webp";
import tailwindWebp from "../data/Technologies/tailwind.webp";
import sqlServerWebp from "../data/Technologies/sql_server.webp";
import mySqlWebp from "../data/Technologies/my_sql.webp";
import mariadbWebp from "../data/Technologies/mariadb.webp";

const Skills = () => {
  return (
    <AnimatedSection sectionId="Technologies">
      <div className="flex flex-col justify-center mx-auto max-w-2xl mt-10">
        <div className="mx-auto text-3xl sm:text-4xl text-white font-semibold">
          Technologies
        </div>
        <div className="p-8 grid grid-cols-3 gap-1 sm:gap-3 mt-7">
          <div className="mx-auto mb-5">
            <img
              src={cWebp}
              alt=""
              className="h-10 sm:h-16 lg:h-20 drop-shadow-[0_13px_10px_rgba(0,102,255,0.5)]"
            />
          </div>
          <div className="mx-auto mb-5">
            <img
              src={pythonWebp}
              alt=""
              className="h-10 sm:h-16 lg:h-20 drop-shadow-[0_10px_10px_rgba(255,255,51,0.35)]"
            />
          </div>
          <div className="mx-auto mb-5">
            <img
              src={phpWebp}
              alt=""
              className="h-10 sm:h-16 lg:h-20 drop-shadow-[0_10px_10px_rgba(204,51,204,0.35)]"
            />
          </div>
          <div className="mx-auto mb-5">
            <img
              src={htmlWebp}
              alt=""
              className="h-10 sm:h-16 lg:h-20 drop-shadow-[0_10px_10px_rgba(255,153,51,0.35)]"
            />
          </div>
          <div className="mx-auto mb-5">
            <img
              src={cssWebp}
              alt=""
              className="h-10 sm:h-16 lg:h-20 drop-shadow-[0_10px_10px_rgba(51,153,255,0.35)]"
            />
          </div>
          <div className="mx-auto mb-5">
            <img
              src={jsWebp}
              alt=""
              className="h-10 sm:h-16 lg:h-20 drop-shadow-[0_10px_10px_rgba(255,255,51,0.35)]"
            />
          </div>
          <div className="mx-auto mb-5">
            <img
              src={reactWebp}
              alt=""
              className="h-10 sm:h-16 lg:h-20 drop-shadow-[0_10px_10px_rgba(51,153,255,0.35)]"
            />
          </div>
          <div className="mx-auto mb-5">
            <img
              src={boostrapWebp}
              alt=""
              className="h-10 sm:h-16 lg:h-20 drop-shadow-[0_10px_10px_rgba(204,51,204,0.35)]"
            />
          </div>
          <div className="mx-auto mb-5">
            <img
              src={tailwindWebp}
              alt=""
              className="h-10 sm:h-16 lg:h-20 drop-shadow-[0_10px_10px_rgba(51,153,255,0.35)]"
            />
          </div>
          <div className="mx-auto mb-5">
            <img
              src={mariadbWebp}
              alt=""
              className="h-10 sm:h-16 lg:h-20 drop-shadow-[0_10px_10px_rgba(51,153,255,0.35)]"
            />
          </div>  
          <div className="mx-auto mb-5">
            <img
              src={sqlServerWebp}
              alt=""
              className="h-10 sm:h-16 lg:h-20 drop-shadow-[0_10px_10px_rgba(255,255,255,0.35)]"
            />
          </div> 
          <div className="mx-auto mb-5">
            <img
              src={mySqlWebp}
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
