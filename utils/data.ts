import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { ClientRoutes } from "./enums/routes-enum";
import { IFaq, IHRFeature, INavLink, ISocialIcon } from "./types";

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

export const faqs: IFaq[] = [
  {
    question: "How does HexPay ensure compliance?",
    answer:
      "HexPay ensures compliance with all relevant regulations and standards through its robust compliance features and proactive monitoring.",
  },
  {
    question: "Do I need an HR team to use it?",
    answer:
      "No, HexPay does not require an HR team. It is a standalone payroll solution that can be used by any business.",
  },
  {
    question: "Can I manage remote or part-time staff?",
    answer:
      "Yes, HexPay allows you to manage remote or part-time staff. You can set up employee profiles, track their hours, and generate pay slips on the go.",
  },
  {
    question: "Can I manage remote or part-time staff?",
    answer:
      "Yes, HexPay is a payroll solution that can be used by any business. It is designed to be easy to use and affordable.",
  },
  {
    question: "What does HexPay cost?",
    answer:
      "HexPay offers a free trial period. After the trial, you can choose from a range of subscription plans, including a monthly or annual plan.",
  },
];
