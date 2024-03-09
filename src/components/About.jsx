import React, { useState, useEffect } from "react";
import photo from "../data/Photo.jpg";

const About = () => {
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    // Manejar el desbordamiento del cuerpo
    document.body.style.overflow = showOverlay ? "hidden" : "auto";

    // Limpiar el estilo al desmontar el componente
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showOverlay]);

  const startAnimations = () => {
    setShowOverlay(false);
    setTimeout(() => {}, 500);
  };

  return (
    <div
      id="About"
      className="min-h-svh m-4 max-w-full mx-auto shadow-md overflow-hidden relative flex items-center justify-center"
    >
      <div
        className={`fixed inset-0 bg-black opacity-100 z-50 ${
          !showOverlay ? "animate-SlideUp" : ""
        }`}
      >
        <div className=" fixed w-full top-1/2 flex justify-center items-center flex-col text-white">
          <p>This Is Me</p>
          <button
            onClick={startAnimations}
            className="bg-blue-500 shadow-md hover:shadow-lg hover:shadow-blue-500/50 text-white px-4 py-2 mt-4"
          >
            Comenzar Animaciones
          </button>
        </div>
      </div>

      <div className="transition-transform duration-500 2xl:mx-48">
        <div className="flex justify-center sm:ml-9 flex-col-reverse md:flex-row">
          <div
            className={`mx-auto md:shrink-0 ${
              !showOverlay ? "sm:animate-FadeInLeft" : ""
            }`}
          >
            <img
              className="shadow-xl rounded-xl h-48 w-full object-contain sm:h-full sm:w-96 mb-5"
              src={photo}
              alt="My Photo"
            />
          </div>
          <div className="p-8">
            <div
              className={`uppercase tracking-wide text-4xl text-white font-semibold opacity-0 ${
                !showOverlay
                  ? "animate-[TextAppear_2s_.2s_normal_forwards]"
                  : ""
              }`}
            >
              About
            </div>
            <p
              href="#"
              className={`block mt-1 text-3xl leading-tight font-medium text-orangeMy sm:bg-gradient-to-r from-blue-900 via-orange-500 to-yellow-300 text-transparent bg-clip-text opacity-0 ${
                !showOverlay
                  ? "animate-[TextAppear_2s_.5s_normal_forwards]"
                  : ""
              }`}
            >
              Passionate Learner and Tech Enthusiast
            </p>
            <p
              className={`mt-2  text-lg text-slate-100 opacity-0 ${
                !showOverlay
                  ? "animate-[TextAppear_2s_.7s_normal_forwards]"
                  : ""
              }`}
            >
              Greetings! I'm Luciano Gonzalez, a 20-year-old individual born on
              January 20, 2004. My educational journey led me to Instituto
              Argentino Modelo, where I successfully graduated in 2022. During
              that transformative year, I immersed myself in a comprehensive
              programming course, gaining proficiency in languages like C,
              Python, and SQL. Fueled by my passion for coding and an unyielding
              desire for continuous learning, I independently explored
              Javascript, HTML, and CSS, expanding my expertise in web
              development.
            </p>
            <p
              className={`mt-2 text-lg text-slate-100 opacity-0 ${
                !showOverlay
                  ? "animate-[TextAppear_2s_.8s_normal_forwards]"
                  : ""
              }`}
            >
              Motivated by a strong work ethic and a relentless thirst for
              knowledge, I actively seek out challenges to refine and broaden my
              skill set. I firmly believe that embracing challenges is the key
              to personal and professional growth. This mindset propels my
              desire to collaborate with your esteemed team, where I can
              leverage my technological expertise to make a meaningful
              contribution. Thank you for considering my application.
            </p>
            <p
              className={`mt-2 text-lg text-slate-100 opacity-0 ${
                !showOverlay
                  ? "animate-[TextAppear_2s_.9s_normal_forwards]"
                  : ""
              }`}
            >
              I am eager to contribute to your organization and excited about
              the prospect of working together.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
