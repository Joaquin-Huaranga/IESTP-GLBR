import React from "react";
import { useParams } from "react-router-dom";
import { careersData } from "../../data-list";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faBriefcase,
  faGraduationCap,
  faFilePdf,
  faClock,
  faSun,
  faMoon,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";

export const Careers = () => {
  const { type } = useParams();
  const career = careersData.find((item) => item.type === type);

  if (!career) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="text-center p-8 bg-white rounded-xl shadow-lg max-w-md mx-auto transform hover:scale-105 transition-transform duration-300">
          <FontAwesomeIcon
            icon={faExclamationTriangle}
            className="text-red-500 text-4xl mb-4"
          />
          <h1 className="text-2xl font-bold text-red-600 mb-4">
            Carrera no encontrada
          </h1>
          <p className="text-gray-600">
            La carrera que buscas no está disponible en nuestro sistema.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mb-6">
            {career.title}
          </h1>
          <div className="flex flex-wrap justify-center gap-4 text-gray-600">
            <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center gap-2">
              <FontAwesomeIcon icon={faClock} className="text-blue-500" />
              <span className="font-medium">Duración:</span>{" "}
              {career.studyPlan.duration}
            </div>
            {career.studyPlan.dayShift && (
              <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center gap-2">
                <FontAwesomeIcon icon={faSun} className="text-yellow-500" />
                <span className="font-medium">Turno día:</span>{" "}
                {career.studyPlan.dayShift}
              </div>
            )}
            {career.studyPlan.nightShift && (
              <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center gap-2">
                <FontAwesomeIcon icon={faMoon} className="text-indigo-500" />
                <span className="font-medium">Turno noche:</span>{" "}
                {career.studyPlan.nightShift}
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {career.perfil_egreso && (
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <h2 className="text-2xl font-semibold text-blue-800 mb-4 border-b pb-2">
                  Perfil de Egreso
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {career.perfil_egreso}
                </p>
              </div>
            )}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-semibold text-blue-800 mb-4 border-b pb-2">
                Competencias
              </h2>
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  Competencia General:
                </h3>
                <p className="text-gray-700 pl-4 border-l-4 border-blue-200">
                  {career.competencia_general}
                </p>
              </div>

              {career.competencias_especificas?.length > 0 && (
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">
                    Competencias Específicas:
                  </h3>
                  <ul className="space-y-3">
                    {career.competencias_especificas.map(
                      (competencia, index) => (
                        <li key={index} className="flex items-start">
                          <FontAwesomeIcon
                            icon={faCheckCircle}
                            className="text-green-500 mt-1 mr-3"
                          />
                          <span className="text-gray-700">{competencia}</span>
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              )}
            </div>
            {career.campos_accion?.length > 0 && (
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <h2 className="text-2xl font-semibold text-blue-800 mb-4 border-b pb-2">
                  Campos de Acción
                </h2>
                <div className="flex flex-wrap gap-3">
                  {career.campos_accion.map((campo, index) => (
                    <span
                      key={index}
                      className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full text-sm hover:bg-blue-100 transition-colors flex items-center gap-2"
                    >
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="text-xs"
                      />
                      {campo}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="space-y-8">
            {career.puestos_trabajo?.length > 0 && (
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <h2 className="text-2xl font-semibold text-blue-800 mb-4 border-b pb-2">
                  Puestos de Trabajo
                </h2>
                <ul className="space-y-4">
                  {career.puestos_trabajo.map((puesto, index) => (
                    <li key={index} className="flex items-start">
                      <FontAwesomeIcon
                        icon={faBriefcase}
                        className="text-blue-500 mt-1 mr-3"
                      />
                      <span className="text-gray-700">{puesto}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {career.salida_estudios?.length > 0 && (
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <h2 className="text-2xl font-semibold text-blue-800 mb-4 border-b pb-2">
                  Continuidad de Estudios
                </h2>
                <ul className="space-y-4">
                  {career.salida_estudios.map((estudio, index) => (
                    <li key={index} className="flex items-start">
                      <FontAwesomeIcon
                        icon={faGraduationCap}
                        className="text-purple-500 mt-1 mr-3"
                      />
                      <span className="text-gray-700">{estudio}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-semibold text-blue-800 mb-4 border-b pb-2">
                Documentos
              </h2>
              <div className="space-y-4">
                <a
                  href={career.curriculumMap}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:text-blue-800 transition-colors hover:underline"
                >
                  <FontAwesomeIcon
                    icon={faFilePdf}
                    className="text-red-500 mr-3"
                  />
                  Malla curricular (PDF)
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
