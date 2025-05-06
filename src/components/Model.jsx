import { useState } from "react";
import { motion } from "framer-motion";

const modelingWorks = [
  {
    id: 1,
    title: "Фотосессия для Vogue",
    description: "Съёмка для модного журнала в Париже",
    image_url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: 2,
    title: "Реклама для Nike",
    description: "Спортивная кампания в Нью-Йорке",
    image_url: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: 3,
    title: "Street Style Look",
    description: "Уличная мода для бренда в Милане",
    image_url: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
  },
];

export default function Model() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="model" className="py-24 bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-6"
        >
          Modeling Portfolio
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 dark:text-gray-400 mb-12"
        >
          Campaigns, editorials, and digital content from my modeling journey.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modelingWorks.map((work) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(work.image_url)}
            >
              <img
                src={work.image_url}
                alt={work.title}
                className="w-full h-64 object-cover rounded-md group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <h3 className="mt-4 text-xl font-semibold">{work.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{work.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Модальное окно */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Enlarged"
              className="max-w-[90%] max-h-[90%] object-contain"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        )}
      </div>
    </section>
  );
}