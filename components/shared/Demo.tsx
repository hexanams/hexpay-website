import React from "react";
import { Button } from "../ui/button";
import { CirclePlay } from "lucide-react";
import HrFeatures from "../home/HrFeature";
import {
  affIliateIcon,
  customerService,
  magicWandIcon,
  userGroup,
} from "@/utils/icons";

const Demo = () => {
  return (
    <section className="w-full flex items-center justify-center h-[609px] bg-custom-purple">
      <div className="container h-full flex flex-col items-center justify-center gap-8">
        <div className="flex flex-col">
          <div className="flex justify-between">
            <HrFeatures
              name="Real-Time Payroll Intelligence"
              icon={affIliateIcon}
              color="#86DDF8"
              className="bottom-1/2"
            />
            <HrFeatures
              name="Team Onboarding Made Easy"
              icon={userGroup}
              color="#E9F9DE"
              className="left-50"
            />
          </div>
          <h3 className="font-inria-serif font-bold text-5xl text-white w-[680px] text-center">
            Built for founders, operators, and HR leads who want to do more with
            less.
          </h3>
          <div className="flex justify-between">
            <HrFeatures
              name="AI Enabled Data Insight"
              icon={magicWandIcon}
              color="#FFF4DB"
              className="right-40"
            />
            <HrFeatures
              name="Free professional support"
              icon={customerService}
              color="#EDDAFE"
              className="left-50 bottom-4"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4.5 items-center">
          <p className="font-aspekta font-normal text-lg text-custom-mint w-[458px] text-center">
            Join hundreds of Nigerian businesses already ditching manual payroll
            stress.
          </p>
          <Button className="w-fit bg-white rounded-[30px] font-aspekta font-normal text-sm text-custom-purple">
            <CirclePlay />
            Book a Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Demo;
