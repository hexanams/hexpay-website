import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { IBusinessWithImageCard } from "@/utils/types";

const BusinessWithImageCard = ({
  title,
  description,
  image,
}: IBusinessWithImageCard) => {
  return (
    <Card
      className="bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${image})` }}
    >
      <CardContent>
        <p>{title}</p>
        <p>{description}</p>
      </CardContent>
    </Card>
  );
};

export default BusinessWithImageCard;
