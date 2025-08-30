import React from "react";
import { Button } from "../ui/button";
import {
  CirclePlay,
  BadgeDollarSign,
  UsersRound,
  Sparkles,
  Headset,
} from "lucide-react";
import HrFeatures from "../home/HrFeature";

const Demo = () => {
  return (
    <section className="w-full flex items-center justify-center h-[609px] bg-custom-purple">
      <div className="container h-full">
        <div className="flex flex-col">
          <div className="flex">
            <HrFeatures
              name="Real-Time Payroll Intelligence"
              icon={BadgeDollarSign}
            />
            <HrFeatures name="Team Onboarding Made Easy" icon={UsersRound} />
          </div>
          <h3 className="font-inria-serif font-bold text-5xl text-white">
            Built for founders, operators, and HR leads who want to do more with
            less.
          </h3>
          <div className="flex">
            <HrFeatures name="AI Enabled Data Insight" icon={Sparkles} />
            <HrFeatures name="Free professional support" icon={Headset} />
          </div>
        </div>
        <p>
          Join hundreds of Nigerian businesses already ditching manual payroll
          stress.
        </p>
        <Button>
          <CirclePlay />
          Book a Demo
        </Button>
      </div>
    </section>
  );
};

export default Demo;
