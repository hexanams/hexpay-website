import { IPointer } from "@/utils/types";
import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";

const Pointers = ({ title, color, image, items }: IPointer) => {
  return (
    <section className="w-full flex items-center justify-center">
      <div className="container flex" style={{ backgroundColor: color }}>
        <div className="relative h-[500px] w-[500px]">
          <Image
            src={image}
            alt={title}
            fill
            priority
            className="object-cover rounded-xl"
          />
        </div>
        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4">
          {items.map((item, i) =>
            item.isOutlined ? (
              <Button
                key={i}
                className="flex w-full h-full flex-col"
                variant="outline"
                style={{
                  borderColor: item.outLineColor,
                  color: item?.outLineColor,
                }}
              >
                <item.icon className="w-8 h-8" />
                <p
                  className="text-lg font-bold"
                  style={{ color: item.outLineColor }}
                >
                  {item.title}
                </p>
              </Button>
            ) : (
              <div
                key={i}
                className="bg-white p-4 rounded-xl flex flex-col w-full h-full"
              >
                <item.icon className="w-8 h-8" />
                <h6 className="text-xl font-bold">{item.title}</h6>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Pointers;
