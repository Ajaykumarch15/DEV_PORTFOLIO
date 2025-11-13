export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">

        <div>
          <h2 className="text-3xl font-bold">Let's build something intelligent.</h2>
          <p className="mt-3 text-gray-600">
            Available for full-time roles, internships & AI-based collaborations.
          </p>

          <div className="mt-6 space-y-2 text-sm">
            <a href="mailto:ajaykumarchodipilli15@gmail.com" className="block text-gray-800">Email: ajaykumarchodipilli15@gmail.com</a>
            <a href="https://www.linkedin.com/in/ajay-kumar-ch-3ba8b7259/" className="block">LinkedIn</a>
            <a href="#" className="block">GitHub</a>
            <a href="/resume.pdf" className="block">Download Resume</a>
          </div>
        </div>

        <form className="bg-white border p-6 rounded-md shadow-sm">
          <label className="text-sm font-medium">Name</label>
          <input className="mt-1 w-full border rounded-md p-2" />

          <label className="text-sm font-medium mt-4 block">Email</label>
          <input className="mt-1 w-full border rounded-md p-2" />

          <label className="text-sm font-medium mt-4 block">Message</label>
          <textarea className="mt-1 w-full border rounded-md p-2 h-28"></textarea>

          <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md">
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
}
