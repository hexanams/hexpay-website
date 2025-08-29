import AllIndustries from "@/components/home/AllIndustries";
import FeatureDescription from "@/components/shared/FeatureDescription";
import { Badge } from "@/components/ui/badge";
import React from "react";

const PayrollPage = () => {
  return (
    <>
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge
              className="h-5 min-w-5 rounded-full px-1 font-mono"
              variant="outline"
            >
              PAYROLL
            </Badge>
            <h1 className="text-4xl font-bold mb-4">
              Easy to get started, flexible enough
            </h1>
            <p>to grow with you.</p>
          </div>
        </div>
      </section>
      <FeatureDescription
        title="Pay your team differently"
        description="Managing salaries doesn’t need to be stressful. We automate calculations, ensure accuracy, and pay employees on time—without juggling spreadsheets or manual errors."
        items={[
          {
            title: "Set up the team",
            description: "Onboard your teams and set up salary structures",
          },
          {
            title: "Quick Payroll Runs",
            description:
              "Process payments for your entire team with just a few clicks.",
          },
          {
            title: "Automated Deductions",
            description:
              "Taxes, pensions, and other benefits are automatically applied.",
          },
          {
            title: "Fund your wallet",
            description:
              "Fund your wallet and pay directly from the system to employee bank accounts in one click.",
          },
          {
            title: "Employee Self-Service",
            description:
              "Employees can download payslips and view tax details anytime.",
          },
        ]}
      />
      <AllIndustries />
    </>
  );
};

export default PayrollPage;
