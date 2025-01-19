import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Website",
      description: "A modern e-commerce platform built with React and TailwindCSS",
      tech: ["React","Tailwind CSS"],
      image: "https://placehold.co/600x400/1f2937/ffffff?text=E-commerce+Project&size=8",
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      id: 2,
      title: "Weather App",
      description: "A weather application that provides real-time weather information, forecasts, and conditions for any location",
      tech: ["HTML, CSS, Javascript", "Bootstrap"],
      image: "https://placehold.co/600x400/1f2937/ffffff?text=Weather+App&size=8",
      github: "https://github.com/aatika7/Javascript_Project.git",
      
    },
    {
      id: 3,
      title: "Flight Reservation System",
      description: "Make a Flight Reservation Website for booking the flights",
      tech: ["HTML", "CSS", "Javascript","Bootstrap"],
      image: "https://placehold.co/600x400/1f2937/ffffff?text=Flight+Reservation+System&size=8",
      github: "https://github.com/aatika7/Website_Projects.git",
      
    },
  ];

  return (
    <div name="portfolio" className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 text-white py-16">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="pb-8"
        >
          <h2 className="text-4xl font-bold inline border-b-4 border-purple-500">
            Portfolio
          </h2>
          <p className="py-6 text-gray-400">
            Check out some of my recent work
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-0">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-lg overflow-hidden bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full object-cover object-center h-48 group-hover:scale-105 transition-transform duration-300"
              />
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-purple-400 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs px-3 py-1 bg-purple-500/20 rounded-full text-purple-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    <FaGithub />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
