import { ClientRoutes } from "./enums/routes-enum";
import { INavLink } from "./types";

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
