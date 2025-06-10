import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileAlt,
  faUserTie,
  faGraduationCap,
  faHandshake,
  faArrowRight,
  faCommentAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Director } from "../../images";

const directorData = {
  title: "Palabras del Director General",
  image: Director,
  message:
    "La mejor arma del ser humano es la educación. Educa a un niño y no tendrás que castigar al hombre, afirmó el sabio Pitágoras. Nosotros estamos comprometidos con la educación integral de los estudiantes y formamos líderes en las ciencias tecnológicas. Profesionales con criterio y que aportan valor a la sociedad peruana.",
  cvLink: "/cv-director.pdf",
  cargo: "Director General",
  nombre: "Dr. Ledgar Sovero Sovero",
};

export const DirectorWords = () => {
  return (
    <section className="w-full bg-gradient-to-b from-blue-50 to-white py-16 px-6 md:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="lg:col-span-1 relative h-72 lg:h-full group overflow-hidden">
            <img
              src={directorData.image}
              alt={directorData.nombre}
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:bg-gradient-to-r lg:from-black/50 lg:via-black/30 lg:to-transparent flex flex-col justify-end p-6">
              <div className="mb-4">
                <FontAwesomeIcon
                  icon={faUserTie}
                  className="text-blue-300 text-2xl mb-2"
                />
                <h2 className="text-2xl font-bold text-white">
                  {directorData.nombre}
                </h2>
                <p className="text-blue-200 font-medium">
                  {directorData.cargo}
                </p>
              </div>
              <div className="flex space-x-3">
                <div className="bg-blue-600/80 hover:bg-blue-700/90 text-white p-3 rounded-full transition-all duration-300 transform hover:-translate-y-1">
                  <FontAwesomeIcon icon={faGraduationCap} className="text-lg" />
                </div>
                <div className="bg-yellow-500/80 hover:bg-yellow-600/90 text-white p-3 rounded-full transition-all duration-300 transform hover:-translate-y-1">
                  <FontAwesomeIcon icon={faHandshake} className="text-lg" />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 p-8 md:p-10 flex flex-col">
            <div className="mb-6">
              <span className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <FontAwesomeIcon icon={faCommentAlt} className="mr-2" />
                Mensaje Institucional
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                {directorData.title}
              </h1>
              <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-blue-300 mb-6 rounded-full"></div>
            </div>

            <blockquote className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8 flex-grow italic border-l-4 border-blue-200 pl-6">
              "{directorData.message}"
            </blockquote>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <a
                href={directorData.cvLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-lg transition-all duration-300 group shadow-md hover:shadow-lg"
              >
                <FontAwesomeIcon icon={faFileAlt} className="mr-3" />
                <span>Ver Currículum</span>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="ml-3 transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <div className="flex items-center space-x-4 bg-gray-50 px-4 py-3 rounded-lg border border-gray-200">
                <div className="bg-blue-100 text-blue-600 p-3 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={faHandshake} className="text-lg" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">
                    Disponibilidad:
                  </p>
                  <p className="font-semibold text-gray-800">
                    Reuniones y consultas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
