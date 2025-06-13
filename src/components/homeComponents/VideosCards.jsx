import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { LiteYouTubeEmbed } from "../_utils/LiteYoutubeEmbed.jsx";
import { motion } from "framer-motion";

const videos = [
  {
    title: "Desfile Militar",
    url: "https://youtu.be/Yp-Z-OIC5nA",
    description:
      "Participando en el Desfile Militar por Fiestas Patrias en el 2018. Nuestra institución se vistió de rojo y blanco, demostrando amor a la patria y empeño académico.",
  },
  {
    title: "Video Institucional",
    url: "https://youtu.be/HJR_qlnODkM",
    description:
      "Trabajando de la mano con la Municipalidad de San Juan de Miraflores. El trabajo en equipo permite dar un mejor servicio a los estudiantes.",
  },
  {
    title: "Concurso UNI",
    url: "https://youtu.be/MI0CmlLA0a0",
    description:
      "Nuestros alumnos de Electrónica obtienen reconocimientos en un concurso de robótica desarrollado en la Universidad Nacional de Ingeniería - UNI.",
  },
];

const getYoutubeId = (url) => {
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([^\s&]+)/,
  );
  return match ? match[1] : "";
};

export const VideosCards = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl font-extrabold text-center text-blue-800 mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Galería de Videos
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {videos.map((video, index) => {
            const videoId = getYoutubeId(video.url);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="flex flex-col justify-between border border-blue-100 h-120 bg-white shadow-md hover:shadow-xl transition-all duration-300 rounded-xl">
                  <CardHeader>
                    <CardTitle className="text-lg text-blue-900 font-semibold">
                      {video.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <LiteYouTubeEmbed videoId={videoId} title={video.title} />
                    <p className="mt-4 text-sm text-gray-700 leading-relaxed">
                      {video.description}
                    </p>
                  </CardContent>

                  <CardFooter className="justify-center mt-4">
                    <Button
                      asChild
                      className="gap-2 bg-blue-700 hover:bg-blue-800 text-white rounded-full px-5 py-2 text-sm shadow"
                    >
                      <a
                        href={video.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faCirclePlay}
                          className="text-base"
                        />
                        Ver en YouTube
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
