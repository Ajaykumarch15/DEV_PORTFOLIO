export default function Certifications() {
  const certs = [
    "AWS Cloud Practitioner",
    "IBM Generative AI",
    "AWS Machine Learning",
    "JavaScript Developer – BCX"
  ];

  return (
    <section id="certs" className="py-16 bg-[#F6F4F3]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold">Certifications</h2>

        <div className="mt-6 grid md:grid-cols-2 gap-4">
          {certs.map((c) => (
            <div key={c} className="p-4 border bg-white rounded-md">
              {c}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
