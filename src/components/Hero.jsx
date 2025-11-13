const RESUME_LINK = "/resume.pdf";
const PROFILE_IMAGE = "/profile.jpeg";

export default function Hero() {
  return (
    <section id="home" className="pt-28 pb-16 bg-[#F6F4F3]">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">

        <div className="md:col-span-7">
          <div className="text-sm uppercase tracking-widest text-gray-600 font-semibold">
            Software Developer • AI/ML Engineer
          </div>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight">
            Hi, I’m Ajay Kumar Chodipilli.
            <br />
            Building intelligent software solutions through AI, cloud & scalable development.
          </h1>

          <p className="mt-6 text-base text-gray-600 max-w-xl">
            AI/ML Engineer and Full-Stack Developer with hands-on experience across 6 internships 
            and 8+ real-world projects in Python, MERN, and cloud. I build predictive models, 
            automation tools, and scalable web apps.
          </p>

          <div className="mt-8 flex gap-4">
            <a href="#contact" className="px-6 py-3 bg-red-500 text-white font-semibold rounded-md">
              Hire me
            </a>
            <a href="#projects" className="px-6 py-3 border border-gray-300 rounded-md">
              View projects
            </a>
            <a href={RESUME_LINK} className="px-4 py-2 text-gray-700 hover:underline">
              Download CV
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
            <div className="border bg-white p-4 text-center">
              <div className="text-xl font-bold">7+</div>
              <div className="text-sm text-gray-500">Internships</div>
            </div>
            <div className="border bg-white p-4 text-center">
              <div className="text-xl font-bold">8+</div>
              <div className="text-sm text-gray-500">Projects</div>
            </div>
            <div className="border bg-white p-4 text-center">
              <div className="text-xl font-bold">92%</div>
              <div className="text-sm text-gray-500">Accuracy</div>
            </div>
          </div>
        </div>

        <div className="md:col-span-5 flex justify-center md:justify-end">
          <div className="relative">
            <div className="w-72 h-72 rounded-full border shadow-lg overflow-hidden">
              <img src={PROFILE_IMAGE} className="w-full h-full object-cover" />
            </div>

            <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-red-500/10 rounded-full flex items-center justify-center">
              <div className="w-12 h-12 bg-red-500 rounded-full"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
