import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { aboutUsData } from "@/data-list/index.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faBullseye,
  faEye,
  faHistory,
  faBookOpen,
  faUserGraduate,
  faLightbulb,
  faRocket,
  faGraduationCap,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const InfoCard = React.memo(({ icon, title, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
  >
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 flex items-start gap-5">
      <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-3 rounded-xl text-white">
        <FontAwesomeIcon icon={icon} className="text-xl" />
      </div>
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
    </div>
    <div className="p-6 text-gray-700 space-y-4">{children}</div>
  </motion.div>
));

const TimelineEvent = ({ year, event }) => (
  <div className="relative pl-10 pb-8">
    <div className="absolute left-0 p-6 top-1 w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-xs font-bold">
      {year}
    </div>
    <div className="bg-gray-50 p-4 rounded-lg border-l-4 ml-5 border-blue-500">
      <p className="text-gray-700">{event}</p>
    </div>
  </div>
);

const CareerCard = ({ nombre, recursos }) => (
  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-xl border border-blue-100">
    <div className="flex items-center gap-3 mb-3">
      <FontAwesomeIcon icon={faGraduationCap} className="text-blue-500" />
      <h4 className="font-bold text-blue-800">{nombre}</h4>
    </div>
    <ul className="space-y-2">
      {recursos.map((recurso, j) => (
        <li key={j} className="flex items-start">
          <FontAwesomeIcon
            icon={faCheckCircle}
            className="text-green-500 mt-1 mr-2 text-sm"
          />
          <span className="text-gray-700">{recurso}</span>
        </li>
      ))}
    </ul>
  </div>
);

const BioCard = ({ bio }) => (
  <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-5 rounded-xl border border-purple-100">
    <div className="flex items-center gap-3 mb-3">
      <FontAwesomeIcon icon={faUserGraduate} className="text-purple-500" />
      <h4 className="font-bold text-purple-800">Datos biográficos</h4>
    </div>
    <ul className="space-y-2">
      {bio.map((point, i) => (
        <li key={i} className="flex items-start">
          <FontAwesomeIcon
            icon={faLightbulb}
            className="text-yellow-500 mt-1 mr-2 text-sm"
          />
          <span className="text-gray-700">{point}</span>
        </li>
      ))}
    </ul>
  </div>
);

export const AboutUs = () => {
  const { infoType } = useParams();
  const aboutUs = useMemo(
    () => aboutUsData.find((item) => item.infoType === infoType),
    [infoType],
  );

  if (!aboutUs) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center p-8 bg-white rounded-2xl shadow-xl max-w-md mx-auto border border-gray-100"
        >
          <h1 className="text-2xl font-bold text-red-600 mb-4">
            Información no encontrada
          </h1>
          <p className="text-gray-600 mb-6">
            La sección que buscas no está disponible.
          </p>
          <motion.div
            animate={{
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              repeatType: "reverse",
            }}
          >
            <FontAwesomeIcon
              icon={faRocket}
              className="text-gray-400 text-3xl"
            />
          </motion.div>
        </motion.div>
      </div>
    );
  }

  // Optimized content rendering
  const renderContent = (data) => {
    return data.map((item, index) => {
      if (Array.isArray(item)) {
        return (
          <ul key={index} className="space-y-2">
            {item.map((point, i) => (
              <li key={i} className="flex items-start">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-green-500 mt-1 mr-2 text-sm"
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        );
      } else if (typeof item === "object") {
        if (item.items) {
          return (
            <ul key={index} className="space-y-2">
              {item.items.map((point, i) => (
                <li key={i} className="flex items-start">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-green-500 mt-1 mr-2 text-sm"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          );
        } else if (item.carreras) {
          return (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4"
            >
              {item.carreras.map((carrera, i) => (
                <CareerCard
                  key={i}
                  nombre={carrera.nombre}
                  recursos={carrera.recursos}
                />
              ))}
            </div>
          );
        } else if (item.timeline) {
          return (
            <div key={index} className="mt-6">
              {item.timeline.map((event, i) => (
                <TimelineEvent key={i} year={event.year} event={event.event} />
              ))}
            </div>
          );
        } else if (item.bio) {
          return <BioCard key={index} bio={item.bio} />;
        }
      }
      return (
        <p key={index} className="mb-4 text-gray-700 leading-relaxed">
          {item}
        </p>
      );
    });
  };

  // Icon mapping
  const getIcon = (title) => {
    const iconMap = {
      "¿Quiénes somos?": faBuilding,
      "Nuestra oferta académica": faBookOpen,
      Mision: faBullseye,
      Vision: faEye,
      "Nuestra Historia": faHistory,
      "Gilda Liliana Ballivián Rosado": faUserGraduate,
    };
    return iconMap[title] || faLightbulb;
  };

  // Title mapping
  const getPageTitle = () => {
    const titles = {
      info: "Conoce Nuestra Institución",
      "mission-vision": "Nuestra Misión y Visión",
      history: "Nuestra Historia",
    };
    return titles[infoType] || "Sobre Nosotros";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent mb-4"
          >
            {getPageTitle()}
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto rounded-full"
          ></motion.div>
        </motion.div>

        <div className="grid grid-cols-1 gap-10">
          {aboutUs.data.map((item, index) => (
            <InfoCard key={index} icon={getIcon(item.title)} title={item.title}>
              <div className="space-y-4">{renderContent(item.description)}</div>
            </InfoCard>
          ))}
        </div>
      </div>
    </div>
  );
};
