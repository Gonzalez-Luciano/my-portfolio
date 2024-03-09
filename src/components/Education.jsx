import { Popover, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import AnimatedSection from "../animations/AnimatedSeccion";
import IAM from "../data/IAM.png";
import CFP_401 from "../data/CFP_401.png";
import ISET from "../data/ISET.png";

const schools = [
  {
    id:"ISET",
    name: "ISET",
    title: "Instituto Superior De Estudios Tecnicos",
    date: "2023",
    subTitle: "Technical Title In Programming ",
    description:
      "Currently specializing in web development with a focus on JavaScript, HTML, and CSS. Also, refining proficiency in English and C programming.",
    time: "Expected completion: 2025",
    href: "##",
    image: ISET,
    certificateDisabled: true,
  },
  {
    id:"CFP_N_401",
    name: "CFP N°401",
    title: "Centro de Formacíon Profesional N°401",
    date: "2022",
    subTitle: "Programming Course",
    description:
      "Completed a programming course covering C, Python, and MySQL. Also acquired skills in using TKinter.",
    time: "540 hrs",
    href: "CertificateCFP.pdf",
    image: CFP_401,
    certificateDisabled: false,
  },
  {
    id:"IAM",
    name: "IAM",
    title: "Instituto Argentino Modelo",
    date: "2012-2021",
    subTitle: "Bachelor's Degree",
    description:
      "Studied English, Administration, and Economics, gaining comprehensive knowledge in these areas",
    href: "CertificateIAM.pdf",
    image: IAM,
    certificateDisabled: false,
  },
];

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "0px 0px -50% 0px",
  });
  const [isOpen, setIsOpen] = useState(true);

  const handlePopoverClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AnimatedSection sectionId="Education">
      <div
        ref={ref}
        className="min-h-svh flex flex-col my-auto items-center relative justify-center px-4"
      >
        <div
          className={`${
            isOpen
              ? "animate-[ObjectAppear_2s_.5s_normal_forwards] opacity-0 fixed top-1/2 left-1/2 transform -translate-x-1/2 m-3"
              : "hidden"
          }`}
        >
          <p className="font-medium text-white text-2xl">
            Here is my <a className="text-orange-500">educational</a> journey
          </p>
        </div>
        <Popover.Group className="flex sm:flex-col sm:mr-auto sm:mb-0 sm:ml-0 flex-row mx-auto mb-auto">
          {schools.map((school) => (
            <Popover className="relative sm:mt-24 mt-2 mx-5">
              {({ open }) => (
                <>
                  <Popover.Button
                  id={school.id}
                  onClick={`${  open?setIsOpen(false):""}`}
                    className={`
                ${
                  open
                    ? " text-white transition duration-300 scale-150 "
                    : "transition duration-300 scale-100"
                } ${
                      inView
                        ? "sm:animate-[ObjectAppear_2s_.2s_normal_forwards]"
                        : ""
                    }
                sm:opacity-0 sm:ml-10 w-20 sm:w-28 inline-flex items-center rounded-md px-3 py-2 text-base font-medium hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75`}
                  >
                    <img src={school.image} alt={school.name} />
                  </Popover.Button>
                  <Transition
                    as={Fragment}
                    beforeEnter={handlePopoverClick}
                    enter="transition ease-out duration-300"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 -translate-y-1/2"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 -translate-y-1/2"
                    leaveTo="opacity-0 translate-y-1"
                    afterLeave={handlePopoverClick}
                  >
                    <Popover.Panel className="fixed mx-auto w-full sm:w-fit sm:ml-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 m-3 ">
                      <div className="overflow-hidden rounded-lg shadow-lg ">
                        <div className="relative grid gap-8 bg-opacity-55 bg-black p-4 sm:p-7">
                          <div className="-m-3 flex items-center p-2 ">
                            <div className="flex shrink-0 items-center justify-center text-white h-12 w-12">
                              <img src={school.image} alt={school.name} />
                            </div>
                            <div className="ml-4">
                              <p className="text-sm font-medium text-white">
                                {school.title}
                              </p>
                              <p className="text-sm text-gray-500">
                                {school.date} {school.time}
                              </p>
                              <p className="text-sm font-medium text-white">
                                {school.subTitle}
                              </p>
                              <p className="text-sm text-gray-100">
                                {school.description}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-center bg-opacity-55 bg-black p-4">
                          <Link
                            to={school.href}
                            target="_blank"
                            className={`${
                              school.certificateDisabled
                                ? "pointer-events-none opacity-70"
                                : "hover:bg-orange-500"
                            } text-sm sm:text-base bg-orange-600 rounded text-white p-2`}
                          >
                            {school.certificateDisabled
                              ? "In Progress"
                              : "See Certificate"}
                          </Link>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          ))}
        </Popover.Group>
      </div>
    </AnimatedSection>
  );
};

export default Education;
