import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";

const Industries = ({
  className,
  text,
  image,
}: {
  className?: string;
  image: string;
  text: string;
}) => {
  return (
    <div className={cn("relative", className)}>
      <div className="relative w-full h-full">
        <Image
          src={image}
          alt={text}
          fill
          priority
          className="object-cover rounded-xl"
        />
      </div>
      <Badge className="absolute bottom-2 right-2 z-10">{text}</Badge>
    </div>
  );
};

export default Industries;
