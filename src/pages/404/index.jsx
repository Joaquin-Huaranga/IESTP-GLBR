import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationTriangle,
  faRocket,
  faHome,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const Error404 = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full bg-white rounded-2xl shadow-xl overflow-hidden"
      >
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 text-white text-center">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
            }}
          >
            <FontAwesomeIcon
              icon={faExclamationTriangle}
              className="text-5xl mb-4"
            />
          </motion.div>
          <h1 className="text-4xl font-bold mb-2">404</h1>
          <p className="text-xl">¡Página no encontrada!</p>
        </div>

        <div className="p-8 text-center">
          <p className="text-gray-600 mb-8 text-lg">
            Lo sentimos, la página que estás buscando no existe o ha sido
            movida.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-indigo-50 rounded-lg p-4 cursor-pointer transition-all hover:bg-indigo-100"
              onClick={() => navigate("/")}
            >
              <FontAwesomeIcon
                icon={faHome}
                className="text-indigo-600 text-2xl mb-2"
              />
              <p className="font-medium">Ir al Inicio</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-50 rounded-lg p-4 cursor-pointer transition-all hover:bg-purple-100"
              onClick={() => navigate(-1)}
            >
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="text-purple-600 text-2xl mb-2"
              />
              <p className="font-medium">Volver Atrás</p>
            </motion.div>
          </div>

          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut",
            }}
            className="inline-block"
          >
            <FontAwesomeIcon
              icon={faRocket}
              className="text-gray-400 text-4xl"
            />
          </motion.div>

          <p className="text-gray-500 mt-4 text-sm">
            ¿Perdido en el espacio? Te ayudamos a volver
          </p>
        </div>
      </motion.div>
    </div>
  );
};
