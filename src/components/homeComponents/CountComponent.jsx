import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { value: 100, suffix: "%", label: "Nivel de satisfacción de estudiantes" },
  { value: 946, suffix: "+", label: "Estudiantes matriculados" },
  { value: 120, suffix: "+", label: "Docentes especializados" },
  { value: 200, suffix: "+", label: "Titulados por año" },
  { value: 362, suffix: "+", label: "Egresados por año" },
];

export const CountComponent = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section
      ref={ref}
      className="relative bg-cover bg-center text-white py-20 px-6 sm:px-10"
      style={{
        backgroundImage:
          "url('/ruta/de/tu/imagen/3dc74e7e-cca3-4206-8a9e-bf41d909014c.png')",
      }}
    >
      <div className="absolute inset-0 bg-blue-600 bg-opacity-80"></div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-16 tracking-tight text-white">
          <span className="border-l-4 border-blue-500 pl-4">
            Excelencia en Números
          </span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center bg-white text-blue-800 rounded-xl p-6 shadow-xl hover:shadow-2xl hover:scale-105 transition duration-300 ease-in-out"
            >
              <p className="text-4xl sm:text-5xl font-extrabold drop-shadow-sm">
                {inView ? (
                  <CountUp start={0} end={stat.value} duration={4} />
                ) : (
                  "0"
                )}
                {stat.suffix}
              </p>
              <p className="mt-3 text-sm sm:text-base font-medium text-center">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
