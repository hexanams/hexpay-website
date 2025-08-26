import React from "react";
import { Button } from "../ui/button";
import { CirclePlay } from "lucide-react";

const Demo = () => {
  return (
    <section className="w-full flex items-center justify-center">
      <div className="container">
        <div className="flex flex-col">
          <div className="flex">
            <Button>Real-Time Payroll Intelligence</Button>
            <Button>Team Onboarding Made Easy</Button>
          </div>
          <h3>
            Built for founders, operators, and HR leads who want to do more with
            less.
          </h3>
          <div className="flex">
            <Button>AI Enabled Data Insight</Button>
            <Button>Free professional support</Button>
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
