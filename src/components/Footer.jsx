import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-950 text-gray-600 dark:text-gray-400 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm mb-4 md:mb-0">
          © 2025 Runway & Code. All rights reserved.
        </p>
        <div className="flex space-x-6 text-lg">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition">
            <FaLinkedin />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition">
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
}