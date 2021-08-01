import React from "react";

const About = () => {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Vilma Qerama{" "}
          </h1>
          {/* <br className="hidden lg:inline-block" /> */}
          <h4 className="title-font sm:text-2xl text-1xl mb-4 text-white justify-center">
            Epistemophilic & Thalassophile{" "}
          </h4>

          <p className="mb-8 leading-relaxed text-white justify-center">
            Experienced Professional Services with a demonstrated history of
            working in the Computer Software industry. Skilled in Databases,
            .Net, Virtualization, Software Project Management, Robotic Process
            Automation (RPA), Operating Systems. Strong information technology
            professional graduated with a Bsc in Computer Engineering, followed
            by a MsC in Computer Science. Eager to solve Algorithmic and
            Mathematical challenges, with a weak spot for Genetics and
            Nutrition. Apart from being a consultant, I enjoy travelling to new
            places, running, playing tennis and swim when possible. When forced
            indoors, I am an aspiring chef that loves experimenting with taste,
            and exploring the latest technology advancements.
          </p>
          <div className="flex justify-center">
            {/* <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Talk to me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            ></a> */}
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./V.png"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
