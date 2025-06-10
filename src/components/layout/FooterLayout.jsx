import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export const FooterLayout = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-700 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold border-b-2 border-blue-400 pb-2">
              Contacto
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <FontAwesomeIcon icon="phone" className="mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Mesa de Partes:</p>
                  <a
                    href="tel:2871526"
                    className="hover:text-blue-300 transition"
                  >
                    287-1526
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FontAwesomeIcon icon="phone" className="mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Informes:</p>
                  <a
                    href="tel:992038334"
                    className="hover:text-blue-300 transition"
                  >
                    992-038-334
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Redes Sociales */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold border-b-2 border-blue-400 pb-2">
              Redes Sociales
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faFacebook} className="text-xl" />
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-300 transition"
                >
                  Facebook
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faTwitter} className="text-xl" />
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-300 transition"
                >
                  Twitter
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faInstagram} className="text-xl" />
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-300 transition"
                >
                  Instagram
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon="book" className="text-xl" />
                <a href="#" className="hover:text-blue-300 transition">
                  Libro de Reclamaciones
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold border-b-2 border-blue-400 pb-2">
              Correos Electrónicos
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <FontAwesomeIcon
                  icon="envelope"
                  className="mt-1 flex-shrink-0"
                />
                <a
                  href="mailto:soporte@iestpgildaballivian.edu.pe"
                  className="hover:text-blue-300 transition"
                >
                  soporte@iestpgildaballivian.edu.pe
                </a>
              </div>
              <div className="flex items-start gap-3">
                <FontAwesomeIcon
                  icon="envelope"
                  className="mt-1 flex-shrink-0"
                />
                <a
                  href="mailto:mpartes@iestpgildaballivian.edu.pe"
                  className="hover:text-blue-300 transition"
                >
                  mpartes@iestpgildaballivian.edu.pe
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold border-b-2 border-blue-400 pb-2">
              Ubicación
            </h3>
            <div className="space-y-3">
              <p>Instituto de Excelencia de Lima - Perú</p>
              <div className="flex items-start gap-3">
                <FontAwesomeIcon
                  icon="map-marker-alt"
                  className="mt-1 flex-shrink-0"
                />
                <address className="not-italic">
                  Av. Vargas Machuca N° 315 (Frente al Banco de Crédito).
                  <br />
                  San Juan de Miraflores - Lima - Perú
                </address>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-blue-800 pt-6">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#" className="hover:text-blue-300 transition">
              Inicio
            </a>
            <a href="#" className="hover:text-blue-300 transition">
              Nosotros
            </a>
            <a href="#" className="hover:text-blue-300 transition">
              Programas
            </a>
            <a href="#" className="hover:text-blue-300 transition">
              Admisiones
            </a>
            <a href="#" className="hover:text-blue-300 transition">
              Noticias
            </a>
            <a href="#" className="hover:text-blue-300 transition">
              Contacto
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-blue-200">
          <p>
            © {currentYear} IESTP Gilda Ballivian. Todos los derechos
            reservados.
          </p>
          <p className="mt-1">Desarrollado con ❤️ por Joaquin</p>
        </div>
      </div>
    </footer>
  );
};
