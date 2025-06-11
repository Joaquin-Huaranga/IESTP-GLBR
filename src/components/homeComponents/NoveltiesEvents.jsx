import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  MainGeodesicImage,
  MainInversionImage,
  MainLaboratoryImage,
} from "@/images";

const noveltiesEventsList = [
  {
    image: MainInversionImage,
    title: "Proyecto de Inversión 118",
    description:
      "Este 11 de junio del 2025, se desarrolló el Taller de Involucramiento para el Proyecto de Inversión. Estuvieron presentes el Director de la DRELM y altas autoridades del Ministerio de Educación.",
    modalImages: [MainGeodesicImage, MainInversionImage, MainLaboratoryImage],
  },
  {
    image: MainGeodesicImage,
    title: "Punto Geodésico",
    description:
      "Continuamos con las implementaciones del punto geodésico. Trabajando para dar un servicio de calidad a la juventud estudiosa.",
    modalImages: [MainGeodesicImage, MainInversionImage, MainLaboratoryImage],
  },
  {
    image: MainLaboratoryImage,
    title: "Laboratorio Digital",
    description:
      "Pronto inauguraremos nuestro Laboratorio de Fabricación Digital que beneficiará a más de mil estudiantes de los diferentes programas de estudio.",
    modalImages: [MainGeodesicImage, MainInversionImage, MainLaboratoryImage],
  },
];

export const NoveltiesEvents = () => {
  const [selectedImages, setSelectedImages] = useState("");

  return (
    <section className="py-24 px-4 sm:px-10 max-w-7xl mx-auto">
      <h2 className="text-4xl font-extrabold text-center text-blue-800 mb-14">
        Noticias y Eventos
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {noveltiesEventsList.map((item, index) => (
          <Dialog key={index}>
            <DialogTrigger asChild>
              <Card
                onClick={() => setSelectedImages(item.modalImages)}
                className="cursor-pointer rounded-3xl shadow-xl hover:scale-[1.03] transition-transform duration-300 overflow-hidden"
              >
                <div className="h-52 w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-blue-800 text-lg">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700">{item.description}</p>
                </CardContent>
              </Card>
            </DialogTrigger>

            <DialogContent className="max-w-3xl">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">
                {item.title}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {item.modalImages.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`Imagen ${i + 1}`}
                    className="w-full h-48 object-cover rounded-lg border"
                  />
                ))}
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </section>
  );
};
