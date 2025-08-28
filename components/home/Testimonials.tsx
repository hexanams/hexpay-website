import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials } from "@/utils/data";
import TestimonialItem from "./TestimonialItem";

const Testimonials = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center">
      <div className="flex flex-col">
        <h3>We&apos;ve got people that talk about</h3>
        <p>HexPay</p>
      </div>
      <Carousel
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {testimonials.map((item, index) => (
            <CarouselItem key={index}>
              <TestimonialItem {...item} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default Testimonials;
