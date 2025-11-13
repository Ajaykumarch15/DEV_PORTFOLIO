export default function Experience() {
  const rows = [
    {
      company: "Next24 Technologies",
      role: "AI Intern",
      date: "May 2024 – Jul 2024",
      bullets: ["Plant disease detection", "Sales forecasting"]
    },
    {
      company: "Octanet Services",
      role: "ML Intern",
      date: "Jul 2024 – Aug 2024",
      bullets: ["Crop yield forecasting (88%)", "Automated preprocessing"]
    },
    {
      company: "Prodigy Info Tech",
      role: "AI Developer Intern",
      date: "Aug 2024 – Sep 2024",
      bullets: ["Hand gesture recognition (92%)", "Latency optimization"]
    },
    {
      company: "Meriskill",
      role: "Web Developer Intern",
      date: "Sep 2024 – Oct 2024",
      bullets: ["RBAC system", "Backend optimization"]
    },
    {
      company: "Microsoft Edunet",
      role: "AI Azure Intern",
      date: "Jun 2025 – Jul 2025",
      bullets: ["Azure ML deployments", "Scaling models"]
    },
    {
      company: "Infosys Springboard ",
      role: "Intern",
      date: "sep 2025 – nov 2025",
      bullets: ["NLP Based Model", "Aspect based sentiment analysis"]
    },
  ];

  return (
    <section id="experience" className="py-16">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold">Experience</h2>

        <div className="mt-6 grid gap-4">
          {rows.map((r) => (
            <div key={r.company} className="p-5 border bg-white shadow-sm rounded-md flex justify-between">
              <div>
                <div className="text-sm text-red-500 font-semibold">{r.role}</div>
                <div className="mt-1 font-semibold text-lg">{r.company}</div>
                <div className="mt-2 text-gray-600 text-sm">{r.bullets.join(" • ")}</div>
              </div>
              <div className="text-sm text-gray-400">{r.date}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
