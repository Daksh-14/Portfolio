import { useState } from "react";
import { projects } from "../Arrays/projects.js";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {

  const [activeProject, setActiveProject] = useState(null);

  return (
    <div className="bg-gray-800 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-6 md:py-12">
        <h2 className="text-3xl font-bold text-center text-white mb-10">Projects</h2>

        {activeProject !== null && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center px-4">
            <div className="relative max-w-4xl w-full bg-gray-900 text-white p-8 rounded-lg shadow-2xl">
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 text-white text-2xl hover:text-red-400 transition"
              >
                ×
              </button>

              <h3 className="text-2xl md:text-3xl font-bold text-blue-400 mb-4">
                {projects[activeProject].name}
              </h3>

              <div className=" max-h-[50vh] overflow-y-auto mb-3 md:mb-6 scroll-smooth scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
                <p className="text-gray-300 text-sm md:text-base leading-relaxed whitespace-pre-line">
                  {projects[activeProject].detail}
                </p>
              </div>

              <div className="flex gap-6">
                {projects[activeProject].links.github && (
                  <a
                    href={projects[activeProject].links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded transition"
                  >
                    <div className="flex items-center gap-1">
                      <FaGithub />GitHub
                    </div>
                  </a>
                )}
                {projects[activeProject].links.demo && (
                  <a
                    href={projects[activeProject].links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded transition"
                  >
                    <div className="flex items-center gap-1">
                      <FaExternalLinkAlt />Live Demo
                    </div>
                  </a>
                )}
              </div>
            </div>
          </div>
        )}


        <div className="space-y-12">
          {projects.map((project, index) => {
            return (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center rounded-2xl p-3 md:p-6 cursor-pointer bg-gray-700 gap-4 md:gap-8`}
                onClick={() => setActiveProject(index)}
              >
                <div className="md:w-2/3  ">
                  <h3 className="text-2xl font-semibold text-blue-400">{project.name}</h3>
                  <p className="text-gray-300 mt-2 md:text-[17px]">{project.description}</p>
                  <div className="mt-4 flex gap-4">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-500 hover:underline"
                      >
                        <div className="flex items-center gap-1 md:text-[16px]">
                          <FaGithub />GitHub
                        </div>
                      </a>
                    )}
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-green-500 hover:underline"
                      >
                        <div className="flex items-center gap-1 md:text-[16px]">
                          <FaExternalLinkAlt />Live Demo
                        </div>
                      </a>
                    )}
                  </div>
                </div>

                <div className="md:w-1/3 flex flex-wrap justify-center gap-3  ">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm md:text-[16px] bg-gray-900 text-gray-100 rounded-full border border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
