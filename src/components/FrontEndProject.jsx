import React, { useEffect, useState } from 'react';

const FrontEndProject = () => {
  const [projects, setProjects] = useState([]);
  const [visibleProjects, setVisibleProjects] = useState(9); // Number of projects to show initially

  useEffect(() => {
    // Fetch the JSON file
    fetch("./basic_frontend.json")
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);

  // Show more projects
  const showMoreProjects = () => {
    setVisibleProjects(projects.length); // Show all projects when clicked
  };

  return (
    <div className='w-full  bg-[#111111]'>
        <div className=" min-h-screen p-8 w-10/12 mx-auto">
      <h2 className="text-[#E5E5E5] text-3xl font-bold mb-8">Frontend Projects</h2>

      {/* Grid layout with 3 columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.slice(0, visibleProjects).map((project, index) => (
          <div
            key={index}
            className="bg-[#1A1A1D] p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            <img
              src={project.imageURL}
              alt={project.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-[#FF5C8D] text-xl font-semibold">{project.title}</h3>
            <p className="text-[#E5E5E5] text-sm mt-2 mb-4">{project.description}</p>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF5C8D] text-sm hover:underline"
            >
              View Project
            </a>
          </div>
        ))}
      </div>

      {/* Show more button */}
      {visibleProjects < projects.length && (
        <div className="text-center mt-8">
          <button
            onClick={showMoreProjects}
            className="bg-[#FF5C8D] text-white py-2 px-6 rounded-full hover:bg-[#E04E6D] transition-colors"
          >
            Show More Projects
          </button>
        </div>
      )}
    </div>
    </div>
  );
};

export default FrontEndProject;
