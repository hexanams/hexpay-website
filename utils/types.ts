import { LucideIcon } from "lucide-react";

export interface INavLink {
  name: string;
  link: string;
}

export interface ISocialIcon {
  icon: LucideIcon;
}

export interface IHRFeature {
  name: string;
  icon: LucideIcon;
}

export interface IFaq {
  question: string;
  answer: string;
}

export interface IBusinessPlainCard {
  title: string;
  description: string;
}

export interface IBusinessWithImageCard {
  title: string;
  description: string;
  image: string;
}
