import { IFeatureDescription } from "@/utils/types";
import React from "react";

const FeatureDescription = ({
  title,
  description,
  items,
}: IFeatureDescription) => {
  return (
    <section className="w-full flex items-center justify-center">
      <div className="container flex">
        <div className="w-1/2">
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="text-lg">{description}</p>
        </div>
        <div className="w-1/2">
          <ul>
            {items.map((item, i) => (
              <li key={i}>
                <div className="flex">
                  <p className="">{i + 1}</p>
                  <div className="flex flex-col">
                    <h6 className="text-xl font-bold">{item.title}</h6>
                    <p className="text-lg">{item.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FeatureDescription;
