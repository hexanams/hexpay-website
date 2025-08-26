import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { ClientRoutes } from "./enums/routes-enum";
import { INavLink, ISocialIcon } from "./types";

export const navLinks: INavLink[] = [
  {
    name: "Payroll",
    link: ClientRoutes.PAYROLL,
  },
  {
    name: "Compliance",
    link: ClientRoutes.COMPLIANCE,
  },
  {
    name: "Insight",
    link: ClientRoutes.INSIGHT,
  },
  {
    name: "Blog",
    link: ClientRoutes.BLOG,
  },
  {
    name: "Pricing",
    link: ClientRoutes.PRICING,
  },
];

export const socialIcons: ISocialIcon[] = [
  {
    icon: Linkedin,
  },
  {
    icon: Facebook,
  },
  {
    icon: Twitter,
  },
  {
    icon: Instagram,
  },
];

export const companyLinks: INavLink[] = [
  {
    name: "Payroll",
    link: ClientRoutes.PAYROLL,
  },
  {
    name: "Compliance",
    link: ClientRoutes.COMPLIANCE,
  },
  {
    name: "Pricing",
    link: ClientRoutes.PRICING,
  },
  {
    name: "Insight",
    link: ClientRoutes.INSIGHT,
  },
];

export const supportLinks: INavLink[] = [
  {
    name: "Contact Us",
    link: ClientRoutes.CONTACT,
  },
];

export const legalLinks: INavLink[] = [
  {
    name: "Terms & Conditions",
    link: ClientRoutes.TERMS,
  },
  {
    name: "Privacy Policy",
    link: ClientRoutes.PRIVACY,
  },
];
