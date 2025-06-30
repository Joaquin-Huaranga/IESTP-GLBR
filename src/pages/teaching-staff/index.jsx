import React from "react";
import { motion } from "framer-motion";
import { teachersData } from "@/data-list"; // Ajusta ruta si es necesario

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const formatTitle = (type) =>
  type.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());

export const TeachingStaff = () => {
  return (
    <section className="w-full bg-gradient-to-b from-blue-50 via-white to-blue-100 py-20 px-6 md:px-20">
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center text-blue-900 mb-16"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Plana Docente
      </motion.h2>

      <div className="space-y-24">
        {teachersData.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <motion.h3
              className="text-3xl font-bold text-blue-700 mb-10 border-b-4 border-blue-200 inline-block pb-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={0}
            >
              {section.title}
            </motion.h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10">
              {section.teachers.map((teacher, i) => (
                <motion.div
                  key={i}
                  className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 flex flex-col items-center text-center"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  custom={i}
                >
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-32 h-32 object-cover rounded-full border-4 border-blue-300 shadow-sm mb-4"
                  />
                  <h4 className="text-lg font-semibold text-gray-800">
                    {teacher.name}
                  </h4>
                  <p className="text-sm text-gray-600 mt-1 italic leading-snug">
                    {teacher.college}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
