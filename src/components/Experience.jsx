// import React, { useEffect } from "react";
// import { MdIntegrationInstructions } from "react-icons/md";
// import { FaBriefcase, FaUniversity } from "react-icons/fa";
// import { TbArrowBadgeRight } from "react-icons/tb";
// import Aos from "aos";
// import "aos/dist/aos.css";

// const Experience = () => {
//   useEffect(() => {
//     Aos.init({ duration: 1000, once: true }); // AOS initialization
//   }, []);

//   const experiences = [
//     {
//       role: "Software Engineer",
//       company: "Red Dot Digital, Robi Axiata Limited",
//       date: "01-10-2025 - Current",
//       description: [
//         "Architect and develop full-stack web applications using the MERN stack (MongoDB, Express.js, React, Node.js).",
//         "Build responsive and user-centric interfaces with a focus on performance and scalability.",
//         "Collaborate cross-functionally with designers, product managers, and QA to deliver high-impact features.",
//       ],
//       icon: <FaBriefcase className="text-5xl text-[#ff5c8d]" />,
//     },
//     {
//       role: "Software Engineer",
//       company: "Bulipe Tech Limited",
//       date: "15-06-2025 - 30-09-2025",
//       description: [
//         "Architect and develop full-stack web applications using the MERN stack (MongoDB, Express.js, React, Node.js).",
//         "Build responsive and user-centric interfaces with a focus on performance and scalability.",
//         "Collaborate cross-functionally with designers, product managers, and QA to deliver high-impact features.",
//       ],
//       icon: <FaBriefcase className="text-5xl text-[#ff5c8d]" />,
//     }
//     ,
//     {
//       role: "Interactive Media Programmer/Developer",
//       company: "Bikroy",
//       date: "01-02-2025 - 01-06-2025",
//       description: [
//         "Design and implement interactive media solutions for web platforms.",
//         "Develop and maintain front-end and back-end components using the MERN stack (MongoDB Express.js React Node.js)"
//       ],
//       icon: <FaBriefcase className="text-5xl text-[#ff5c8d]" />,
//     },
//     {
//       role: "Front-End Engineer (Intern)",
//       company: "iTransition (Remote)",
//       date: "01-04-2024 - 01-07-2024",
//       description: [
//         "Developed scalable and efficient front-end solutions for web applications using React and modern frameworks.",
//         "Collaborated with designers and back-end developers to create a seamless user experience.",
//         "Optimized web pages for performance and accessibility.",
//       ],
//       icon: <FaBriefcase className="text-5xl text-[#ff5c8d]" />,
//     },
//     {
//       role: "Undergraduate Assistant",
//       company: "United International University",
//       date: "01-01-2024 - 04-06-2024",
//       description: [
//         "Boosted students' confidence in their abilities through continuous positive reinforcement.",
//         "Improved critical thinking skills by incorporating problem-solving activities.",
//         "Led study groups, facilitating communication for successful project completion.",
//         "Mentored junior students, guiding them through complex concepts and projects.",
//       ],
//       icon: <FaUniversity className="text-5xl text-[#ff5c8d]" />,
//     },

//   ];

//   return (
//     <div
//       id="experience"
//       className="bg-[#111111] text-white py-16 px-6 md:px-24"
//     >
//       <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
//         My <span className="text-[#ff5c8d]">Experience</span>
//       </h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
//         {experiences.map((exp, index) => (
//           <div  key={index} className="hover:shadow-[#ff5c8d] bg-[#1a1a1d]  hover:scale-105 hover:shadow-lg transition-all duration-75 rounded-xl">
//             <div
//               data-aos="flip-left"

//               className="bg-[#1a1a1d] p-6 rounded-xl"
//             >
//               <div className="flex items-center gap-4 mb-4">
//                 {exp.icon}
//                 <div>
//                   <h3 className="text-xl font-semibold">{exp.role}</h3>
//                   <p className="text-sm text-gray-400">{exp.company}</p>
//                   <p className="text-sm text-[#ff5c8d]">{exp.date}</p>
//                 </div>
//               </div>
//               <ul className=" space-y-2 text-gray-300 text-sm">
//                 {exp.description.map((desc, idx) => (
//                   <li key={idx} className="flex items-center gap-2">
//                     <TbArrowBadgeRight className="text-xl" />
//                     <span>{desc}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Experience;

