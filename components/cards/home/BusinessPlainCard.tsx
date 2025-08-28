import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { IBusinessPlainCard } from "@/utils/types";
import { peopleSharp } from "@/utils/icons";

const BusinessPlainCard = ({ title, description }: IBusinessPlainCard) => {
  return (
    <Card>
      <CardHeader className="bg-primary">{peopleSharp()}</CardHeader>
      <CardContent>
        <p>{title}</p>
        <p>{description}</p>
      </CardContent>
    </Card>
  );
};

export default BusinessPlainCard;
