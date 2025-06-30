import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GildaLogo } from "../../images/index.js";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Button,
} from "@/components";
import {
  faBars,
  faChevronDown,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export const HeaderLayout = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full bg-white/95 backdrop-blur-lg sticky top-0 z-50 shadow-md transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]`}
    >
      <div className="max-w-8xl mx-auto justify-items-center">
        <div
          className={`bg-gray-50 px-6 border-b border-gray-200 hidden lg:flex gap-3 transition-all duration-500 ease-in-out ${
            isScrolled
              ? "max-h-0 py-0 opacity-0 -translate-y-full"
              : "max-h-20 py-2 opacity-100 translate-y-0"
          }`}
          style={{
            transformOrigin: "top",
            willChange: "transform, opacity, max-height",
          }}
        >
          <Button
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSfU5F1aClHEzOmKZmtMw-7ygtw1sZAw6xrH0BdwU2_b884DeA/viewform",
                "_blank",
              )
            }
            className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-1.5 px-4 rounded-full shadow-sm transition-all"
          >
            <FontAwesomeIcon icon="user-graduate" className="mr-2" />
            Seguimiento de Egresados
          </Button>
          <Button
            onClick={() =>
              window.open("https://centroderecursosies.drelm.gob.pe/", "_blank")
            }
            className="bg-red-600 hover:bg-red-700 text-white text-xs font-bold py-1.5 px-4 rounded-full shadow-sm transition-all"
          >
            <FontAwesomeIcon icon="calendar-alt" className="mr-2" />
            Biblioteca Digital
          </Button>
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-white text-xs font-bold py-1.5 px-4 rounded-full shadow-sm transition-all">
            <FontAwesomeIcon icon="book-open" className="mr-2" />
            Correo Institucional
          </Button>
          <Button
            onClick={() =>
              window.open(
                "https://virtual.iestpgildaballivian.edu.pe/",
                "_blank",
              )
            }
            className="bg-green-600 hover:bg-green-700 text-white text-xs font-bold py-1.5 px-4 rounded-full shadow-sm transition-all"
          >
            <FontAwesomeIcon icon="laptop" className="mr-2" />
            Aula Virtual
          </Button>
        </div>
        <div className="flex justify-between items-center px-6 border-b border-gray-100">
          <div className="flex items-center gap-4 group">
            <img
              onClick={() => navigate("/")}
              src={GildaLogo}
              alt="Logo Instituto"
              className={`transition-all duration-500 ease-in-out ${
                isScrolled
                  ? "w-12 h-8 scale-90"
                  : "w-16 h-12 md:w-20 md:h-14 scale-100"
              }`}
              style={{ willChange: "width, height, transform" }}
            />
            <div className="text-center">
              <h1
                className={`font-bold bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent tracking-tight transition-all duration-500 ease-in-out ${
                  isScrolled
                    ? "text-lg scale-[0.95]"
                    : "text-xl md:text-2xl lg:text-3xl scale-100"
                }`}
              >
                IESTP GLBR
              </h1>
              <p
                className={`text-xs text-gray-500 mt-1 font-medium hidden md:block transition-all duration-500 ease-in-out ${
                  isScrolled ? "opacity-0 max-h-0 -mt-1" : "opacity-100 max-h-6"
                }`}
              >
                Excelencia en Educación Tecnológica
              </p>
            </div>
          </div>
          {isScrolled && (
            <div>
              <div
                className={`hidden lg:flex gap-2 transition-all duration-500 ease-out opacity-100 translate-y-0 delay-150"
                }`}
              >
                <Button
                  size="icon"
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-transform hover:scale-110"
                >
                  <FontAwesomeIcon icon="user-graduate" />
                </Button>
                <Button
                  size="icon"
                  className="bg-red-600 hover:bg-red-700 text-white rounded-full transition-transform hover:scale-110"
                >
                  <FontAwesomeIcon icon="calendar-alt" />
                </Button>
                <Button
                  size="icon"
                  className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-full transition-transform hover:scale-110"
                >
                  <FontAwesomeIcon icon="book-open" />
                </Button>
                <Button
                  size="icon"
                  className="bg-green-600 hover:bg-green-700 text-white rounded-full transition-transform hover:scale-110"
                >
                  <FontAwesomeIcon icon="laptop" />
                </Button>
              </div>
            </div>
          )}
          <div className="flex lg:hidden gap-2">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-600 transition-transform hover:scale-110"
                >
                  <FontAwesomeIcon
                    icon={mobileMenuOpen ? faTimes : faBars}
                    className="text-lg"
                  />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px]">
                <MobileMenu closeMenu={() => setMobileMenuOpen(false)} />
              </SheetContent>
            </Sheet>
          </div>
        </div>
        <div className="px-6">
          <nav
            className={`hidden lg:flex items-center justify-center gap-1 transition-all duration-500 ease-in-out overflow-hidden ${
              isScrolled ? "max-h-10 py-1" : "max-h-16 py-3"
            }`}
          >
            <Dropdown
              label="Nosotros"
              icon="user"
              items={[
                {
                  label: "Informacion",
                  route: "/about-us/info",
                },
                {
                  label: "Mision y Vision",
                  route: "/about-us/mission-vision",
                },
                {
                  label: "Historia",
                  route: "/about-us/history",
                },
                {
                  label: "Contactanos",
                  route: "/about-us/contact-us",
                },
                {
                  label: "Plana Docente",
                  route: "/about-us/teaching-staff",
                },
              ]}
            />
            <Dropdown
              label="Programas"
              icon="school"
              items={[
                {
                  label: "Construcción Civil",
                  route: "/careers/civil-construction",
                },
                {
                  label: "Contabilidad",
                  route: "/careers/accounting",
                },
                {
                  label: "Desarrollo de Sistemas de Información",
                  route: "/careers/information-systems",
                },
                {
                  label: "Electricidad Industrial",
                  route: "/careers/electricity",
                },
                {
                  label: "Electrónica Industrial",
                  route: "/careers/electronics",
                },
                {
                  label: "Gestión Administrativa",
                  route: "/careers/administrative-management",
                },
                {
                  label: "Mecánica de Producción Industrial",
                  route: "/careers/mechanics",
                },
                {
                  label: "Mecatrónica Automotriz",
                  route: "/careers/mechatronics",
                },
              ]}
            />
            <Dropdown
              label="Admisión"
              icon="book"
              items={["Admisión 2026", "Matrícula"]}
            />
            <Dropdown
              label="Trámites"
              icon="file-alt"
              items={[
                "TUPA",
                "Mesa de Partes",
                "Doc de Gestión",
                "Estadísticas",
              ]}
            />
            <Dropdown
              label="Servicios"
              icon="globe"
              items={[
                "Biblioteca Digital",
                "Intranet",
                "Correo Institucional",
                "Aula Virtual",
                "Bienestar y Empleabilidad",
                "Bolsa Laboral",
              ]}
            />
            <SimpleLink label="Investigación" icon="flask" />
            <SimpleLink label="Jaguar Soft" icon="laptop-code" />
            <SimpleLink label="Comunicados" icon="bullhorn" />
          </nav>
        </div>
      </div>
    </header>
  );
};

const MobileMenu = ({ closeMenu }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <div className="h-full flex flex-col">
      <div className="p-4 border-b">
        <div className="flex items-center gap-3">
          <img src={GildaLogo} alt="Logo Instituto" className="w-16 h-12" />
          <h2 className="text-xl font-bold bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">
            IESTP GLBR
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 p-4">
        <Button
          onClick={() =>
            window.open(
              "https://docs.google.com/forms/d/e/1FAIpQLSfU5F1aClHEzOmKZmtMw-7ygtw1sZAw6xrH0BdwU2_b884DeA/viewform",
              "_blank",
            )
          }
          className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-2 px-3 rounded-full shadow-sm"
        >
          <FontAwesomeIcon icon="user-graduate" className="mr-1" />
          Seguimiento
        </Button>
        <Button
          onClick={() =>
            window.open("https://centroderecursosies.drelm.gob.pe/", "_blank")
          }
          className="bg-red-600 hover:bg-red-700 text-white text-xs font-bold py-2 px-3 rounded-full shadow-sm"
        >
          <FontAwesomeIcon icon="calendar-alt" className="mr-1" />
          Biblioteca
        </Button>
        <Button className="bg-yellow-500 hover:bg-yellow-600 text-white text-xs font-bold py-2 px-3 rounded-full shadow-sm">
          <FontAwesomeIcon icon="book-open" className="mr-1" />
          Correo
        </Button>
        <Button
          onClick={() =>
            window.open("https://virtual.iestpgildaballivian.edu.pe/", "_blank")
          }
          className="bg-green-600 hover:bg-green-700 text-white text-xs font-bold py-2 px-3 rounded-full shadow-sm"
        >
          <FontAwesomeIcon icon="laptop" className="mr-1" />
          Aula Virtual
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        <MobileDropdown
          label="Nosotros"
          icon="user"
          items={[
            {
              label: "Informacion",
              route: "/about-us/info",
            },
            {
              label: "Mision y Vision",
              route: "/about-us/mission-vision",
            },
            {
              label: "Historia",
              route: "/about-us/history",
            },
            {
              label: "Contactanos",
              route: "/about-us/contact-us",
            },
            {
              label: "Plana Docente",
              route: "/about-us/teaching-staff",
            },
          ]}
          isOpen={openDropdown === "Nosotros"}
          toggle={() => toggleDropdown("Nosotros")}
          closeMenu={closeMenu}
        />
        <MobileDropdown
          label="Programas"
          icon="school"
          items={[
            {
              label: "Construcción Civil",
              route: "/careers/civil-construction",
            },
            {
              label: "Contabilidad",
              route: "/careers/accounting",
            },
            {
              label: "Desarrollo de Sistemas de Información",
              route: "/careers/information-systems",
            },
            {
              label: "Electricidad Industrial",
              route: "/careers/electricity",
            },
            {
              label: "Electrónica Industrial",
              route: "/careers/electronics",
            },
            {
              label: "Gestión Administrativa",
              route: "/careers/administrative-management",
            },
            {
              label: "Mecánica de Producción Industrial",
              route: "/careers/mechanics",
            },
            {
              label: "Mecatrónica Automotriz",
              route: "/careers/mechatronics",
            },
          ]}
          isOpen={openDropdown === "Programas"}
          toggle={() => toggleDropdown("Programas")}
          closeMenu={closeMenu}
        />
        <MobileDropdown
          label="Admisión"
          icon="book"
          items={["Admisión 2026", "Matrícula"]}
          isOpen={openDropdown === "Admisión"}
          toggle={() => toggleDropdown("Admisión")}
          closeMenu={closeMenu}
        />
        <MobileDropdown
          label="Trámites"
          icon="file-alt"
          items={["TUPA", "Mesa de Partes", "Doc de Gestión", "Estadísticas"]}
          isOpen={openDropdown === "Trámites"}
          toggle={() => toggleDropdown("Trámites")}
          closeMenu={closeMenu}
        />
        <MobileDropdown
          label="Servicios"
          icon="globe"
          items={[
            "Biblioteca Digital",
            "Intranet",
            "Correo Institucional",
            "Aula Virtual",
            "Bienestar y Empleabilidad",
            "Bolsa Laboral",
          ]}
          isOpen={openDropdown === "Servicios"}
          toggle={() => toggleDropdown("Servicios")}
          closeMenu={closeMenu}
        />
        <MobileSimpleLink
          label="Investigación"
          icon="flask"
          closeMenu={closeMenu}
        />
        <MobileSimpleLink
          label="Jaguar Soft"
          icon="laptop-code"
          closeMenu={closeMenu}
        />
        <MobileSimpleLink
          label="Comunicados"
          icon="bullhorn"
          closeMenu={closeMenu}
        />
      </div>
    </div>
  );
};

const MobileDropdown = ({ label, icon, items, isOpen, toggle, closeMenu }) => {
  const navigate = useNavigate();

  return (
    <div className="border-b border-gray-100">
      <Button
        variant="ghost"
        className="w-full flex justify-between items-center py-3 px-0 text-gray-700"
        onClick={toggle}
      >
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={["fas", icon]} className="text-indigo-600" />
          <span className="font-medium">{label}</span>
        </div>
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`text-xs text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </Button>

      {isOpen && (
        <div className="pl-8 pr-2 py-2 space-y-2">
          {items.map((item, i) => (
            <Button
              key={i}
              variant="ghost"
              className="w-full text-left justify-start py-2 px-0 text-gray-600 hover:text-indigo-600"
              onClick={() => {
                navigate(item.route);
                closeMenu();
              }}
            >
              {item.label}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};

const MobileSimpleLink = ({ label, icon, closeMenu }) => (
  <Button
    variant="ghost"
    className="w-full flex items-center gap-2 py-3 px-0 text-gray-700 border-b border-gray-100"
    onClick={closeMenu}
  >
    <FontAwesomeIcon icon={["fas", icon]} className="text-indigo-600" />
    <span className="font-medium">{label}</span>
  </Button>
);

const Dropdown = ({ label, icon, items }) => {
  const navigate = useNavigate();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center gap-2 px-4 py-3 text-gray-700 rounded-none transition-all duration-300 border-b-2 border-transparent hover:border-indigo-400"
        >
          <FontAwesomeIcon icon={["fas", icon]} className="text-indigo-600" />
          <span className="font-medium text-sm">{label}</span>
          <FontAwesomeIcon
            icon="chevron-down"
            className="text-xs text-gray-400 ml-1"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="min-w-[240px] rounded-lg shadow-xl border border-gray-100 mt-1 p-1.5"
        align="center"
      >
        {items.map((item, i) => (
          <DropdownMenuItem
            key={i}
            onClick={() => navigate(item.route)}
            className="px-4 py-2.5 text-gray-700 hover:bg-indigo-50 rounded-md cursor-pointer transition-colors duration-200 text-sm"
          >
            {item.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const SimpleLink = ({ label, icon }) => (
  <Button
    variant="ghost"
    className="flex items-center gap-2 px-4 py-3 text-gray-700 rounded-none transition-all duration-300 border-b-2 border-transparent hover:border-indigo-400"
  >
    <FontAwesomeIcon icon={["fas", icon]} className="text-indigo-600" />
    <span className="font-medium text-sm">{label}</span>
  </Button>
);
