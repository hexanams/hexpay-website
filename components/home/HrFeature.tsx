import React from "react";
import { IHRFeature } from "@/utils/types";

const HrFeature = ({ name, icon: Icon }: IHRFeature) => {
  return (
    <div className="flex">
      <Icon />
      <p>{name}</p>
    </div>
  );
};

export default HrFeature;
