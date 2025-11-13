import { projects } from "../data/projects";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

const card = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } }
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8">Featured Projects</h2>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={card}
              className="group relative rounded-xl overflow-hidden border border-gray-200"
            >
              {/* Image */}
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Glass content */}
              <div className="p-6 bg-white/60 backdrop-blur-sm border-t border-white/30">
                <div className="inline-block px-3 py-1 text-xs rounded-full bg-white shadow-sm text-gray-700">
                  {project.category}
                </div>

                <h3 className="mt-3 text-xl font-semibold">{project.title}</h3>
                <p className="mt-2 text-gray-600 text-sm">{project.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 border rounded bg-white">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex gap-4 items-center">
                  <Link
                    to={`/projects/${project.slug}`}
                    className="text-red-500 font-medium hover:underline"
                  >
                    Case study →
                  </Link>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-500 hover:text-black"
                  >
                    Code
                  </a>

                  {project.demo && project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="ml-auto text-sm px-3 py-1 border rounded bg-white"
                    >
                      Live demo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
