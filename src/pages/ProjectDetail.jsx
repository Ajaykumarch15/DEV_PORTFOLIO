import { useParams, Link, useNavigate } from "react-router-dom";
import { projects } from "../data/projects.js";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    if (!project) {
      // fallback: redirect to home after short delay
      const t = setTimeout(() => navigate("/"), 1500);
      return () => clearTimeout(t);
    }
  }, [project, navigate]);

  if (!project) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-2">Project not found</h2>
          <p className="text-gray-500">Redirecting to home…</p>
        </div>
      </div>
    );
  }

  return (
    <motion.main
      className="max-w-5xl mx-auto px-6 py-16"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
    >
      <Link to="/" className="text-sm text-gray-500 hover:underline">&larr; Back to home</Link>

      <div className="mt-6 grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <img src={project.image} alt={project.title} className="w-full rounded-lg shadow-md object-cover h-72" />

          <h1 className="mt-6 text-3xl font-bold">{project.title}</h1>
          <p className="mt-3 text-gray-600">{project.description}</p>

          <section className="mt-8">
            <h3 className="text-xl font-semibold">Overview</h3>
            <p className="mt-2 text-gray-700">{project.solution || project.description}</p>
          </section>

          <section className="mt-8">
            <h3 className="text-xl font-semibold">Problem</h3>
            <p className="mt-2 text-gray-700">{project.problem}</p>
          </section>

          <section className="mt-8">
            <h3 className="text-xl font-semibold">Solution</h3>
            <p className="mt-2 text-gray-700">{project.solution}</p>
          </section>

          <section className="mt-8">
            <h3 className="text-xl font-semibold">Results & Impact</h3>
            <ul className="mt-3 list-disc list-inside text-gray-700">
              {(project.impact || []).map((it, idx) => (
                <li key={idx}>{it}</li>
              ))}
            </ul>
          </section>

          <section className="mt-8">
            <h3 className="text-xl font-semibold">Architecture</h3>
            <p className="mt-2 text-gray-700">Architecture diagram / explanation (add your image or diagram here)</p>
            {/* Placeholder for architecture image */}
            <div className="mt-4 border rounded p-4 bg-white">
              <div className="text-sm text-gray-400">(Add architecture diagram in this box)</div>
            </div>
          </section>

        </div>

        <aside className="md:col-span-1">
          <div className="p-4 border rounded-md bg-white/60 backdrop-blur-sm">
            <div className="text-xs text-gray-500">Category</div>
            <div className="font-semibold text-gray-900">{project.category}</div>

            <div className="mt-4 text-xs text-gray-500">Tech Stack</div>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <div key={t} className="px-2 py-1 text-xs border rounded bg-white">{t}</div>
              ))}
            </div>

            <div className="mt-6">
              <a href={project.github} target="_blank" rel="noreferrer" className="block px-4 py-2 text-center bg-black text-white rounded">
                View Code
              </a>
              {project.demo && project.demo !== "#" && (
                <a href={project.demo} target="_blank" rel="noreferrer" className="block mt-3 px-4 py-2 text-center border rounded">
                  Live Demo
                </a>
              )}
            </div>
          </div>

          <div className="mt-6 text-sm text-gray-500">
            <div><strong>Role:</strong> Developer</div>
            <div className="mt-2"><strong>Timeline:</strong> 2–8 weeks (depending on scope)</div>
            <div className="mt-2"><strong>Contributions:</strong> Model design, backend API, UI, deployment</div>
          </div>
        </aside>
      </div>
    </motion.main>
  );
}
