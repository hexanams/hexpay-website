import AllIndustries from "@/components/home/AllIndustries";
import FeatureDescription from "@/components/shared/FeatureDescription";
import Pointers from "@/components/shared/Pointers";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, ClockIcon } from "lucide-react";
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
        description="Managing salaries doesn't need to be stressful. We automate calculations, ensure accuracy, and pay employees on time—without juggling spreadsheets or manual errors."
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
      <Pointers
        title="Let's Get Your Company Onboarded"
        color="#CAEAEF"
        image="/images/man-box.jpg"
        items={[
          {
            title: "Save hours every month on payroll.",
            icon: ClockIcon,
          },
          {
            title: "Avoid costly errors and salary payment complexity.",
            icon: ClockIcon,
          },
          {
            title: "Focus on running your business, not calculations.",
            icon: ClockIcon,
          },
          {
            title: "Get Started",
            icon: ArrowUpRight,
            isOutlined: true,
            outLineColor: "#008AA0",
          },
        ]}
      />
      <AllIndustries />
    </>
  );
};

export default PayrollPage;
