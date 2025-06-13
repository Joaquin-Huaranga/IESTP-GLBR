import React from "react";
import { useParams } from "react-router-dom";
import { careersData } from "../../data-list";

export const Careers = () => {
  const { type } = useParams();

  const career = careersData.find((item) => item.type === type);

  return (
    <div className="py-10 px-6 max-w-5xl mx-auto">
      {career ? (
        <h1 className="text-4xl font-bold text-blue-900">{career.title}</h1>
      ) : (
        <h1 className="text-2xl font-semibold text-red-600">
          Carrera no encontrada
        </h1>
      )}
    </div>
  );
};
