import React from "react";
import {
  CountComponent,
  DirectorWords,
  HomeCarousel,
  NoveltiesEvents,
  CareersCards,
} from "@/components";

export const Home = () => {
  return (
    <div>
      <HomeCarousel />
      <DirectorWords />
      <CountComponent />
      <CareersCards />
      <NoveltiesEvents />
    </div>
  );
};
