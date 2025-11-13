import Badge from "./Badge";

export default function Projects() {
  const items = [
    {
      title: "Agriculture Yield Prediction",
      tag: "AI / ML",
      desc: "Forecasted crop yields using regression and deep models (88% accuracy).",
      tech: ["Python", "Scikit-Learn", "Deep Learning"]
    },
    {
      title: "Road Lane Detection",
      tag: "Computer Vision",
      desc: "Real-time lane detection using OpenCV with precision improvements.",
      tech: ["OpenCV", "Python"]
    },
    {
      title: "Doctor Appointment Booking",
      tag: "Full-Stack",
      desc: "MERN platform with role-based dashboards and real-time updates.",
      tech: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Hand Gesture Recognition",
      tag: "AI / CV",
      desc: "Deep learning based gesture recognition achieving 92% accuracy.",
      tech: ["TensorFlow", "Python"]
    },
  ];

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold">Selected Projects</h2>

        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p) => (
            <article key={p.title} className="p-6 border shadow-sm bg-[#FBFBFB] rounded-lg">
              <Badge>{p.tag}</Badge>

              <h3 className="mt-4 text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{p.desc}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="px-2 py-1 text-xs border rounded bg-white">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex gap-3 text-sm">
                <a href="#" className="font-medium text-red-500">Case study →</a>
                <a href="#" className="text-gray-500">Code</a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
