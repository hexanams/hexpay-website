import React from "react";
import Image from "next/image";
import { ITestimonialItem } from "@/utils/types";
import { logoMark } from "@/utils/icons";

const TestimonialItem = ({ image, text, color, name }: ITestimonialItem) => {
  return (
    <div
      style={{ backgroundColor: color }}
      className="w-full flex items-center justify-center"
    >
      <div className="container flex">
        <div className="flex flex-col">
          <p>{text}</p>
          <p>{name}</p>
        </div>
        <div className="relative">
          <div className="relative h-[500px] w-[500px]">
            <Image
              src={image}
              alt={name}
              fill
              priority
              className="object-cover rounded-xl"
            />
          </div>
          <div className="flex absolute bottom-2 right-2 z-10">
            {logoMark()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialItem;
