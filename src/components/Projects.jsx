import React from "react";
import AnimatedSection from "../animations/AnimatedSection";
import etecPng from "../data/ETEC.png";

const projects = [
  {
    id: "Etec",
    title: "ETEC",
    description:
      "ETEC Is a demo project to manage Students, Teachers, and Subjects easily and efficiently!",
    image: etecPng,
    href: "https://github.com/Gonzalez-Luciano/ETEC",
    shadowColorClass: "shadow-cyan-500/50",
    technologies: ["Python", "TKinter", "MySql"],
  },
];

const Projects = () => {
  return (
    <AnimatedSection sectionId="ProjectsSection">
      <div className="flex flex-col justify-center mx-auto max-w-2xl mt-10">
        <div className="text-2xl sm:text-3xl text-white font-semibold">
          My Projects
        </div>

        <div className="relative rounded-xl overflow-auto">
          <div className="relative rounded-xl w-full flex gap-6 scroll-pl-6 snap-x snap-mandatory overflow-x-auto pb-14 mt-5">
            {projects.map((project) => (
              <div
                key={project.id}
                id={project.id}
                className={`w-80 snap-center shrink-0 first:ml-8 last:mr-8 text-lg text-white shadow-lg ${project.shadowColorClass} rounded-lg p-2`}
              >
                <div className="m-1">
                  <div className="font-bold mb-2">{project.title}</div>
                  <div className="overflow-hidden">
                    <a href={project.href} target="__blank">
                      <img
                        className="hover:scale-150 shrink-0 w-80 h-40 rounded-lg shadow-xl bg-white transform transition-transform duration-300"
                        src={project.image}
                        alt={project.title}
                      />
                    </a>
                  </div>
                  <div className="my-4 text-pretty text-base">
                    <p>{project.description}</p>
                  </div>
                  <div className="my-5 flex justify-start">
                    {project.technologies.map((technology) => (
                      <div key={technology} className="select-none text-base mr-3 p-1 border border-cyan-600 rounded-2xl hover:bg-cyan-600 ease-in duration-300 ">
                        {technology}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Projects;
