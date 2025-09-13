import React, { useEffect } from "react";
import { MdIntegrationInstructions } from "react-icons/md";
import { FaBriefcase, FaUniversity } from "react-icons/fa";
import { TbArrowBadgeRight } from "react-icons/tb";
import Aos from "aos";
import "aos/dist/aos.css";

const Experience = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true }); // AOS initialization
  }, []);

  const experiences = [
    {
      role: "Software Engineer",
      company: "Bulipe Tech Limited",
      date: "15-06-2025 - Current",
      description: [
        "Architect and develop full-stack web applications using the MERN stack (MongoDB, Express.js, React, Node.js).",
        "Build responsive and user-centric interfaces with a focus on performance and scalability.",
        "Collaborate cross-functionally with designers, product managers, and QA to deliver high-impact features.",
      ],
      icon: <FaBriefcase className="text-5xl text-[#ff5c8d]" />,
    }
    ,
    {
      role: "Interactive Media Programmer/Developer",
      company: "Bikroy",
      date: "01-02-2025 - 01-06-2025",
      description: [
        "Design and implement interactive media solutions for web platforms.",
        "Develop and maintain front-end and back-end components using the MERN stack (MongoDB Express.js React Node.js)"
      ],
      icon: <FaBriefcase className="text-5xl text-[#ff5c8d]" />,
    },
    {
      role: "Front-End Engineer (Intern)",
      company: "iTransition (Remote)",
      date: "01-04-2024 - 01-07-2024",
      description: [
        "Developed scalable and efficient front-end solutions for web applications using React and modern frameworks.",
        "Collaborated with designers and back-end developers to create a seamless user experience.",
        "Optimized web pages for performance and accessibility.",
      ],
      icon: <FaBriefcase className="text-5xl text-[#ff5c8d]" />,
    },
    {
      role: "Undergraduate Assistant",
      company: "United International University",
      date: "01-01-2024 - 04-06-2024",
      description: [
        "Boosted students' confidence in their abilities through continuous positive reinforcement.",
        "Improved critical thinking skills by incorporating problem-solving activities.",
        "Led study groups, facilitating communication for successful project completion.",
        "Mentored junior students, guiding them through complex concepts and projects.",
      ],
      icon: <FaUniversity className="text-5xl text-[#ff5c8d]" />,
    },
   
  ];

  return (
    <div
      id="experience"
      className="bg-[#111111] text-white py-16 px-6 md:px-24"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
        My <span className="text-[#ff5c8d]">Experience</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {experiences.map((exp, index) => (
          <div  key={index} className="hover:shadow-[#ff5c8d] bg-[#1a1a1d]  hover:scale-105 hover:shadow-lg transition-all duration-75 rounded-xl">
            <div
              data-aos="flip-left"
             
              className="bg-[#1a1a1d] p-6 rounded-xl"
            >
              <div className="flex items-center gap-4 mb-4">
                {exp.icon}
                <div>
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <p className="text-sm text-gray-400">{exp.company}</p>
                  <p className="text-sm text-[#ff5c8d]">{exp.date}</p>
                </div>
              </div>
              <ul className=" space-y-2 text-gray-300 text-sm">
                {exp.description.map((desc, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <TbArrowBadgeRight className="text-xl" />
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
