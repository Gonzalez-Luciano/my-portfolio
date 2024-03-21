import React from 'react';
import AnimatedSection from '../animations/AnimatedSeccion';

const Skills = () => {
  return (
    <AnimatedSection sectionId="ExampleSection">
      <div className=" m-4 max-w-full mx-auto shadow-md overflow-hidden">
        <div className="p-8 text-center text-white mt-7">
          <div className="uppercase tracking-wide text-2xl font-semibold mb-4">
            Example Section
          </div>
          <p className="block mt-1 text-lg leading-tight font-medium text-yellow-300">
            This is an example section for testing the animation.
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Skills;