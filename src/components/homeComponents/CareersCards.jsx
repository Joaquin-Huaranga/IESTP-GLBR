import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import {
  ContabilidadImageCard,
  MecatronicaImageCard,
  CivilImageCard,
  DesarrolloImageCard,
  MecanicaImageCard,
  GestionImageCard,
  ElectronicaImageCard,
  ElectricidadImageCard,
} from "../../images";

const careersList = [
  {
    type: "civil-construction",
    image: CivilImageCard,
    title: "Construcción Civil",
  },
  {
    type: "accounting",
    image: ContabilidadImageCard,
    title: "Contabilidad",
  },
  {
    type: "information-systems",
    image: DesarrolloImageCard,
    title: "Desarrollo de Sistemas de Información",
  },
  {
    type: "electricity",
    image: ElectricidadImageCard,
    title: "Electricidad Industrial",
  },
  {
    type: "electronics",
    image: ElectronicaImageCard,
    title: "Electrónica Industrial",
  },
  {
    type: "administrative-management",
    image: GestionImageCard,
    title: "Gestión Administrativa",
  },
  {
    type: "mechanics",
    image: MecanicaImageCard,
    title: "Mecánica de Producción Industrial",
  },
  {
    type: "mechatronics",
    image: MecatronicaImageCard,
    title: "Mecatrónica Automotriz",
  },
];

export const CareersCards = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 px-4 sm:px-10 max-w-7xl mx-auto">
      <h2 className="text-4xl font-extrabold text-center text-blue-800 mb-14">
        Nuestras Carreras Profesionales
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {careersList.map((career) => (
          <Card
            key={career.type}
            onClick={() => navigate(`/careers/${career.type}`)}
            className="group relative cursor-pointer overflow-hidden rounded-3xl border border-blue-200 shadow-xl transition-transform duration-300 hover:scale-[1.04] bg-blue-50 -mt-6"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <img
                src={career.image}
                alt={career.title}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-800/70 to-transparent  transition-all duration-300" />
              <h3 className="absolute bottom-4 left-4 text-white text-lg font-semibold drop-shadow-lg z-10">
                {career.title}
              </h3>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
