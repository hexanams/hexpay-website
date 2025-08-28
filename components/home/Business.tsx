import React from "react";
import BusinessWithImageCard from "../cards/home/BusinessWithImageCard";
import BusinessPlainCard from "../cards/home/BusinessPlainCard";
import { Badge } from "../ui/badge";

const Business = () => {
  return (
    <section className="w-full flex items-center justify-center">
      <div className="container ">
        <Badge
          className="h-5 min-w-5 rounded-full px-1 font-mono"
          variant="outline"
        >
          Who It&apos;s For
        </Badge>
        <h2 className="text-3xl font-bold text-center">
          Built for Ambitious <span className="text-primary">Businesses</span>
        </h2>
        <p>
          Whether you&apos;re just starting out or scaling fast, HexPay adapts
          to your team — from 3-person startups to 300-staff operations.
        </p>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <BusinessWithImageCard
            title="For Startup Founders"
            description="Spend less time on payroll, and more time building your business."
            image="/images/front-view-man.jpg"
          />
          <BusinessPlainCard
            title="For HR Managers"
            description="Streamline onboarding, salaries, and compliance — all in one place."
          />
          <BusinessWithImageCard
            title="For Admins & Office Managers"
            description="Easily run payroll, even if you're not an HR expert."
            image="/images/people-working.jpg"
          />
          <BusinessPlainCard
            title="For Small Teams"
            description="Set up quickly and run payroll without complexity."
          />
          <BusinessWithImageCard
            title="For Scaling Teams"
            description="Stay compliant and organized as your team grows."
            image="/images/medium-shot.jpg"
          />
          <BusinessPlainCard
            title="For Ops & Finance Leads"
            description="Get full visibility into costs, taxes, and team data."
          />
        </div>
      </div>
    </section>
  );
};

export default Business;
