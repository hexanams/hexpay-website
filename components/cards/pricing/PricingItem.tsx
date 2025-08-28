import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IPricingItem } from "@/utils/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckIcon, XIcon } from "lucide-react";

const PricingItem = ({
  title,
  description,
  price,
  noOfEmployees,
  isRecommended,
  features,
}: IPricingItem) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between ">
          <CardTitle>{title}</CardTitle>
          {isRecommended && <Badge>Recommended</Badge>}
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex">
          <p>${price}</p>
          <p>Up to {noOfEmployees} employees, per month</p>
        </div>
        <Button>Get Started</Button>

        {features.map((feature, i) => (
          <div key={i}>
            <p className="flex items-center">
              {feature.isChecked ? (
                <CheckIcon className="mr-2 h-4 w-4" />
              ) : (
                <XIcon className="mr-2 h-4 w-4" />
              )}
              {feature.name}
            </p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default PricingItem;
