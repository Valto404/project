import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-900 dark:text-white mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          I’m a fashion model and frontend developer, passionate about creating beauty in both visuals and code. 
          This portfolio showcases my dual expertise — from runway campaigns to modern web applications.
        </motion.p>
      </div>
    </section>
  );
};

export default About;