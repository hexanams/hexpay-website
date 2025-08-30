import React from "react";
import { IHRFeature } from "@/utils/types";
import { cn } from "@/lib/utils";

const HrFeature = ({ name, icon, color, className }: IHRFeature) => {
  return (
    <div
      className={cn(
        "flex py-3 px-4 rounded-[30px] gap-2.5 items-center justify-center relative",
        className
      )}
      style={{ backgroundColor: color }}
    >
      {icon()}
      <p className="font-aspekta font-normal text-sm text-custom-purple">
        {name}
      </p>
    </div>
  );
};

export default HrFeature;
