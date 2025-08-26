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
