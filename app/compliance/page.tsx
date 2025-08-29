import AllIndustries from "@/components/home/AllIndustries";
import FeatureDescription from "@/components/shared/FeatureDescription";
import { Badge } from "@/components/ui/badge";
import React from "react";

const CompliancePage = () => {
  return (
    <>
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge
              className="h-5 min-w-5 rounded-full px-1 font-mono"
              variant="outline"
            >
              Compliance
            </Badge>
            <h1 className="text-4xl font-bold mb-4">
              Simple to run, powerful enough to
            </h1>
            <p>handle every regulation</p>
          </div>
        </div>
      </section>
      <FeatureDescription
        title="Stay Aligned With Local Laws"
        description="Compliance can be overwhelming for small businesses. HexPay automatically updates to meet legal requirements, ensuring your payroll stays error-free and penalty-proof."
        items={[
          {
            title: "Up-to-Date Regulations",
            description: "PAYE, pension, NHF, ITF, and more, always current.",
          },
          {
            title: "Instant Reports",
            description: "Generate government-ready reports in seconds.",
          },
          {
            title: "Accurate Deductions",
            description: "Automatic calculations reduce compliance risks.",
          },
          {
            title: "Audit-Ready Records",
            description: "Keep your books clean with organized payroll data.",
          },
        ]}
      />
      <AllIndustries />
    </>
  );
};

export default CompliancePage;
