export default function Skills() {
  const categories = [
    { title: "Programming", items: ["Python", "Java", "JavaScript", "SQL", "C"] },
    { title: "Web", items: ["React", "Node.js", "Express", "MongoDB", "Flask", "HTML/CSS"] },
    { title: "AI / ML", items: ["TensorFlow", "Scikit-Learn", "OpenCV", "NLP", "Deep Learning"] },
    { title: "Cloud", items: ["AWS", "Azure", "Git", "Streamlit", "MongoDB"] }
  ];

  return (
    <section id="skills" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold">Skills</h2>

        <div className="mt-8 grid md:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div key={cat.title} className="p-6 border bg-white shadow-sm">
              <h3 className="font-semibold">{cat.title}</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {cat.items.map((item) => (
                  <span key={item} className="px-3 py-1 border rounded-full text-sm bg-gray-50">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
