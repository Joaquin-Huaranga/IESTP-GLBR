import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components";
import Autoplay from "embla-carousel-autoplay";
import { CarouselItem1, CarouselItem2, CarouselItem3 } from "../../images";

export function HomeCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false, loop: true }),
  );

  const slides = [
    {
      id: 1,
      image: CarouselItem1,
    },
    {
      id: 2,
      image: CarouselItem2,
    },
    {
      id: 3,
      image: CarouselItem3,
    },
  ];

  return (
    <div className="relative w-full">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.id}>
              <div className="relative md:h-[710px] h-[300px] w-full">
                <img
                  src={slide.image}
                  alt="item"
                  className="absolute inset-0 w-full h-[300px] md:h-[710px]  object-contain bg-black"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className="w-3 h-3 rounded-full bg-white/50 hover:bg-white transition"
              onClick={() => plugin.current.scrollTo(index)}
              aria-label={`Ir a slide ${index + 1}`}
            />
          ))}
        </div>

        <CarouselPrevious className="left-4 hidden sm:flex h-12 w-12" />
        <CarouselNext className="right-4 hidden sm:flex h-12 w-12" />
      </Carousel>
    </div>
  );
}