import React, { useEffect } from "react";
import { FaBriefcase, FaUniversity, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { MdArrowRightAlt } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";

const Experience = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  const experiences = [
    {
      role: "Software Engineer",
      company: "Red Dot Digital, Robi Axiata Limited",
      date: "Oct 2025 - Current",
      location: "Dhaka, Bangladesh",
      description: [
        "Architect and develop full-stack web applications using the MERN stack (MongoDB, Express.js, React, Node.js).",
        "Build responsive and user-centric interfaces with a focus on performance and scalability.",
        "Collaborate cross-functionally with designers, product managers, and QA to deliver high-impact features.",
      ],
      icon: <FaBriefcase className="text-2xl" />,
      tags: ["MERN Stack", "Full-Stack", "Scalability"],
      current: true,
    },
    {
      role: "Software Engineer",
      company: "Bulipe Tech Limited",
      date: "Jun 2025 - Sep 2025",
      location: "Dhaka, Bangladesh",
      description: [
        "Architect and develop full-stack web applications using the MERN stack (MongoDB, Express.js, React, Node.js).",
        "Build responsive and user-centric interfaces with a focus on performance and scalability.",
        "Collaborate cross-functionally with designers, product managers, and QA to deliver high-impact features.",
      ],
      icon: <FaBriefcase className="text-2xl" />,
      tags: ["MERN", "Web Apps", "Team Collaboration"],
      current: false,
    },
    {
      role: "Interactive Media Programmer/Developer",
      company: "Bikroy",
      date: "Feb 2025 - Jun 2025",
      location: "Dhaka, Bangladesh",
      description: [
        "Design and implement interactive media solutions for web platforms.",
        "Develop and maintain front-end and back-end components using the MERN stack",
      ],
      icon: <FaBriefcase className="text-2xl" />,
      tags: ["Interactive Media", "MERN", "Web Platform"],
      current: false,
    },
    {
      role: "Front-End Engineer (Intern)",
      company: "iTransition",
      date: "Apr 2024 - Jul 2024",
      location: "Remote",
      description: [
        "Developed scalable and efficient front-end solutions for web applications using React and modern frameworks.",
        "Collaborated with designers and back-end developers to create a seamless user experience.",
        "Optimized web pages for performance and accessibility.",
      ],
      icon: <FaBriefcase className="text-2xl" />,
      tags: ["React", "Front-End", "Optimization"],
      current: false,
    },
    {
      role: "Undergraduate Assistant",
      company: "United International University",
      date: "Jan 2024 - Jun 2024",
      location: "Dhaka, Bangladesh",
      description: [
        "Boosted students' confidence in their abilities through continuous positive reinforcement.",
        "Improved critical thinking skills by incorporating problem-solving activities.",
        "Led study groups, facilitating communication for successful project completion.",
        "Mentored junior students, guiding them through complex concepts and projects.",
      ],
      icon: <FaUniversity className="text-2xl" />,
      tags: ["Mentoring", "Teaching", "Leadership"],
      current: false,
    },
  ];

  return (
    <div id="experience" className="bg-[#0a0a0a] text-white py-12 md:py-20 px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-20" data-aos="fade-up">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <div className="w-8 md:w-12 h-1 bg-gradient-to-r from-[#ff5c8d] to-purple-600 rounded-full"></div>
            <span className="text-[#ff5c8d] font-medium tracking-wider text-sm md:text-base">CAREER JOURNEY</span>
            <div className="w-8 md:w-12 h-1 bg-gradient-to-l from-[#ff5c8d] to-purple-600 rounded-full"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 px-4">
            Professional{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5c8d] to-purple-600">
              Experience
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg px-4">
            My career path through innovative companies and impactful roles
          </p>
        </div>

        {/* Experience Cards Grid */}
        <div className="space-y-6 md:space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 100} className="relative group">
              {/* Current Role Badge - Desktop */}
              {exp.current && (
                <div className="hidden md:block absolute -top-3 -left-2 z-20">
                  <div className="bg-gradient-to-r from-[#ff5c8d] to-purple-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                    Current Role
                  </div>
                  <div className="absolute -bottom-1 left-4 w-2 h-2 bg-[#ff5c8d] transform rotate-45"></div>
                </div>
              )}

              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-[#1a1a1d] to-[#121215] rounded-xl md:rounded-2xl p-6 md:p-8 border border-gray-800 group-hover:border-[#ff5c8d]/30 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-[#ff5c8d]/5 overflow-hidden">
                {/* Background Gradient Effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#ff5c8d]/5 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Card Content */}
                <div className="relative z-10">
                  {/* Header Section */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 md:p-4 rounded-xl bg-gradient-to-br from-[#ff5c8d]/10 to-purple-600/10 border border-gray-800 flex-shrink-0">
                        {exp.icon}
                      </div>
                      <div>
                        <div className="flex items-center gap-3 flex-wrap">
                          <h3 className="text-xl md:text-2xl font-bold text-white">{exp.role}</h3>
                          {/* Current Role Badge - Mobile */}
                          {exp.current && (
                            <span className="md:hidden bg-gradient-to-r from-[#ff5c8d] to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-lg md:text-xl text-gray-300 font-medium mt-1">{exp.company}</p>

                        {/* Location and Date - Mobile */}
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-3 md:hidden">
                          <div className="flex items-center gap-2 text-gray-400">
                            <FaCalendarAlt className="text-[#ff5c8d] text-sm" />
                            <span className="text-sm">{exp.date}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-400">
                            <FaMapMarkerAlt className="text-[#ff5c8d] text-sm" />
                            <span className="text-sm">{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Location and Date - Desktop */}
                    <div className="hidden md:flex flex-col items-end gap-2">
                      <div className="flex items-center gap-2 text-gray-400 bg-[#252529] px-4 py-2 rounded-full">
                        <FaCalendarAlt className="text-[#ff5c8d]" />
                        <span>{exp.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 bg-[#252529] px-4 py-2 rounded-full">
                        <FaMapMarkerAlt className="text-[#ff5c8d]" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="space-y-3 mb-6 md:mb-8">
                    {exp.description.map((desc, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-300">
                        <MdArrowRightAlt className="text-[#ff5c8d] text-xl mt-1 flex-shrink-0" />
                        <span className="text-sm md:text-base leading-relaxed">{desc}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {exp.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-[#252529] text-gray-300 rounded-full text-xs md:text-sm border border-gray-800 hover:border-[#ff5c8d]/50 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ff5c8d] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-12 md:mt-20" data-aos="fade-up">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="text-center p-4 md:p-6 bg-gradient-to-br from-[#1a1a1d] to-transparent rounded-xl border border-gray-800 hover:border-[#ff5c8d]/30 transition-all duration-300">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff5c8d] to-purple-600">
                5+
              </div>
              <div className="text-gray-400 mt-1 md:mt-2 text-sm md:text-base">Positions</div>
            </div>
            <div className="text-center p-4 md:p-6 bg-gradient-to-br from-[#1a1a1d] to-transparent rounded-xl border border-gray-800 hover:border-[#ff5c8d]/30 transition-all duration-300">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff5c8d] to-purple-600">
                4
              </div>
              <div className="text-gray-400 mt-1 md:mt-2 text-sm md:text-base">Companies</div>
            </div>
            <div className="text-center p-4 md:p-6 bg-gradient-to-br from-[#1a1a1d] to-transparent rounded-xl border border-gray-800 hover:border-[#ff5c8d]/30 transition-all duration-300">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff5c8d] to-purple-600">
                2+
              </div>
              <div className="text-gray-400 mt-1 md:mt-2 text-sm md:text-base">Years Experience</div>
            </div>
            <div className="text-center p-4 md:p-6 bg-gradient-to-br from-[#1a1a1d] to-transparent rounded-xl border border-gray-800 hover:border-[#ff5c8d]/30 transition-all duration-300">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff5c8d] to-purple-600">
                100%
              </div>
              <div className="text-gray-400 mt-1 md:mt-2 text-sm md:text-base">Remote Ready</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;