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

export interface ITestimonialItem {
  image: string;
  text: string;
  color: string;
  name: string;
}

export interface IPricingItemFeature {
  name: string;
  isChecked: boolean;
}
export interface IPricingItem {
  title: string;
  description: string;
  price: number;
  noOfEmployees: number;
  isRecommended: boolean;
  features: IPricingItemFeature[];
}

export interface IFeatureDescriptionItem {
  title: string;
  description: string;
}
export interface IFeatureDescription {
  title: string;
  description: string;
  items: IFeatureDescriptionItem[];
}
