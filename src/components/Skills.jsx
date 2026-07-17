import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaReact, 
  FaNodeJs, 
  FaFigma, 
  FaGitAlt, 
  FaGithub, 
  FaNpm, 
  FaJava, 
  FaUpload 
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiRedux,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiTypescript,
  SiPostgresql,
  SiReactquery,
  SiMui,
  SiDaisyui,
  SiShadcnui,
  SiFramer,
  SiNestjs,
  SiPrisma,
  SiJsonwebtokens,
  SiCloudinary,
  SiIntellijidea,
  SiPostman,
  SiGithubactions,
  SiC,
  SiGraphql
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { VscCode } from "react-icons/vsc";
import { TbApi } from "react-icons/tb";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [hoveredBox, setHoveredBox] = useState(null);

  const categories = [
    { 
      id: "languages", 
      name: "Programming Languages", 
      color: "#f59e0b", // amber-500
      glow: "rgba(245,158,11,0.05)",
      borderColor: "rgba(245,158,11,0.15)"
    },
    { 
      id: "frontend", 
      name: "Frontend Development", 
      color: "#06b6d4", // cyan-500
      glow: "rgba(6,182,212,0.05)",
      borderColor: "rgba(6,182,212,0.15)"
    },
    { 
      id: "backend", 
      name: "Backend Development", 
      color: "#10b981", // emerald-500
      glow: "rgba(16,185,129,0.05)",
      borderColor: "rgba(16,185,129,0.15)"
    },
    { 
      id: "databases", 
      name: "Databases", 
      color: "#3b82f6", // blue-500
      glow: "rgba(37,99,235,0.05)",
      borderColor: "rgba(37,99,235,0.15)"
    },
    { 
      id: "tools", 
      name: "Tools & Platforms", 
      color: "#f43f5e", // rose-500
      glow: "rgba(244,63,94,0.05)",
      borderColor: "rgba(244,63,94,0.15)"
    },
  ];

  const filterTabs = [
    { id: "all", name: "All Skills" },
    { id: "languages", name: "Languages" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "databases", name: "Databases" },
    { id: "tools", name: "Tools & Platforms" },
  ];

  const skillsData = [
    // --- Languages ---
    {
      name: "JavaScript",
      category: "languages",
      icon: <IoLogoJavascript className="text-4xl" />,
      color: "#f7df1e",
    },
    {
      name: "TypeScript",
      category: "languages",
      icon: <SiTypescript className="text-4xl" />,
      color: "#3178c6",
    },
    {
      name: "Java",
      category: "languages",
      icon: <FaJava className="text-4xl" />,
      color: "#ea2d2e",
    },
    {
      name: "C",
      category: "languages",
      icon: <SiC className="text-4xl" />,
      color: "#a8b9cc",
    },

    // --- Frontend ---
    {
      name: "React",
      category: "frontend",
      icon: <FaReact className="text-4xl" />,
      color: "#61dafb",
    },
    {
      name: "Next.js",
      category: "frontend",
      icon: <SiNextdotjs className="text-4xl" />,
      color: "#ffffff",
    },
    {
      name: "Redux",
      category: "frontend",
      icon: <SiRedux className="text-4xl" />,
      color: "#764abc",
    },
    {
      name: "TanStack Query",
      category: "frontend",
      icon: <SiReactquery className="text-4xl" />,
      color: "#ff4154",
    },
    {
      name: "HTML5",
      category: "frontend",
      icon: <FaHtml5 className="text-4xl" />,
      color: "#e34f26",
    },
    {
      name: "CSS3",
      category: "frontend",
      icon: <FaCss3Alt className="text-4xl" />,
      color: "#1572b6",
    },
    {
      name: "Tailwind CSS",
      category: "frontend",
      icon: <SiTailwindcss className="text-4xl" />,
      color: "#06b6d4",
    },
    {
      name: "Material UI",
      category: "frontend",
      icon: <SiMui className="text-4xl" />,
      color: "#007fff",
    },
    {
      name: "DaisyUI",
      category: "frontend",
      icon: <SiDaisyui className="text-4xl" />,
      color: "#1ad1a5",
    },
    {
      name: "Shadcn",
      category: "frontend",
      icon: <SiShadcnui className="text-4xl" />,
      color: "#ffffff",
    },
    {
      name: "Framer",
      category: "frontend",
      icon: <SiFramer className="text-4xl" />,
      color: "#0055ff",
    },
    {
      name: "RESTful APIs",
      category: "frontend",
      icon: <TbApi className="text-4xl" />,
      color: "#4caf50",
    },

    // --- Backend ---
    {
      name: "Node.js",
      category: "backend",
      icon: <FaNodeJs className="text-4xl" />,
      color: "#339933",
    },
    {
      name: "Express.js",
      category: "backend",
      icon: <SiExpress className="text-4xl" />,
      color: "#ffffff",
    },
    {
      name: "Nest.js",
      category: "backend",
      icon: <SiNestjs className="text-4xl" />,
      color: "#e0234e",
    },
    {
      name: "Prisma",
      category: "backend",
      icon: <SiPrisma className="text-4xl" />,
      color: "#5a67d8",
    },
    {
      name: "Mongoose",
      category: "backend",
      icon: <SiMongodb className="text-4xl text-[#589636]" />,
      color: "#589636",
    },
    {
      name: "GraphQL",
      category: "backend",
      icon: <SiGraphql className="text-4xl" />,
      color: "#e10098",
    },
    {
      name: "JWT Authentication",
      category: "backend",
      icon: <SiJsonwebtokens className="text-4xl" />,
      color: "#d63aff",
    },
    {
      name: "Multer",
      category: "backend",
      icon: <FaUpload className="text-4xl" />,
      color: "#a0aec0",
    },
    {
      name: "Cloudinary",
      category: "backend",
      icon: <SiCloudinary className="text-4xl" />,
      color: "#3448c5",
    },

    // --- Databases ---
    {
      name: "MongoDB",
      category: "databases",
      icon: <SiMongodb className="text-4xl" />,
      color: "#47a248",
    },
    {
      name: "MySQL",
      category: "databases",
      icon: <SiMysql className="text-4xl" />,
      color: "#00758f",
    },
    {
      name: "PostgreSQL",
      category: "databases",
      icon: <SiPostgresql className="text-4xl" />,
      color: "#336791",
    },

    // --- Tools & Platforms ---
    {
      name: "Git",
      category: "tools",
      icon: <FaGitAlt className="text-4xl" />,
      color: "#f05032",
    },
    {
      name: "GitHub",
      category: "tools",
      icon: <FaGithub className="text-4xl" />,
      color: "#ffffff",
    },
    {
      name: "VS Code",
      category: "tools",
      icon: <VscCode className="text-4xl" />,
      color: "#007acc",
    },
    {
      name: "IntelliJ IDEA",
      category: "tools",
      icon: <SiIntellijidea className="text-4xl" />,
      color: "#fe315d",
    },
    {
      name: "Postman",
      category: "tools",
      icon: <SiPostman className="text-4xl" />,
      color: "#ff6c37",
    },
    {
      name: "Figma",
      category: "tools",
      icon: <FaFigma className="text-4xl" />,
      color: "#f24e1e",
    },
    {
      name: "NPM",
      category: "tools",
      icon: <FaNpm className="text-4xl" />,
      color: "#cb3837",
    },
    {
      name: "CI/CD",
      category: "tools",
      icon: <SiGithubactions className="text-4xl" />,
      color: "#2088ff",
    },
  ];

  // Helper function to get filtered skills for a category
  const getFilteredCategorySkills = (categoryId) => {
    return skillsData.filter(
      (skill) =>
        skill.category === categoryId &&
        skill.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  // Determine which categories should be displayed
  const visibleCategories = categories.filter((cat) => {
    const matchesTab = activeTab === "all" || cat.id === activeTab;
    const hasMatchingSkills = getFilteredCategorySkills(cat.id).length > 0;
    return matchesTab && hasMatchingSkills;
  });

  return (
    <section id="skills" className="relative bg-[#0a0a0a] py-12 md:py-20 overflow-hidden">
      {/* Main Content Container (with horizontal padding and max-width) */}
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header Section (Matching Experience.jsx) */}
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <div className="w-8 md:w-12 h-1 bg-gradient-to-r from-[#ff5c8d] to-purple-600 rounded-full"></div>
            <span className="text-[#ff5c8d] font-medium tracking-wider text-sm md:text-base">MY TECH STACK</span>
            <div className="w-8 md:w-12 h-1 bg-gradient-to-l from-[#ff5c8d] to-purple-600 rounded-full"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 px-4 text-white">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5c8d] to-purple-600">
              Technical Arsenal
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg px-4">
            An interactive layout of programming languages, libraries, databases, and development utilities I work with.
          </p>
        </div>

        {/* Filters Panel */}
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-12 bg-white/[0.01] border border-gray-800 p-4 rounded-2xl backdrop-blur-md">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start w-full md:w-auto">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-[#ff5c8d] to-purple-600 text-white shadow-lg shadow-[#ff5c8d]/25 scale-[1.02]"
                    : "bg-white/[0.03] text-gray-400 hover:text-white hover:bg-white/[0.07] border border-gray-800"
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search specific skill..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/[0.03] border border-gray-800 focus:border-[#ff5c8d]/50 text-white rounded-xl py-2.5 pl-4 pr-10 outline-none text-xs sm:text-sm transition-all duration-300 placeholder-gray-500 backdrop-blur-md"
            />
            <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="absolute right-10 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white text-[10px] bg-white/10 hover:bg-white/20 rounded px-1.5 py-0.5 transition-all"
              >
                clear
              </button>
            )}
          </div>
        </div>

        {/* Group-Wise Skill Panels in Grid */}
        {visibleCategories.length > 0 ? (
          <div className={`mb-20 ${
            activeTab === "all" 
              ? "grid grid-cols-1 lg:grid-cols-2 gap-6 items-start" 
              : "max-w-4xl mx-auto w-full"
          }`}>
            {visibleCategories.map((cat) => {
              const categorySkills = getFilteredCategorySkills(cat.id);
              const isBoxHovered = hoveredBox === cat.id;

              // Dynamically configure column counts inside each category box
              const getGridColsClass = () => {
                if (activeTab === "all") {
                  if (cat.id === "languages") {
                    return "grid-cols-2 sm:grid-cols-4"; // Spans nicely in a single row on desktop
                  }
                  return "grid-cols-2 sm:grid-cols-3";
                }
                return "grid-cols-2 sm:grid-cols-3 md:grid-cols-4";
              };

              return (
                <div
                  key={cat.id}
                  onMouseEnter={() => setHoveredBox(cat.id)}
                  onMouseLeave={() => setHoveredBox(null)}
                  style={{
                    borderColor: isBoxHovered ? cat.borderColor : "rgba(31, 41, 55, 1)", // matches border-gray-800
                    boxShadow: isBoxHovered ? `0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px ${cat.glow}` : "none"
                  }}
                  className={`relative group bg-gradient-to-br from-[#1a1a1d] to-[#121215] border rounded-xl md:rounded-2xl p-6 md:p-8 transition-all duration-300 overflow-hidden h-full flex flex-col justify-start ${
                    activeTab === "all" && cat.id === "languages" ? "lg:col-span-2" : ""
                  }`}
                >
                  {/* Background Corner Glow matching Experience.jsx style */}
                  <div 
                    style={{
                      background: `linear-gradient(225deg, ${cat.color}12 0%, transparent 100%)`
                    }}
                    className={`absolute top-0 right-0 w-32 h-32 rounded-full transition-opacity duration-500 ${isBoxHovered ? "opacity-100" : "opacity-0"}`}
                  />

                  {/* Category Box Header */}
                  <div className="relative z-10 mb-5 flex justify-between items-center border-b border-gray-800 pb-3">
                    <h3 style={{ color: cat.color }} className="text-base sm:text-lg font-bold">
                      {cat.name}
                    </h3>
                    <span className="text-[11px] text-gray-500 font-semibold bg-[#252529] border border-gray-800 px-2.5 py-0.5 rounded-full">
                      {categorySkills.length} {categorySkills.length === 1 ? "skill" : "skills"}
                    </span>
                  </div>

                  {/* Skills Grid inside Box */}
                  <div className={`relative z-10 grid gap-3.5 ${getGridColsClass()}`}>
                    {categorySkills.map((skill) => {
                      const uniqueKey = `${cat.id}-${skill.name}`;
                      const isHovered = hoveredIdx === uniqueKey;
                      
                      return (
                        <div
                          key={skill.name}
                          onMouseEnter={() => setHoveredIdx(uniqueKey)}
                          onMouseLeave={() => setHoveredIdx(null)}
                          style={{
                            boxShadow: isHovered ? `0 10px 25px -5px ${skill.color}10` : "none",
                          }}
                          className="group relative flex flex-col items-center justify-center p-4 bg-white/[0.015] hover:bg-white/[0.04] rounded-2xl cursor-pointer transition-all duration-300 ease-out hover:-translate-y-1 backdrop-blur-sm overflow-hidden min-h-[90px]"
                        >
                          {/* Hover Overlay */}
                          <div 
                            style={{ background: `radial-gradient(circle, ${skill.color}08 0%, transparent 70%)` }}
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                          />

                          {/* Skill Icon */}
                          <div 
                            style={{ color: skill.color }}
                            className="mb-2 transform group-hover:scale-[1.1] transition-transform duration-300 ease-out"
                          >
                            {skill.icon}
                          </div>

                          {/* Skill Name */}
                          <h4 className="text-white font-semibold text-xs sm:text-sm text-center">
                            {skill.name}
                          </h4>
                        </div>
                      );
                    })}
                  </div>

                  {/* Hover Effect Line matching Experience.jsx design */}
                  <div 
                    style={{
                      background: `linear-gradient(90deg, transparent 0%, ${cat.color} 50%, transparent 100%)`
                    }}
                    className={`absolute bottom-0 left-0 w-full h-[2px] transition-opacity duration-500 ${isBoxHovered ? "opacity-100" : "opacity-0"}`}
                  />
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20 bg-gradient-to-br from-[#1a1a1d] to-[#121215] border border-gray-800 rounded-3xl backdrop-blur-md mb-20">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-600 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-gray-400 text-sm sm:text-base">No matches found for your search query.</p>
            <button 
              onClick={() => { setSearchQuery(""); setActiveTab("all"); }}
              className="mt-4 text-[#ff5c8d] hover:underline text-xs sm:text-sm font-semibold"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

      {/* Full-Screen Marquee Ribbon at bottom (outside the max-w container to be edge-to-edge) */}
      <div className="relative py-8 w-full">
        <Marquee gradient={false} speed={25} pauseOnHover={true} className="flex overflow-hidden">
          {skillsData.map((skill, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 mx-8 text-gray-400 hover:text-white transition-all duration-300 cursor-pointer"
            >
              <div style={{ color: skill.color }} className="text-3xl">
                {skill.icon}
              </div>
              <span className="text-white font-semibold text-base whitespace-nowrap">{skill.name}</span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Skills;
