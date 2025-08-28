import AllIndustries from "@/components/home/AllIndustries";
import PricingItem from "@/components/cards/pricing/PricingItem";
import { IPricingItem, IPricingItemFeature } from "@/utils/types";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckIcon } from "lucide-react";

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

  const keyFeatures: IPricingItemFeature[] = [
    { name: "Automated payroll processing", isChecked: true },
    { name: "Employee time tracking", isChecked: true },
    { name: "Tax compliance management", isChecked: true },
    { name: "Benefits administration", isChecked: true },
    { name: "Performance management", isChecked: true },
    { name: "Mobile app access", isChecked: true },
    { name: "Real-time reporting", isChecked: true },
    { name: "Multi-location support", isChecked: true },
    { name: "24/7 customer support", isChecked: true },
  ];

  return (
    <>
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge
              className="h-5 min-w-5 rounded-full px-1 font-mono"
              variant="outline"
            >
              PRICING
            </Badge>
            <h1 className="text-4xl font-bold mb-4">
              Simple, affordable and flexible Pricing. Start For Free
            </h1>
            <p>Start For Free</p>
          </div>

          <div className="flex">
            <div className="flex flex-col">
              <h3>Free Trial</h3>
              <p>
                Ideal for small teams or startups looking to streamline HR
                processes. Get essential tools to manage employee records,
                payroll, and performance, all in one place.
              </p>
              <Button>Get Started</Button>
            </div>
            <div className="flex flex-col">
              {keyFeatures.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckIcon className="h-4 w-4 text-green-500" />
                  <p className="ml-2">{feature.name}</p>
                </div>
              ))}
            </div>
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
