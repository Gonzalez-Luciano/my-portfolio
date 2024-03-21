import React from "react";
import photo from "../data/Photo.jpg";

const About = () => {
  return (
    <div
      id="About"
      className="max-w-full mx-auto flex items-center justify-center  mt-24"
    >
      <div className=" 2xl:mx-16 2xl:my-48">
        <div className="flex justify-center flex-col sm:flex-row text-slate-200">
          <div className="flex items-center sm:animate-FadeInLeft">
            <div className="block">
              <img
                className="block mx-auto w-full sm:mx-0 sm:shrink-0"
                src={photo}
                alt="My Photo"
              />
            </div>
          </div>
          <div className="p-8 text-pretty">
            <div className="uppercase tracking-wide text-4xl text-white font-semibold opacity-0 animate-[TextAppear_2s_.2s_normal_forwards]">
              About Me
            </div>
            <p className="mt-2 text-lg  opacity-0 animate-[TextAppear_2s_.7s_normal_forwards]">
              Greetings! I'm{" "}
              <span className=" text-white underline decoration-2 decoration-teal-500">
                Luciano Gonzalez
              </span>
              , a 20-year-old individual born on January 20, 2004. Motivated by
              a strong work ethic and a relentless thirst for knowledge, I
              actively seek out challenges to refine and broaden my{" "}
              <span className="text-white underline decoration-2 decoration-lime-500">
                skill set
              </span>
              . I firmly believe that embracing challenges is the key to
              personal and professional growth. This mindset propels my desire
              to collaborate with your{" "}
              <span className="text-white underline decoration-2 decoration-red-500">
                esteemed team
              </span>
              , where I can leverage my technological expertise to make a
              meaningful contribution. Thank you for considering my application.
            </p>
            <p className="mt-2 text-lg opacity-0 animate-[TextAppear_2s_.9s_normal_forwards]">
              I am eager to contribute to your organization and excited about
              the prospect of{" "}
              <span className="text-white underline decoration-2 decoration-orange-500">
                working together
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
