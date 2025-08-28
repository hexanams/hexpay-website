import AllIndustries from "@/components/home/AllIndustries";
import PricingItem from "@/components/cards/pricing/PricingItem";
import { IPricingItem } from "@/utils/types";
import React from "react";

const PricingPage = () => {
  const pricingPlans: IPricingItem[] = [
    {
      title: "Starter",
      description:
        "Perfect for small businesses and startups getting started with payroll management.",
      price: 29,
      noOfEmployees: 10,
      isRecommended: false,
      features: [
        { name: "Basic payroll processing", isChecked: true },
        { name: "Employee self-service portal", isChecked: true },
        { name: "Tax calculations and filing", isChecked: true },
        { name: "Direct deposit", isChecked: true },
        { name: "Basic reporting", isChecked: true },
        { name: "Advanced analytics", isChecked: false },
        { name: "HR management tools", isChecked: false },
        { name: "Custom integrations", isChecked: false },
        { name: "Priority support", isChecked: false },
      ],
    },
    {
      title: "Professional",
      description:
        "Comprehensive solution for growing businesses with advanced HR and payroll needs.",
      price: 79,
      noOfEmployees: 50,
      isRecommended: true,
      features: [
        { name: "Basic payroll processing", isChecked: true },
        { name: "Employee self-service portal", isChecked: true },
        { name: "Tax calculations and filing", isChecked: true },
        { name: "Direct deposit", isChecked: true },
        { name: "Basic reporting", isChecked: true },
        { name: "Advanced analytics", isChecked: true },
        { name: "HR management tools", isChecked: true },
        { name: "Custom integrations", isChecked: true },
        { name: "Priority support", isChecked: true },
      ],
    },
  ];

  return (
    <>
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Choose Your Plan</h1>
            <p className="text-xl text-gray-600">
              Select the perfect payroll solution for your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <PricingItem key={index} {...plan} />
            ))}
          </div>
        </div>
      </section>

      <AllIndustries />
    </>
  );
};

export default PricingPage;
