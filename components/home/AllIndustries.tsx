import React from "react";
import Industries from "./Industries";

const AllIndustries = () => {
  return (
    <section className="w-full flex items-center justify-center">
      <div className="container grid grid-cols-10 grid-rows-11 gap-4">
        <Industries
          image="/images/industry1.jpg"
          text="Industrial Technology"
          className="col-start-3 col-end-8 row-start-2 row-end-5"
        />
        <Industries
          image="/images/industry2.jpg"
          text="Construction"
          className="col-start-1 col-end-3 row-start-1 row-end-3"
        />
        <Industries
          image="/images/industry3.jpg"
          text="Delivery"
          className="col-start-8 col-end-11 row-start-1 row-end-4"
        />
        <Industries
          image="/images/industry4.jpg"
          text="Agency"
          className="col-start-1 col-end-4 row-start-5 row-end-8"
        />
        <Industries
          image="/images/industry5.jpg"
          text="Insurance"
          className="col-start-6 col-end-9 row-start-5 row-end-7"
        />
        <Industries
          image="/images/industry6.jpg"
          text="Warehouse"
          className="col-start-8 col-end-11 row-start-7 row-end-10"
        />
        <div className="flex flex-col col-start-4 col-end-8 row-start-8 row-end-11 justify-center items-center text-center">
          <h3 className="text-2xl font-bold mb-4">
            Built for different kinds of organizations
          </h3>
          <p className="text-gray-600">
            From startups and agencies to schools and enterprises, our software
            adapts seamlessly to the way you work.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AllIndustries;
