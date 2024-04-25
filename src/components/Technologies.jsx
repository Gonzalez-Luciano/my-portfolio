import React from "react";
import AnimatedSection from "../animations/AnimatedSection";
import { FormattedMessage } from "react-intl";

const Skills = () => {
  return (
    <AnimatedSection sectionId="Technologies" className="pt-20">
      <div className="flex flex-col justify-center mx-auto max-w-2xl mt-10">
        <div className="mx-auto text-3xl sm:text-4xl text-white font-semibold">
          <FormattedMessage id="technologies.title" defaultMessage="Technologies"/>
        </div>
        <div className="p-8 grid grid-cols-3 gap-1 sm:gap-3 mt-7">
          <div className="mx-auto mb-5">
            <img
              src={process.env.PUBLIC_URL + "/images/Technologies/c.webp"}
              alt=""
              className="h-10 sm:h-16 lg:h-20 drop-shadow-[0_13px_10px_rgba(0,102,255,0.5)]"
            />
          </div>
          <div className="mx-auto mb-5">
            <img
              src={process.env.PUBLIC_URL + "/images/Technologies/python.webp"}
              alt=""
              className="h-10 sm:h-16 lg:h-20 drop-shadow-[0_10px_10px_rgba(255,255,51,0.35)]"
            />
          </div>
          <div className="mx-auto mb-5">
            <img
              src={process.env.PUBLIC_URL + "/images/Technologies/php.webp"}
              alt=""
              className="h-10 sm:h-16 lg:h-20 drop-shadow-[0_10px_10px_rgba(204,51,204,0.35)]"
            />
          </div>
          <div className="mx-auto mb-5">
            <img
              src={process.env.PUBLIC_URL + "/images/Technologies/html.webp"}
              alt=""
              className="h-10 sm:h-16 lg:h-20 drop-shadow-[0_10px_10px_rgba(255,153,51,0.35)]"
            />
          </div>
          <div className="mx-auto mb-5">
            <img
              src={process.env.PUBLIC_URL + "/images/Technologies/css.webp"}
              alt=""
              className="h-10 sm:h-16 lg:h-20 drop-shadow-[0_10px_10px_rgba(51,153,255,0.35)]"
            />
          </div>
          <div className="mx-auto mb-5">
            <img
              src={process.env.PUBLIC_URL + "/images/Technologies/js.webp"}
              alt=""
              className="h-10 sm:h-16 lg:h-20 drop-shadow-[0_10px_10px_rgba(255,255,51,0.35)]"
            />
          </div>
          <div className="mx-auto mb-5">
            <img
              src={process.env.PUBLIC_URL + "/images/Technologies/react.webp"}
              alt=""
              className="h-10 sm:h-16 lg:h-20 drop-shadow-[0_10px_10px_rgba(51,153,255,0.35)]"
            />
          </div>
          <div className="mx-auto mb-5">
            <img
              src={process.env.PUBLIC_URL + "/images/Technologies/boostrap.webp"}
              alt=""
              className="h-10 sm:h-16 lg:h-20 drop-shadow-[0_10px_10px_rgba(204,51,204,0.35)]"
            />
          </div>
          <div className="mx-auto mb-5">
            <img
              src={process.env.PUBLIC_URL + "/images/Technologies/tailwind.webp"}
              alt=""
              className="h-10 sm:h-16 lg:h-20 drop-shadow-[0_10px_10px_rgba(51,153,255,0.35)]"
            />
          </div>
          <div className="mx-auto mb-5">
            <img
              src={process.env.PUBLIC_URL + "/images/Technologies/mariadb.webp"}
              alt=""
              className="h-10 sm:h-16 lg:h-20 drop-shadow-[0_10px_10px_rgba(51,153,255,0.35)]"
            />
          </div>  
          <div className="mx-auto mb-5">
            <img
              src={process.env.PUBLIC_URL + "/images/Technologies/sql_server.webp"}
              alt=""
              className="h-10 sm:h-16 lg:h-20 drop-shadow-[0_10px_10px_rgba(255,255,255,0.35)]"
            />
          </div> 
          <div className="mx-auto mb-5">
            <img
              src={process.env.PUBLIC_URL + "/images/Technologies/my_sql.webp"}
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
