import AllIndustries from "@/components/home/AllIndustries";
import FeatureDescription from "@/components/shared/FeatureDescription";
import { Badge } from "@/components/ui/badge";
import React from "react";

const InsightPage = () => {
  return (
    <>
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge
              className="h-5 min-w-5 rounded-full px-1 font-mono"
              variant="outline"
            >
              INSIGHT
            </Badge>
            <h1 className="text-4xl font-bold mb-4">
              Easy on the surface, driven by
            </h1>
            <p>smart AI insights underneath</p>
          </div>
        </div>
      </section>
      <FeatureDescription
        title="Stay Aligned With Local Laws"
        description="Compliance can be overwhelming for small businesses. HexPay automatically updates to meet legal requirements, ensuring your payroll stays error-free and penalty-proof."
        items={[
          {
            title: "Real-Time Dashboards",
            description: "Track labor costs, overtime, and benefits instantly",
          },
          {
            title: "Customizable Reports",
            description:
              "Slice payroll data by department, role, or time period.",
          },
          {
            title: "Workforce Trends",
            description:
              "Spot absenteeism, turnover, or overtime issues early.",
          },
          {
            title: "Forecasting Tools",
            description:
              "Plan ahead with accurate payroll cost projections. (coming soon)",
          },
        ]}
      />
      <AllIndustries />
    </>
  );
};

export default InsightPage;
