import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// Import the CSS file where styles will go
import './reactStyle.css'

const ReactProject = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch the JSON file
    fetch('react_frontend.json')
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);

  const settings = {
      dots: false,
    centerMode: true, // Enable center mode for slick carousel
    infinite: true,   // Enable infinite loop
    centerPadding: '0',  // No padding around the center card
    slidesToShow: 3,  // Show 3 slides at a time
    speed: 500,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show 1 slide at a time on smaller screens
        },
      },
    ],
  };

  return (
    <div  className="w-full bg-[#111111] py-20">
      <div className="w-10/12 mx-auto p">
      <h2 className="text-4xl md:text-5xl text-white text-center font-bold py-20 ">
          React <span className="text-[#ff5c8d]">Projects</span>
        </h2>

        <Slider {...settings}  className="">
          {projects.map((project, index) => ( 
            <div key={index} className="project-card bg-[#1A1A1D] ">
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
        </Slider>
      </div>
    </div>
  );
};

export default ReactProject;
