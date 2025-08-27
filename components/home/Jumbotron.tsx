import React from "react";
import { Button } from "../ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import { goldStarIcon, halfGoldStarIcon } from "@/utils/icons";
import Image from "next/image";

const Jumbotron = () => {
  return (
    <section className="w-full flex items-center justify-center">
      <div className="container grid grid-cols-8 grid-rows-3 gap-4">
        <div className="flex flex-col col-span-3 row-span-3">
          <div className="flex flex-col">
            <div className="flex">
              {[...Array(4)].map((_, index) => (
                <div className="" key={index}>
                  {goldStarIcon()}
                </div>
              ))}
              <div className="">{halfGoldStarIcon()}</div>
            </div>
            <p>from 1,250+ reviews</p>
          </div>
          <h1 className="text-4xl font-bold">
            Payroll for small businesses with big dreams
          </h1>
          <p className="text-lg">
            Your staff gets paid. Your taxes are filed. Your business keeps
            moving. HexPay makes payroll effortless — so you can focus on
            building your business.
          </p>
          <div className="flex">
            <Button>
              <CirclePlay />
              Book a Demo
            </Button>
            <Button variant="outline">
              <ArrowUpRight />
              Get Started
            </Button>
          </div>
        </div>
        <div className="relative col-span-3 row-span-3">
          <Image
            src="/images/industrial-designers.jpg"
            alt="Office people"
            fill
            priority
            className="object-cover rounded-xl"
          />
        </div>
        <div className="relative col-start-7 col-span-2  ">
          <Image
            src="/images/afro-americans.jpg"
            alt="Office people"
            fill
            priority
            className="object-cover rounded-xl"
          />
        </div>
        <div className="relative row-start-2 col-start-7 col-span-2 row-span-2  ">
          <Image
            src="/images/women-sitting.jpg"
            alt="Office people"
            fill
            priority
            className="object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
