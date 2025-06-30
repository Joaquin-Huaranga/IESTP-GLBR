import React from "react";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faFacebookMessenger,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const contactUsData = [
  {
    phones: {
      mesa_de_partes: "01-2762910",
      secretaria_de_direccion: "01-4661035",
    },
    mails: {
      atencion_al_estudiante: "informes@iestpgildaballivian.edu.pe",
      soporte_tecnico: "soporte@iestpgildaballivian.edu.pe",
      atencion_al_postulante: "admision@iestpgildaballivian.edu.pe",
      bolsa_de_trabajo: "bolsadetrabajo@iestpgildaballivian.edu.pe",
    },
    web: {
      facebook: "https://www.facebook.com/IESTPGILDABALLIVIANOFICIAL",
      messenger: "https://www.messenger.com/t/IESTPGILDABALLIVIANOFICIAL",
      correo: "informes@iestpgildaballivian.edu.pe",
    },
    location: {
      address:
        'Av. Vargas Machuca N° 315 (Frente al Banco de Crédito) Urb. "San Juan" - San Juan de Miraflores, Lima.',
      link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d975.0554273244492!2d-76.97620153038409!3d-12.165303538266357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b851de5dffc1%3A0xc7db83834452fc90!2sAv.%20Ram%C3%B3n%20Vargas%20Machuca%20N%C2%B0315%2C%20San%20Juan%20de%20Miraflores%2015801!5e0!3m2!1ses-419!2spe!4v1750198405748!5m2!1ses-419!2spe",
    },
  },
];

export const ContactUs = () => {
  const { phones, mails, web, location } = contactUsData[0];

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 text-gray-800 py-16 px-6 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center mb-16"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent mb-4 text-center"
        >
          Contactanos
        </motion.h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "120px" }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto rounded-full"
        ></motion.div>
      </motion.div>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white rounded-2xl p-6 shadow-lg transition hover:shadow-xl break-words">
          <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3 text-indigo-600">
            <FontAwesomeIcon icon={faPhone} /> Teléfonos
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li>
              <span className="font-medium">Mesa de Partes:</span>{" "}
              {phones.mesa_de_partes}
            </li>
            <li>
              <span className="font-medium">Secretaría de Dirección:</span>{" "}
              {phones.secretaria_de_direccion}
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg transition hover:shadow-xl break-words">
          <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3 text-indigo-600">
            <FontAwesomeIcon icon={faEnvelope} /> Correos
          </h3>
          <ul className="space-y-3 text-gray-700 break-words">
            <li>
              <span className="font-medium">Atención al Estudiante:</span>{" "}
              <a
                href={`mailto:${mails.atencion_al_estudiante}`}
                className="text-blue-700 hover:underline break-all"
              >
                {mails.atencion_al_estudiante}
              </a>
            </li>
            <li>
              <span className="font-medium">Soporte Técnico:</span>{" "}
              <a
                href={`mailto:${mails.soporte_tecnico}`}
                className="text-blue-700 hover:underline break-all"
              >
                {mails.soporte_tecnico}
              </a>
            </li>
            <li>
              <span className="font-medium">Atención al Postulante:</span>{" "}
              <a
                href={`mailto:${mails.atencion_al_postulante}`}
                className="text-blue-700 hover:underline break-all"
              >
                {mails.atencion_al_postulante}
              </a>
            </li>
            <li>
              <span className="font-medium">Bolsa de Trabajo:</span>{" "}
              <a
                href={`mailto:${mails.bolsa_de_trabajo}`}
                className="text-blue-700 hover:underline break-all"
              >
                {mails.bolsa_de_trabajo}
              </a>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg transition hover:shadow-xl break-words">
          <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3 text-indigo-600">
            <FontAwesomeIcon icon={faGlobe} /> Redes y Web
          </h3>
          <ul className="space-y-3 break-words">
            <li>
              <a
                href={web.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline flex items-center gap-2"
              >
                <FontAwesomeIcon icon={faFacebook} /> Facebook Oficial
              </a>
            </li>
            <li>
              <a
                href={web.messenger}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline flex items-center gap-2"
              >
                <FontAwesomeIcon icon={faFacebookMessenger} /> Messenger
              </a>
            </li>
            <li>
              <a
                href={`mailto:${web.correo}`}
                className="text-blue-700 hover:underline flex items-center gap-2 break-all"
              >
                <FontAwesomeIcon icon={faEnvelope} /> {web.correo}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-16 bg-white rounded-2xl p-6 shadow-lg transition hover:shadow-xl break-words">
        <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3 text-indigo-600">
          <FontAwesomeIcon icon={faMapMarkerAlt} /> Dirección
        </h3>
        <p className="mb-6 text-gray-700">{location.address}</p>
        <div className="w-full h-80 rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
          <iframe
            src={location.link}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa de ubicación"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
