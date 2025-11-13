import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .send(
        "service_1h0p4xy",
        "template_k40d0yg",
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "4hRrFfOUr4S7FiReD"
      )
      .then(() => {
        toast.success("Message sent successfully! 🚀");

        setForm({
          name: "",
          email: "",
          message: "",
        });

        setLoading(false);
      })
      .catch(() => {
        toast.error("Failed to send message. Try again ❌");
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">

        <div>
          <h2 className="text-3xl font-bold">Let's build something intelligent.</h2>
          <p className="mt-3 text-gray-600">
            Available for full-time roles, internships & AI-based collaborations.
          </p>

          <div className="mt-6 space-y-2 text-sm">
            <a href="mailto:ajaykumarchodipilli15@gmail.com" className="block">Email: ajaykumarchodipilli15@gmail.com</a>
            <a href="https://www.linkedin.com/in/ajay-kumar-ch-3ba8b7259/" className="block">LinkedIn</a>
            <a href="https://github.com/Ajaykumarch15" className="block">GitHub</a>
            <a href="/resume.pdf" className="block">Download Resume</a>
          </div>
        </div>

        <form onSubmit={sendEmail} className="bg-white border p-6 rounded-md shadow-sm">
          <label className="text-sm font-medium">Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="mt-1 w-full border rounded-md p-2"
            required
          />

          <label className="text-sm font-medium mt-4 block">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="mt-1 w-full border rounded-md p-2"
            required
          />

          <label className="text-sm font-medium mt-4 block">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            className="mt-1 w-full border rounded-md p-2 h-28"
            required
          ></textarea>

          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md w-full"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

      </div>
    </section>
  );
}
