import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center text-center px-6 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gray-900 dark:text-white">
          Runway & Code
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
          I blend fashion and frontend to create stunning visuals and seamless experiences.
        </p>
        <a
          href="#model"
          className="inline-block bg-purple-500 text-white px-6 py-3 rounded-md font-medium hover:bg-purple-600 transition"
        >
          Discover My Work
        </a>
      </motion.div>
    </section>
  );
}