export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-6xl mx-auto px-6 py-8 flex justify-between">

        <div className="text-sm text-gray-600">
          © {new Date().getFullYear()} Ajay Kumar — Built with ❤️
        </div>

        <div className="flex gap-4 text-sm">
          <a href="https://github.com/Ajaykumarch15">GitHub</a>
          <a href="https://www.linkedin.com/in/ajay-kumar-ch-3ba8b7259/">LinkedIn</a>
          <a href="/resume.pdf">Resume</a>
        </div>

      </div>
    </footer>
  );
}
