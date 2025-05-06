import { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Runway & Code Portfolio",
    description: "Моё личное портфолио, где мода встречается с фронтендом.",
    technologies: "React, Tailwind CSS, Framer Motion",
    github_url: "https://github.com/valto/portfolio",
    demo_url: "https://valto-portfolio-demo.com",
    image_url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description: "Интернет-магазин для продажи модной одежды.",
    technologies: "React, Node.js, Express",
    github_url: "https://github.com/valto/ecommerce",
    demo_url: "https://valto-ecommerce-demo.com",
    image_url: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: 3,
    title: "To-Do App",
    description: "Простое приложение для управления задачами.",
    technologies: "React, Tailwind CSS",
    github_url: "https://github.com/valto/todo-app",
    demo_url: "https://valto-todo-demo.com",
    image_url: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const techs = ["All", "React", "Tailwind CSS", "Node.js", "Express", "Framer Motion"];
  const filteredProjects = filter === "All"
    ? projects
    : projects.filter(project => project.technologies.includes(filter));

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-900 dark:text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Frontend Projects
        </motion.h2>
        <motion.p
          className="text-gray-600 dark:text-gray-400 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          A selection of my web development work.
        </motion.p>

        {/* Фильтры */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {techs.map((tech) => (
            <button
              key={tech}
              onClick={() => setFilter(tech)}
              className={`px-4 py-2 rounded-md font-medium transition ${
                filter === tech
                  ? "bg-purple-500 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
            >
              {tech}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={project.image_url}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-md group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="mt-4 text-left">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">{project.technologies}</p>
                  <div className="mt-2 flex gap-3">
                    {project.github_url && (
                      <a
                        href={project.github_url}
                        className="text-purple-500 hover:text-purple-600 font-medium transition"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                    )}
                    {project.demo_url && (
                      <a
                        href={project.demo_url}
                        className="text-purple-500 hover:text-purple-600 font-medium transition"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-gray-500 dark:text-gray-400">No projects found for this filter.</p>
          )}
        </div>
      </div>
    </section>
  );
}