import React from "react";
import {
  CountComponent,
  DirectorWords,
  HomeCarousel,
  NoveltiesEvents,
  CareersCards,
  VideosCards,
} from "@/components";

export const Home = () => {
  return (
    <div>
      <HomeCarousel />
      <DirectorWords />
      <CountComponent />
      <CareersCards />
      <NoveltiesEvents />
      <VideosCards />
    </div>
  );
};
