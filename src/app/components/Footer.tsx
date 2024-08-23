"use client";
export default function Footer() {
  return (
    <footer className="text-center py-8 bg-gray-800 text-gray-400">
        <div className="mb-4">
          <a href="mailto:john.doe@example.com" className="text-green-400 mx-2">Email</a>
          <a href="https://github.com/johndoe" className="text-green-400 mx-2">GitHub</a>
          <a href="https://linkedin.com/in/johndoe" className="text-green-400 mx-2">LinkedIn</a>
        </div>
        <p className="text-sm">
          © {new Date().getFullYear()} John Doe. All rights reserved.
        </p>
      </footer>
  )
}
